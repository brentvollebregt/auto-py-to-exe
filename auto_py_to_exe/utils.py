from __future__ import print_function
import io
import os
import platform
import socket
import sys

from eel import chrome
from PyInstaller import __version__ as pyinstaller_version


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
        # Make sure PyInstaller 3.4 or above is being used with Python 3.7
        if sys.version_info >= (3, 7) and float(pyinstaller_version) < 3.4:
            warnings.append({
                'message': 'You will need PyInstaller 3.4 or above to use this with Python 3.7\nPlease upgrade PyInstaller: python -m pip install --upgrade PyInstaller',
                'link': None
            })
    except ValueError:
        pass  # Dev branches will have pyinstaller_version as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.

    if sys.version_info >= (3, 8):
        warnings.append({
            'message': 'Currently, PyInstaller does not support Python 3.8 fully - some side effects may occur when using PyInstaller with Python 3.8. You can fix this by using an earlier version of Python.',
            'link': 'https://github.com/pyinstaller/pyinstaller/issues/4311'
        })

    return warnings


def get_port():
    """ Get an available port by starting a new server, stopping and and returning the port """
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('localhost', 0))
    port = sock.getsockname()[1]
    sock.close()
    return port
