<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built using <a href="https://github.com/ChrisKnott/Eel">Eel</a> and <a href="http://www.pyinstaller.org/">pyinstaller</a> in Python.</p>

<div align="center">
    <img src="https://i.imgur.com/EuUlayC.png" alt="Empty interface">
</div>

## Getting Started

### Prerequisites
 - Python : Python 2.7, 3.3 - 3.6

*To have the interface displayed in the images, you will need chrome. If chrome is not installed or --no-chrome is supplied the default browser will be used.*

### Installation and Usage
#### Via [PyPI](https://pypi.org/project/auto-py-to-exe/)
You can install this project using the PyPI:
```
$ pip install auto-py-to-exe
```
Now to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

#### Via [This Repository](https://github.com/brentvollebregt/auto-py-to-exe)
You can install this project using this repository by following these steps:
1. Clone/download this repo
2. Open cmd/terminal and cd to the project
3. Execute ```pip install -r requirements.txt```

Now to run the application, run the ```run.py``` file with python. A Chrome will open in app mode with the project running inside.

## Using the Application
1. Select your script location (paste in or use a file explorer)
    - Outline will become blue when file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

*Easy.*

### Arguments
Alternatively you can execute ```python run.py [filename]```. This will open up the window with the filename in the script location.

You can also pass ```--no-chrome``` if you want to use your default browser and not chromes app mode; for example ```python run.py --no-chrome my_script.py```.

> If you installed this package using pip you can call ```auto-py-to-exe``` instead of ```python run.py```

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM), some things may be different but the same concepts still apply.

## Looking for the PyPI Version?
If you are looking for the PyPI version of this repo, go to [auto-py-to-exe-pypi](https://github.com/brentvollebregt/auto-py-to-exe-pypi). This repo has been preserved to keep in line with the provided video but instructions have been provided to use the new method.

## Screenshots
![Empty interface](https://i.imgur.com/dd0LC2n.png)

![Filled out](https://i.imgur.com/f3TEnZI.png)

![Converting](https://i.imgur.com/MjdONcC.png)