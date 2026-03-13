# Primer 2 - Bez konzole

[English](../../examples/2-no-console/readme.md)
| [српски](./readme-Serbian_Cyrillic.md)
| **srpski**

[Ovaj primer](../../examples/2-no-console/main.py) je obična GUI aplikacija.

## Pakovanje

Da biste ovo upakovali, možete koristiti `auto-py-to-exe` i izabrati "Aplikacija u prozoru".

- Postarajte se da koristite "Aplikacija u prozoru" jer će se u suprotnom pojaviti prazan terminal (što nam ne treba jer ne pozivamo `print`).

### Upotreba konfiguracije

Konfiguracija za auto-py-to-exe se [nalazi ovde](../../examples/2-no-console/auto-py-to-exe-config.json).

1. Otvorite terminal u ovom direktorijumu (`examples/2-no-console`)
2. Izvršite `auto-py-to-exe --config auto-py-to-exe-config.json` da biste otvorili auto-py-to-exe sa prosleđenom konfiguracijom
3. Kliknite na veliko plavo dugme na dnu za konverziju
4. Nakon završetka, kliknite na veliko "OTVORI IZLAZNI DIREKTORIJUM" dugme da biste videli izlazni exe

## Pokretanje

Možete pokrenuti exe koristeći terminal ili na dvoklik. Pošto koristimo `window.mainloop()`, aplikacija će trčati dok se prozor ne zatvori.
