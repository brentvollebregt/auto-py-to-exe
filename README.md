<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built using <a href="https://github.com/ChrisKnott/Eel">Eel</a> and <a href="http://www.pyinstaller.org/">PyInstaller</a> in Python.</p>

<div align="center">
    <img src="https://i.imgur.com/EuUlayC.png" alt="Empty interface">
</div>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="http://pepy.tech/project/auto-py-to-exe"><img src="http://pepy.tech/badge/auto-py-to-exe" alt="Downloads"></a>
</p>

## Getting Started

### Prerequisites
 - Python : Python 2.7, 3.3 - 3.6

*To have the interface displayed in the images, you will need chrome. If chrome is not installed or --no-chrome is supplied, the default browser will be used.*

### Installation and Usage
#### Installing Via [PyPI](https://pypi.org/project/auto-py-to-exe/)
You can install this project using the PyPI:
```
$ pip install auto-py-to-exe
```
Now to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

#### Running Locally Via the [Github Repository](https://github.com/brentvollebregt/auto-py-to-exe)
You can run this project locally by following these steps:
1. Clone/download the [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Open cmd/terminal and cd into the project
3. Execute ```pip install -r requirements.txt```

Now to run the application, run the ```run.py``` file with python. A Chrome window in app mode will open with the project running inside.

*Note: The repository linked above is not what is hosted on PyPI. It has been preserved to keep in line with the provided video but instructions have been provided to use the new method. The PyPI version is hosted [here](https://github.com/brentvollebregt/auto-py-to-exe-pypi).*

## Using the Application
1. Select your script location (paste in or use a file explorer)
    - Outline will become blue when file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

*Easy.*

### Arguments
Alternatively you can execute ```auto-py-to-exe [filename]```. This will open up the window with the filename in the script location.

You can also pass ```--no-chrome``` if you want to use your default browser and not chromes app mode; for example ```auto-py-to-exe --no-chrome my_script.py```.

> If you installed this package locally, you will need to call ```python run.py``` instead of ```auto-py-to-exe```

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM); some things may be different but the same concepts still apply.

## Screenshots
![Empty interface](https://i.imgur.com/dd0LC2n.png)

![Filled out](https://i.imgur.com/f3TEnZI.png)

![Converting](https://i.imgur.com/MjdONcC.png)