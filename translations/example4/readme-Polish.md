# Przykład 4 — trwałe przechowywanie danych

[English](../../examples/4-persistent-data/readme.md) | **Polski** | [српски](./readme-Serbian_Cyrillic.md) | [srpski](./readme-Serbian_Latin.md)

[Ten przykład](../../examples/4-persistent-data/main.py) pokazuje, jak zapisywać dane między uruchomieniami aplikacji, poza plikiem wykonywalnym. Jest to potrzebne na przykład wtedy, gdy program korzysta z bazy SQLite lub innych danych, które mają być zachowane po zamknięciu aplikacji.

W trybie „One File” nie należy przechowywać danych, które mają być trwałe, wewnątrz tymczasowo rozpakowywanych zasobów programu, ponieważ przy kolejnym uruchomieniu zostaną zastąpione. W trybie „One Directory” problem ten nie występuje w ten sam sposób, ponieważ program nie musi za każdym razem rozpakowywać własnych zasobów.

## Tworzenie pliku wykonywalnego

Do spakowania aplikacji użyj `auto-py-to-exe` i wybierz „Console Based” (aplikacja konsolowa).

- Tryb „Console Based” jest potrzebny do wyświetlania komunikatów `print`. W trybie „Window Based” nie byłoby dostępu do standardowego wyjścia (`stdout`), podobnie jak przy uruchamianiu skryptu `.pyw`; w tym przypadku `print` spowodowałby błąd.

> „Console Based” jest tutaj potrzebny jedynie na potrzeby demonstracji komunikatów `print`. Jeśli Twoja aplikacja nie potrzebuje `stdout`, możesz wybrać „Window Based”.

### Korzystanie z konfiguracji

[Gotowy plik konfiguracyjny](../../examples/4-persistent-data/auto-py-to-exe-config.json) znajduje się w katalogu przykładu.

1. Otwórz terminal w katalogu `examples/4-persistent-data`.
2. Uruchom `auto-py-to-exe --config auto-py-to-exe-config.json`.
3. Kliknij duży niebieski przycisk konwersji na dole okna.
4. Po zakończeniu kliknij „OPEN OUTPUT FOLDER”, aby zobaczyć utworzony plik EXE.

## Uruchamianie

Uruchom plik EXE z terminala. Dwukrotne kliknięcie też uruchomi aplikację, ale okno konsoli od razu się zamknie. Terminal pozwoli obejrzeć komunikaty.

W systemie Windows:

1. Otwórz `cmd`.
2. Przejdź poleceniem `cd` do katalogu, w którym zapisano EXE.
3. Uruchom `main.exe`.

Podczas uruchamiania zobaczysz, że:

- folder docelowy jest tworzony, jeśli jeszcze nie istnieje;
- plik danych jest tworzony z wartościami domyślnymi, jeśli jeszcze nie istnieje;
- każde uruchomienie zwiększa wartość `count` w pliku JSON o jeden.

Przykładowy wynik:

```text
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
