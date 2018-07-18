# Import packages we know are here and won't mess anything up
import sys
try:
    from tkinter import Tk
except:
    try:
        from Tkinter import Tk
    except:
        # If no versions of tkinter exist (most likely linux) provide a message
        if sys.version_info.major < 3:
            print ("Error: Tkinter not found")
            print ('For linux, you can install Tkinter by executing: "sudo apt-get install python-tk"')
        else:
            print ("Error: tkinter not found")
            print('For linux, you can install tkinter by executing: "sudo apt-get install python3-tk"')
try:
    from tkinter.filedialog import askopenfilename, askdirectory, askopenfilenames
except:
    from tkFileDialog import askopenfilename, askdirectory, askopenfilenames
import os
import platform
import shutil
import shlex

class CaptureStderr():
    """ Capture stderr and forward it onto eel.addOutput """
    dump = False

    def __init__(self):
        self.original = sys.stderr # Keep track of original

    def start(self):
        """ Start filtering and redirecting stderr """
        sys.stderr = self

    def stop(self):
        """ Stop filtering and redirecting stderr """
        sys.stderr = self.original

    def write(self, i):
        """ When sys.stderr.write is called, it will re directed here """
        if i != '\n' and not self.dump:
            if i.endswith('\n'):
                eel.addOutput(i)
            else:
                eel.addOutput(i + '\n')

# These modules capture stderr so we need to make sure they get our object
cs = CaptureStderr()
cs.start()
try:
    # Make sure PyInstaller is installed
    from PyInstaller import __main__ as pyi
except:
    print ("Error: PyInstaller not found")
    print ('Please install PyInstaller using: "python -m pip install PyInstaller"')
try:
    # Make sure Eel is installed
    import eel # Import eel last so we don't have to deal with the monkey patching crap it gives
except:
    print ("Error: Eel not found")
    print ('Please install PyInstaller using: "python -m pip install Eel"')
cs.stop()

web_location = 'web'
web_path = os.path.dirname(os.path.realpath(__file__)) + '/' + web_location
eel.init(web_path)

@eel.expose
def getFileFromArgs():
    if len(sys.argv) > 1:
        return os.path.abspath(sys.argv[1])
    return ''

@eel.expose
def loaded():
    """ When UI is loaded, stop dumping and switch stderr back """
    cs.dump = False
    cs.stop()

@eel.expose
def openOutputFolder(folder):
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
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filename = askopenfilename(parent=root)
    return filename

@eel.expose
def askFiles():
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filenames = askopenfilenames(parent=root)
    return filenames

@eel.expose
def askFolder():
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = askdirectory(parent=root)
    return folder

@eel.expose
def checkIfFileExists(file):
    return os.path.isfile(file)

@eel.expose
def convertPreCheck(filename, onefile, outputFolder):
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
    eel.addOutput("Cleaning file structure\n")
    clean()

    cs.start() # Capture stderr so PyInstaller output can be send to UI
    sys.argv = shlex.split(command) # Put command into sys.argv
    pyi.run() # Execute PyInstaller
    cs.stop() # Stop stderr capture

    eel.addOutput("Moving project to: " + output + "\n")
    try:
        moveProject(output)
    except:
        eel.addOutput("Failed to move project. Did an error occur?\n")
    eel.addOutput("Cleaning file structure\n")
    clean()
    eel.addOutput("Complete.\n")
    eel.outputComplete()

def moveProject(output):
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
    if os.path.exists('dist/'):
        shutil.rmtree('dist/')
    if os.path.exists('build/'):
        shutil.rmtree('build/')
    files = os.listdir('.')
    for file in files:
        if file.endswith('.spec'):
            os.remove(file)

def run():
    cs.start()
    cs.dump = True # Dump output provided by server resource logs
    eel.start('main.html', size=(650, 612), options={'port': 0})

if __name__ == '__main__':
    run()
