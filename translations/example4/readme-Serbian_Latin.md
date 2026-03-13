# Primer 4 - Trajni podaci

[English](../../examples/4-persistent-data/readme.md)
| [српски](./readme-Serbian_Cyrillic.md)
| **srpski**

[Ovaj primer](../../examples/4-persistent-data/main.py) demonstrira kako možete upravljati trajnim podacima izvan izvršne datoteke. Ovo je potrebno kada imate SQLite bazu podataka ili nešto slično što koristite za čuvanje podataka između različitih pokretanja aplikacije.

Kada koristite režim "Jedna datoteka", ne biste trebali da čuvate datoteke koje želite da budu trajne zajedno sa izvršnom datotekom, jer će biti pregažene pri sledećem pokretanju. Ako koristite "Jedan direktorijum", ovo nije problem jer se izvršna datoteka ne mora raspakivati svaki put.

## Pakovanje

Da biste ovo upakovali, možete koristiti `auto-py-to-exe` i izabrati "Konzolna aplikacija".

- Potrebno je koristiti "Konzolna aplikacija" zato što trebamo izvršiti `print` poziv. Ako bismo koristili "Aplikacija u prozoru", ne bismo više imali pristup stdout-u i delovalo bi kao da želimo izvršiti skriptu kao .pyw datoteku - u tom slučaju bi `print` bila greška.

> "Konzolna aplikacija" je potrebno za demonstraciju da su `print` pozivi odrađeni. Ako Vam ne treba stdout (kao za `print`) u Vašoj aplikaciji, možete koristiti "Aplikacija u prozoru".

### Upotreba konfiguracije

Konfiguracija za auto-py-to-exe se [nalazi ovde](../../examples/4-persistent-data/auto-py-to-exe-config.json).

1. Otvorite terminal u ovom direktorijumu (`examples/4-persistent-data`)
2. Izvršite `auto-py-to-exe --config auto-py-to-exe-config.json` da biste otvorili auto-py-to-exe sa prosleđenom konfiguracijom
3. Kliknite na veliko plavo dugme na dnu za konverziju
4. Nakon završetka, kliknite na veliko "OTVORI IZLAZNI DIREKTORIJUM" dugme da biste videli izlazni exe

## Pokretanje

Pokrenite izlazni exe koristeći terminal. Ako iskoristite dvoklik na njega, pokrenuće se, ali će se konzola odmah zatvoriti. Pokretanje exe datoteke koristeći terminal Vam omogućava da vidite izlaz.

Da biste pokrenuli exe koristeći terminal na Windows-u (slično i za druge operativne sisteme):

1. Otvorite cmd
2. Pređite u direktorijum u kom je exe generisan sa `cd`
3. Izvršite `main.exe` da biste pokrenuli izvršnu datoteku.

Kada pokrenete exe, videćete:

- Ciljani direktorijum je kreiran ako ne postoji
- Ako datoteka sa podacima ne postoji, biće kreirana sa podrazumevanim podacima
- Svako pokretanje inkrementira `count` vrednost u JSON datoteci

Evo primera izlaza:

```
C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file doesn't exist. Creating at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 0}
Saved new contents: {'count': 1}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 1}
Saved new contents: {'count': 2}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 2}
Saved new contents: {'count': 3}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 3}
Saved new contents: {'count': 4}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>
```
