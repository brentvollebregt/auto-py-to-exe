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

## Translations of This File

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [فارسی](./README-Persian.md)

한국어로 된 설명은 [여기](./README-Korean.md)를 참고하세요.

Български README [тук](README-Bulgarian.md)

Беларускамоўны README [тут](README-Belarusian.md)

## Demo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Getting Started

### Prerequisites

- Python: 3.6-3.12

_To have the interface displayed in the images, you will need Chrome. If Chrome is not installed or `--default-browser` is passed, the default browser will be used._

### Installation and Usage

#### Installing via [PyPI](https://pypi.org/project/auto-py-to-exe/)

You can install this project using PyPI:

```
$ pip install auto-py-to-exe
```

Then to run it, execute the following in the terminal:

```
$ auto-py-to-exe
```

> If you have more than one version of Python installed, you can use `python -m auto_py_to_exe` instead of `auto-py-to-exe`.

#### Installing via [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Then to run it, execute the following in the terminal:

```
$ auto-py-to-exe
```

#### Running Locally via [Github](https://github.com/brentvollebregt/auto-py-to-exe) (no install)

You can run this project locally by following these steps:

1. Clone/download the [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Open cmd/terminal and cd into the project's root folder
3. Execute `python -m pip install -r requirements.txt`
4. Execute `python -m auto_py_to_exe` to run the application

## Using the Application

1. Select your script location (paste in or use a file explorer)
   - The outline will become blue if the file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

_Easy._

### Arguments

Use the help flag to get the usage: `auto-py-to-exe --help`

| Argument                                                     | Type                | Description                                                                                                                       |
| ------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | positional/optional | Pre-fill the "Script Location" field in the UI.                                                                                   |
| -db, --default-browser                                       | optional            | Open the UI using the default browser (which may be Chrome). Will not try to find Chrome.                                         |
| -nu, --no-ui                                                 | optional            | Don't try to open the UI in a browser and simply print out the address where the application can be accessed.                     |
| -c [CONFIG], --config [CONFIG]                               | optional            | Provide a configuration file (JSON) to pre-fill the UI. These can be generated in the settings tab.                               |
| -o [PATH], --output-dir [PATH]                               | optional            | Set the default output directory. This can still be changed in the UI.                                                            |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | optional            | Override the default build directory. Useful if you need to whitelist a folder to stop your antivirus from removing files.        |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | optional            | Hint the UI what language it should default to when opening. Language codes can be found in the table under "Translations" below. |

### JSON Configuration

Instead of inserting the same data into the UI over and over again, you can export the current state by going to the "Configuration" section within the settings tab and exporting the config to a JSON file. This can then be imported into the UI again to re-populate all fields.

This JSON config export action does not save the output directory automatically as moving hosts could mean different directory structures. If you want to have the output directory in the JSON config, add the directory under `nonPyinstallerOptions.outputDirectory` in the JSON file (will need to create a new key).

## Examples

The [examples/](./examples/) directory offers some examples of how to write your scripts and package them with auto-py-to-exe.

- [Basic (console application)](./examples/1-basic/readme.md)
- [No Console (as typically desired for GUI-based applications)](./examples/2-no-console/readme.md)
- [Images and other non-.py files (static files to be included)](./examples/3-images-and-other-non-py-files/readme.md)
- [Persistent data (like databases)](./examples/4-persistent-data/readme.md)

## Video

If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM); some things may be different but the same concepts still apply.

## Contributing

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) to see guidelines on how to contribute. This outlines what to do if you have a new feature, a change, translation update or have found an issue with auto-py-to-exe.

## Issues Using the Tool

If you're having issues with the packaged executable or using this tool in general, I recommend you read [my blog post on common issues when using auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). This post covers things you should know about packaging Python scripts and fixes for things that commonly go wrong.

If you believe you've found an issue with this tool, please follow the ["Reporting an Issue" section in CONTRIBUTING.md](./CONTRIBUTING.md#reporting-an-issue).

## Translations

| Language                                    | Translator                                                                                   | Translated                            |
| ------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------- |
| Arabic (العربية)                            | [Tayeb-Ali](https://github.com/tayeb-ali)                                                    | UI                                    |
| Belarusian (Беларуская)                     | [Zmicier21](https://github.com/Zmicier21)                                                    | UI and [README](README-Belarusian.md) |
| Brazilian Portuguese (Português Brasileiro) | [marleyas](https://github.com/marleyas), [reneoliveirajr](https://github.com/reneoliveirajr) | UI                                    |
| Bulgarian (Български)                       | [kbkozlev](https://github.com/kbkozlev)                                                      | UI and [README](README-Bulgarian.md)  |
| Chinese Simplified (简体中文)               | [jiangzhe11](https://github.com/jiangzhe11)                                                  | UI and [README](./README-Chinese.md)  |
| Chinese Traditional (繁體中文)              | [startgo](https://github.com/ystartgo)                                                       | UI                                    |
| Czech (Čeština)                             | [Matto58](https://github.com/Matto58)                                                        | UI                                    |
| Dutch (Nederlands)                          | [barremans](https://github.com/barremans)                                                    | UI                                    |
| English                                     | -                                                                                            | UI and README                         |
| Finnish (Suomen kieli)                      | [ZapX5](https://github.com/ZapX5)                                                            | UI and [README](./README-Finnish.md)  |
| French (Français)                           | [flaviedesp](https://github.com/flaviedesp)                                                  | UI                                    |
| German (Deutsch)                            | [hebens](https://github.com/hebens), [ackhh](https://github.com/ackhh)                       | UI                                    |
| Greek (Ελληνικά)                            | [sofronas](https://github.com/sofronas)                                                      | UI                                    |
| Hebrew (עברית)                              | [ronbentata](https://github.com/ronbentata)                                                  | UI and [README](./README-Hebrew.md)   |
| Hindi (हिन्दी)                              | [triach-rold](https://github.com/triach-rold)                                                | UI and [README](./README-Hindi.md)    |
| Hungarian (Magyar)                          | [synexdev01](https://github.com/synexdev01)                                                  | UI                                    |
| Indonesian (Bahasa Indonesia)               | [MarvinZhong](https://github.com/MarvinZhong)                                                | UI                                    |
| Italian (Italiano)                          | [itsEmax64](https://github.com/itsEmax64)                                                    | UI                                    |
| Japanese (日本語)                           | [NattyanTV](https://github.com/nattyan-tv)                                                   | UI                                    |
| Korean (한국어)                             | [jhk1090](https://github.com/jhk1090)                                                        | UI and [README](./README-Korean.md)   |
| Persian (فارسی)                             | [DrunkLeen](https://github.com/drunkleen), [Ar.dst](https://github.com/Ar-dst)               | UI and [README](./README-Persian.md)  |
| Polish (Polski)                             | [Akuczaku](https://github.com/Akuczaku)                                                      | UI                                    |
| Russian (Русский)                           | Oleg                                                                                         | UI                                    |
| Serbian (Srpski)                            | [rina](https://github.com/sweatshirts)                                                       | UI                                    |
| Slovak (Slovenčina)                         | [mostypc123](https://github.com/mostypc123)                                                  | UI                                    |
| Spanish (Español)                           | [enriiquee](https://github.com/enriiquee)                                                    | UI                                    |
| Spanish Latin America (Español Latam)       | [Matyrela](https://github.com/Matyrela)                                                      | UI                                    |
| Thai (ภาษาไทย)                              | [teerut26](https://github.com/teerut26)                                                      | UI (partial)                          |
| Turkish (Türkçe)                            | [mcagriaksoy](https://github.com/mcagriaksoy)                                                | UI and [README](./README-Turkish.md)  |
| Ukrainian (Українська)                      | [AndrejGorodnij](https://github.com/AndrejGorodnij)                                          | UI                                    |
| Vietnamese (Tiếng Việt)                     | [7777Hecker](https://github.com/7777Hecker)                                                  | UI                                    |

> Want to add a translation for another language? follow the ["Add or Update a Translation" section in CONTRIBUTING.md](./CONTRIBUTING.md#add-or-update-a-translation).

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

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
