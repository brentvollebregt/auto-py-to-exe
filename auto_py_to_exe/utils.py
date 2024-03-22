from __future__ import print_function

import io
import os
import platform
import socket
import sys
from pathlib import Path

import requests
from PyInstaller import __version__ as pyinstaller_version_string

from . import __version__


class ForwardToFunctionStream(io.TextIOBase):
    def __init__(self, output_function=print):
        self.output_function = output_function

    def write(self, string):
        self.output_function(string)
        return len(string)


def open_output_in_explorer(output_directory, input_filename, is_one_file):
    """Open the output in the local file explorer"""
    folder_directory = os.path.abspath(output_directory)
    if platform.system() == "Windows":
        # For windows, we can highlight the file in the explorer window
        target_base_to_open = Path(input_filename).stem + (".exe" if is_one_file else "")
        target_path_to_open = Path(folder_directory) / target_base_to_open
        if target_path_to_open.exists():
            os.popen(f'explorer /select,"{target_path_to_open}"')
        else:
            # If the file doesn't exist, just open the folder)
            os.startfile(folder_directory, "explore")
    elif platform.system() == "Linux":
        os.system('xdg-open "' + folder_directory + '"')
    elif platform.system() == "Darwin":
        os.system('open "' + folder_directory + '"')
    else:
        return False
    return True


class PackageVersion:
    def __init__(self, version_string, url) -> None:
        self.version_string = version_string
        self.version = parse_version_tuple(version_string)
        self.url = url


def __get_latest_version_for_library(library_repo):
    try:
        response = requests.get(f"https://api.github.com/repos/{library_repo}/releases/latest")
        response.raise_for_status()
        response_data = response.json()
        latest_release_tag_name = response_data["tag_name"].strip("v")
        return PackageVersion(latest_release_tag_name.strip("v"), response_data["html_url"])
    except requests.exceptions.RequestException:
        return None


def __get_latest_auto_py_to_exe_version():
    """Get the latest version of auto-py-to-exe"""
    return __get_latest_version_for_library("brentvollebregt/auto-py-to-exe")


def __get_latest_pyinstaller_version():
    """Get the latest version of PyInstaller"""
    return __get_latest_version_for_library("pyinstaller/pyinstaller")


def get_warnings():
    warnings = []

    # Check auto-py-to-exe version is it latest
    try:
        current_auto_py_to_exe_version = parse_version_tuple(__version__)
        latest_auto_py_to_exe_version = __get_latest_auto_py_to_exe_version()
        if latest_auto_py_to_exe_version is None:
            raise Exception("Unable to check for the latest version of auto-py-to-exe.")
        elif latest_auto_py_to_exe_version.version > current_auto_py_to_exe_version:
            message = f'<a href="{latest_auto_py_to_exe_version.url}" target="_blank">A new version of auto-py-to-exe has been released</a>: {__version__} → {latest_auto_py_to_exe_version.version_string}'
            message += "\nUpgrade using: python -m pip install auto-py-to-exe --upgrade"
            warnings.append(message)
    except Exception as e:
        message = f"\nWarning: {e}"
        warnings.append(message)

    # Check PyInstaller version is it latest
    try:
        current_pyinstaller_version = parse_version_tuple(pyinstaller_version_string)
        latest_pyinstaller_version = __get_latest_pyinstaller_version()
        if latest_pyinstaller_version is None:
            raise Exception("Unable to check for the latest version of PyInstaller.")
        elif latest_pyinstaller_version.version > current_pyinstaller_version:
            message = f'<a href="{latest_pyinstaller_version.url}" target="_blank">A new version of PyInstaller has been released</a>: {pyinstaller_version_string} → {latest_pyinstaller_version.version_string}'
            message += "\nUpgrade using: python -m pip install pyinstaller --upgrade"
            warnings.append(message)
    except VersionParseError:
        pass  # Don't warn about a new version when using a non-official release
    except Exception as e:
        message = f"\nWarning: {e}"
        warnings.append(message)

    try:
        pyinstaller_version = parse_version_tuple(pyinstaller_version_string)
    except ValueError:
        message = "Unable to parse PyInstaller version - this may be because you aren't using an official release."
        message += "\nYou are currently using PyInstaller {pyinstaller_version}.".format(
            pyinstaller_version=pyinstaller_version_string
        )
        message += "\nIf this is an official release, please report this issue on GitHub."
        warnings.append(message)
        return warnings

    # Make sure PyInstaller 3.4 or above is being used with Python 3.7
    try:
        if sys.version_info >= (3, 7) and pyinstaller_version < (3, 4):
            message = "You will need PyInstaller 3.4 or above to use this tool with Python 3.7."
            message += "\nYou are currently using PyInstaller {pyinstaller_version}.".format(
                pyinstaller_version=pyinstaller_version_string
            )
            message += "\nPlease upgrade PyInstaller: python -m pip install pyinstaller --upgrade"
            warnings.append(message)
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # Make sure PyInstaller 4.0 or above is being used with Python 3.8 and 3.9
    try:
        if (
            sys.version_info.major == 3
            and (sys.version_info.minor == 8 or sys.version_info.minor == 9)
            and pyinstaller_version < (4, 1)
        ):
            message = "PyInstaller 4.0 and below does not officially support Python 3.8 and 3.9."
            message += "\nYou are currently using PyInstaller {pyinstaller_version}.".format(
                pyinstaller_version=pyinstaller_version_string
            )
            message += "\nIt is highly recommended to update your version of PyInstaller using: python -m pip install pyinstaller --upgrade"
            warnings.append(message)
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # Make sure PyInstaller 4.6 or above is being used with Python 3.10
    try:
        if sys.version_info.major == 3 and sys.version_info.minor == 10 and pyinstaller_version < (4, 6):
            message = "You will need PyInstaller 4.6 or above to use this tool with Python 3.10."
            message += "\nYou are currently using PyInstaller {pyinstaller_version}.".format(
                pyinstaller_version=pyinstaller_version_string
            )
            message += "\nPlease upgrade PyInstaller: python -m pip install pyinstaller --upgrade"
            warnings.append(message)
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # If Python 3.10.0 is being used, we are probably going to see `IndexError: tuple index out of range`.
    if sys.version_info.major == 3 and sys.version_info.minor == 10 and sys.version_info.micro == 0:
        message = 'You are using Python 3.10.0. <a href="https://github.com/brentvollebregt/auto-py-to-exe/issues/215" target="_blank">This version of Python has a bug that causes PyInstaller to fail.</a>'
        message += "\nPlease upgrade to Python 3.10.1 or above."
        warnings.append(message)

    # Make sure we are not using Python from the Windows Store
    if r"Packages\PythonSoftwareFoundation.Python." in sys.executable:
        message = "It looks like you may be using Python from the Windows Store, the Python binary you are currently using is at: "
        message += '"' + sys.executable + '"'
        message += "\n\nPython from the Windows Store is not supported by PyInstaller so you may get errors referencing \"win32ctypes.pywin32.pywintypes.error: (1920, 'LoadLibraryEx', 'The file cannot be accessed by the system'\"."
        message += '\n<a href="https://github.com/brentvollebregt/auto-py-to-exe/issues/166#issuecomment-827492005" target="_blank">To fix this, use a distribution of Python from python.org.</a>'
        warnings.append(message)

    return warnings


def get_port():
    """Get an available port by starting a new server, stopping and and returning the port"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(("localhost", 0))
    port = sock.getsockname()[1]
    sock.close()
    return port


class VersionParseError(Exception):
    pass


def parse_version_tuple(version_string):
    """Turn a version string into a tuple of integers e.g. "1.2.3" -> (1, 2, 3)"""
    try:
        return tuple(map(int, (version_string.split("."))))
    except ValueError:
        raise VersionParseError()
