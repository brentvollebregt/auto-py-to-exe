<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built using <a href="https://github.com/ChrisKnott/Eel">Eel</a> and <a href="http://www.pyinstaller.org/">PyInstaller</a> in Python.</p>

<p align="center">
    <img src="https://i.imgur.com/EuUlayC.png" alt="Empty interface">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="http://pepy.tech/project/auto-py-to-exe"><img src="http://pepy.tech/badge/auto-py-to-exe" alt="Downloads"></a>
</p>

## Getting Started

### Prerequisites
 - Python : Python >= 2.7 ( including 3.7 🎉 )

*To have the interface displayed in the images, you will need chrome. If chrome is not installed or --no-chrome is supplied, the default browser will be used.*

### Installation and Usage
#### Installing Via [PyPI](https://pypi.org/project/auto-py-to-exe/)
You can install this project using PyPI:
```
$ pip install auto-py-to-exe
```
Then to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

### Installing Via [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)
```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```
Then to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

#### Running Locally Via [Github](https://github.com/brentvollebregt/auto-py-to-exe) (no install)
You can run this project locally by following these steps:
1. Clone/download the [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Open cmd/terminal and cd into the project
3. Execute ```python -m pip install -r requirements.txt```

Now to run the application, execute ```python -m auto_py_to_exe```. A Chrome window in app mode will open with the project running inside.

> Make sure you are in the directory below auto_py_to_exe (you will be after step 3) when calling `python -m auto_py_to_exe` or you will need to reference the folder auto_py_to_exe absolutely/relatively to where you currently are.

## Using the Application
1. Select your script location (paste in or use a file explorer)
    - Outline will become blue when file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

*Easy.*

### Arguments
Usage: `auto-py-to-exe [-nc] [-c [CONFIG]] [filename]`

| Argument                       | Type       | Description                                                                                                                                          |
|--------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| filename                       | positional | Pre-fill the "Script Location" field in the UI.                                                                                                      |
| -nc, --no-chrome               | optional   | Open the UI using the default browser (which may be Chrome). Will not try to find Chrome                                                             |
| -c [CONFIG], --config [CONFIG] | optional   | Provide a configuration file (json) to pre-fill the UI. These can be generated from the bottom of the advanced tab when you have setup your options. |

> If you are running this package locally, you will need to call ```python -m auto_py_to_exe``` instead of ```auto-py-to-exe```

### Configurations
Instead of inserting the same data into the UI over and over again, you can export the current state of the UI by going to the section "Configuration Import and Export" at the bottom of the advanced tab and exporting a JSON string to the clipboard or a file. This can then be imported into the UI again to re-populate all fields.

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM); some things may be different but the same concepts still apply.

## Issues Using the Tool
If you're having issues with the packaged executable or using this tool in general, I recommend you read [my blog post on common issues when using auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/). This post covers things you should know about packaging Python scripts and fixes for things that commonly go wrong.

### Making GitHub Issues
Before making an issue on GitHub, make sure you have read through the blog post above and tried to [debug your application](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/#debugging). Also please take some time to look through [older GitHub issues](https://github.com/brentvollebregt/auto-py-to-exe/issues?q=) to see if your issue has already been discussed.

A lot of questions commonly asked relate to the fact that people have not tried debugging their application themselves. Please make sure you do this otherwise it makes it a lot harder to help.

## Screenshots
![Empty interface](https://i.imgur.com/dd0LC2n.png)

![Filled out](https://i.imgur.com/f3TEnZI.png)

![Converting](https://i.imgur.com/MjdONcC.png)