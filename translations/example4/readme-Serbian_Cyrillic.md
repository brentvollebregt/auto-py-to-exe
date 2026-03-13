# Пример 4 - Трајни подаци

[English](../../examples/4-persistent-data/readme.md)
| **српски**
| [srpski](./readme-Serbian_Latin.md)

[Овај пример](../../examples/4-persistent-data/main.py) демонстрира како можете управљати трајним подацима изван извршне датотеке. Ово је потребно када имате SQLite базу података или нешто слично што користите за чување података између различитих покретања апликације.

Када користите режим "Једна датотека", не бисте требали да чувате датотеке које желите да буду трајне заједно са извршном датотеком, јер ће бити прегажене при следећем покретању. Ако користите "Један директоријум", ово није проблем јер се извршна датотека не мора распакивати сваки пут.

## Паковање

Да бисте ово упаковали, можете користити `auto-py-to-exe` и изабрати "Конзолна апликација".

- Потребно је користити "Конзолна апликација" зато што требамо извршити `print` позив. Ако бисмо користили "Апликација у прозору", не бисмо више имали приступ stdout-у и деловало би као да желимо извршити скрипту као .pyw датотеку - у том случају би `print` била грешка.

> "Конзолна апликација" је потребно за демонстрацију да су `print` позиви одрађени. Ако Вам не треба stdout (као за `print`) у Вашој апликацији, можете користити "Апликација у прозору".

### Употреба конфигурације

Конфигурација за auto-py-to-exe се [налази овде](../../examples/4-persistent-data/auto-py-to-exe-config.json).

1. Отворите терминал у овом директоријуму (`examples/4-persistent-data`)
2. Извршите `auto-py-to-exe --config auto-py-to-exe-config.json` да бисте отворили auto-py-to-exe са прослеђеном конфигурацијом
3. Кликните на велико плаво дугме на дну за конверзију
4. Након завршетка, кликните на велико "ОТВОРИ ИЗЛАЗНИ ДИРЕКТОРИЈУМ" дугме да бисте видели излазни exe

## Покретање

Покрените излазни exe користећи терминал. Ако искористите двоклик на њега, покренуће се, али ће се конзола одмах затворити. Покретање exe датотеке користећи терминал Вам омогућава да видите излаз.

Да бисте покренули exe користећи терминал на Windows-у (слично и за друге оперативне системе):

1. Отворите cmd
2. Пређите у директоријум у ком је exe генерисан са `cd`
3. Извршите `main.exe` да бисте покренули извршну датотеку.

Када покренете exe, видећете:

- Циљани директоријум је креиран ако не постоји
- Ако датотека са подацима не постоји, биће креирана са подразумеваним подацима
- Свако покретање инкрементира `count` вредност у JSON датотеци

Ево примера излаза:

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
