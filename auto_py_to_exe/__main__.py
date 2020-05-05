import argparse
import logging
import shutil
import tempfile

from . import __version__
from . import config
from . import validation
from . import ui


def run():
    """ Open the interface """
    # Setup a temporary folder to build in
    config.temporary_directory = tempfile.mkdtemp()

    # Suppress the global logger to only show error+ to the console
    logging.getLogger().handlers[0].setLevel(logging.ERROR)

    # Start UI
    ui.start(not config.disable_chrome)

    # Remove temporary folder to clean up from builds
    shutil.rmtree(config.temporary_directory)


if __name__ == '__main__':
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
        help="do not open in chromes app mode",
    )
    parser.add_argument(
        "-c",
        "--config",
        nargs='?',
        type=validation.argparse_file_json,
        help="a json file containing a UI configuration",
        default=dict()
    )
    parser.add_argument(
        "--version",
        action="store_true",
        help="print the version - will not run the ui"
    )
    args = parser.parse_args()

    # Setup config from arguments
    config.package_filename = args.filename
    config.disable_chrome = args.no_chrome
    config.supplied_ui_configuration = args.config

    # If the user has asked for the version, print it, otherwise run the application
    if args.version:
        print('auto-py-to-exe ' + __version__)
    else:
        run()
