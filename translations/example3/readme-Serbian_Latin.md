# Primer 3 - Slike i druge datoteke koji nisu .py

[English](../../examples/3-images-and-other-non-py-files/readme.md)
| [српски](./readme-Serbian_Cyrillic.md)
| **srpski**

[Ovaj primer](../../examples/3-images-and-other-non-py-files/main.py) je GUI aplikacija koja referencira GIF (sliku) i JSON datoteku.

## Pakovanje

Da biste ovo upakovali, možete koristiti `auto-py-to-exe` i izabrati "Aplikacija u prozoru". Da biste dodali GIF i JSON datoteke koristite sekciju "Dodatne datoteke", kliknite na "Dodaj direktorijum" i izaberite "assets" direktorijum.

- Postarajte se da koristite "Aplikacija u prozoru" jer će se u suprotnom pojaviti prazan terminal (što nam ne treba jer ne pozivamo `print`).
- Dodavanje assets direktorijuma u sekciju "Dodatne datoteke" će osigurati da sve datoteke u tom direktorijumu budu uključene. Kada koristite "Jedan direktorijum", moći ćete da vidite direktorijum unutar "\_internal" direktorijuma.
- Za ovo možete koristiti "Jedan direktorijum" ili "Jedna datoteka". Upotreba `resource_path` u main.py znači da će oba pristupa raditi.

### Upotreba konfiguracije

Konfiguracija za auto-py-to-exe se [nalazi ovde](../../examples/3-images-and-other-non-py-files/auto-py-to-exe-config.json).

1. Otvorite terminal u ovom direktorijumu (`examples/3-images-and-other-non-py-files`)
2. Izvršite `auto-py-to-exe --config auto-py-to-exe-config.json` da biste otvorili auto-py-to-exe sa prosleđenom konfiguracijom
3. Kliknite na veliko plavo dugme na dnu za konverziju
4. Nakon završetka, kliknite na veliko "OTVORI IZLAZNI DIREKTORIJUM" dugme da biste videli izlazni exe

## Pokretanje

Možete pokrenuti exe koristeći terminal ili na dvoklik. Pošto koristimo `window.mainloop()`, aplikacija će trčati dok se prozor ne zatvori.

## Napomene

Da Ste koristili režim "Jedna datoteka", izmene napravljene u JSON datoteci bi bile pregažene svaki put. Da biste to sprečili, pogledajte primer 4.
