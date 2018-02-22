import eel
from tkinter.filedialog import askopenfilename
from tkinter import Tk
import os.path
import subprocess
import sys

eel.init('web')

@eel.expose
def askFile():
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filename = askopenfilename(parent=root)
    return filename

@eel.expose
def checkIfFileExists(file):
    return os.path.isfile(file)

@eel.expose
def convert(command):
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    for line in iter(process.stderr.readline, ''):
        if line == b'':
            break
        eel.addOutput(line.decode('utf-8'))
    eel.outputComplete()

def moveProject():
    pass

def clean():
    # dist
    # build
    # *.spec
    pass

eel.start('main.html', size=(650, 550))
