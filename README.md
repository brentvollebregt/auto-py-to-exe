<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built using <a href="https://github.com/ChrisKnott/Eel">Eel</a> and <a href="http://www.pyinstaller.org/">pyinstaller</a> in Python.</p>

<div align="center">
    <img src="https://i.imgur.com/EuUlayC.png" alt="Empty interface">
</div>

## Getting Started

### Prerequisites
 - Python : Python 3.3 - 3.6
 - Chrome : to run the user interface in; eel uses this (app mode)

### Installing
1. Clone/download this repo
2. Open cmd/terminal and cd to the project
3. Execute ```pip install -r requirements.txt```

## Running the Application
Run ```run.py```. Chrome will open in app mode with the project running inside.

## Using the Application
1. Select your script location (paste in or use a file explorer)
    - Outline will become blue when file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

*Easy.*

### Passing the File With Arguments
Alternatively you can execute ```python run.py [filename]```. This will open up the window with the filename in the script location.

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM), some things may be different but the same concepts still apply.

## Something is Wrong?
There could be a chance that you were using an old version and I have changed something and your cache is now a mess. Press Shift+F5 in the chrome app to force reload everything.

If this doesn't work please report it and I will look into it!

## Screenshots
![Empty interface](https://i.imgur.com/dd0LC2n.png)
![Filled out](https://i.imgur.com/f3TEnZI.png)
![Converting](https://i.imgur.com/MjdONcC.png)