import eel
from tkinter.filedialog import askopenfilename
from tkinter import Tk
import os.path

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

eel.start('main.html', size=(650, 550))
