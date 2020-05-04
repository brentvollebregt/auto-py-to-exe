import os
import platform

from eel import chrome


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
