<h1 align="center">Auto PY to EXE</h1>
<p align="center">A .py to .exe converter using a simple graphical interface and <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> in Python.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Empty interface">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Downloads Per Month"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Supported Platforms"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Donate"></a>
</p>

阅读中文版的README ，点击 [这里](./README-Chinese.md)

## Demo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Getting Started

### Prerequisites
 - Python : 3.6-3.11

*To have the interface displayed in the images, you will need chrome. If chrome is not installed or --no-chrome is supplied, the default browser will be used.*

> As of [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), Python 2.7 is no longer supported. Read "[Python 2.7 Support](#python-27-support)" below for steps on how to use this tool with Python 2.7.

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
Usage: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| Argument                                                     | Type                | Description                                                                                                                       |
| ------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | positional/optional | Pre-fill the "Script Location" field in the UI.                                                                                   |
| -nc, --no-chrome                                             | optional            | Open the UI using the default browser (which may be Chrome). Will not try to find Chrome.                                         |
| -nu, --no-ui                                                 | optional            | Don't try to open the UI in a browser and simply print out the address that the application can be accessed at.                   |
| -c [CONFIG], --config [CONFIG]                               | optional            | Provide a configuration file (json) to pre-fill the UI. These can be generated in the settings tab.                               |
| -o [PATH], --output-dir [PATH]                               | optional            | Set the default output directory. This can still be changed in the ui.                                                            |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | optional            | Override the default build directory. Useful if you need to whitelist a folder to stop your antivirus from removing files.        |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | optional            | Hint the UI what language it should default to when opening. Language codes can be found in the table under "Translations" below. |


> If you are running this package locally, you will need to call ```python -m auto_py_to_exe``` instead of ```auto-py-to-exe```

### JSON Configuration
Instead of inserting the same data into the UI over and over again, you can export the current state by going to the "Configuration" section within the settings tab and exporting the config to a JSON file. This can then be imported into the UI again to re-populate all fields.

This JSON config export action does not save the output directory automatically as moving hosts could mean different directory structures. If you want to have the output directory in the JSON config, add the directory under `nonPyinstallerOptions.outputDirectory` in the JSON file (will need to create a new key).

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM); some things may be different but the same concepts still apply.

## Issues Using the Tool
If you're having issues with the packaged executable or using this tool in general, I recommend you read [my blog post on common issues when using auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). This post covers things you should know about packaging Python scripts and fixes for things that commonly go wrong.

## Translations

| Language                                    | Code  | Translator                                    | Translated                           |
| ------------------------------------------- | ----- | --------------------------------------------- | ------------------------------------ |
| Arabic (العربية)                            | ar    | [Tayeb-Ali](https://github.com/tayeb-ali)     | UI                                   |
| Brazilian Portuguese (Português Brasileiro) | pt_br | [marleyas](https://github.com/marleyas)       | UI (partial)                         |
| Chinese Simplified (简体中文)               | zh    | [jiangzhe11](https://github.com/jiangzhe11)   | UI and [README](./README-Chinese.md) |
| Chinese Traditional (繁體中文)              | zh_tw | [startgo](https://github.com/ystartgo)        | UI                                   |
| Czech                                       | cz    | [Matto58](https://github.com/Matto58)         | UI                                   |
| English                                     | en    | -                                             | UI and README                        |
| French (Français)                           | fr    | [flaviedesp](https://github.com/flaviedesp)   | UI                                   |
| German (Deutsch)                            | de    | [hebens](https://github.com/hebens)           | UI (partial)                         |
| Greek (Ελληνικά)                            | gr    | [sofronas](https://github.com/sofronas)       | UI                                   |
| Indonesian (Bahasa Indonesia)               | id    | [MarvinZhong](https://github.com/MarvinZhong) | UI                                   |
| Italian (Italiano)                          | it    | [itsEmax64](https://github.com/itsEmax64)     | UI                                   |
| Russian (Русский)                           | ru    | Oleg                                          | UI                                   |
| Spanish (Español)                           | sp    | [enriiquee](https://github.com/enriiquee)     | UI                                   |
| Spanish Latam (Español Latam)               | sp_la | [Matyrela](https://github.com/Matyrela)       | UI                                   |
| Serbian                                     | sr    | [rina](https://github.com/sweatshirts)        | UI                                   |
| Thai (ภาษาไทย)                              | th    | [teerut26](https://github.com/teerut26)       | UI (partial)                         |
| Turkish (Türkçe)                            | tr    | [mcagriaksoy](https://github.com/mcagriaksoy) | UI                                   |

> Want to add a translation for another language? Update [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js) and submit a PR or attach it in an issue.

## Python 2.7 Support
As of [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) released on Aug 9 2020, Python 2.7 is no longer supported; although you can still use this tool with Python 2.7 by installing an older version of PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) was the last version that supported Python 2.7; to install this, first uninstall any existing versions of PyInstaller and then execute `python -m pip install pyinstaller==3.6`.

## Testing
Tests are located in `tests/` and are run using pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Screenshots

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png) | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png) |
