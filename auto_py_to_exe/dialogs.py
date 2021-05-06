import platform
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

    # bool(file_path) will help filter our the negative cases; an empty string or an empty tuple
    return file_path if bool(file_path) else None


def ask_files():
    """ Ask the user to select one or more files """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    file_paths = askopenfilenames(parent=root)
    root.update()

    return file_paths if bool(file_paths) else None


def ask_folder():
    """ Ask the user to select a folder """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = askdirectory(parent=root)
    root.update()

    return folder if bool(folder) else None


def ask_file_save_location(file_type):
    """ Ask the user where to save a file """
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

    if bool(file_path):
        if file_type == 'json':
            return file_path if file_path.endswith('.json') else file_path + '.json'
        else:
            return file_path
    else:
        return None
