<h1 align="center">Auto PY to EXE</h1>
<p align="center">Konverter .py datoteka u .exe koristi jednostavan grafički interfejs i <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> u Python-u.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Prazan interfejs">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI verzija"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI podržane verzije"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Licenca"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Mesečno preuzimanja"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Podržane platforme"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Doniraj"></a>
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
| **srpski**

## Demo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Kako početi?

### Preduslovi

- Python: 3.6-3.14

_Da biste imali interfejs kao na slikama, potreban Vam je Chrome. Ako Chrome nije instaliran ili Ste prosledili `--default-browser`, koristiće se podrazumevani pretraživač._

### Instalacija i korišćenje

#### Instalacija pomoću [PyPI](https://pypi.org/project/auto-py-to-exe/)-a

Ovaj projekat možete instalirati pomoću PyPI-a:

```
$ pip install auto-py-to-exe
```

Da biste ga pokrenuli, izvršite sledeću komandu u terminalu:

```
$ auto-py-to-exe
```

> Ako imate instaliranu više od jedne Python verzije, možete koristiti `python -m auto_py_to_exe` umesto `auto-py-to-exe`.

#### Instalacija preko [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)-a

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Da biste ga pokrenuli, izvršite sledeću komandu u terminalu:

```
$ auto-py-to-exe
```

#### Lokalno pokretanje preko [Github](https://github.com/brentvollebregt/auto-py-to-exe)-a (bez instalacije)

Lokalno možete pokrenuti ovaj projekat prateći sledeće korake:

1. Klonirajte/preuzmite [repozitorijum](https://github.com/brentvollebregt/auto-py-to-exe)
2. Otvorite cmd/terminal u root folderu projekta
3. Izvršite `python -m pip install -r requirements.txt`
4. Izvršite `python -m auto_py_to_exe` da biste pokrenuli aplikaciju

## Korišćenje aplikacije

1. Odaberite lokaciju vaše skripte (nalepite ili koristite pretraživač datoteka)
   - Ivica će postati plava ako datoteka postoji
2. Izaberite ostale opcije i dodajte stvari poput ikonica ili drugih datoteka
3. Kliknite na veliko plavo dugme na dnu za konverziju
4. Nakon završetka, pronađite vaše konvertovane datoteke u /output

_Jednostavno._

### Argumenti

Koristite help flag za bolje razumevanje: `auto-py-to-exe --help`

| Argument                                                     | Tip               | Opis                                                                                                                                                 |
| ------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | poziciono/opciono | Popunjava polje "Lokacija skripte" na UI-u.                                                                                                          |
| -db, --default-browser                                       | opciono           | Otvara UI korišćenjem podrazumevanog pretraživača (što može biti Chrome). Neće pokušati da pronađe Chrome.                                           |
| -nu, --no-ui                                                 | opciono           | Ne pokušava da otvori UI u pretraživaču i jednostavno ispiše adresu na kojoj je aplikacija dostupna.                                                 |
| -c [CONFIG], --config [CONFIG]                               | opciono           | Pruža konfiguracionu (JSON) datoteku za popunjavanje UI-a. Ovo može biti generisano u tab-u za postavke.                                             |
| -o [PATH], --output-dir [PATH]                               | opciono           | Postavlja podrazumevani izlazni direktorijum. Ovo može biti promenjeno na UI-u.                                                                      |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | opciono           | Zamenjuje podrazumevani direktorijum za izgradnju. Korisno je ako želite da dodate folder u belu listu kako bi sprečili da antivirus briše datoteke. |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | opciono           | Govori UI-u koji jezik treba da bude podrazumevan pri otvaranju. Kodove jezika možete pronaći u tabeli "Prevodi" koja se nalazi ispod.               |

### JSON konfiguracija

Umesto da iste podatke ubacujete na UI iznova i iznova, možete sačuvati trenutno stanje odlaskom na sekciju "Konfiguracija" unutar tab-a za postavke i sačuvati konfiguraciju u JSON datoteku. Ovo može biti učitano na UI radi popunjavanja svih polja.

Ova akcija čuvanja JSON konfiguracije ne čuva izlazni direktorijum automatski jer pomeranje hostova može označavati različitu strukturu direktorijuma. Ako želite da imate izlazni direktorijum u JSON konfiguraciji, dodajte direktorijum u `nonPyinstallerOptions.outputDirectory` unutar JSON datoteke (potrebno je napraviti novi ključ).

## Primeri

Direktorijum [examples/](../../examples/) prikazuje nekoliko primera kako da napišete vaše skripte i upakujete ih pomoću auto-py-to-exe.

- [Osnovno (konzolna aplikacija)](../example1/readme-Serbian_Latin.md)
- [Bez konzole (tipično poželjno za aplikacije koje koriste GUI)](../example2/readme-Serbian_Latin.md)
- [Slike i druge datoteke koji nisu .py (uključivanje statičkih datoteka)](../example3/readme-Serbian_Latin.md)
- [Trajni podaci (poput baza podataka)](../example4/readme-Serbian_Latin.md)

## Video

Ako Vam je za početak potrebno nešto vizuelno, [napravljen je video za originalno izdanje ovog projekta](https://youtu.be/OZSZHmWSOeM); neke stvari se možda razlikuju, ali možete primeniti iste koncepte.

## Doprinos

Pročitajte [CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Latin.md) za smernice kako da doprinesete projektu. Ovo opisuje šta raditi ako imate novu funkcionalnost, izmenu, poboljšanje prevoda ili Ste našli problem na auto-py-to-exe.

## Problemi prilikom korišćenja alata

Ako imate problema sa upakovanom izvršnom datotekom, ili generalno sa upotrebom alata, preporučujemo da pročitate [post na blogu o uobičajenim problemima sa alatom auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Ovaj post obuhvata ono što je potrebno znati vezano za pakovanje Python skripti i pomaže oko stvari koje često pođu po zlu.

Ako verujete da Ste pronašli problem sa alatom, pročitajte [sekciju "Prijaviti Issue" u CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Latin.md#reporting-an-issue).

## Prevodi

> Želite dodati prevod za drugi jezik? Počitajte [sekciju "Dodavanje i poboljšanje prevoda" u CONTRIBUTING.md](../contributing/CONTRIBUTING-Serbian_Latin.md#add-or-update-a-translation).

## Podrška za Python 2.7

Nakon što je 9. avgusta 2020. izašao [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), Python 2.7 više nije podržan; iako još uvek možete koristiti ovaj alat sa Python 2.7 ako instalirate raniju verziju PyInstaller-a. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) je poslednja verzija koja podržava Python 2.7; da biste je instalirali, prvo deinstalirajte postojeće verzije PyInstaller-a, a onda izvršite `python -m pip install pyinstaller==3.6`.

## Testiranje

Testovi se nalaze u [tests/](../../tests/) direktorijumu i pokreću se korišćenjem komande pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Snimci ekrana

| <!-- -->                                                                                                                                              | <!-- -->                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [![Prazan interfejs](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Popunjeno](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Konvertovanje](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)              | [![Završeno](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
