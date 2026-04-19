<h1 align="center">Auto PY to EXE</h1>
<p align="center">Конвертер файлов .py в .exe с использованием простого графического интерфейса и <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a>.</p>

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

[English](../../README.md)
| [简体中文](./README-Chinese_Simplified.md)
| [Suomen kieli](./README-Finnish.md)
| [Türkçe](./README-Turkish.md)
| [فارسی](./README-Persian.md)
| [한국어](./README-Korean.md)
| [Български](./README-Bulgarian.md)
| [हिन्दी](./README-Hindi.md)
| [עברית](./README-Hebrew.md)
| [Беларуская](./README-Belarusian.md)
| [Slovenščina](./README-Slovenian.md)
| [српски](./README-Serbian_Cyrillic.md)
| [srpski](./README-Serbian_Latin.md)
| **Русский**

## Демонстрация

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Начало работы

### Предварительные требования

- Python: 3.6-3.14

_Чтобы интерфейс был как на изображениях, вам понадобится Chrome. Если Chrome не установлен или задан параметр `--default-browser`, будет использоваться браузер по умолчанию._

### Установка и использование

#### Установка через [PyPI](https://pypi.org/project/auto-py-to-exe/)

Вы можете установить этот проект, используя PyPI:

```
$ pip install auto-py-to-exe
```

Для запуска выполните следующую команду в терминале:

```
$ auto-py-to-exe
```

> Если у вас установлено более одной версии Python, вы можете использовать `python -m auto_py_to_exe` вместо `auto-py-to-exe`.

#### Установка через [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Для запуска выполните следующую команду в терминале:

```
$ auto-py-to-exe
```

#### Запуск локально через [Github](https://github.com/brentvollebregt/auto-py-to-exe) (без установки)

Вы можете запустить этот проект локально, выполнив следующие действия:

1. Скопируйте/загрузите [репозиторий](https://github.com/brentvollebregt/auto-py-to-exe)
2. Откройте cmd/терминал и перейдите в корневую папку проекта
3. Выполните команду `python -m pip install -r requirements.txt`
4. Выполните команду `python -m auto_py_to_exe`, чтобы запустить приложение

## Использование приложения

1. Выберите местоположение вашего скрипта (вставьте или воспользуйтесь проводником)
   - Если файл существует, контур станет синим
2. Выберите другие параметры и добавьте что-нибудь вроде иконки или других файлов
3. Нажмите большую синюю кнопку внизу, чтобы преобразовать
4. После завершения найдите преобразованные файлы в папке /output

_Легко._

### Параметры

Используйте флаг справки, чтобы получить информацию об использовании: `auto-py-to-exe --help`

| Параметр                                                     | Тип                | Описание                                                                                                                       |
| ------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | позиционный/необязательный | Предварительно заполните поле "Расположение скрипта" в интерфейсе.                                                                                   |
| -db, --default-browser                                       | необязательный            | Открывает интерфейс в браузере по умолчанию (который может быть Chrome). Не будет пытаться найти Chrome.                                         |
| -nu, --no-ui                                                 | необязательный            | Приложение не пытается открыть интерфейс в браузере и напрямую отображает адрес, по которому к нему можно получить доступ.                 |
| -c [CONFIG], --config [CONFIG]                               | необязательный            | Предоставляет файл конфигурации (JSON) для предварительного заполнения интерфейса. Его можно создать на вкладке настройки.                               |
| -o [PATH], --output-dir [PATH]                               | необязательный            | Устанавливает папку для сохранения по умолчанию. Всё еще можно изменить в интерфейсе.                                                            |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | необязательный            | Заменяет папку сборки по умолчанию. Полезно, если вам нужно внести папку в белый список, чтобы антивирусы не удаляли файлы.        |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | необязательный            | Указывает, на каком языке интерфейс должен быть открыт по умолчанию. |

### JSON Конфигурация

Вместо того чтобы снова и снова вводить одни и те же данные в интерфейс, вы можете экспортировать текущее состояние, перейдя в раздел «Конфигурация» на вкладке «Настройки» и экспортировав конфигурацию в файл JSON. Затем его можно снова импортировать, чтобы заново заполнить все поля.

При экспорте конфигурации в формате JSON выходная папка не сохраняется автоматически, поскольку при перемещении хостов структура папок может измениться. Если вы хотите, чтобы в конфигурации JSON была указана выходная папка, добавьте её в раздел `nonPyinstallerOptions.outputDirectory` в файле JSON (необходимо создать новый ключ).

## Примеры

В разделе [examples/](./examples/) приведены примеры написания скриптов и их упаковки с помощью auto-py-to-exe.

- [Базовый (консольное приложение)](./examples/1-basic/readme.md)
- [Без консоли (как правило, требуется для приложений с графическим интерфейсом)](./examples/2-no-console/readme.md)
- [Изображения и другие файлы, не имеющие расширения .py (статические файлы, которые нужно включить)](./examples/3-images-and-other-non-py-files/readme.md)
- [Постоянные данные (например, базы данных)](./examples/4-persistent-data/readme.md)

## Видео

Если вам нужно что-то наглядное, [я снял видео для оригинальной версии этого проекта](https://youtu.be/OZSZHmWSOeM); некоторые моменты могли измениться, но основные принципы остались теми же.

## Сотрудничество

Ознакомьтесь с [CONTRIBUTING.md](./CONTRIBUTING.md), чтобы узнать, как внести свой вклад в развитие проекта. Здесь описано, что делать, если у вас есть новая функция, изменение, обновление перевода или вы обнаружили проблему в auto-py-to-exe.

## Проблемы при использовании инструмента

Если у вас возникли проблемы с упакованным исполняемым файлом или с использованием этого инструмента в целом, рекомендую прочитать [мой пост в блоге о распространенных проблемах при использовании auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). В этом посте рассказывается о том, что нужно знать об упаковке скриптов Python, а также о способах решения распространенных проблем.

Если вы считаете, что обнаружили проблему в этом инструменте, пожалуйста, следуйте инструкциям из раздела [«Reporting an Issue» в файле CONTRIBUTING.md](./CONTRIBUTING.md#reporting-an-issue).

## Поддержка Python 2.7

Начиная с версии [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), выпущенной 9 августа 2020 года, Python 2.7 больше не поддерживается. Однако вы по-прежнему можете использовать этот инструмент с Python 2.7, установив более старую версию PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) была последней версией, поддерживающей Python 2.7. Чтобы установить ее, сначала удалите все существующие версии PyInstaller, а затем выполните команду `python -m pip install pyinstaller==3.6`.

## Тестирование

Тесты находятся в разделе [tests/](./tests/) и запускаются с помощью pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Скриншоты

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
