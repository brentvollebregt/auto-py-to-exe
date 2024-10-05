import os
import sys
import tkinter as tk
from pathlib import Path


def resource_path(relative_path):
    """Get the absolute path to the resource, works for dev and for PyInstaller"""
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        # If we are still in dev mode, make our paths start from the folder this file is in
        base_path = Path(__file__).parent

    return os.path.join(base_path, relative_path)


# Setup the window
window = tk.Tk()

# Show the image
image = tk.PhotoImage(file=resource_path("assets/image.gif"))
image_label = tk.Label(window, image=image)
image_label.pack()

# Show the contents of the JSON file
with open(resource_path("assets/data.json")) as f:
    data = f.read()
    data_label = tk.Label(text=data, padx=40, pady=15)
    data_label.pack()

# Keep the script running until the GUI closes
window.mainloop()
