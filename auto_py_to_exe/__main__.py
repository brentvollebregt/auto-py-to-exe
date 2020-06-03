import argparse
import logging
import os
import shutil
import tempfile

from . import __version__
from . import config
from . import validation
from . import ui


def start_ui(logging_level):
    """ Open the interface """
    # Suppress the global logger to only show error+ to the console
    logging.getLogger().handlers[0].setLevel(logging_level)

    # Setup a temporary folder to build in
    config.temporary_directory = tempfile.mkdtemp()

    # Start UI
    ui.start(config.ui_open_mode)

    # Remove temporary folder to clean up from builds
    shutil.rmtree(config.temporary_directory)


def run():
    """ Module entry point """
    # Parse arguments
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "filename",
        nargs='?',
        type=validation.argparse_file_eists,
        help="pass a file into the interface",
        default=None
    )
    parser.add_argument(
        "-nc",
        "--no-chrome",
        action="store_true",
        help="do not open in chrome's app mode",
    )
    parser.add_argument(
        "-nu",
        "--no-ui",
        action="store_true",
        help="do not open a browser to show the application and simply print out where it's being hosted from. "
             "When using this option, you must manually stop the application using Ctrl+C",
    )
    parser.add_argument(
        "-c",
        "--config",
        nargs='?',
        type=validation.argparse_file_json,
        help="provide a json file containing a UI configuration to pre-populate the ui",
        default=None
    )
    parser.add_argument(
        "-o",
        "--output-dir",
        nargs='?',
        help="the directory to put output in",
        default='output'
    )
    parser.add_argument(
        "--logging-level",
        nargs='?',
        type=validation.argparse_logging_level,
        choices=['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'],
        help="the level to use for logging - defaults to ERROR",
        default='ERROR'
    )
    parser.add_argument(
        "--version",
        action="store_true",
        help="print the version - will not run the ui"
    )
    args = parser.parse_args()

    # Setup config from arguments
    config.package_filename = args.filename
    config.supplied_ui_configuration = args.config
    config.default_output_directory = os.path.abspath(args.output_dir)

    if args.no_ui:
        config.ui_open_mode = config.UIOpenMode.NONE
    elif args.no_chrome:
        config.ui_open_mode = config.UIOpenMode.USER_DEFAULT
    else:
        config.ui_open_mode = config.UIOpenMode.CHROME

    # If the user has asked for the version, print it, otherwise run the application
    if args.version:
        print('auto-py-to-exe ' + __version__)
    else:
        logging_level = getattr(logging, args.logging_level)
        start_ui(logging_level)


if __name__ == '__main__':
    run()
