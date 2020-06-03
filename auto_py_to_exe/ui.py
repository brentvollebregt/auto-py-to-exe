import json
import logging
import os

import eel

from . import config
from . import utils
from . import packaging
from . import dialogs


class UIOpenMode:
    NONE = 0
    CHROME = 1
    USER_DEFAULT = 2


# Setup eels root folder
eel.init(config.FRONTEND_ASSET_FOLDER)


def __setup_logging_ui_forwarding():
    """ Setup forwarding of logs by PyInstaller and auto-py-to-exe to the ui """
    pyinstaller_logger = logging.getLogger('PyInstaller')
    handler = logging.StreamHandler(utils.ForwardToFunctionStream(send_message_to_ui_output))
    handler.setFormatter(logging.Formatter('%(relativeCreated)d %(levelname)s: %(message)s'))
    pyinstaller_logger.addHandler(handler)

    module_logger = logging.getLogger('auto_py_to_exe')
    handler = logging.StreamHandler(utils.ForwardToFunctionStream(send_message_to_ui_output))
    handler.setFormatter(logging.Formatter('%(message)s'))
    module_logger.addHandler(handler)


@eel.expose
def initialise():
    """ Called by the UI when opened. Used to pass initial values and setup state we couldn't set until now. """
    __setup_logging_ui_forwarding()

    # Pass initial values to the client
    return {
        'filename': config.package_filename,
        'suppliedUiConfiguration': config.supplied_ui_configuration,
        'options': packaging.get_pyinstaller_options(),
        'warnings': utils.get_warnings(),
        'pathSeparator': os.pathsep,
        'defaultOutputFolder': config.default_output_directory
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


@eel.expose
def does_file_exist(file_path):
    """ Checks if a file exists """
    return os.path.isfile(file_path)


@eel.expose
def does_folder_exist(path):
    """ Checks if a folder exists """
    return os.path.isdir(path)


@eel.expose
def import_configuration():
    """ Get configuration data from a file """
    file_path = dialogs.ask_file('json')
    if file_path is not None:
        with open(file_path) as f:
            return json.load(f)
    else:
        return None


@eel.expose
def export_configuration(configuration):
    """ Write configuration data to a file """
    file_path = dialogs.ask_file_save_location('json')
    if file_path is not None:
        with open(file_path, 'w') as f:
            json.dump(configuration, f, indent=True)


@eel.expose
def will_packaging_overwrite_existing(file_path, one_file, output_folder):
    """ Checks if there is a possibility of a previous output being overwritten """
    return packaging.will_packaging_overwrite_existing(file_path, one_file, output_folder)


@eel.expose
def package(command, non_pyinstaller_options):
    """ Package the script provided using the options selected by the user """
    packaging_options = {
        'increaseRecursionLimit': non_pyinstaller_options['increaseRecursionLimit'],
        'outputDirectory': non_pyinstaller_options['outputDirectory'],
    }

    packaging_successful = packaging.package(
        pyinstaller_command=command,
        options=packaging_options,
    )

    send_message_to_ui_output('Complete.\n')
    eel.signalPackagingComplete(packaging_successful)()


def send_message_to_ui_output(message):
    """ Show a message in the ui output """
    eel.putMessageInOutput(message)()


def start(open_mode):
    """ Start the UI using Eel """
    try:
        chrome_available = utils.can_use_chrome()
        if open_mode == UIOpenMode.CHROME and chrome_available:
            eel.start('index.html', size=(650, 650), port=0)
        elif open_mode == UIOpenMode.USER_DEFAULT or (open_mode == UIOpenMode.CHROME and not chrome_available):
            eel.start('index.html', size=(650, 650), port=0, mode='user default')
        else:
            port = utils.get_port()
            print('Server starting at http://localhost:' + str(port) + '/index.html')
            eel.start('index.html', size=(650, 650), host='localhost', port=port, mode=None, close_callback=lambda x, y: None)
    except (SystemExit, KeyboardInterrupt):
        pass  # This is what the bottle server raises
