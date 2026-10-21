# Współtworzenie auto-py-to-exe

[English](../../CONTRIBUTING.md) | **Polski** | [српски](./CONTRIBUTING-Serbian_Cyrillic.md) | [srpski](./CONTRIBUTING-Serbian_Latin.md) | [简体中文](./CONTRIBUTING-Chinese_Simplified.md)

👍🎉 Dziękujemy za zainteresowanie współtworzeniem projektu! 🎉👍

Ten dokument opisuje zasady współpracy przy projekcie auto-py-to-exe. Są to przede wszystkim wskazówki, a nie sztywne reguły. Kieruj się zdrowym rozsądkiem i śmiało proponuj zmiany w tym dokumencie za pomocą Pull Requesta.

## Spis treści

- [Mam tylko pytanie i nie chcę czytać całego dokumentu!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [Zgłaszanie błędu](#reporting-an-issue)
- [Propozycja nowej funkcji](#request-a-feature)
- [Pull Requesty](#pull-requests)
  - [Nowa funkcja lub zmiana istniejącej](#a-new-feature-change-to-an-existing-feature)
  - [Dodawanie lub aktualizowanie tłumaczenia](#add-or-update-a-translation)
- [Zasady formatowania kodu](#style-guide)

## Mam tylko pytanie i nie chcę czytać całego dokumentu! <a id="i-dont-want-to-read-this-whole-thing-i-just-have-a-question"></a>

> Nie twórz zgłoszenia błędu (_issue_) tylko po to, aby zadać pytanie.

Jeśli masz pytanie lub potrzebujesz ogólnej pomocy, [rozpocznij nową dyskusję](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose) i dokładnie opisz sytuację.

## Zgłaszanie błędu <a id="reporting-an-issue"></a>

> Nie używaj zgłoszeń błędów do zadawania pytań ani do uzyskiwania pomocy dotyczącej wyłącznie własnej aplikacji. Zamiast tego [rozpocznij dyskusję](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose).

Jeśli znajdziesz błąd w auto-py-to-exe:

1. Otwórz [nowe zgłoszenie, korzystając z szablonu „Bug report”](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=bug_report.md).
2. Uzupełnij szablon.
3. Wyślij zgłoszenie.

Dokładnie opisz problem, podaj kroki potrzebne do jego odtworzenia i [minimalny przykład umożliwiający odtworzenie błędu](https://stackoverflow.com/help/minimal-reproducible-example). Wyjaśnij również, jakiego działania oczekiwałeś.

## Propozycja nowej funkcji <a id="request-a-feature"></a>

Jeśli w auto-py-to-exe brakuje potrzebnej Ci funkcji:

1. Otwórz [nowe zgłoszenie, korzystając z szablonu „Feature request”](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=feature_request.md).
2. Uzupełnij szablon.
3. Wyślij zgłoszenie.

Podaj możliwie dużo kontekstu. Wyjaśnij, dlaczego dostępne funkcje lub rozwiązania alternatywne nie spełniają Twoich potrzeb.

## Pull Requesty <a id="pull-requests"></a>

### Nowa funkcja lub zmiana istniejącej <a id="a-new-feature-change-to-an-existing-feature"></a>

Jeśli chcesz dodać funkcję lub zmodyfikować istniejącą:

1. Rozpocznij tworzenie Pull Requesta.
2. Podczas wypełniania opisu zapoznaj się z instrukcją wyboru szablonu `✨ A new feature`.
3. Wypełnij wybrany szablon.
4. Utwórz Pull Request.

### Dodawanie lub aktualizowanie tłumaczenia <a id="add-or-update-a-translation"></a>

Jeśli chcesz dodać tłumaczenie lub zaktualizować istniejące:

1. Zaktualizuj plik [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js) (jeśli zmiana dotyczy tłumaczenia interfejsu).
2. Rozpocznij tworzenie Pull Requesta.
3. Podczas wypełniania opisu zapoznaj się z instrukcją wyboru szablonu `📄 A new or updated translation`.
4. Wypełnij szablon.
5. Utwórz Pull Request.

> Jeśli nie możesz wysłać Pull Requesta, możesz zgłosić zmiany również za pomocą nowego zgłoszenia (_issue_).

## Zasady formatowania kodu <a id="style-guide"></a>

W przypadku Pythona projekt używa narzędzia [Ruff](https://github.com/astral-sh/ruff) do formatowania kodu, sprawdzania jakości i automatycznego sortowania importów. Najprościej używać rozszerzenia Ruff do Visual Studio Code — formatowanie jest wówczas wykonywane przy zapisywaniu pliku. Możesz też zainstalować Ruff poleceniem `pip install ruff` i uruchomić `ruff format .`.

Dla JavaScript, CSS, HTML, Markdown, JSON i YAML używane jest narzędzie [Prettier](https://prettier.io/). Najprościej używać rozszerzenia do Visual Studio Code, które formatuje pliki podczas zapisywania. Możesz też użyć polecenia `npx prettier@2.8.8 --write .`.

Formatowanie jest weryfikowane automatycznie przez GitHub Actions. Każdy Pull Request jest sprawdzany pod kątem zgodności z regułami formatowania i kontroli jakości kodu.
