# Przykład 3 — obrazy i inne pliki niebędące skryptami `.py`

[English](../../examples/3-images-and-other-non-py-files/readme.md)
| [српски](./readme-Serbian_Cyrillic.md)
| [srpski](./readme-Serbian_Latin.md)
| **Polski**

[Ten przykład](../../examples/3-images-and-other-non-py-files/main.py) przedstawia aplikację GUI, która korzysta również z obrazu GIF i pliku JSON.

## Tworzenie pliku wykonywalnego

Do spakowania aplikacji użyj `auto-py-to-exe` i wybierz „Window Based”. Aby dodać pliki GIF i JSON, przejdź do sekcji „Additional Files” (dodatkowe pliki), kliknij „Add Folder” (dodaj folder) i wybierz katalog `assets` z tego przykładu.

- Wybierz „Window Based”, aby nie pojawiało się dodatkowe puste okno terminala (aplikacja nie używa `print`).
- Dodanie katalogu `assets` do „Additional Files” zapewnia dołączenie wszystkich znajdujących się w nim plików. W trybie „One Directory” folder będzie widoczny wewnątrz katalogu `_internal`.
- Możesz wybrać zarówno „One Directory”, jak i „One File”. Funkcja `resource_path` zastosowana w `main.py` obsługuje oba tryby.

### Korzystanie z konfiguracji

[Gotowy plik konfiguracyjny](../../examples/3-images-and-other-non-py-files/auto-py-to-exe-config.json) znajduje się w katalogu przykładu.

1. Otwórz terminal w katalogu `examples/3-images-and-other-non-py-files`.
2. Uruchom `auto-py-to-exe --config auto-py-to-exe-config.json`.
3. Kliknij duży niebieski przycisk konwersji na dole okna.
4. Po zakończeniu kliknij „OPEN OUTPUT FOLDER”, aby zobaczyć utworzony plik EXE.

## Uruchamianie

Plik EXE możesz uruchomić w terminalu lub dwukrotnym kliknięciem. Dzięki `window.mainloop()` aplikacja będzie działała do zamknięcia jej okna.

## Uwagi

Jeśli używasz trybu „One File”, zmiany w dołączonym pliku JSON będą nadpisywane przy kolejnym uruchomieniu. Przykład 4 pokazuje, jak temu zapobiec.
