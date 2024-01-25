<h1 align="center">Auto PY to EXE</h1>
<p align="center">.یک مبدل py. به exe. در محیط گرافیکی که استفاده می کند از <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> در پایتون</p>

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

阅读中文版的README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [انگلیسی](./README.md)

## پیش نمایش

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## شروع کنید

### پیش نیاز ها

- Python : 3.6-3.12

_برای نمایش رابط کاربری در تصاویر، به کروم نیاز دارید. اگر کروم نصب نشده باشد یا ارائه شده باشد، از مرورگر پیش فرض استفاده می شود--no-chrome_

> از[pyinstaler 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), پایتون 2.7 پشتیبانی طولانی نمی کند, بخوانید [پشتیبانی پایتون 2.7 را](#python-27-support)
> در زیر مراحل نحوه استفاده از این ابزار با پایتون 2.7 را مشاهده می کنید

### نصب و استفاده

#### [PyPI ](https://pypi.org/project/auto-py-to-exe/)نصب کردن با

شما میتوانید این پروژه را نصب و استفاده کنید با pypi :

```
$ pip install auto-py-to-exe
```

سپس برای اجرای آن موارد زیر را در ترمینال اجرا کنید :

```
$ auto-py-to-exe
```

اگر بیش از یک نسخه از پایتون را نصب کردید :

> می توانید از `python -m auto_py_to_exe` به جای `auto py to exe` استفاده کنید

### [GitHub](https://github.com/brentvollebregt/auto-py-to-exe) نصب با

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

سپس برای اجرای آن، موارد زیر را در ترمینال اجرا کنید :

```
$ auto-py-to-exe
```

#### [Github](https://github.com/brentvollebregt/auto-py-to-exe) اجرای لوکال (بدون نصب)

شما میتوانید پروژه را به صورت لوکال اجرا کنید :

1. کلون یا دانلود کنید [مخزن را](https://github.com/brentvollebregt/auto-py-to-exe)
2. یا ترمینال به پوشه پروژه خود بروید cmd در cd با دستور
3. اجرا کنید `python -m pip install -r requirements.txt`

اکنون برای اجرای برنامه `python -m auto_py_to_exe` را اجرا کنید
یک پنجره کروم در حالت برنامه اجرا میشود که پروژه در آن اجرا خواهد شد

> مطمئن شوید که در داخل مخزن auto-py-to-exe هستید حالا برای اجرای برنامه `python -m auto_py_to_exe`
> را وارد کنید
> یا نیاز دارید auto-py-to-exe را به جایی که در حال حاضر هستید ارجاع دهید

## استفاده از برنامه

1. انتخاب کنید محل کد خود را (یا میتوانید پیست کنید از فایل اکسپلورر)
   - اگر فایل وجود داشته باشد خط دور آبی می شود
2. گزینه های دیگر را انتخاب کنید و چیز هایی مانند آیکون یا فایل های ضمیمه را انتخاب کنید
3. برای تبدیل روی کلید بزرگ آبی در پایین صفحه کلیک کنید
4. بعد از تکمیل فایل های خود ا در پوشه ی output پیدا کنید

_خیلی راحت :)_

### مقادیر

استفاده: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| مقادیر                                                       | نوع             | توضیحات                                                                                                                                         |
| ------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | موقعیتی/اختیاری | فیلد محل کد را از قبل در رابط کاربری پر کنید                                                                                                    |
| -nc, --no-chrome                                             | اختیاری         | رابط کاربری با استفاده از مرورگر پیشفرض (که می تواند کروم باشد) باز می شود(ولی تلاشی برای پیدا کردن کروم نمی کند).                              |
| -nu, --no-ui                                                 | اختیاری         | سعی نکنید رابط کاربری را در یک مرورگر باز کنید و به سادگی آدرسی را که برنامه قابل دسترسی است چاپ کنید                                           |
| -c [CONFIG], --config [CONFIG]                               | اختیاری         | یک فایل پیکربندی (جی سان) برای پر کردن رابط کاربری از قبل ارائه دهید, اینها را میتوان در تب تنظیمات ایجاد کرد                                   |
| -o [PATH], --output-dir [PATH]                               | اختیاری         | دایرکتوری خروجی پیش فرض را تنظیم کنید. این هنوز هم در رابط کاربری قابل تغییر است                                                                |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | اختیاری         | دایرکتوری پیشفرض برای ساخت را لغو کنید. اگر لازم است پوشه ای را در لیست سفید قرار دهید تا از حذف فایل های آنتی ویروس خود جلوگیری کنید، مفید است |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | اختیاری         | به رابط کاربری بگویید میخواهید از چه زبانی استفاده کنید.زبان هارا میتوانید در مرا بخوانید انگلیسی و در جدول ترجمه ها پیدا کنید                  |

> اگر این بسته را به صورت لوکال اجرا میکنید باید از `python -m auto-py-to-exe` به جای `auto-py-to-exe` استفاده کنید

### پیکر بندی JSON

به جای اینکه بارها و بارها تنظیمات را در رابط کاربری وارد کنید می توانید با رفتن به تنظیمات و Configuration تنظیمات را به یک فایل json ارسال کنید.سپس میتوان آن را دوباره با رابط کاربری باز کرد تا همه ی فیلد ها دوباره پر شوند.البته این کار دایرکتوری خروجی را در فایل json به طور خودکار ذخیره نمیکند چون ممکن است یک پروژه ی جدید به معنای یک دایرکتوری خروجی جدید باشد.اگر میخواهید دایرکتوری خروجی خود را در فایل json داشته باشید میتوانید دایرکتوری خروجی را در `nonPyinstallerOptions.outputDirectory` در فایل json اضافه کنید(نیاز به ساخت یک کلید جدید است).

## ویدئو

اگر به چیزی بصری نیاز دارید که به شما در شروع کار کمک کند، من یک [ویدیو برای انتشار اصلی این پروژه](https://youtu.be/OZSZHmWSOeM) ساختم برخی چیزها ممکن است متفاوت باشند، اما همان مفاهیم همچنان اعمال می شوند.

## مشکلات استفاده از ابزار

اگر با فایل اجرایی بسته بندی شده مشکل دارید یا به طور کلی از این ابزار استفاده می کنید، توصیه می کنم [پست وبلاگ من در مورد مسائل رایج هنگام استفاده از auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help) را بخوانید. این پست مواردی را که باید در مورد بسته‌بندی اسکریپت‌های پایتون بدانید و مواردی که معمولاً اشتباه می‌شوند را برطرف می‌کند.
اگر فکر می‌کنید با این ابزار مشکلی پیدا کرده‌اید، لطفا[یک issue بسازید](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose)(روی Get Started کلیک کنید و Bug Report را بزنید و بعد از تکمیل فرم رویSubmit New Issue کلیک کنید و اگر مشکل شما فقط با برنامه ی شما مرتبط است, لطفا در این مخزن مشکلی ایجاد نکنید ولی در عوض در پست راهنما یا ویدئو نظر دهید یا بحث جدیدی را ایجاد کنید).

> هنگام پر کردن الگو، حتماً به وضوح توضیح دهید که چه اتفاقی می‌افتد، مراحل بازتولید و یک [مثال قابل تکرار حداقل](https://stackoverflow.com/help/minimal-reproducible-example) را ارائه دهید و آنچه را که فکر می‌کنید باید اتفاق می‌افتاد توضیح دهید. . بدون این موارد، شناسایی مشکل بیشتر طول می کشد.

> می خواهید ترجمه ای برای زبان دیگری اضافه کنید؟ [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js) را به‌روزرسانی کنید و یک پول ریکوئست ارسال کنید یا آن را در یک issue پیوست کنید.

## پشتیبانی پایتون 2.7

از زمانی که [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) در 9 آگوست 2020 منتشر شد، پایتون 2.7 دیگر پشتیبانی نمی‌شود. اگرچه هنوز می توانید با نصب نسخه قدیمی PyInstaller از این ابزار با Python 2.7 استفاده کنید. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) آخرین نسخه ای بود که از Python 2.7 پشتیبانی می کرد. برای نصب این، ابتدا هر نسخه موجود PyInstaller را حذف نصب کنید و سپس `python -m pip install pyinstaller==3.6` را اجرا کنید.

## تست کردن

تست ها در `test/` قرار دارند و با استفاده از pytest اجرا میشوند :

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## اسکرین شات ها

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
