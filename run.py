import eel
try:
    from tkinter.filedialog import askopenfilename, askdirectory, askopenfilenames
except:
    from tkFileDialog import askopenfilename, askdirectory, askopenfilenames
try:
    from tkinter import Tk
except:
    from Tkinter import Tk
import os
import subprocess
import shutil
import sys

web_location = 'web'
web_path = os.path.dirname(os.path.realpath(__file__)) + '\\' + web_location
eel.init(web_path)

@eel.expose
def getFileFromArgs():
    if len(sys.argv) > 1:
        return os.path.abspath(sys.argv[1])
    return ''

@eel.expose
def openOutputFolder(folder):
    folder = folder.replace('/', '\\')
    if os.name == 'nt':
        # Opens the new window to the top on Windows
        os.system('explorer "' + folder + '"')
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
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    for line in iter(process.stderr.readline, ''):
        if line == b'':
            break
        eel.addOutput(line.decode('utf-8', errors='replace'))
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
    eel.start('main.html', size=(650, 612), options={'port': 0})

if __name__ == '__main__':
    run()
