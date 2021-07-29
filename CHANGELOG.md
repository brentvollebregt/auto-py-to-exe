# Changelog

### 2.10.0
- [#166](https://github.com/brentvollebregt/auto-py-to-exe/issues/166): Added a warning for usage of Python from the Windows Store

### 2.9.0
- [#168](https://github.com/brentvollebregt/auto-py-to-exe/issues/168): Confirmation dialog on overriding configuration values on import

### 2.8.0
- Added translation handler
- [#153](https://github.com/brentvollebregt/auto-py-to-exe/issues/153): Added Chinese translations

### 2.7.11
- Add warning about PyInstaller < 4.1 support for Python 3.8 and 3.9

### 2.7.10
- [#142](https://github.com/brentvollebregt/auto-py-to-exe/issues/142): Added browse button for output directory

### 2.7.9
- [#74](https://github.com/brentvollebregt/auto-py-to-exe/issues/74) Added support for Python 3.8 and 3.9 by making [PyInstaller 4.1](https://pypi.org/project/pyinstaller/4.1/) a required dependency

### 2.7.8
- Fix regressed additional files note when using onefile

### 2.7.6
- Updated CSS colour references
- Fixed 404 image link

### 2.7.5
- Fixed [#100](https://github.com/brentvollebregt/auto-py-to-exe/issues/100): Use Eel 0.12.4
- Fixed [#103](https://github.com/brentvollebregt/auto-py-to-exe/issues/103): Use `--console`/`--windowed` instead of `--nowindowed`/`--noconsole`
- Be more consistent when choosing option strings - found in [#104](https://github.com/brentvollebregt/auto-py-to-exe/issues/104)

### 2.7.4
- Fixed [#99](https://github.com/brentvollebregt/auto-py-to-exe/issues/99): Added `--no-ui` to tell the application to not open the ui and simply print out the address that the server is running on.
    - When using this option, the server will keep running until manually stopped (Ctrl + C).

### 2.7.3
- Merged [#96](https://github.com/brentvollebregt/auto-py-to-exe/pull/96): Fixed Python 2.7 compatibility

### 2.7.2
- Made warnings appear at the top of the ui when using versions of PyInstaller/Python that a known to conflict
- Added argument `--output-dir` to set the default output directory
- Added argument `--logging-level` to override logging level for console output
- Added helpful links to the top of the ui
- Removed Python 3.4 from supported versions as it is not officially supported by PyInstaller anymore
- Some other build and background improvements

### 2.7.1
- Fixed binary not reading arguments
- Fixed input being emptied when cancelling file dialogs

## 2.7.0
- Completely refactored project
    - Code separation
    - Cleaned up logging silencing
    - Advanced tab is built dynamically to support newly added PyInstaller commands
    - Added "Settings" ui tab for non-PyInstaller settings
    - Better input colouring for inputs expecting files/directories
- Started adding tests to help support multiple operating systems and versions of Python more confidently.
- Automatic deployments on tag

*Note: This introduces a different format for exported configuration json files which causes older configuration files to be incompatible.*

### 2.6.6
- Added support for Eel 0.11.0

### 2.6.5
- Fix #61: Don't try to use Chrome if Eel detects a path that does not exist

### 2.6.4
- Leave a space between extra command data and the Python file

### 2.6.3
- Allow PyInstaller dev branches to be used

### 2.6.2
- Fix #58: Do not supply keyword arguments to os.startfile.

### 2.6.1
- When the server stops, close the UI
- Fix #56: Stop Python process freezing when displaying tkinter dialogs
- Don't pass filetypes to tkinter's askopenfilename on MacOS

## 2.6.0
- Allow importing and exporting od argument configurations as json files
- Other improvements to behind-the-scenes state

## Earlier
- No changelog notes for earlier versions.
