<h1 align="center">Auto PY to EXE</h1>
<p align="center">Конвертор от .py към .exe с графичен интерфейс използвайки <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller.</a></p>

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

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [فارسی](./README-Persian.md)

한국어로 된 설명은 [여기](./README-Korean.md)를 참고하세요.

## Демо

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## За начало

### Изисквания

- Python : 3.6-3.12

_За да имате интерфейса, показан на снимките, ще ви бъде необходим браузърът Chrome. Ако Chrome не е инсталиран или е предоставена опцията --default-browser, ще се използва браузърът по подразбиране._

> От версия [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) нататък, Python 2.7 вече не се поддържа. За насоки относно как да използвате този инструмент с Python 2.7, прочетете раздела "[Python 2.7 Support](#python-27-support)" по-долу.

### Инсталация и начин на ползване

#### Инсталация чрез [PyPI](https://pypi.org/project/auto-py-to-exe/)

Може да инсталирате този проект чрез PyPI:

```
$ pip install auto-py-to-exe
```

За да го стартирате, напишете следната команда в терминалът:

```
$ auto-py-to-exe
```

> Ако имате повече от една версия на Python инсталирана, можете да използвате `python -m auto_py_to_exe` вместо `auto-py-to-exe`.

### Инсталиране чрез [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

За да го стартирате, напишете следната команда в терминалът:

```
$ auto-py-to-exe
```

#### За да изпълните локално чрез [Github](https://github.com/brentvollebregt/auto-py-to-exe) (без инсталиране).

За да го стартирате, може да направите следните стъпки:

1. Клонирайте или изтеглете [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Отворете терминал и влезте в директорията
3. Напишете `python -m pip install -r requirements.txt`

За да стартирате приложението, изпълнете командата `python -m auto_py_to_exe`. Ще се отвори прозорец на Chrome в режим на приложение с проекта, който се изпълнява вътре.

Уверете се, че сте в директорията под auto_py_to_exe (там ще сте след стъпка 3), когато извиквате `python -m auto_py_to_exe`, или ще трябва да посочите папката auto_py_to_exe абсолютно/относително спрямо текущото ви местоположение.

## Използване на Приложението

1. Изберете местоположението на вашия скрипт (поставете го там или използвайте файлов мениджър)
   - Обвивката ще стане синя, когато файлът съществува
2. Изберете други опции и добавете неща като икона или други файлове
3. Натиснете големият син бутон в долната част, за да конвертирате
4. Намерете конвертираните си файлове в /output след приключване

_Лесно._

### Аргументи

Използване: `auto-py-to-exe [-db] [-c [CONFIG]] [-o [PATH]] [filename]`

| Аргумент                                                     | Тип                       | Описание                                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | позиционен/незадължителен | Предварително попълва полето "Местоположение на скрипта" в потребителския интерфейс.                                                                                            |
| -db, --default-browser                                       | незадължителен            | Отваря потребителския интерфейс с браузъра по подразбиране (който може да бъде Chrome). Няма да се опитва да намери Chrome.                                                     |
| -nu, --no-ui                                                 | незадължителен            | Не се опитва да отвори потребителския интерфейс в браузър и просто извежда адреса, на който приложението може да бъде достъпно.                                                 |
| -c [CONFIG], --config [CONFIG]                               | незадължителен            | Предоставете конфигурационен файл (json), за да предварително попълните потребителския интерфейс. Тези файлове могат да бъдат генерирани в раздела "Настройки".                 |
| -o [PATH], --output-dir [PATH]                               | незадължителен            | Задайте директорията по подразбиране за изход. Това все още може да бъде променено в интерфейса.                                                                                |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | незадължителен            | Презаписва стандартната директория за изграждане. Полезно, ако трябва да изключите дадена директория, за да предотвратите антивирусните програми от изтриване на файлове.       |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | незадължителен            | Указва потребителския интерфейс към коя езикова версия да се насочва по подразбиране при стартиране. Кодовете за език може да бъдат намерени в таблицата под "Преводи" по-долу. |

> Ако стартирате този пакет локално, ще трябва да извикате `python -m auto_py_to_exe` вместо `auto-py-to-exe`.

### JSON Конфигурация

Вместо да въвеждате едни и същи данни отново и отново в интерфейса, можете да експортирате текущото състояние, като отидете в раздела "Конфигурация" в настройките и експортирате конфигурацията в JSON файл. Тази конфигурация може после да бъде импортирана в интерфейса отново, за да попълни всички полета.

Това действие за експортиране на JSON конфигурация не запазва директорията за изход автоматично, тъй като преместването на хостове може да означава различни структури на директории. Ако искате да включите директорията за изход в JSON конфигурацията, добавете я под `nonPyinstallerOptions.outputDirectory` в JSON файла (ще трябва да създадете нов ключ).

## Видео

Ако имате нужда от нещо визуално, което да ви помогне да започнете, [аз направих видео за първата версия на този проект](https://youtu.be/OZSZHmWSOeM); някои неща може да са различни, но същите концепции все още са приложими.

## Проблеми при Използването на Инструмента

Ако имате проблеми с пакетирания изпълним файл или с използването на този инструмент като цяло, ви препоръчвам да прочетете [моя блог публикация за общите проблеми при използването на auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Тази публикация покрива нещата, които трябва да знаете за пакетирането на Python скриптове и решенията за неща, които често се объркват.

Ако вярвате, че сте открили проблем с този инструмент, моля, [създайте проблем](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose) (натиснете "Започнете") и попълнете предоставената от "Доклад за грешка" шаблон. Ако вашият проблем е свързан само с вашето приложение, моля, не създавайте проблем в този репозитори - вместо това, коментирайте в публикацията за помощ, видеото или създайте нова дискусия.

> При попълване на шаблона, обърнете внимание да обясните ясно какво се случва, предоставете стъпки за възпроизвеждане и [минимален възпроизводим пример](https://stackoverflow.com/help/minimal-reproducible-example) и обяснете какво вярвате, че трябва да се случи. Без тези данни, ще отнеме повече време да идентифицираме проблема.

> Искате да добавите превод на друг език? Актуализирайте [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js) и представете заявка за промяна (PR) или го прикачете към проблем (issue).

## Поддръжка на Python 2.7

От [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), който бе пуснат на 9 август 2020 г., Python 2.7 вече не се поддържа; въпреки това можете да използвате този инструмент с Python 2.7, като инсталирате по-стара версия на PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) беше последната версия, която поддържаше Python 2.7; за да я инсталирате, първо деинсталирайте всички налични версии на PyInstaller и след това изпълнете `python -m pip install pyinstaller==3.6`.

## Тестване

Тестовете се намират в `tests/` и се изпълняват с помощта на pytest:

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
