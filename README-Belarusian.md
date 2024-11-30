<h1 align="center">Auto PY to EXE</h1>
<p align="center">Канвертар з фармату .py на фармат .exe з графічным інтэрфейсам выкарыстоўвае <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller.</a></p>

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

Български README [тук](README-Bulgarian.md)

## Паказ

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Уводзіны

### Перадумовы

- Python : 3.6-3.12

_Каб мець такі ж самы інтэрфейс, які адлюстраваны на відарысе, вам неабходна выкарыстоўваць браўзер Chrome. Калі Сhrome не ўсталяваны або зададзены параметр `--default-browser`, то будзе выкарыстоўвацца браўзер па змаўчанні._

### Усталяванне і выкарыстанне

#### Усталяванне праз [PyPI](https://pypi.org/project/auto-py-to-exe/)

Вы можаце ўсталяваць гэты праект, карыстаючыся PyPI:

```
$ pip install auto-py-to-exe
```

Каб запусціць яго, выканайце ў тэрмінале наступную каманду:

```
$ auto-py-to-exe
```

> Калі вы маеце больш за адну ўсталяваную версію Python, можаце скарыстацца `python -m auto_py_to_exe` замест `auto-py-to-exe`.

### Усталяванне праз [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Каб запусціць яго, выканайце ў тэрмінале наступную каманду:

```
$ auto-py-to-exe
```

#### Лакальнае выкананне праз [Github](https://github.com/brentvollebregt/auto-py-to-exe) (без усталявання).

Каб запусціць яго, выканайце наступныя дзеянні:

1. Скапіюйце або спампуйце [дадатак](https://github.com/brentvollebregt/auto-py-to-exe)
2. Адкрыйце тэрмінал і перайдзіце да тэчцы з праектам
3. Выканайце `python -m pip install -r requirements.txt`
4. Выканайце `python -m auto_py_to_exe`, каб запусціць дадатак

## Выкарыстанне дадатку

1. Выберыце месцаванне вашага коду (устаўце файл або скарыстайцеся правадніком)
   — Вырыс стане сінім, калі файл існуе
2. Абярыце іншыя параметры і дадайце нешта кшталту іконкі або іншых файлаў
3. Націсніце на вялікую сінію кнопку ўнізе, каб пачаць канвертацыю
4. Знайдзіце пераўтвораныя файлы ў /output пасля завяршэння работы

_Лёгка._

### Параметры

Выкарыстанне: `auto-py-to-exe [-db] [-c [CONFIG]] [-o [PATH]] [filename]`

| Параметр                                                     | Тып                    | Апісанне                                                                                                                                                                     |
| ------------------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | пазіцыйны/неабавязковы | Ён папярэдне запаўняе поле "Месцаванне коду" у карыстальніцкім інтэрфейсе.                                                                                                   |
| -db, --default-browser                                       | неабавязковы           | Адкрывае карыстальніцкі інтэрфейс з браўзерам па змаўчанні (які можа быць Chrome). Ён не будзе спрабаваць знайсці Chrome.                                                    |
| -nu, --no-ui                                                 | неабавязковы           | Ён не спрабуе адкрыць карыстальніцкі інтэрфейс у браўзеры і наўпрост выводзіць адрас, па якім дадатак можа быць даступным.                                                   |
| -c [CONFIG], --config [CONFIG]                               | неабавязковы           | Падайце файл канфігурацыі (json), каб папярэдне запоўніць карыстальніцкі інтэрфейс. Гэтыя файлы можна стварыць ва ўкладцы "Налады".                                          |
| -o [PATH], --output-dir [PATH]                               | неабавязковы           | Усталюйце тэчку па змаўчанні для вываду. Гэта ўсё адно можа быць зменена ў інтэрфейсе.                                                                                       |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | неабавязковы           | Перазапісвае стандартную тэчку зборкі. Карысна, калі вам патрэбна адключыць каталог, каб антывірусныя праграмы не выдалялі файлы.                                            |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | неабавязковы           | Ён вызначае карыстальніцкаму інтэрфейсу, на якой мове адлюстроўвацца пры запуску. Коды з перакладамі можна знайсці ў табліцы, якая знаходзіцца ў раздзеле "Пераклады" ніжэй. |

### JSON Канфігурацыя

Замест таго, каб устаўляць адны і тыя даныя ў карыстальніцкі інтэрфейс зноў і зноў, вы можаце экспартаваць бягучае становішча, пяройдучы ў раздзел "Канфігурацыя" на ўкладцы "Налады" і экспартаваўшы канфігурацыю ў файл JSON. Затым яго можна зноўку імпартаваць у карыстальніцкі інтэрфейс для паўторнага запаўнення ўсіх палёў.

Гэтая дзея па экспартаванні канфігурацыі JSON не захоўвае выходны каталог аўтаматычна, паколькі перасоўванне вузлоў можа азначаць змяненне структуры каталогаў. Калі вы хочаце мець выходны каталог у канфігурацыі JSON, дадайце каталог у раздзел `nonPyinstallerOptions.outputDirectory` у файле JSON (патрабуецца стварыць новы ключ).

## Відэа

Для візуальнага тлумачэння дзеяў перайдзіце па спасылцы [я зняў відэа, арыгінальны выпуск, для гэтага праекту](https://youtu.be/OZSZHmWSOeM); некаторыя рэчы могуць адрознівацца, але дагэтуль прымяняюцца адныя і тыя ж канцэпцыі.

## Унёсак

Азнаёмцеся з [CONTRIBUTING.md](./CONTRIBUTING.md), каб здаведацца пра рэкамендацыі аб тым, як зрабіць свой унёсак у праект. Тут апісана, што рабіць, калі ў вас ёсць новая функцыя, змяненне, абнаўленне перакладу, альбо вы выявілі праблему з аўтаматычным пераўтварэннем у фармат `.exe`.

## Праблемы пры выкарыстанні дадаткам

Калі ў вас узніклі праблемы з упакаваным выканальным файлам або з выкарыстаннем гэтым інструментам цалкам, рэкамендуем вам прачытаць [мой пост у блогу пра распаўсюджаныя праблемы пры выкарыстанні auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). У гэтым посце вядзецца гаворка, што вам варта ведаць пра упакаванні кодаў на Python і пра выпраўленні памылак, які часта ўзнікаюць.

## Падтрымка Python 2.7

Пачынаючы з версіі [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), якая выпушчаная 9 жніўня 2020 года, Python 2.7 больш не падтрымліваецца, хаця вы ўсё яшчэ можаце выкарыстоўваць гэты інструмент з Python 2.7, усталяваўшы старэйшую версію PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) была апошняй версіяй, якая падтрымлівае Python 2.7; каб усталяваць яе, спачатку выдаліце ўсе версіі PyInstaller, якія існуюць, а затым выканайце `python -m pip install pyinstaller==3.6`.

## Тэставанне

Тэсты знаходзяцца ў раздзеле `tests/` і запускаюцца з дапамогаю pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Здымкі экрану

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
