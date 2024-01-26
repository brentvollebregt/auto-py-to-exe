import argparse
import logging
import os
import shutil
import tempfile

from . import shims

shims.install_shims()

from . import __version__, config, ui, validation  # noqa: E402


def start_ui(logging_level, build_directory_override):
    """Open the interface"""
    # Suppress the global logger to only show error+ to the console
    logging.getLogger().handlers[0].setLevel(logging_level)

    # Setup the build folder
    if build_directory_override is None:
        config.temporary_directory = tempfile.mkdtemp()
    else:
        config.temporary_directory = build_directory_override

    # Start UI
    ui.start(config.ui_open_mode)

    # Remove build folder to clean up from builds (if we created it)
    if build_directory_override is None:
        shutil.rmtree(config.temporary_directory)


def run():
    """Module entry point"""
    # Parse arguments
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "filename", nargs="?", type=validation.argparse_file_exists, help="pass a file into the interface", default=None
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
        nargs="?",
        type=validation.argparse_file_json,
        help="provide a json file containing a UI configuration to pre-populate the ui",
        default=None,
    )
    parser.add_argument("-o", "--output-dir", nargs="?", help="the directory to put output in", default="output")
    parser.add_argument(
        "-bdo",
        "--build-directory-override",
        nargs="?",
        help="a directory for build files (overrides the default)",
        default=None,
    )
    parser.add_argument(
        "-lang",
        "--language",
        nargs="?",
        help="hint the language to use by default - language codes can be found in the README",
        default=None,
        metavar="LANGUAGE_CODE",
    )
    parser.add_argument(
        "--logging-level",
        nargs="?",
        type=validation.argparse_logging_level,
        choices=["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
        help="the level to use for logging - defaults to ERROR",
        default="ERROR",
    )
    parser.add_argument("-v", "--version", action="version", version=f"auto-py-to-exe {__version__}")
    args = parser.parse_args()

    # Setup config from arguments
    config.package_filename = args.filename
    config.supplied_ui_configuration = args.config
    config.default_output_directory = os.path.abspath(args.output_dir)
    config.language_hint = args.language

    if args.no_ui:
        config.ui_open_mode = config.UIOpenMode.NONE
    elif args.no_chrome:
        config.ui_open_mode = config.UIOpenMode.USER_DEFAULT
    else:
        config.ui_open_mode = config.UIOpenMode.CHROME

    # Validate --build-directory-override exists if supplied
    if (args.build_directory_override is not None) and (not os.path.isdir(args.build_directory_override)):
        raise ValueError("--build-directory-override must be a directory")

    logging_level = getattr(logging, args.logging_level)
    start_ui(logging_level, args.build_directory_override)


if __name__ == "__main__":
    run()
