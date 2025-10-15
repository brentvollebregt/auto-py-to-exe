import argparse
import json
import logging
import os
import stat
import eel
from eel import chrome, edge

from . import config, dialogs, packaging, utils

LOGGING_HANDLER_NAME = "auto-py-to-exe logging handler"


# Setup eels root folder
eel.init(config.FRONTEND_ASSET_FOLDER)


def __setup_logging_ui_forwarding():
    """Setup forwarding of logs by PyInstaller and auto-py-to-exe to the ui"""

    pyinstaller_logger = logging.getLogger("PyInstaller")
    # Make sure to check if the handler has already been setup so it doesn't get re-added on reload
    if not any([i.get_name() == LOGGING_HANDLER_NAME for i in pyinstaller_logger.handlers]):
        handler = logging.StreamHandler(utils.ForwardToFunctionStream(send_message_to_ui_output))
        handler.set_name(LOGGING_HANDLER_NAME)
        handler.setFormatter(logging.Formatter("%(relativeCreated)d %(levelname)s: %(message)s"))
        pyinstaller_logger.addHandler(handler)

    module_logger = logging.getLogger("auto_py_to_exe")
    if not any([i.get_name() == LOGGING_HANDLER_NAME for i in module_logger.handlers]):
        handler = logging.StreamHandler(utils.ForwardToFunctionStream(send_message_to_ui_output))
        handler.set_name(LOGGING_HANDLER_NAME)
        handler.setFormatter(logging.Formatter("%(message)s"))
        module_logger.addHandler(handler)


def __get_pyinstaller_options():
    options = packaging.get_pyinstaller_options()

    # Filter out removed arguments (PyInstaller v6.0.0 removed some arguments but added proper handlers for people still using them - we need to ignore them)
    options = [option for option in options if option["help"] != argparse.SUPPRESS]

    # In PyInstaller v6.0.0 --hide-console options were not set correctly (like --debug), fix them here
    for option in options:
        if isinstance(option["choices"], set):
            option["choices"] = list(option["choices"])

    return options


def __can_use_chrome():
    """Identify if Chrome is available for Eel to use"""
    chrome_instance_path = chrome.find_path()
    return chrome_instance_path is not None and os.path.exists(chrome_instance_path)


def __can_use_edge():
    """Identify if Edge is available for Eel to use"""
    return edge.find_path()


@eel.expose
def initialise():
    """Called by the UI when opened. Used to pass initial values and setup state we couldn't set until now."""
    __setup_logging_ui_forwarding()

    # Pass initial values to the client
    return {
        "filename": config.package_filename,
        "suppliedUiConfiguration": config.supplied_ui_configuration,
        "options": __get_pyinstaller_options(),
        "warnings": utils.get_warnings(),
        "pathSeparator": os.pathsep,
        "defaultOutputFolder": config.default_output_directory,
        "languageHint": config.language_hint,
    }


@eel.expose
def open_output_in_explorer(output_directory, input_filename, is_one_file):
    """Open a file in the local file explorer"""
    utils.open_output_in_explorer(output_directory, input_filename, is_one_file)


@eel.expose
def ask_file(file_type):
    """Ask the user to select a file"""
    return dialogs.ask_file(file_type)


@eel.expose
def ask_files():
    return dialogs.ask_files()


@eel.expose
def ask_folder():
    return dialogs.ask_folder()


@eel.expose
def does_file_exist(file_path):
    """Checks if a file exists"""
    return os.path.isfile(file_path)


@eel.expose
def does_folder_exist(path):
    """Checks if a folder exists"""
    return os.path.isdir(path)


@eel.expose
def is_file_an_ico(file_path):
    """Checks if a file is an ico file"""
    if not os.path.isfile(file_path):
        return None

    # Open the file and read the first 4 bytes
    with open(file_path, "rb") as f:
        data = f.read(4)
        if data == b"\x00\x00\x01\x00":
            return True
        else:
            return False


@eel.expose
def convert_path_to_absolute(path: str) -> str:
    """Converts a path to an absolute path if it exists. If it doesn't exist, returns the path as is."""
    if not os.path.exists(path):
        return path
    return os.path.abspath(path)


@eel.expose
def import_configuration():
    """Get configuration data from a file"""
    file_path = dialogs.ask_file("json")
    if file_path is not None:
        with open(file_path) as f:
            return json.load(f)
    else:
        return None


@eel.expose
def export_configuration(configuration):
    """Write configuration data to a file"""
    file_path = dialogs.ask_file_save_location("json")
    if file_path is not None:
        with open(file_path, "w") as f:
            json.dump(configuration, f, indent=True)


@eel.expose
def export_script_configuration(command):
    """Write the generated command to a script file"""
    file_path = dialogs.ask_file_save_location("script")
    if file_path is not None:
        with open(file_path, "w") as f:
            if os.name == "nt":
                f.write("@echo off\nREM ")
            else:
                f.write("#!/bin/bash\n# ")

            f.write("This file was generated by auto-py-to-exe.\n")
            f.write(command)
            f.write("\n")

            if os.name == "nt":
                f.write("pause\n")
            else:
                f.write('read -p "Press Enter to close..."\n')

        # On POSIX systems (Linux/macOS) make the script executable, equivalent to `chmod +x`
        if os.name != "nt":
            try:
                current_mode = os.stat(file_path).st_mode
                # Add execute bits for user/group/others
                os.chmod(file_path, current_mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)
            except Exception as e:
                print(f"Warning: Could not make script executable: {e}")


@eel.expose
def will_packaging_overwrite_existing(file_path, manual_name, one_file, output_folder):
    """Checks if there is a possibility of a previous output being overwritten"""
    return packaging.will_packaging_overwrite_existing(file_path, manual_name, one_file, output_folder)


@eel.expose
def package(command, non_pyinstaller_options):
    """Package the script provided using the options selected by the user"""
    packaging_options = {
        "increaseRecursionLimit": non_pyinstaller_options["increaseRecursionLimit"],
        "outputDirectory": non_pyinstaller_options["outputDirectory"],
    }

    packaging_successful = packaging.package(
        pyinstaller_command=command,
        options=packaging_options,
    )

    send_message_to_ui_output("Complete.\n")
    eel.signalPackagingComplete(packaging_successful)()


def send_message_to_ui_output(message):
    """Show a message in the ui output"""
    eel.putMessageInOutput(message)()


def start(open_mode):
    """Start the UI using Eel"""
    try:
        chrome_available = __can_use_chrome()
        edge_available = __can_use_edge()

        if open_mode == config.UIOpenMode.CHROME_OR_EDGE and chrome_available:
            print("The interface is being opened in a new Chrome window")
            print(
                "Please do not close this terminal while using auto-py-to-exe - the process will end when the window is closed"
            )
            eel.start("index.html", size=(650, 672), port=0, mode="chrome")
        elif open_mode == config.UIOpenMode.CHROME_OR_EDGE and edge_available:
            print("The interface is being opened in a new Edge window")
            print(
                "Please do not close this terminal while using auto-py-to-exe - the process will end when the window is closed"
            )
            eel.start("index.html", size=(650, 673), port=0, mode="edge")
        elif open_mode == config.UIOpenMode.DEFAULT_BROWSER or (
            open_mode == config.UIOpenMode.CHROME_OR_EDGE and not chrome_available and not edge_available
        ):
            print("The interface is being opened in your default browser")
            print(
                "Please do not close this terminal while using auto-py-to-exe - the process will end when the window is closed"
            )
            eel.start("index.html", size=(650, 672), port=0, mode="user default")
        else:
            port = utils.get_port()
            print(f"Server starting at http://localhost:{port}/index.html")
            print("You may end this process using Ctrl+C when finished using auto-py-to-exe")
            eel.start("index.html", host="localhost", port=port, mode=None, close_callback=lambda x, y: None)
    except (SystemExit, KeyboardInterrupt):
        pass  # This is what the bottle server raises
