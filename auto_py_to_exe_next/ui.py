import os

import eel

from . import config
from . import utils
from . import packaging
from . import dialogs


# Setup eels root folder
eel.init(config.FRONTEND_ASSET_FOLDER)


@eel.expose
def initialise():
    """ Called by the UI when opened. Used to pass initial values. """
    return {
        'filename': config.package_filename,
        'suppliedUiConfiguration': config.supplied_ui_configuration,
        'options': packaging.get_pyinstaller_options(),
        'warnings': [],  # TODO Add warnings for unsupported versions and known issues {message, severity}
        'pathSeparator': os.pathsep,
        'defaultOutputFolder': config.DEFAULT_OUTPUT_FOLDER
    }


@eel.expose
def open_folder_in_explorer(path):
    """ Open a folder in the local file explorer """
    if not utils.open_output_folder(path):
        pass  # TODO Send message saying this failed


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


# @eel.expose
# def ask_file_save(file_type):
#     pass


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
    """ Checks if there is a possibility of a previous output being overwritten """
    if not os.path.exists(output_folder):
        return False
    no_extension = '.'.join(os.path.basename(file_path).split('.')[:-1])
    if one_file:
        if no_extension + '.exe' in os.listdir(output_folder):
            return True
    else:
        if no_extension in os.listdir(output_folder):
            return True
    return False


@eel.expose
def package(command, non_pyinstaller_options):
    """ Package the script provided using the options selected by the user """
    packaging_options = {
        'increaseRecursionLimit': non_pyinstaller_options['increaseRecursionLimit'],
        'outputDirectory': non_pyinstaller_options['outputDirectory'],
    }

    packaging_successful = packaging.package(
        pyinstaller_arguments=command,
        options=packaging_options,
        output_function=send_message_to_ui_output
    )

    eel.signalPackagingComplete(packaging_successful)()


def show_message_in_ui_dialog(message):
    """ Show a message in a dialog """
    eel.showMessage(message)()


def send_message_to_ui_output(message):
    """ Show a message in the ui output """
    eel.putMessageInOutput(message)()


def start(use_chrome_if_possible=True):
    """ Start the UI using Eel """
    try:
        if utils.can_use_chrome() and use_chrome_if_possible:
            eel.start('main.html', size=(650, 650), port=0)
        else:
            eel.start('main.html', size=(650, 650), port=0, mode='user selection')
    except (SystemExit, KeyboardInterrupt):
        pass  # This is what the bottle server raises
