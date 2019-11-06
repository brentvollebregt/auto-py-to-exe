# Import packages we know are here and won't mess anything up
import sys
try:
    from tkinter import Tk
except ImportError:
    try:
        from Tkinter import Tk
    except ImportError:
        # If no versions of tkinter exist (most likely linux) provide a message
        if sys.version_info.major < 3:
            print("Error: Tkinter not found")
            print('For linux, you can install Tkinter by executing: "sudo apt-get install python-tk"')
            sys.exit(1)
        else:
            print("Error: tkinter not found")
            print('For linux, you can install tkinter by executing: "sudo apt-get install python3-tk"')
            sys.exit(1)
try:
    from tkinter.filedialog import askopenfilename, askdirectory, askopenfilenames, asksaveasfilename
except ImportError:
    from tkFileDialog import askopenfilename, askdirectory, askopenfilenames, asksaveasfilename
import argparse
import os
import platform
import shutil
import shlex
import re
import traceback
import tempfile
import json
from . import __version__ as version


class CaptureStderr:
    """ Capture stderr and forward it onto eel.addOutput """
    filters = []
    ui_started = False # Don't send messages until the UI has started (or is close)

    def __init__(self):
        self.original = sys.stderr # Keep track of original

    def start(self):
        """ Start filtering and redirecting stderr """
        sys.stderr = self

    def stop(self):
        """ Stop filtering and redirecting stderr """
        sys.stderr = self.original

    def add_filter(self, filter_expression):
        self.filters.append(re.compile(filter_expression))

    def write(self, message):
        """ When sys.stderr.write is called, it will re directed here """

        # Filter pre-defined lines that don't need to be sent
        for single_filter in self.filters:
            if not single_filter.match(message) is None:
                return

        if self.ui_started:
            # Send making sure there is a newline at the end
            if message.endswith('\n'):
                eel.addOutput(message)
            else:
                eel.addOutput(message + '\n')
        else:
            self.original.write(message)
            self.original.flush()


# These modules capture stderr so we need to make sure they get our object
cs = CaptureStderr()
cs.add_filter('[0-9]+ ([a-z]|[A-Z])+: [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} - - \[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\] "GET')
cs.add_filter('\s$')
cs.start()
try:
    # Make sure PyInstaller is installed
    from PyInstaller import __main__ as pyi
except ImportError:
    print("Error: PyInstaller not found")
    print('Please install PyInstaller using: "python -m pip install PyInstaller"')
    sys.exit(1)
try:
    # Make sure Eel is installed
    import eel # Import eel last so we don't have to deal with the monkey patching crap it gives
except ImportError:
    print("Error: Eel not found")
    print('Please install PyInstaller using: "python -m pip install Eel"')
    sys.exit(1)
cs.stop()


try:
    # Make sure PyInstaller 3.4 or above is being used with Python 3.7
    if sys.version_info >= (3, 7) and float(pyi.__version__) < 3.4:
        print('You will need PyInstaller 3.4 or above to use this with Python 3.7')
        print('Please upgrade PyInstaller: python -m pip install --upgrade PyInstaller')
        sys.exit(1)
except ValueError:
    # Dev branches will have pyi.__version__ as a string in the form X.Y.devZ+HASH. Ignore it if this is the case.
    pass

# Pre-defined variables by Python
DEFAULT_RECURSION_LIMIT = sys.getrecursionlimit()

# Some variables to help with arguments and how they are passed around (can also be used when being imported)
filename = None
disable_chrome = False
supplied_ui_configuration = None

# Setup eels root folder
web_location = 'web'
web_path = os.path.dirname(os.path.realpath(__file__)) + '/' + web_location
eel.init(web_path)

# Use the same temporary directory to speed up consecutive builds
temporary_directory = tempfile.mkdtemp()


@eel.expose
def ui_on_init():
    """ Called by the UI when opened. Used to pass initial values. """
    cs.ui_started = True
    return {
        'filename': os.path.abspath(filename) if filename is not None else None,
        'supplied_ui_configuration': supplied_ui_configuration
    }


@eel.expose
def open_output_folder(folder):
    """ Open the folder of there the package was moved to """
    folder_directory = os.path.abspath(folder) # Use absolute directories
    if platform.system() == 'Windows':
        os.startfile(folder_directory, 'explore')
    elif platform.system() == 'Linux':
        os.system('xdg-open "' + folder_directory + '"')
    elif platform.system() == 'Darwin':
        os.system('open "' + folder_directory + '"')
    else:
        eel.addOutput("Unable to open output folder: " + folder_directory)


@eel.expose
def ask_file(file_type):
    """ Ask the user to select a file """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    if (file_type is None) or (platform.system() == "Darwin"):
        file_path = askopenfilename(parent=root)
    else:
        if file_type == 'python':
            file_types = [('Python files', '*.py;*.pyw'), ('All files', '*')]
        elif file_type == 'icon':
            file_types = [('Icon files', '*.ico'), ('All files', '*')]
        elif file_type == 'json':
            file_types = [('JSON Files', '*.json'), ('All files', '*')]
        else:
            file_types = [('All files', '*')]
        file_path = askopenfilename(parent=root, filetypes=file_types)
    root.update()
    return file_path


@eel.expose
def ask_files():
    """ Ask the user to select one or more files """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    file_paths = askopenfilenames(parent=root)
    root.update()
    return file_paths


@eel.expose
def ask_folder():
    """ Ask the user to select a folder """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = askdirectory(parent=root)
    return folder


@eel.expose
def ask_file_save_location(file_type):
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    if (file_type is None) or (platform.system() == "Darwin"):
        file_path = asksaveasfilename(parent=root)
    else:
        if file_type == 'json':
            file_types = [('JSON Files', '*.json'), ('All files', '*')]
        else:
            file_types = [('All files', '*')]
        file_path = asksaveasfilename(parent=root, filetypes=file_types)
    root.update()
    return file_path


@eel.expose
def check_if_file_exists(file):
    """ Checks if a file exists """
    return os.path.isfile(file)


@eel.expose
def check_if_folder_exists(file):
    """ Checks if a folder exists """
    return os.path.isdir(file)


@eel.expose
def get_file_contents(file):
    with open(file) as f:
        data = f.read()
    return data


@eel.expose
def write_file_contents(file, data):
    with open(file, 'w') as f:
        f.write(data)


@eel.expose
def convert_pre_check(file_path, one_file, output_folder):
    """ Checks if there is a possibility of a previous output being overwritten """
    if not os.path.exists(output_folder):
        return True
    no_extension = '.'.join(file_path.split('.')[:-1])
    if one_file:
        if no_extension + '.exe' in os.listdir(output_folder):
            return False
    else:
        if no_extension in os.listdir(output_folder):
            return False
    return True


@eel.expose
def convert(command, output, disable_recursion_limit):
    """ Package the executable passing the arguments the user requested """
    eel.addOutput("Running auto-py-to-exe v" + version)
    # Notify the user of the workspace and setup building to it
    eel.addOutput("Building in the current instances temporary directory at {}\n".format(temporary_directory))
    eel.addOutput("To get a new temporary directory, restart this application\n")
    dist_path = os.path.join(temporary_directory, 'application')
    build_path = os.path.join(temporary_directory, 'build')
    extra_args = ['--distpath', dist_path] + ['--workpath', build_path] + ['--specpath', temporary_directory]

    # If the Recursion Limit is enabled, set it
    if not disable_recursion_limit:
        sys.setrecursionlimit(5000)
        eel.addOutput("Recursion Limit is set to 5000\n")
    else:
        sys.setrecursionlimit(DEFAULT_RECURSION_LIMIT) # In the case the limit was set and now the user doesn't want it set

    # Run PyInstaller
    pyinstaller_fail = True
    cs.start() # Capture stderr so PyInstaller output can be send to UI
    sys.argv = shlex.split(command) + extra_args # Put command into sys.argv and extra args
    try:
        eel.addOutput("Executing: {0}\n".format(command))
        pyi.run() # Execute PyInstaller
        pyinstaller_fail = False
    except:
        eel.addOutput("An error occurred, traceback follows:\n")
        eel.addOutput(traceback.format_exc())
    cs.stop() # Stop stderr capture

    # Move project if there was no failure
    if pyinstaller_fail:
        eel.addOutput("\n")
        eel.addOutput("Project output will not be moved to output folder\n")
    else:
        output_directory = os.path.abspath(output) # Use absolute directories
        eel.addOutput("Moving project to: {0}\n".format(output_directory))
        try:
            move_project(dist_path, output_directory)
        except:
            eel.addOutput("Failed to move project, traceback follows:\n")
            eel.addOutput(traceback.format_exc())

    eel.addOutput("Complete.\n")
    eel.outputComplete()


def move_project(src, dst):
    """ Move the output package to the desired path (default is output/ - set in script.js) """
    # Make sure the destination exists
    if not os.path.exists(dst):
        os.makedirs(dst)

    # Move all files/folders in dist/
    for file_or_folder in os.listdir(src):
        _dst = os.path.join(dst, file_or_folder)
        # If this already exists in the destination, delete it
        if os.path.exists(_dst):
            if os.path.isfile(_dst):
                os.remove(_dst)
            else:
                shutil.rmtree(_dst)
        # Move file
        shutil.move(os.path.join(src, file_or_folder), dst)


def config_file_argument_check(file_path):
    """ Checks that a file path exists and contains a parseable json structure """
    if not os.path.isfile(file_path):
        raise argparse.ArgumentTypeError('Provided configuration file does not exist')

    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
    except json.decoder.JSONDecodeError:
        raise argparse.ArgumentTypeError('Provided configuration file content is not json')
    except Exception as e:
        raise argparse.ArgumentTypeError('Cannot parse provided configuration file:\n' + str(e))

    return data


def check_arguments():
    """ Check arguments passed """
    global filename
    global disable_chrome
    global supplied_ui_configuration

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "filename",
        nargs='?',
        help="pass a file into the interface"
    )
    parser.add_argument(
        "-nc",
        "--no-chrome",
        action="store_true",
        help="do not open in chromes app mode"
    )
    parser.add_argument(
        "-c",
        "--config",
        nargs='?',
        type=config_file_argument_check,
        help="a json file that contains a UI configuration"
    )
    parser.add_argument(
        "--version",
        action="store_true",
        help="print the version - will not run the ui"
    )
    args = parser.parse_args()
    filename = args.filename
    disable_chrome = args.no_chrome
    supplied_ui_configuration = args.config

    if args.version:
        print('auto-py-to-exe v' + version)
        sys.exit(0)


def run(read_arguments=True):
    """ Open the interface """
    if read_arguments:
        check_arguments()
    cs.start()

    try:
        chrome_instance_path = eel.chrome.find_path()
        if chrome_instance_path is not None and os.path.exists(chrome_instance_path) and not disable_chrome:
            eel.start('main.html', size=(650, 612), port=0)
        else:
            eel.start('main.html', size=(650, 612), port=0, mode='user selection')
    except (SystemExit, KeyboardInterrupt):
        pass # This is what the bottle server raises

    shutil.rmtree(temporary_directory)


if __name__ == '__main__':
    run()
