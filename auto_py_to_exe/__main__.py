# Import packages we know are here and won't mess anything up
import argparse
import sys
try:
    from tkinter import Tk
except ModuleNotFoundError:
    try:
        from Tkinter import Tk
    except:
        # If no versions of tkinter exist (most likely linux) provide a message
        if sys.version_info.major < 3:
            print ("Error: Tkinter not found")
            print ('For linux, you can install Tkinter by executing: "sudo apt-get install python-tk"')
            sys.exit(1)
        else:
            print ("Error: tkinter not found")
            print('For linux, you can install tkinter by executing: "sudo apt-get install python3-tk"')
            sys.exit(1)
try:
    from tkinter.filedialog import askopenfilename, askdirectory, askopenfilenames
except ModuleNotFoundError:
    from tkFileDialog import askopenfilename, askdirectory, askopenfilenames
import os
import platform
import shutil
import shlex
import re
import traceback


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

    def write(self, i):
        """ When sys.stderr.write is called, it will re directed here """

        # Filter pre-defined lines that don't need to be sent
        for single_filter in self.filters:
            if not single_filter.match(i) is None:
                return

        if self.ui_started:
            # Send making sure there is a newline at the end
            if i.endswith('\n'):
                eel.addOutput(i)
            else:
                eel.addOutput(i + '\n')
        else:
            print (i)


# These modules capture stderr so we need to make sure they get our object
cs = CaptureStderr()
cs.add_filter('[0-9]+ ([a-z]|[A-Z])+: [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} - - \[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\] "GET')
cs.add_filter('\s$')
cs.start()
try:
    # Make sure PyInstaller is installed
    from PyInstaller import __main__ as pyi
except ModuleNotFoundError:
    print ("Error: PyInstaller not found")
    print ('Please install PyInstaller using: "python -m pip install PyInstaller"')
    sys.exit(1)
try:
    # Make sure Eel is installed
    import eel # Import eel last so we don't have to deal with the monkey patching crap it gives
except ModuleNotFoundError:
    print ("Error: Eel not found")
    print ('Please install PyInstaller using: "python -m pip install Eel"')
    sys.exit(1)
cs.stop()

# Make sure PyInstaller 3.4 is being used with Python 3.7
if sys.version_info == (3, 7) and not (float(pyi.__version__) >= 3.4):
    print ('You will need PyInstaller 3.4 or above to use this with Python 3.7')
    print ('Please upgrade PyInstaller: python -m pip install --upgrade PyInstaller')
    sys.exit(1)

# Some variables to help with arguments and how they are passed around (can also be used when being imported)
filename = ''
disable_chrome = False

# Setup eels root folder
web_location = 'web'
web_path = os.path.dirname(os.path.realpath(__file__)) + '/' + web_location
eel.init(web_path)


@eel.expose
def getFileFromArgs():
    """ Pass the filename argument to the UI """
    if filename != '':
        return os.path.abspath(filename)
    return ''


@eel.expose
def openOutputFolder(folder):
    """ Open the folder of there the package was moved to """
    if platform.system() == 'Windows':
        folder = folder.replace('/', '\\')
        os.system('explorer "' + folder + '"')
    elif platform.system() == 'Linux':
        os.system('xdg-open "' + folder + '"')
    elif platform.system() == 'Darwin':
        os.system('open "' + folder + '"')
    else:
        os.startfile(folder)


@eel.expose
def askFile():
    """ Ask the user to select a file """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filename = askopenfilename(parent=root)
    return filename


@eel.expose
def askFiles():
    """ Ask the user to select one or more files """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filenames = askopenfilenames(parent=root)
    return filenames


@eel.expose
def askFolder():
    """ Ask the user to select a folder """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = askdirectory(parent=root)
    return folder


@eel.expose
def checkIfFileExists(file):
    """ Checks if a file exists """
    return os.path.isfile(file)


@eel.expose
def convertPreCheck(filename, onefile, outputFolder):
    """ Checks if there is a possibility of a previous output being overwritten """
    if not os.path.exists(outputFolder):
        return True
    no_extension = '.'.join(filename.split('.')[:-1])
    if onefile:
        if no_extension + '.exe' in os.listdir(outputFolder):
            return False
    else:
        if no_extension in os.listdir(outputFolder):
            return False
    return True


@eel.expose
def convert(command, output):
    """ Package the executable passing the arguments the user requested """
    # Initially clean the workspace
    eel.addOutput("Cleaning workspace\n")
    try:
        clean()
    except:
        eel.addOutput("Warning: could not clean the workspace before starting\n")

    # Run PyInstaller
    pyinstaller_fail = True
    cs.start() # Capture stderr so PyInstaller output can be send to UI
    sys.argv = shlex.split(command) # Put command into sys.argv
    try:
        pyi.run() # Execute PyInstaller
        pyinstaller_fail = False
    except:
        eel.addOutput("An error occurred, traceback follows:\n")
        eel.addOutput(traceback.format_exc())
    cs.stop() # Stop stderr capture

    # Move Project
    if pyinstaller_fail:
        eel.addOutput("\n")
        eel.addOutput("Project output will not be moved to output folder\n")
    else:
        eel.addOutput("Moving project to: " + output + "\n")
        try:
            moveProject(output)
        except:
            eel.addOutput("Failed to move project, traceback follows:\n")
            eel.addOutput(traceback.format_exc())

    # Clean the workspace
    eel.addOutput("Cleaning workspace\n")
    try:
        clean()
    except:
        eel.addOutput("Warning: could not clean the workspace; some build files will still exist\n")

    eel.addOutput("Complete.\n")
    eel.outputComplete()


def moveProject(output):
    """ Move the output package to the desired path (default is output/ - set in script.js) """
    if not os.path.exists(output):
        os.makedirs(output)
    folder = 'dist/' + os.listdir('dist/')[0]
    if os.listdir('dist/')[0] in os.listdir(output):
        if os.path.isfile('dist/' + os.listdir('dist/')[0]):
            os.remove(output + os.listdir('dist/')[0])
        else:
            shutil.rmtree(output + os.listdir('dist/')[0])
    shutil.move(folder, output)


def clean():
    """ Clean the output of pyinstaller """
    if os.path.exists('dist/'):
        shutil.rmtree('dist/')
    if os.path.exists('build/'):
        shutil.rmtree('build/')
    files = os.listdir('.')
    for file in files:
        if file.endswith('.spec'):
            os.remove(file)


def checkArguments():
    """ Check arguments passed """
    global filename
    global disable_chrome

    parser = argparse.ArgumentParser()
    parser.add_argument("filename", nargs='?', help="pass a file into the interface")
    parser.add_argument("-nc", "--no-chrome", action="count", help="do not open in chromes app mode")
    args = parser.parse_args()
    if args.filename is not None:
        filename = args.filename
    if args.no_chrome is not None:
        disable_chrome = True


def run():
    """ Open the interface """
    if __name__ == '__main__':
        checkArguments()
    cs.start()
    cs.ui_started = True
    if eel.brw.chr.get_instance_path() is not None and not disable_chrome:
        eel.start('main.html', size=(650, 612), options={'port': 0})
    else:
        eel.start('main.html', size=(650, 612), options={'port': 0, 'mode': 'user selection'})


if __name__ == '__main__':
    run()
