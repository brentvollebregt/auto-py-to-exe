<h1 align="center">Auto PY to EXE</h1>
<p align="center">.py -> .exe-muuntaja, joka käyttää yksinkertaista graafista käyttöliittymää ja <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstalleria (englanniksi)</a> Pythonissa.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Tyhjä käyttöliittymä">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Versio"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Tuetut versiot"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Lisenssi"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Latauksia kuussa"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Tuetut alustat"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Lahjoita"></a>
</p>

阅读中文版的README ，点击 [这里](./README-Chinese.md)

## Demo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Miten päästään alkuun

### Vaatimukset
 - Python : 3.6-3.11

*Jos haluat nähdä käyttöliittymän, joka näkyy kuvissa, tarvitset Chromen. Jos Chromea ei ole asennettu tai --no-chrome vastaanotetaan, käytetään oletusselainta.*

> [PyInstaller 4.0:sta lähtien](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) (englanniksi), Python 2.7 ei ole enää tuettu. Lue "[Python 2.7 Tuki](#python-27-support)" alla ohjeisiin miten käyttää tätä työkalua Python 2.7:n kanssa.

### Asennus ja käyttö
#### Asennus [PyPI:n](https://pypi.org/project/auto-py-to-exe/) (englanniksi) kautta
Voit asentaa tämän ohjelman PyPI:n kautta:
```
$ pip install auto-py-to-exe
```
Suorittaaksesi käytä tätä komentoa komentorivillä:
```
$ auto-py-to-exe
```

### [GitHubin](https://github.com/brentvollebregt/auto-py-to-exe) kautta asentaminen
```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```
Suorittaaksesi käytä tätä komentoa komentorivillä:
```
$ auto-py-to-exe
```

#### [Githubin](https://github.com/brentvollebregt/auto-py-to-exe) kautta paikallisesti suorittaminen (ei asennusta)
Voit suorittaa ohjelman paikallisesti näillä vaiheilla:
1. Kloonaa tai lataa [repository](https://github.com/brentvollebregt/auto-py-to-exe)
2. Avaa komentorivi ja mene projektin polkuun
3. Käytä komentoa ```python -m pip install -r requirements.txt```

Suorittaaksesi applikaation käytä komentoa ```python -m auto_py_to_exe```. Chrome-ikkuna aukeaa ohjelma sisällään.

> Varmista, että olet auto_py_to_exe:n alla olevassa kansiossa (tulet olemaan kolmannen vaiheen jälkeen) kun käytät komentoa `python -m auto_py_to_exe` tai joudut viittaamaan kansioon auto_py_to_exe absoluuttisesti tai relatiivisesti siihen missä olet nyt.

## Ohjelman käyttö
1. Valitse skriptin sijainti (liitä leikepöydältä tai käytä tiedostojenhallintaa)
    - Reunat muuttuu siniseksi kun tiedosto on olemassa
2. Valitse muita asetuksia ja lisää asioita kuten kuvake tai muita tiedostoja
3. Paina isoa sinistä nappia alareunassa muuntaaksesi
4. Löydä muunnetut tiedostot /output kansiosta valmiina

*Helppoa.*

### Argumentit
Käyttö: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [POLKU]] [tiedostonimi]`

| Argument                                                         | Type                       | Description                                                                                                     |
| ---------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| tiedostonimi                                                     | sijainnillinen/valinnainen | Esi-täytä "Skriptin sijainti"-kenttä käyttöliittymässä.                                                         |
| -nc, --no-chrome                                                 | valinnainen                | Avaa käyttöliittymän oletusselaimella (mahdollisesti Chrome). Ei yritä etsiä Chromea.                           |
| -nu, --no-ui                                                     | valinnainen                | Älä yritä avata käyttöliittymää ja vain yksinkertaisesti printtaa osoite jossa ohjelmaa voi käyttää.            |
| -c [CONFIG], --config [CONFIG]                                   | valinnainen                | Anna konfiguraatiotiedosto (json) jolla esi-täyttää käyttöliittymä. Näitä voi generoida asetukset välilehdellä. |
| -o [POLKU], --output-dir [POLKU]                                 | valinnainen                | Asettaa oletus-ulostulokansion. Tätä voi vaihtaa edelleen käyttöliittymässä.                                    |
| -bdo [KANSION_POLKU], --build-directory-override [KANSION_POLKU] | valinnainen                | Päällekirjoittaa oletus-rakennuskansion. Hyödyllinen jos sinun täytyy päästää kansio virustorjunnan läpi.       |
| -lang [KIELIKOODI], --language [KIELIKOODI]                      | valinnainen                | Anna käyttöliittymälle vihje, mikä kieli on oletus kun sen avaa. Kielikoodit näkee "Käännökset"-kohdassa alla.  |


> Jos suoritat pakettia paikallisesti, sinun täytöö suorittaa ```python -m auto_py_to_exe``` ```auto-py-to-exe```:n sijasta.

### JSON Konfiguraatio
Jos saman tiedon lisääminen käyttöliittymään joka kerta on raskasta, voit viedä nykyisen tilan JSON-tiedostoon "Konfiguraatio"-kohdasta asetuksissa. Tämän voi sitten tuoda takaisin käyttöliittymään ja täyttää kentät valmiiksi.

Tämä JSON-konfiguraation vienti-toiminto ei tallenna ulostulon polkua automaattisesti, koska eri tietokoneiden välillä liikkuminen saattaa tarkoittaa erilaisia kansiorakenteita. Jos haluat säilyttää ulostulon kansion JSON-konfiguraatiossa, lisää polku `nonPyinstallerOptions.outputDirectory`:n alle JSON-tiedostossa (täytyy luoda uusi key). 

## Video
Jos tarvit visuaalista ohjeistusta alkuun pääsemisessä, [brentvollebregt (Projektin kehittäjä)](https://github.com/brentvollebregt) [teki videon projektin alkuperäisen julkaisun aikaan (englanniksi)](https://youtu.be/OZSZHmWSOeM); jotkut asiat ovat muuttuneet, mutta sama konsepti säilyy.

## Ongelmia työkalun käytössä
Jos sinulla on ongelmia paketoidun .exe:n kanssa tai työkalun käytössä yleisesti, Suosittelemme sinua lukemaan [brentvollebregtin](https://github.com/brentvollebregt) [blogipostauksen aiheesta (englanniksi).](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Tämä postaus käy läpi asioita joita pitää tietää Python-skriptien paketoimisesta ja korjauksista yleisiin virheisiin.

Jos uskot, että olet löytänyt ongelman työkalun kanssa, ole hyvä ja [luo "issue"](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose) (paina "Get started") ja täytä valmis pohja "Bug report" valinnasta. Jos ongelma ilmenee vain sinun ohjelmassasi, Ole hyvä ja älä luo "issue":ta tämän "repository":n sivuille - mutta, kommentoi apu-postaukseen, videoon, tai luo uusi keskustelu.

> Kun täytät pohjaa, varmista että selität ongelman tarkasti, anna vaiheet tuottaa ongelma uudestaan ja [minimaalista uudelleentuotettavaa esimerkkiä (linkki englanniksi)](https://stackoverflow.com/help/minimal-reproducible-example) ja selitä mitä uskot että olisi pitänyt tapahtua. Ilman näitä, ongelman havaitseminen kestää pidempään

## Python 2.7 Tuki
[PyInstaller v4.0:sta lähtien (englanniksi)](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) (julkaistu elokuun 9. päivä 2020), Python 2.7 ei ole enää tuettu; tosin voit käyttää tätä työkalua Python 2.7:n kanssa asentamalla vanhemman version PyInstallerista.[PyInstaller v3.6 (englanniksi)](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) oli viimeinen versio joka tuki Python 2.7:ää; Asentaaksesi tämän, ensin poista olemassaolevat versiot PyInstallerista ja käytä komentoa `python -m pip install pyinstaller==3.6`.

## Testaus
Testit sijaitsevat kansiossa `tests/` ja niitä suoritetaan pytestillä:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Kuvakaappaukset

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [![Tyhjä käyttöliittymä](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Täytetty](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Muunnetaan](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png) | [![Valmis](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png) |
