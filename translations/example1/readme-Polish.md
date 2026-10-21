# Przykład 1 — podstawowa aplikacja

[English](../../examples/1-basic/readme.md) | **Polski** | [српски](./readme-Serbian_Cyrillic.md) | [srpski](./readme-Serbian_Latin.md)

[Ten przykład](../../examples/1-basic/main.py) to prosta aplikacja „Hello World”. Nie zawiera żadnych dodatkowych elementów.

## Tworzenie pliku wykonywalnego

Do spakowania aplikacji użyj `auto-py-to-exe` i wybierz tryb „Console Based” (aplikacja konsolowa).

- Tryb „Console Based” jest potrzebny, aby wyświetlić wynik funkcji `print`. W trybie „Window Based” nie byłoby standardowego wyjścia (`stdout`), podobnie jak przy uruchamianiu skryptu `.pyw`; w tym przypadku wywołanie `print` spowodowałoby błąd.

### Korzystanie z konfiguracji

[Gotowy plik konfiguracyjny auto-py-to-exe](../../examples/1-basic/auto-py-to-exe-config.json) znajduje się w katalogu przykładu.

1. Otwórz terminal w katalogu `examples/1-basic`.
2. Uruchom `auto-py-to-exe --config auto-py-to-exe-config.json`, aby otworzyć program z przygotowaną konfiguracją.
3. Kliknij duży niebieski przycisk konwersji na dole okna.
4. Po zakończeniu kliknij duży niebieski przycisk „OPEN OUTPUT FOLDER”, aby otworzyć folder z utworzonym plikiem EXE.

## Uruchamianie

Uruchom utworzony plik EXE w terminalu. Po dwukrotnym kliknięciu program również się uruchomi, ale okno konsoli od razu się zamknie. Uruchomienie z terminala pozwoli odczytać komunikaty.

Aby uruchomić EXE w terminalu systemu Windows (w innych systemach jest podobnie):

1. Otwórz `cmd`.
2. Przejdź poleceniem `cd` do katalogu, w którym zapisano EXE.
3. Wpisz `main.exe` i zatwierdź Enterem.

Przykładowy wynik:

```text
C:\Users\USER\Repos\auto-py-to-exe\examples\1-basic\output>main.exe
Hello world
Running with Python 3.9.9 (tags/v3.9.9:ccb0e6a, Nov 15 2021, 18:08:50) [MSC v.1929 64 bit (AMD64)]
```
