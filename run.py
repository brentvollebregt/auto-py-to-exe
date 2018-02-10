import eel
from tkinter.filedialog import askopenfilename
from tkinter import Tk

eel.init('web')

@eel.expose
def askFile():
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    filename = askopenfilename(parent=root)
    return filename

eel.start('main.html', size=(650, 550))
