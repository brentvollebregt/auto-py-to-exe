import tkinter as tk

# Setup the window
window = tk.Tk()

# Add the label
greeting = tk.Label(text="Hello from Tkinter", padx=40, pady=15)
greeting.pack()

# Keep the script running until the GUI closes
window.mainloop()
