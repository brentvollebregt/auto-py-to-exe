# Przykład 2 — aplikacja bez konsoli

[English](../../examples/2-no-console/readme.md) | **Polski** | [српски](./readme-Serbian_Cyrillic.md) | [srpski](./readme-Serbian_Latin.md)

[Ten przykład](../../examples/2-no-console/main.py) przedstawia prostą aplikację z graficznym interfejsem użytkownika (GUI).

## Tworzenie pliku wykonywalnego

Do spakowania aplikacji użyj `auto-py-to-exe` i wybierz „Window Based” (aplikacja okienkowa).

- Upewnij się, że wybrano „Window Based”. W przeciwnym razie pojawi się dodatkowe, puste okno terminala, którego nie potrzebujemy, ponieważ nie używamy funkcji `print`.

### Korzystanie z konfiguracji

[Gotowy plik konfiguracyjny](../../examples/2-no-console/auto-py-to-exe-config.json) znajduje się w katalogu przykładu.

1. Otwórz terminal w katalogu `examples/2-no-console`.
2. Uruchom `auto-py-to-exe --config auto-py-to-exe-config.json`.
3. Kliknij duży niebieski przycisk konwersji na dole okna.
4. Po zakończeniu kliknij „OPEN OUTPUT FOLDER”, aby zobaczyć utworzony plik EXE.

## Uruchamianie

Plik EXE możesz uruchomić w terminalu lub dwukrotnym kliknięciem. Dzięki wywołaniu `window.mainloop()` aplikacja będzie działała do momentu zamknięcia jej okna.
