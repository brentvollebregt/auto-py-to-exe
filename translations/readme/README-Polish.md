<h1 align="center">Auto PY to EXE</h1>
<p align="center">Narzędzie do przekształcania skryptów Python (.py) w pliki wykonywalne przy użyciu prostego interfejsu graficznego oraz <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a>.</p>
<p align="center"><img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Interfejs auto-py-to-exe"></p>
<p align="center">
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="Wersja PyPI"></a>
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="Obsługiwane wersje Python"></a>
<a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Licencja"></a>
</p>

[English](../../README.md) | **Polski**

## Demonstracja

<p align="center"><img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="Demonstracja auto-py-to-exe"></p>

## Pierwsze kroki

### Wymagania

- Python: 3.6–3.14 (według dokumentacji projektu w wersji 2.50.1).

_Aby uzyskać interfejs przedstawiony na ilustracjach, wymagany jest Chrome. Jeśli Chrome nie jest zainstalowany lub użyto opcji `--default-browser`, zostanie użyta domyślna przeglądarka._

### Instalacja i uruchomienie

#### Instalacja przez [PyPI](https://pypi.org/project/auto-py-to-exe/)

```bash
python -m pip install auto-py-to-exe
```

Uruchom program:

```bash
auto-py-to-exe
```

Jeśli masz kilka wersji Pythona, możesz uruchomić program poleceniem `python -m auto_py_to_exe`.

#### Instalacja z [GitHuba](https://github.com/brentvollebregt/auto-py-to-exe)

```bash
git clone https://github.com/brentvollebregt/auto-py-to-exe.git
cd auto-py-to-exe
python setup.py install
auto-py-to-exe
```

#### Uruchomienie lokalne bez instalowania pakietu

1. Sklonuj lub pobierz [repozytorium](https://github.com/brentvollebregt/auto-py-to-exe).
2. Otwórz terminal w katalogu głównym projektu.
3. Zainstaluj zależności poleceniem `python -m pip install -r requirements.txt`.
4. Uruchom `python -m auto_py_to_exe`.

## Korzystanie z aplikacji

1. Wybierz lokalizację skryptu `.py` (wklej ścieżkę lub wskaż plik). Ramka pola zmieni kolor na niebieski, jeśli plik istnieje.
2. Wybierz opcje pakowania; możesz dodać ikonę i dodatkowe pliki.
3. Kliknij duży niebieski przycisk konwersji na dole interfejsu.
4. Po zakończeniu znajdź gotowe pliki w katalogu `output`.

### Argumenty uruchomieniowe

Pomoc: `auto-py-to-exe --help`

| Argument                                                         | Rodzaj                 | Opis                                                                                    |
| ---------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------- |
| `filename`                                                       | pozycyjny / opcjonalny | Wstępnie wypełnia pole lokalizacji skryptu.                                             |
| `-db`, `--default-browser`                                       | opcjonalny             | Otwiera interfejs w domyślnej przeglądarce, bez wyszukiwania Chrome.                    |
| `-nu`, `--no-ui`                                                 | opcjonalny             | Nie otwiera automatycznie przeglądarki, lecz wyświetla adres interfejsu.                |
| `-c [CONFIG]`, `--config [CONFIG]`                               | opcjonalny             | Wczytuje plik konfiguracji JSON, aby wypełnić formularz.                                |
| `-o [PATH]`, `--output-dir [PATH]`                               | opcjonalny             | Ustawia domyślny katalog wynikowy (można zmienić go w interfejsie).                     |
| `-bdo [FOLDER_PATH]`, `--build-directory-override [FOLDER_PATH]` | opcjonalny             | Zmienia katalog roboczy budowania; przydatne przy konfiguracji programu antywirusowego. |
| `-lang [LANGUAGE_CODE]`, `--language [LANGUAGE_CODE]`            | opcjonalny             | Sugeruje język domyślny interfejsu. Dla polskiego użyj `pl`.                            |

Aby spróbować uruchomić interfejs po polsku:

```bash
auto-py-to-exe --language pl
```

### Konfiguracja JSON

W sekcji konfiguracji na karcie ustawień możesz wyeksportować bieżące opcje do pliku JSON i później je ponownie zaimportować. Eksport nie zapisuje automatycznie katalogu wynikowego, ponieważ ścieżki mogą różnić się między komputerami. Aby zapisać go ręcznie, dodaj klucz `nonPyinstallerOptions.outputDirectory` w pliku JSON.

## Przykłady

W katalogu [examples](../../examples/) znajdziesz przykłady przygotowania i pakowania aplikacji:

- [Prosty program konsolowy](../../examples/1-basic/readme.md)
- [Program bez konsoli (np. z GUI)](../../examples/2-no-console/readme.md)
- [Obrazy i dodatkowe pliki](../../examples/3-images-and-other-non-py-files/readme.md)
- [Trwałe dane, np. bazy danych](../../examples/4-persistent-data/readme.md)

## Materiał wideo

Autor projektu opublikował [film instruktażowy dla pierwszego wydania](https://youtu.be/OZSZHmWSOeM). Od tego czasu niektóre elementy mogły się zmienić, ale podstawy pozostały podobne.

## Współtworzenie projektu

Zasady współpracy i zgłaszania zmian opisano w [CONTRIBUTING.md](../../CONTRIBUTING.md) (po angielsku).

## Problemy z działaniem

W przypadku problemów z tworzeniem plików wykonywalnych warto przeczytać [poradnik autora o typowych błędach](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Błędy samego narzędzia zgłaszaj zgodnie z [instrukcją zgłaszania problemów](../../CONTRIBUTING.md#reporting-an-issue).

## Tłumaczenia

Lista dostępnych tłumaczeń oraz autorów znajduje się w [głównym README](../../README.md#translations). Polski interfejs był już częścią oryginalnego projektu; ta zmiana dodaje polską dokumentację.

## Obsługa Pythona 2.7

Od wydania [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) Python 2.7 nie jest obsługiwany. Przy starszych projektach możliwe jest użycie [PyInstaller 3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6), ostatniej wersji obsługującej Python 2.7. Przed instalacją tej wersji należy usunąć inną zainstalowaną wersję PyInstaller, a następnie wykonać `python -m pip install pyinstaller==3.6`.

## Testowanie

Testy znajdują się w katalogu [tests](../../tests/) i korzystają z `pytest`:

```bash
python -m pip install pytest
python -m pip install -e .
pytest
```

## Zrzuty ekranu

| Interfejs początkowy                                                                                                                                      | Wypełniony formularz                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Interfejs początkowy](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Wypełniony formularz](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Konwersja](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                      | [![Zakończona konwersja](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)   |
