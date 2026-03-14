# Допринос auto-py-to-exe алату

[English](../../CONTRIBUTING.md)
| **српски**
| [srpski](./CONTRIBUTING-Serbian_Latin.md)
| [简体中文](./CONTRIBUTING-Chinese_Simplified.md)

👍🎉 Као прво, хвала Вам на интересовању да допринесете! 🎉👍

Овај документ описује смернице за допринос које су специфичне за auto-py-to-exe. Ово су углавном смернице, а не правила. Најбоље процените сами и слободно предложите измене овог документа на pull request-у.

## Садржај

- [Не желим све да читам, већ имам само питање!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [Пријавити Issue](#reporting-an-issue)
- [Захтевање функционалности](#request-a-feature)
- [Pull Request-ови](#pull-requests)
  - [Нова функционалност / Измена постојеће функционалности](#a-new-feature-change-to-an-existing-feature)
  - [Додавање и побољшање превода](#add-or-update-a-translation)
- [Упутство за стилизацију](#style-guide)

## Не желим све да читам, већ имам само питање!!! <a id="i-dont-want-to-read-this-whole-thing-i-just-have-a-question"></a>

> Молимо Вас да не правите issue да бисте поставили питање.

За питања и помоћ, [направите нову дискусију](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose) и јасно опишите шта се дешава.

## Пријавити Issue <a id="reporting-an-issue"></a>

> Молимо Вас да не правите issue да бисте поставили питање или тражили помоћ за нешто специфично у Вашој апликацији. Уместо тога, [направите нову дискусију](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose).

Ако уочите грешку или bug користећи auto-py-to-exe:

1. Отворите [нови issue користећи "Bug report" шаблон](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=bug_report.md)
2. Попуните шаблон
3. Направите issue

Молимо Вас да јасно опишете шта се дешава, наведете кораке како репродуковати описано понашање, као и [минимални пример за репродукцију](https://stackoverflow.com/help/minimal-reproducible-example). Такође, објасните шта мислите да је требало да се деси.

## Захтевање функционалности <a id="request-a-feature"></a>

Ако auto-py-to-exe не ради нешто што Вам је потребно, или што желите да ради:

1. Отворите [нови issue користећи "Feature request" шаблон](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=feature_request.md)
2. Попуните шаблон
3. Направите issue

Молимо Вас да пружите што бољи контекст онога на шта Сте наишли и будите јасни зашто постојеће функционалности и алтернативе не би радиле у Вашем случају.

## Pull Request-ови <a id="pull-requests"></a>

### Нова функционалност / Измена постојеће функционалности <a id="a-new-feature-change-to-an-existing-feature"></a>

Ако желите додати функционалност или променити већ постојећу:

1. Почните са прављењем pull request-а
2. Када првобитно попунавате опис, прочитајте инструкције да бисте изабрали шаблон `✨ A new feature`
3. Попуните нови шаблон
4. Направите PR

### Додавање и побољшање превода <a id="add-or-update-a-translation"></a>

Ако желите додати нови или побољшати постојећи превод:

1. Измените [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js)
2. Почните са прављењем pull request-а
3. Када првобитно попунавате опис, прочитајте инструкције да бисте изабрали шаблон `📄 A new or updated translation`
4. Попуните нови шаблон
5. Направите PR

> Ако нисте у могућности да пошаљете pull request, измене можете поставити и у нови issue.

## Упутство за стилизацију <a id="style-guide"></a>

За Python, користимо [Ruff](https://github.com/astral-sh/ruff) за форматирање, lint-овање и аутоматско сортирање import-а. Најлакши начин да користите Ruff је кроз проширење за Visual Studio Code - форматирање се покреће при чувању. Можете форматирати и помоћу Ruff CLI алата тако што ћете прво инсталирати ruff користећи `pip install ruff`, а затим покренути `ruff format .`.

За JavaScript, CSS, HTML, Markdown, JSON и YAML користимо [Prettier](https://prettier.io/). Најлакши начин да користите Prettier је кроз проширење за Visual Studio Code - форматирање се покреће при чувању. Можете форматирати и помоћу Prettier CLI алата извршавањем `npx prettier@2.8.8 --write .`.

Форматирање проверавамо употребом GitHub Action-а - сви PR-ови морају да задовољавају форматирање и lint-овање.
