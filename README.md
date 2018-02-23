<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface built with <a href="https://github.com/ChrisKnott/Eel">Eel</a> in Python.</p>

<div align="center">
    <img src="https://i.imgur.com/BvfQABI.png" alt="Empty interface">
</div>

*Note: This project is still being developed and some features are currently not supported; see the tasklist for what still needs to be done.*
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
#### Add to Advanced
- [ ] -a
- [ ] --upx-dir
- [ ] --clean
- [ ] --log-level LEVEL
- [ ] --add-binary
- [ ] -p
- [ ] --hidden-import
- [ ] --additional-hooks-dir
- [ ] --runtime-hook
- [ ] --exclude-module
- [ ] -d
- [ ] -s
- [ ] --noupx
- [ ] --version-file
- [ ] -m
- [ ] -r
- [ ] --uac-admin
- [ ] --uac-uiaccess
- [ ] --win-private-assemblies
- [ ] --win-no-prefer-redirects
- [ ] --osx-bundle-identifier
- [ ] --runtime-tmpdir
