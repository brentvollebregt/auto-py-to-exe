import argparse
import logging
import os
import shutil
import tempfile
import platform
import sys


def is_running_in_wine():
    """
    Detect if a PyInstaller application is running under Wine on Linux.
    Returns True if running under Wine, False otherwise.
    """
    print("Wine-Check: Checking if running in Wine environment...")
    print(f"Wine-Check: Platform: {platform.system()} {platform.release()}")
    
    # Method 1: Check for Wine-specific environment variables
    wine_env_vars = ['WINE_PREFIXES', 'WINEPREFIX', 'WINESERVER', 'WINELOADERNOEXEC', 'WINEDLLPATH']
    for var in wine_env_vars:
        if var in os.environ:
            print(f"Wine-Check: Detected Wine environment variable: {var}={os.environ[var]}")
            return True

    # Method 2: Check for Wine filesystem indicators
    wine_paths = [
        '/proc/registry',  # Wine registry mountpoint
        '/.wine',          # Default Wine prefix
        os.path.expanduser('~/.wine')  # User Wine prefix
    ]
    for path in wine_paths:
        if os.path.exists(path):
            print(f"Wine-Check: Detected Wine filesystem indicator: {path}")
            return True
    
    # Method 3: Check for Windows drive letters in a Linux environment
    if platform.system() == 'Linux':
        print(f"Wine-Check: Linux detected, checking for Windows drive letters...")
        windows_drives = [f"{chr(d)}:" for d in range(ord('C'), ord('Z')+1)]
        for drive in windows_drives:
            drive_path = f"/dosdevices/{drive.lower()}"
            if os.path.exists(drive_path):
                print(f"Wine-Check: Detected Windows drive in Linux: {drive_path}")
                return True
    
    # Method 4: Check for discrepancies between reported OS and actual file system
    if platform.system() == 'Linux':
        try:
            print(f"Wine-Check: Checking for Windows paths in Linux...")
            if os.path.exists("C:\\Program Files"):
                print(f"Wine-Check: Detected 'C:\\Program Files' in Linux")
                return True
            if os.path.exists("Z:\\usr"):
                print(f"Wine-Check: Detected 'Z:\\usr' in Linux")
                return True
        except Exception as e:
            print(f"Wine-Check: Error checking Windows paths: {e}")
            
    print(f"Wine-Check: No Wine environment detected")
    return False


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
        "-db",
        "--default-browser",
        action="store_true",
        help="use the default browser",
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
    
    # Check if running in Wine and modify sys.argv if needed
    # Do this before parsing arguments to ensure --default-browser is set
    print("Wine-Check: Checking for Wine environment...")
    wine_detected = is_running_in_wine()
    if wine_detected:
        print("Wine-Check: Wine environment detected!")
        if '--default-browser' not in sys.argv and '-db' not in sys.argv:
            print("Wine-Check: Adding --default-browser flag to command line arguments")
            sys.argv.append('--default-browser')
    else:
        print("Wine-Check: Not running in Wine environment")
    
    args = parser.parse_args()
    
    # Setup config from arguments
    config.package_filename = args.filename
    config.supplied_ui_configuration = args.config
    config.default_output_directory = os.path.abspath(args.output_dir)
    config.language_hint = args.language
    
    # If Wine is detected, force default browser mode regardless of other settings
    if wine_detected:
        print("Wine-Check: Forcing default browser UI mode due to Wine environment")
        config.ui_open_mode = config.UIOpenMode.DEFAULT_BROWSER
    elif args.no_ui:
        config.ui_open_mode = config.UIOpenMode.NONE
    elif args.default_browser:
        config.ui_open_mode = config.UIOpenMode.DEFAULT_BROWSER
    else:
        config.ui_open_mode = config.UIOpenMode.CHROME_OR_EDGE
    
    # Validate --build-directory-override exists if supplied
    if (args.build_directory_override is not None) and (not os.path.isdir(args.build_directory_override)):
        raise ValueError("--build-directory-override must be a directory")
    
    logging_level = getattr(logging, args.logging_level)
    start_ui(logging_level, args.build_directory_override)


if __name__ == "__main__":
    run()
