<h1 align="center">Auto PY to EXE</h1>
<p align="center">Конвертер .py датотека у .exe користи једноставан графички интерфејс и <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> у Python-у.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Празан интерфејс">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI верзија"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI подржане верзије"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Лиценца"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Месечно преузимања"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Подржане платформе"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Донирај"></a>
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
| **српски**
| [srpski](./README-Serbian_Latin.md)

## Демо

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Демо">
</p>

## Како почети?

### Предуслови

- Python: 3.6-3.14

_Да бисте имали интерфејс као на сликама, потребан Вам је Chrome. Ако Chrome није инсталиран или Сте проследили `--default-browser`, користиће се подразумевани претраживач._

### Инсталација и коришћење

#### Инсталација помоћу [PyPI](https://pypi.org/project/auto-py-to-exe/)-а

Овај пројекат можете инсталирати помоћу PyPI-а:

```
$ pip install auto-py-to-exe
```

Да бисте га покренули, извршите следећу команду у терминалу:

```
$ auto-py-to-exe
```

> Ако имате инсталирану више од једне Python верзије, можете користити `python -m auto_py_to_exe` уместо `auto-py-to-exe`.

#### Инсталација преко [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)-а

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Да бисте га покренули, извршите следећу команду у терминалу:

```
$ auto-py-to-exe
```

#### Локално покретање преко [Github](https://github.com/brentvollebregt/auto-py-to-exe)-а (без инсталације)

Локално можете покренути овај пројекат пратећи следеће кораке:

1. Клонирајте/преузмите [репозиторијум](https://github.com/brentvollebregt/auto-py-to-exe)
2. Отворите cmd/терминал у root фолдеру пројекта
3. Извршите `python -m pip install -r requirements.txt`
4. Извршите `python -m auto_py_to_exe` да бисте покренули апликацију

## Коришћење апликације

1. Одаберите локацију ваше скрипте (налепите или користите претраживач датотека)
   - Ивица ће постати плава ако датотека постоји
2. Изаберите остале опције и додајте ствари попут иконица или других датотека
3. Кликните на велико плаво дугме на дну за конверзију
4. Након завршетка, пронађите ваше конвертоване датотеке у /output

_Једноставно._

### Аргументи

Користите help flag за боље разумевање: `auto-py-to-exe --help`

| Аргумент                                                     | Тип               | Опис                                                                                                                                               |
| ------------------------------------------------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | позиционо/опционо | Попуњава поље "Локација скрипте" на UI-у.                                                                                                          |
| -db, --default-browser                                       | опционо           | Отвара UI коришћењем подразумеваног претраживача (што може бити Chrome). Неће покушати да пронађе Chrome.                                          |
| -nu, --no-ui                                                 | опционо           | Не покушава да отвори UI у претраживачу и једноставно испише адресу на којој је апликација доступна.                                               |
| -c [CONFIG], --config [CONFIG]                               | опционо           | Пружа конфигурациону (JSON) датотеку за попуњавање UI-а. Ово може бити генерисано у tab-у за поставке.                                             |
| -o [PATH], --output-dir [PATH]                               | опционо           | Поставља подразумевани излазни директоријум. Ово може бити промењено на UI-у.                                                                      |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | опционо           | Замењује подразумевани директоријум за изградњу. Корисно је ако желите да додате фолдер у белу листу како би спречили да антивирус брише датотеке. |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | опционо           | Говори UI-у који језик треба да буде подразумеван при отварању. Кодове језика можете пронаћи у табели "Преводи" која се налази испод.              |

### JSON конфигурација

Уместо да исте податке убацујете на UI изнова и изнова, можете сачувати тренутно стање одласком на секцију "Конфигурација" унутар tab-а за поставке и сачувати конфигурацију у JSON датотеку. Ово може бити учитано на UI ради попуњавања свих поља.

Ова акција чувања JSON конфигурације не чува излазни директоријум аутоматски јер померање хостова може означавати различиту структуру директоријума. Ако желите да имате излазни директоријум у JSON конфигурацији, додајте директоријум у `nonPyinstallerOptions.outputDirectory` унутар JSON датотеке (потребно је направити нови кључ).

## Примери

Директоријум [examples/](../../examples/) приказује неколико примера како да напишете ваше скрипте и упакујете их помоћу auto-py-to-exe.

- [Основно (конзолна апликација)](../example1/readme-Serbian_Cyrillic.md)
- [Без конзоле (типично пожељно за апликације које користе GUI)](../example2/readme-Serbian_Cyrillic.md)
- [Слике и друге датотеке који нису .py (укључивање статичких датотека)](../example3/readme-Serbian_Cyrillic.md)
- [Трајни подаци (попут база података)](../example4/readme-Serbian_Cyrillic.md)

## Видео

Ако Вам је за почетак потребно нешто визуелно, [направљен је видео за оригинално издање овог пројекта](https://youtu.be/OZSZHmWSOeM); неке ствари се можда разликују, али можете применити исте концепте.

## Допринос

Прочитајте [CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Cyrillic.md) за смернице како да допринесете пројекту. Ово описује шта радити ако имате нову функционалност, измену, побољшање превода или Сте нашли проблем на auto-py-to-exe.

## Проблеми приликом коришћења алата

Ако имате проблема са упакованом извршном датотеком, или генерално са употребом алата, препоручујемо да прочитате [пост на блогу о уобичајеним проблемима са алатом auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Овај пост обухвата оно што је потребно знати везано за паковање Python скрипти и помаже око ствари које често пођу по злу.

Ако верујете да Сте пронашли проблем са алатом, прочитајте [секцију "Пријавити Issue" у CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Cyrillic.md#reporting-an-issue).

## Преводи

> Желите додати превод за други језик? Почитајте [секцију "Додавање и побољшање превода" у CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Cyrillic.md#add-or-update-a-translation).

## Подршка за Python 2.7

Након што је 9. августа 2020. изашао [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), Python 2.7 више није подржан; иако још увек можете користити овај алат са Python 2.7 ако инсталирате ранију верзију PyInstaller-а. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) је последња верзија која подржава Python 2.7; да бисте је инсталирали, прво деинсталирајте постојеће верзије PyInstaller-а, а онда извршите `python -m pip install pyinstaller==3.6`.

## Тестирање

Тестови се налазе у [tests/](../../tests/) директоријуму и покрећу се коришћењем команде pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Снимци екрана

| <!-- -->                                                                                                                                              | <!-- -->                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [![Празан интерфејс](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Попуњено](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Конвертовање](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)               | [![Завршено](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)   |
