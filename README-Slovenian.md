<h1 align="center">Auto PY to EXE</h1>
<p align="center">Pretvornik .py v .exe z uporabo preprostega grafičnega vmesnika in <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstallerja</a> v Pythonu.</p>

<p align="center">
<img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Prazen vmesnik">
</p>

<p align="center">
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="Različica PyPI"></a>
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="Podprte različice PyPI"></a>
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Licenca"></a>
<a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Prenosi na mesec"></a>
<a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Podprte platforme"></a> 
<a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Donate"></a>
</p>

## Prevodi te datoteke

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [فارسی](./README-Persian.md)

한국어로 된 설명은 [여기](./README-Korean.md)를 참고하세요.

Bolgarski README [tuk](README-Bulgarian.md)

Beloruskalski README [tuk](README-Belarusian.md)

Slovenski README lahko najdete [tukaj](./README-Slovenian.md)

## Demo

<p align="center">
<img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Uvod

### Predpogoji

- Python: 3.6-3.14

_Za prikaz vmesnika na slikah boste potrebovali Chrome. Če Chrome ni nameščen ali je podan `--default-browser`, bo uporabljen privzeti brskalnik._

### Namestitev in uporaba

#### Namestitev prek [PyPI](https://pypi.org/project/auto-py-to-exe/)

Ta projekt lahko namestite s PyPI:

```
$ pip install auto-py-to-exe
```

Nato za zagon v terminalu izvedite naslednje:

```
$ auto-py-to-exe
```

> Če imate nameščenih več kot eno različico Pythona, lahko namesto `auto-py-to-exe` uporabite `python -m auto_py_to_exe`.

#### Namestitev prek [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Za zagon v terminalu izvedite naslednje:

```
$ auto-py-to-exe
```

#### Lokalni zagon prek [Github](https://github.com/brentvollebregt/auto-py-to-exe) (brez namestitve)

Ta projekt lahko zaženete lokalno tako, da sledite tem korakom:

1. Klonirajte/prenesite [repozitorij](https://github.com/brentvollebregt/auto-py-to-exe)
2. Odprite cmd/terminal in se s cd pomaknite v korensko mapo projekta
3. Izvedite `python -m pip install -r requirements.txt`
4. Za zagon aplikacije izvedite `python -m auto_py_to_exe`

## Uporaba aplikacije

1. Izberite lokacijo skripte (prilepite ali uporabite raziskovalec datotek)

- Obris bo postal moder, če datoteka obstaja

2. Izberite druge možnosti in dodajte stvari, kot so ikona ali druge datoteke
3. Kliknite velik moder gumb na dnu za pretvorbo
4. Ko končate, poiščite pretvorjene datoteke v /output

_Enostavno._

### Argumenti

Za uporabo uporabite zastavico pomoči: `auto-py-to-exe --help`

| Argument                                               | Tip                  | Opis                                                                                                                                                     |
| ------------------------------------------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ime datoteke                                           | pozicijsko/neobvezno | Predhodno izpolnite polje "Lokacija skripta" v uporabniškem vmesniku.                                                                                    |
| -db, --default-browser                                 | neobvezno            | Odprite uporabniški vmesnik s privzetim brskalnikom (ki je lahko Chrome). Chroma ne bomo poskušali najti.                                                |
| -nu, --no-ui                                           | neobvezno            | Ne poskušajte odpreti uporabniškega vmesnika v brskalniku in preprosto izpišite naslova, kjer je mogoče dostopati do aplikacije.                         |
| -c [KONFIG], --config [KONFIG]                         | neobvezno            | Zagotovite konfiguracijsko datoteko (JSON) za predhodno izpolnitev uporabniškega vmesnika. Te lahko ustvarite na zavihku z nastavitvami.                 |
| -o [POT], --output-dir [POT]                           | neobvezno            | Nastavi privzeti izhodni imenik. To je še vedno mogoče spremeniti v uporabniškem vmesniku.                                                               |
| -bdo [POT_MAPE], --build-directory-override [POT_MAPE] | neobvezno            | Preglasi privzeti imenik za gradnjo. Uporabno, če morate mapo dodati na seznam dovoljenih, da preprečite protivirusnemu programu odstranjevanje datotek. |
| -lang [KODA_JEZIKA], --language [KODA_JEZIKA]          | neobvezno            | Namiguje uporabniškemu vmesniku, kateri jezik naj bo privzeto uporabljen ob odpiranju. Jezikovne kode najdete v spodnji tabeli pod "Prevodi".            |

### Konfiguracija JSON

Namesto da vedno znova vnašate iste podatke v uporabniški vmesnik, lahko trenutno stanje izvozite tako, da odprete razdelek "Konfiguracija" na zavihku z nastavitvami in izvozite konfiguracijo v datoteko JSON. To lahko nato ponovno uvozite v uporabniški vmesnik, da ponovno izpolnite vsa polja.

To dejanje izvoza konfiguracije JSON ne shrani izhodnega imenika samodejno, saj lahko premikanje gostiteljev pomeni različne strukture imenikov. Če želite imeti izhodni imenik v konfiguraciji JSON, dodajte imenik pod `nonPyinstallerOptions.outputDirectory` v datoteki JSON (ustvariti boste morali nov ključ).

## Primeri

Imenik [examples/](./examples/) ponuja nekaj primerov, kako napisati skripte in jih zapakirati z auto-py-to-exe.

- [Osnovno (konzolna aplikacija)](./examples/1-basic/readme.md)
- [Brez konzole (kot je običajno zaželeno za aplikacije, ki temeljijo na grafičnem uporabniškem vmesniku)](./examples/2-no-console/readme.md)
- [Slike in druge datoteke, ki niso .py (vključiti je treba statične datoteke)](./examples/3-images-and-other-non-py-files/readme.md)
- [Trajni podatki (kot so baze podatkov)](./examples/4-persistent-data/readme.md)

## Video

Če potrebujete nekaj vizualnega, kar vam bo pomagalo pri začetku, [sem posnel videoposnetek za prvotno izdajo tega projekta](https://youtu.be/OZSZHmWSOeM); nekatere stvari so lahko drugačne, vendar še vedno veljajo isti koncepti.

## Prispevek

Oglejte si [CONTRIBUTING.md](./CONTRIBUTING.md), kjer si lahko ogledate smernice za prispevanje. To opisuje, kaj storiti, če imate novo funkcijo, spremembo, posodobitev prevoda ali ste odkrili težavo z orodjem auto-py-to-exe.

## Težave z uporabo orodja

Če imate težave s pakirano izvedljivo datoteko ali z uporabo tega orodja na splošno, vam priporočam, da preberete [mojo objavo na blogu o pogostih težavah pri uporabi orodja auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Ta objava zajema stvari, ki jih morate vedeti o pakiranju skript Python, in popravke za stvari, ki se pogosto pojavijo narobe.

Če menite, da ste odkrili težavo s tem orodjem, sledite razdelku ["Prijava težave" na spletni strani CONTRIBUTING.md](./CONTRIBUTING.md#reporting-an-issue).

## Podpora za Python 2.7

Od izdaje [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) 9. avgusta 2020 Python 2.7 ni več podprt; čeprav lahko to orodje še vedno uporabljate s Pythonom 2.7, če namestite starejšo različico PyInstallerja. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) je bila zadnja različica, ki je podpirala Python 2.7; za namestitev najprej odstranite vse obstoječe različice PyInstallerja in nato izvedite `python -m pip install pyinstaller==3.6`.

## Testiranje

Testi se nahajajo v mapi `tests/` in se izvajajo z ukazom pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Posnetki zaslona

| <!-- -->                                                                                                                                            | <!-- -->                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Prazen vmesnik](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Izpolnjeno](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Pretvorba](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Zaključeno](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)   |
