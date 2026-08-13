# Auto PY to EXE

<p align="center">محوّل ملفات .py إلى .exe يستخدم واجهة رسومية بسيطة في بايثون مع <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller (بالإنجليزية)</a>.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Empty interface">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Downloads Per Month"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Supported Platforms"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Donate"></a>
</p>

[English](../../README.md)
| [简体中文](./README-Chinese_Simplified.md)
| [Suomen kieli](./README-Finnish.md)
| [Türkçe](./README-Turkish.md)
| [فارسی](./README-Persian.md)
| [한국어](./README-Korean.md)
| [Български](./README-Bulgarian.md)
| [हिन्दी](./README-Hindi.md)
| [עברית](./README-Hebrew.md)
| [Беларуская](./README-Belarusian.md)
| [Slovenščina](./README-Slovenian.md)
| [српски](./README-Serbian_Cyrillic.md)
| [srpski](./README-Serbian_Latin.md)
| [Русский](./README-Russian.md)
| [Français](./README-French.md)

## عرض توضيحي

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## البدء

### المتطلبات الأساسية

- بايثون: 3.6-3.14

_للحصول على الواجهة الموضحة في الصور، ستحتاج إلى متصفح قائم على Chrome. إذا لم يكن Chrome مثبتًا أو تم توفير المعامل ‎--default-browser‎، فسيتم استخدام المتصفح الافتراضي._

> اعتبارًا من [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0)، لم يعد بايثون 2.7 مدعومًا. لمعرفة خطوات استخدام هذه الأداة مع بايثون 2.7، يُرجى قراءة قسم "[دعم بايثون 2.7](#دعم-بايثون-27)" أدناه.

### التثبيت والاستخدام

#### التثبيت عبر [PyPI](https://pypi.org/project/auto-py-to-exe/)

يمكنك تثبيت هذا المشروع باستخدام PyPI:

```
pip install auto-py-to-exe
```

ثم لتشغيله، نفّذ الأمر التالي في الطرفية (terminal):

```
auto-py-to-exe
```

> إذا كان لديك أكثر من إصدار من بايثون مثبتًا، يمكنك استخدام `python -m auto_py_to_exe` بدلًا من `auto-py-to-exe`.

### التثبيت عبر [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
git clone https://github.com/brentvollebregt/auto-py-to-exe.git
cd auto-py-to-exe
python setup.py install
```

ثم لتشغيله، نفّذ الأمر التالي في الطرفية:

```
auto-py-to-exe
```

#### التشغيل محليًا عبر [Github](https://github.com/brentvollebregt/auto-py-to-exe) (بدون تثبيت)

يمكنك تشغيل هذا المشروع محليًا باتباع الخطوات التالية:

1. استنساخ/تنزيل [المستودع](https://github.com/brentvollebregt/auto-py-to-exe)
2. افتح cmd/terminal في المشروع وانتقل إليه (cd).
3. نفّذ الأمر `python -m pip install -r requirements.txt`.

الآن لتشغيل التطبيق، نفّذ الأمر `python -m auto_py_to_exe`. عند التشغيل من داخل المشروع، سيتم فتح نافذة Chrome في وضع التطبيق.

> تأكد من أنك موجود داخل مجلد auto_py_to_exe عند استدعاء الأمر `python -m auto_py_to_exe` (ستكون فيه بعد الخطوة 3)، وإلا ستحتاج إلى الإشارة إلى مجلد auto_py_to_exe بمسار مطلق أو نسبي.

## استخدام التطبيق

1. اختر موقع السكربت الخاص بك. (الصق المسار أو استخدم مستكشف الملفات)
   - سيتحول الإطار إلى اللون الأزرق عندما يكون الملف موجودًا.
2. حدد باقي الخيارات وأضف أشياء مثل الأيقونة أو ملفات أخرى.
3. اضغط على الزر الأزرق الكبير في الأسفل لبدء التحويل.
4. عند الانتهاء، ستجد ملفاتك المحوّلة داخل مجلد /output.

_بهذه البساطة._

### المعاملات (Arguments)

الاستخدام: `auto-py-to-exe [-db] [-c [CONFIG]] [-o [PATH]] [filename]`

| المعامل | النوع | الوصف |
| --- | --- | --- |
| filename | موضعي/اختياري | يملأ مسبقًا حقل "موقع السكربت" في واجهة المستخدم. |
| -db, --default-browser | اختياري | افتح واجهة المستخدم باستخدام المتصفح الافتراضي (قد يكون Chrome). لا يحاول العثور على Chrome. |
| -nu, --no-ui | اختياري | لا تحاول فتح واجهة المستخدم في متصفح، واطبع العنوان الذي يمكن الوصول إلى التطبيق من خلاله. |
| -c [CONFIG], --config [CONFIG] | اختياري | قدّم ملف تهيئة (json) لملء واجهة المستخدم مسبقًا. يمكن إنشاء هذه الملفات من علامة تبويب الإعدادات. |
| -o [PATH], --output-dir [PATH] | اختياري | حدد دليل الإخراج الافتراضي. لا يزال بالإمكان تغييره من واجهة المستخدم. |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | اختياري | تجاوز دليل البناء الافتراضي. مفيد إذا كنت بحاجة إلى وضع مجلد في القائمة البيضاء لبرنامج مكافحة الفيروسات لديك حتى لا يقوم بحذف الملفات. |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE] | اختياري | أعطِ واجهة المستخدم تلميحًا حول اللغة الافتراضية التي يجب استخدامها عند الفتح. يمكن إيجاد رموز اللغات في الجدول أدناه ضمن "الترجمات". |

> إذا كنت تشغّل هذه الحزمة محليًا، فستحتاج إلى استدعاء `python -m auto_py_to_exe` بدلًا من `auto-py-to-exe`.

### تهيئة JSON

بدلًا من إضافة نفس البيانات إلى واجهة المستخدم مرارًا وتكرارًا، يمكنك تصدير الحالة الحالية بالانتقال إلى قسم "التهيئة" في علامة تبويب الإعدادات وتصدير التهيئة إلى ملف JSON. يمكن بعد ذلك استيراد هذا الملف مرة أخرى إلى واجهة المستخدم لملء جميع الحقول من جديد.

نظرًا لأن انتقال أجهزة الكمبيوتر قد يعني اختلاف بنية الدلائل، فإن عملية تصدير تهيئة JSON هذه لا تحفظ دليل الإخراج تلقائيًا. إذا كنت تريد أن يكون دليل الإخراج ضمن تهيئة JSON، أضف الدليل تحت "nonPyinstallerOptions.outputDirectory" في ملف JSON (ستحتاج إلى إنشاء مفتاح جديد).

## فيديو

إذا كنت بحاجة إلى شيء مرئي لمساعدتك على البدء، لقد أعددت [فيديو للإصدار الأصلي من هذا المشروع (بالإنجليزية)](https://youtu.be/OZSZHmWSOeM)؛ قد تختلف بعض الأشياء لكن نفس المفاهيم لا تزال سارية.

## مشاكل استخدام الأداة

إذا كنت تواجه مشكلة مع الملف التنفيذي المُجمّع أو مع استخدام هذه الأداة بشكل عام،
أنصحك بقراءة [منشور المدونة الخاص بي حول المشاكل الشائعة عند استخدام auto-py-to-exe (بالإنجليزية)](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). يغطي هذا المنشور الأشياء التي تحتاج إلى معرفتها حول تجميع سكربتات بايثون، والحلول للأمور التي عادةً ما تسوء.

إذا كنت تعتقد أنك وجدت مشكلة في هذه الأداة، يُرجى [إنشاء تقرير مشكلة (بالإنجليزية)](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose) وملء القالب المقدَّم بواسطة خيار "Bug report". إذا كانت مشكلتك تخص تطبيقك فقط، فيُرجى عدم إنشاء تقرير مشكلة في هذا المستودع - بل قم بالتعليق على منشور المساعدة، أو الفيديو، أو أنشئ نقاشًا جديدًا بدلًا من ذلك.

> عند ملء القالب، تأكد من ذكر ما حدث بوضوح، ومشاركة خطوات إعادة إنتاج المشكلة، وتقديم [مثال أدنى قابل لإعادة الإنتاج (بالإنجليزية)](https://stackoverflow.com/help/minimal-reproducible-example). كما اشرح أيضًا ما هي النتيجة التي كنت تتوقعها. بدون هذه المعلومات، سيستغرق حل مشكلتك وقتًا أطول.

## دعم بايثون 2.7

اعتبارًا من [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) الصادر في 9 أغسطس 2020، لم يعد بايثون 2.7 مدعومًا؛ يمكنك الاستمرار في استخدام هذه الأداة مع بايثون 2.7 عن طريق تثبيت إصدار أقدم من PyInstaller. كان [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) آخر إصدار يدعم بايثون 2.7؛ لتثبيته، قم أولًا بإزالة الإصدارات الحالية من PyInstaller ثم نفّذ الأمر "python -m pip install pyinstaller==3.6".

## الاختبار

توجد الاختبارات في `/tests` ويتم تشغيلها باستخدام pytest:

```
pip install pytest
pip install -e .
pytest
```

## لقطات الشاشة

| <!-- --> | <!-- --> |
| --- | --- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png) | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png) |
