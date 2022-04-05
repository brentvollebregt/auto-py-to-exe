from __future__ import print_function
import io
import os
import platform
import socket
import sys

from eel import chrome
from PyInstaller import __version__ as pyinstaller_version_string


class ForwardToFunctionStream(io.TextIOBase):
    def __init__(self, output_function=print):
        self.output_function = output_function

    def write(self, string):
        self.output_function(string)
        return len(string)


def can_use_chrome():
    """ Identify if Chrome is available for Eel to use """
    chrome_instance_path = chrome.find_path()
    return chrome_instance_path is not None and os.path.exists(chrome_instance_path)


def open_output_folder(folder):
    """ Open a folder in the local file explorer """
    folder_directory = os.path.abspath(folder)
    if platform.system() == 'Windows':
        os.startfile(folder_directory, 'explore')
    elif platform.system() == 'Linux':
        os.system('xdg-open "' + folder_directory + '"')
    elif platform.system() == 'Darwin':
        os.system('open "' + folder_directory + '"')
    else:
        return False
    return True


def get_warnings():
    warnings = []

    try:
        pyinstaller_version = parse_version_tuple(pyinstaller_version_string)
    except ValueError:
        message = 'Unable to parse PyInstaller version - this may be because you aren\'t using an official release.'
        message += '\nYou are currently using PyInstaller {pyinstaller_version}.'.format(pyinstaller_version=pyinstaller_version_string)
        message += '\nIf this is an official release, please report this issue on GitHub.'
        warnings.append({
            'message': message,
            'link': None
        })
        return warnings

    # Make sure PyInstaller 3.4 or above is being used with Python 3.7
    try:
        if sys.version_info >= (3, 7) and pyinstaller_version < (3, 4):
            message = 'You will need PyInstaller 3.4 or above to use this tool with Python 3.7.'
            message += '\nYou are currently using PyInstaller {pyinstaller_version}.'.format(pyinstaller_version=pyinstaller_version_string)
            message += '\nPlease upgrade PyInstaller: python -m pip install pyinstaller --upgrade'
            warnings.append({
                'message': message,
                'link': None
            })
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # Make sure PyInstaller 4.0 or above is being used with Python 3.8 and 3.9
    try:
        if sys.version_info.major == 3 and (sys.version_info.minor == 8 or sys.version_info.minor == 9) and pyinstaller_version < (4, 1):
            message = 'PyInstaller 4.0 and below does not officially support Python 3.8 and 3.9.'
            message += '\nYou are currently using PyInstaller {pyinstaller_version}.'.format(pyinstaller_version=pyinstaller_version_string)
            message += '\nIt is highly recommended to update your version of PyInstaller using: python -m pip install pyinstaller --upgrade'
            warnings.append({
                'message': message,
                'link': None
            })
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # Make sure PyInstaller 4.6 or above is being used with Python 3.10
    try:
        if sys.version_info.major == 3 and sys.version_info.minor == 10 and pyinstaller_version < (4, 6):
            message = 'You will need PyInstaller 4.6 or above to use this tool with Python 3.10.'
            message += '\nYou are currently using PyInstaller {pyinstaller_version}.'.format(pyinstaller_version=pyinstaller_version_string)
            message += '\nPlease upgrade PyInstaller: python -m pip install pyinstaller --upgrade'
            warnings.append({
                'message': message,
                'link': None
            })
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    # If Python 3.10.0 is being used, we are probably going to see `IndexError: tuple index out of range`.
    if sys.version_info.major == 3 and sys.version_info.minor == 10 and sys.version_info.micro == 0:
        message = 'You are using Python 3.10.0. This version of Python has a bug that causes PyInstaller to fail.'
        message += '\nPlease upgrade to Python 3.10.1 or above.'
        warnings.append({
            'message': message,
            'link': "https://github.com/brentvollebregt/auto-py-to-exe/issues/215"
        })

    # Make sure we are not using Python from the Windows Store
    if "Packages\PythonSoftwareFoundation.Python." in sys.executable:
        message = 'It looks like you may be using Python from the Windows Store, the Python binary you are currently using is at:'
        message += '"' + sys.executable + '"'
        message += '\n\nPython from the Windows Store is not supported by PyInstaller so you may get errors referencing "win32ctypes.pywin32.pywintypes.error: (1920, \'LoadLibraryEx\', \'The file cannot be accessed by the system\'".'
        message += '\nTo fix this, use a distribution of Python from python.org.'
        warnings.append({
            'message': message,
            'link': "https://github.com/brentvollebregt/auto-py-to-exe/issues/166"
        })

    return warnings


def get_port():
    """ Get an available port by starting a new server, stopping and and returning the port """
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('localhost', 0))
    port = sock.getsockname()[1]
    sock.close()
    return port


def parse_version_tuple(version_string):
    """ Turn a version string into a tuple of integers e.g. "1.2.3" -> (1, 2, 3) """
    return tuple(map(int, (version_string.split("."))))
