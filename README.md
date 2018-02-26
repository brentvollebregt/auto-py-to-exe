<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built with <a href="https://github.com/ChrisKnott/Eel">Eel</a> in Python.</p>

<div align="center">
    <img src="https://i.imgur.com/BvfQABI.png" alt="Empty interface">
</div>

## Getting Started

### Prerequisites
 - Python : Python 2.7 or Python 3.3+ (basically anything that pyinstaller runs on)
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

## Screenshots
![Empty interface](https://i.imgur.com/PIWXYQf.png)
![Filled out](https://i.imgur.com/Y4itvce.png)
![Converting](https://i.imgur.com/MjdONcC.png)

# Tasklist
#### General
- [x] Specify output directory
- [x] Add section to add own flags
- [ ] Button tooltips (use title attributes on div tags)
- [ ] Path separator based off os
#### Add to Advanced
*[pyinstaller options](https://pyinstaller.readthedocs.io/en/stable/usage.html#options)*
- [x] -a
- [x] --upx-dir
- [x] --clean
- [x] --log-level
- [x] --add-binary
- [x] -p
- [x] --hidden-import
- [x] --additional-hooks-dir
- [x] --runtime-hook
- [x] --exclude-module
- [x] -d
- [x] -s
- [x] --noupx
- [x] --version-file
- [x] -m
- [x] -r
- [x] --uac-admin
- [x] --uac-uiaccess
- [x] --win-private-assemblies
- [x] --win-no-prefer-redirects
- [x] --osx-bundle-identifier
- [x] --runtime-tmpdir
