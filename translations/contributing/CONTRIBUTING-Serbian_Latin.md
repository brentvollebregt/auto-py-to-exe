# Doprinos auto-py-to-exe alatu

[English](../../CONTRIBUTING.md)
| [српски](./CONTRIBUTING-Serbian_Cyrillic.md)
| **srpski**
| [简体中文](./CONTRIBUTING-Chinese_Simplified.md)

👍🎉 Kao prvo, hvala Vam na interesovanju da doprinesete! 🎉👍

Ovaj dokument opisuje smernice za doprinos koje su specifične za auto-py-to-exe. Ovo su uglavnom smernice, a ne pravila. Najbolje procenite sami i slobodno predložite izmene ovog dokumenta na pull request-u.

## Sadržaj

- [Ne želim sve da čitam, već imam samo pitanje!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [Prijaviti Issue](#reporting-an-issue)
- [Zahtevanje funkcionalnosti](#request-a-feature)
- [Pull Request-ovi](#pull-requests)
  - [Nova funkcionalnost / Izmena postojeće funkcionalnosti](#a-new-feature-change-to-an-existing-feature)
  - [Dodavanje i poboljšanje prevoda](#add-or-update-a-translation)
- [Uputstvo za stilizaciju](#style-guide)

## Ne želim sve da čitam, već imam samo pitanje!!! <a id="i-dont-want-to-read-this-whole-thing-i-just-have-a-question"></a>

> Molimo Vas da ne pravite issue da biste postavili pitanje.

Za pitanja i pomoć, [napravite novu diskusiju](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose) i jasno opišite šta se dešava.

## Prijaviti Issue <a id="reporting-an-issue"></a>

> Molimo Vas da ne pravite issue da biste postavili pitanje ili tražili pomoć za nešto specifično u Vašoj aplikaciji. Umesto toga, [napravite novu diskusiju](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose).

Ako uočite grešku ili bug koristeći auto-py-to-exe:

1. Otvorite [novi issue koristeći "Bug report" šablon](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=bug_report.md)
2. Popunite šablon
3. Napravite issue

Molimo Vas da jasno opišete šta se dešava, navedete korake kako reprodukovati opisano ponašanje, kao i [minimalni primer za reprodukciju](https://stackoverflow.com/help/minimal-reproducible-example). Takođe, objasnite šta mislite da je trebalo da se desi.

## Zahtevanje funkcionalnosti <a id="request-a-feature"></a>

Ako auto-py-to-exe ne radi nešto što Vam je potrebno, ili što želite da radi:

1. Otvorite [novi issue koristeći "Feature request" šablon](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=feature_request.md)
2. Popunite šablon
3. Napravite issue

Molimo Vas da pružite što bolji kontekst onoga na šta Ste naišli i budite jasni zašto postojeće funkcionalnosti i alternative ne bi radile u Vašem slučaju.

## Pull Request-ovi <a id="pull-requests"></a>

### Nova funkcionalnost / Izmena postojeće funkcionalnosti <a id="a-new-feature-change-to-an-existing-feature"></a>

Ako želite dodati funkcionalnost ili promeniti već postojeću:

1. Počnite sa pravljenjem pull request-a
2. Kada prvobitno popunavate opis, pročitajte instrukcije da biste izabrali šablon `✨ A new feature`
3. Popunite novi šablon
4. Napravite PR

### Dodavanje i poboljšanje prevoda <a id="add-or-update-a-translation"></a>

Ako želite dodati novi ili poboljšati postojeći prevod:

1. Izmenite [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js)
2. Počnite sa pravljenjem pull request-a
3. Kada prvobitno popunavate opis, pročitajte instrukcije da biste izabrali šablon `📄 A new or updated translation`
4. Popunite novi šablon
5. Napravite PR

> Ako niste u mogućnosti da pošaljete pull request, izmene možete postaviti i u novi issue.

## Uputstvo za stilizaciju <a id="style-guide"></a>

Za Python, koristimo [Ruff](https://github.com/astral-sh/ruff) za formatiranje, lint-ovanje i automatsko sortiranje import-a. Najlakši način da koristite Ruff je kroz proširenje za Visual Studio Code - formatiranje se pokreće pri čuvanju. Možete formatirati i pomoću Ruff CLI alata tako što ćete prvo instalirati ruff koristeći `pip install ruff`, a zatim pokrenuti `ruff format .`.

Za JavaScript, CSS, HTML, Markdown, JSON i YAML koristimo [Prettier](https://prettier.io/). Najlakši način da koristite Prettier je kroz proširenje za Visual Studio Code - formatiranje se pokreće pri čuvanju. Možete formatirati i pomoću Prettier CLI alata izvršavanjem `npx prettier@2.8.8 --write .`.

Formatiranje proveravamo upotrebom GitHub Action-a - svi PR-ovi moraju da zadovoljavaju formatiranje i lint-ovanje.
