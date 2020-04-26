import os

import eel

from . import config
from . import utils
from .packaging import get_pyinstaller_options
from . import dialogs


# Setup eels root folder
eel.init(config.frontend_asset_folder)


@eel.expose
def initialise():
    """ Called by the UI when opened. Used to pass initial values. """
    return {
        'filename': config.package_filename,
        'supplied_ui_configuration': config.supplied_ui_configuration,
        'options': get_pyinstaller_options(),
        'warnings': []  # TODO Add warnings for unsupported versions and known issues {message, severity}
    }


@eel.expose
def open_folder_in_explorer():
    pass


@eel.expose
def ask_file(file_type):
    """ Ask the user to select a file """
    return dialogs.ask_file(file_type)


@eel.expose
def ask_files():
    return dialogs.ask_files()


@eel.expose
def ask_folder():
    return dialogs.ask_folder()


@eel.expose
def ask_file_save(file_type):
    pass


@eel.expose
def does_file_exist(file_path):
    """ Checks if a file exists """
    return os.path.isfile(file_path)


@eel.expose
def does_folder_exist(path):
    """ Checks if a folder exists """
    return os.path.isdir(path)


@eel.expose
def get_configuration_file(file_path):
    """ Get configuration data from a file """
    # TODO Validate and filter to only pass known values
    pass


@eel.expose
def write_configuration_file(file_path, configuration):
    """ Write configuration data to a file """
    # TODO Write a custom object and have these values in the output.
    # TODO Put version details to allow for backwards comparability
    # TODO Will need the get/write to pass though functions to ensure all versions work.
    pass


@eel.expose
def will_packaging_overwrite_existing(file_path, one_file, output_folder):
    """ Identify if packaging a script will overwrite an existing output """
    pass


@eel.expose
def package(command, output, disable_recursion_limit):
    """ Package the script provided using the options selected by the user """
    # TODO Create an options dict that contains PyInstaller config and custom aut-py-to-exe config separately

    # TODO Frontend config
    # {
    #   'pyinstaller': {},
    #   'auto-py-to-exe': {}
    # }
    pass


def start(use_chrome_if_possible=True):
    """ Start the UI using Eel """
    try:
        if utils.can_use_chrome() and use_chrome_if_possible:
            eel.start('main.html', size=(650, 612), port=0)
        else:
            eel.start('main.html', size=(650, 612), port=0, mode='user selection')
    except (SystemExit, KeyboardInterrupt):
        pass  # This is what the bottle server raises
