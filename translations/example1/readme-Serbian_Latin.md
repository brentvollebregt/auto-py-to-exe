# Primer 1 - Osnovno

[English](../../examples/1-basic/readme.md)
| [српски](./readme-Serbian_Cyrillic.md)
| **srpski**

[Ovaj primer](../../examples/1-basic/main.py) je osnovna Hello World aplikacija. U ovom primeru ništa nije neuobičajeno.

## Pakovanje

Da biste ovo upakovali, možete koristiti `auto-py-to-exe` i izabrati "Konzolna aplikacija".

- "Konzolna aplikacija" je potrebno zato što trebamo izvršiti `print` poziv. Ako bismo koristili "Aplikacija u prozoru", ne bismo više imali pristup stdout-u i delovalo bi kao da želimo izvršiti skriptu kao .pyw datoteku - u tom slučaju bi `print` bila greška.

### Upotreba konfiguracije

Konfiguracija za auto-py-to-exe se [nalazi ovde](../../examples/1-basic/auto-py-to-exe-config.json).

1. Otvorite terminal u ovom direktorijumu (`examples/1-basic`)
2. Izvršite `auto-py-to-exe --config auto-py-to-exe-config.json` da biste otvorili auto-py-to-exe sa prosleđenom konfiguracijom
3. Kliknite na veliko plavo dugme na dnu za konverziju
4. Nakon završetka, kliknite na veliko "OTVORI IZLAZNI DIREKTORIJUM" dugme da biste videli izlazni exe

## Pokretanje

Pokrenite izlazni exe koristeći terminal. Ako iskoristite dvoklik na njega, pokrenuće se, ali će se konzola odmah zatvoriti. Pokretanje exe datoteke koristeći terminal Vam omogućava da vidite izlaz.

Da biste pokrenuli exe koristeći terminal na Windows-u (slično i za druge operativne sisteme):

1. Otvorite cmd
2. Pređite u direktorijum u kom je exe generisan sa `cd`
3. Izvršite `main.exe` da biste pokrenuli izvršnu datoteku.

Evo primera izlaza:

```
C:\Users\USER\Repos\auto-py-to-exe\examples\1-basic\output>main.exe
Hello world
Running with Python 3.9.9 (tags/v3.9.9:ccb0e6a, Nov 15 2021, 18:08:50) [MSC v.1929 64 bit (AMD64)]
```
