<h1 align="center">Auto PY to EXE</h1>
<p align="center">כלי המרה של קובץ פייתון .py לתוכנת מחשב .exe, באמצעות ממשק גראפי פשוט ועם  <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a>.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="ממשק ריק">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI גרסאת"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI גרסאות תומכות"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="רשיון"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="הורדות בחודש"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="פלטפורמות נתמכות"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="תרומה"></a>
</p>

## תרגומים של קובץ זה

English README ，en [US](./README.md)

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [فارسی](./README-Persian.md)

한국어로 된 설명은 [여기](./README-Korean.md)를 참고하세요.

Български README [тук](README-Bulgarian.md)

## דמו

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe דמו של">
</p>

## איך מתחילים?

### דרישות מקדימות

- Python: 3.6-3.12

_כדי שהממשק יוצג בתמונות, תזדקק לכרום. אם כרום אינו מותקן או שה----default-browser מועבר, ייעשה שימוש בדפדפן ברירת המחדל._

### התקנה ושימוש

#### התקנה באמצעות [PyPI](https://pypi.org/project/auto-py-to-exe/)

ניתן להתקין את הפרויקט באמצעות PyPI:

```
$ pip install auto-py-to-exe
```

לאחר מכן כדי להפעיל אותו, בצע את הפעולות הבאות בטרמינל:

```
$ auto-py-to-exe
```

> אם יש לך יותר מגרסא אחת של פייתון מותקנת, יש לעשות שימוש ב `python -m auto_py_to_exe` במקום ב `auto-py-to-exe`.

### התקנה באמצעות [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

לאחר מכן כדי להפעיל אותו, בצע את הפעולות הבאות בטרמינל:

```
$ auto-py-to-exe
```

#### הרצה מקומית באמצעות [Github](https://github.com/brentvollebregt/auto-py-to-exe) (ללא התקנה)

ניתן להפעיל את הפרויקט הזה באופן מקומי על ידי ביצוע השלבים הבאים:

1. שכפול/הורד את [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. פתח את cmd/terminal ו-cd בתיקיית הראשית של הפרויקט
3. הפעל את `python -m pip install -r requirements.txt`
4. הפעל את `python -m auto_py_to_exe` כדי להפעיל את היישום

## שימוש באפליקציה

1. בחר את מיקום הסקריפט שלך (הדבק או השתמש בסייר קבצים)
   - המתאר יהפוך לכחול אם הקובץ קיים
2. בחר אפשרויות אחרות והוסף דברים כמו אייקון או קבצים אחרים
3. לחץ על הכפתור הכחול הגדול בתחתית כדי להמיר
4. מצא את הקבצים שהומרו ב-/output בסיום

_קללללל._

### פרמטרים

לקבלת עזרה, ניתן להשתמש בדגל העזרה: `auto-py-to-exe --help`

| פרמטר                                                        | סוג                                   | תיאור                                                                                                          |
| ------------------------------------------------------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| filename                                                     | אופציונאלי, לא חובה. מיקום חובה ראשון | מלא מראש את השדה "מיקום סקריפט" בממשק המשתמש.                                                                  |
| -db, --default-browser                                       | אופציונאלי, לא חובה                   | פתח את ממשק המשתמש באמצעות דפדפן ברירת המחדל (שעשוי להיות Chrome). לא ינסה למצוא את כרום.                      |
| -nu, --no-ui                                                 | אופציונאלי, לא חובה                   | אל תנסה לפתוח את ממשק המשתמש בדפדפן ופשוט תדפיס את הכתובת שבה ניתן לגשת לאפליקציה.                             |
| -c [CONFIG], --config [CONFIG]                               | אופציונאלי, לא חובה                   | ספק קובץ תצורה (JSON) למילוי מראש של ממשק המשתמש. ניתן ליצור אותם בלשונית ההגדרות.                             |
| -o [PATH], --output-dir [PATH]                               | אופציונאלי, לא חובה                   | הגדר את ספריית הפלט המוגדרת כברירת מחדל. עדיין ניתן לשנות זאת בממשק המשתמש.                                    |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | אופציונאלי, לא חובה                   | תעקוף את ספריית הבנייה המוגדרת כברירת מחדל. שימושי אם אתה צריך לרשום תיקיה כדי למנוע מהאנטי-וירוס להסיר קבצים. |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | אופציונאלי, לא חובה                   | רמז לממשק המשתמש לאיזו שפה הוא צריך כברירת מחדל בעת הפתיחה. ניתן למצוא קודי שפה בטבלה תחת "תרגום" למטה.        |

### תצורת JSON

במקום להכניס את אותם נתונים לממשק המשתמש שוב ושוב, אתה יכול לייצא את המצב הנוכחי על ידי מעבר לקטע "תצורה" בכרטיסיית ההגדרות וייצוא התצורה לקובץ JSON. לאחר מכן ניתן לייבא את זה שוב לממשק המשתמש כדי לאכלס מחדש את כל השדות.

פעולת ייצוא תצורת JSON זו אינה שומרת את ספריית הפלט באופן אוטומטי מכיוון שהעברת מארחים עשויה להיות מבני ספרייה שונים. אם ברצונך לקבל את ספריית הפלט בתצורת JSON, הוסף את הספרייה תחת `nonPyinstallerOptions.outputDirectory` בקובץ JSON (יצטרך ליצור מפתח חדש).

## סרטון

אם אתה צריך משהו ויזואלי שיעזור לך להתחיל, [הכנתי סרטון עבור הגרסה המקורית של הפרויקט הזה](https://youtu.be/OZSZHmWSOeM); דברים מסוימים עשויים להיות שונים אך אותם מושגים עדיין חלים.

## תורם

עיין ב-[CONTRIBUTING.md](./CONTRIBUTING.md) כדי לראות הנחיות כיצד לתרום. הקובץ מתאר מה לעשות אם יש לך תכונה חדשה, שינוי, עדכון תרגום או שמצאת בעיה עם auto-py-to-exe.

## בעיות בשימוש בכלי

אם אתה נתקל בבעיות עם קובץ ההפעלה הארוז או בשימוש בכלי זה באופן כללי, אני ממליץ לך לקרוא את [הפוסט בבלוג שלי על בעיות נפוצות בעת שימוש ב-auto-py-to-exe](https://nitratine.net/blog/post /issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). פוסט זה מכסה דברים שכדאי לדעת על אריזת סקריפטים של Python ותיקונים לדברים שבדרך כלל משתבשים.

אם אתה סבור שמצאת בעיה בכלי זה, עקוב אחר הסעיף ["דיווח על בעיה" ב-CONTRIBUTING.md](./CONTRIBUTING.md#reporting-an-issue).

## תמיכה של Python 2.7

החל מגרסא [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) אשר שוחררה בתאריך Aug 9 2020, Python 2.7 לא נתמכת; למרות שניתן עדיין להשתמש בכלי זה עם Python 2.7 על ידי התקנת גרסא ישנה של PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) הייתה הגרסא האחרונה עם תמיכה ב-Python 2.7;
על מנת להתקין כלי זה, תחילה יש להסיר את ההתקנה הקיימת של PyInstaller ואז להריץ את הפקודה `python -m pip install pyinstaller==3.6`.

## בדיקות

בדיקות ממוקמות בתיקיה `tests/` והקצתן נעשית על ידי pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## צילומי מסך

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
