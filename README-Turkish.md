<h1 align="center">Auto PY to EXE</h1>
<p align="center">Python'da basit bir grafik arayüz ve <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller (İngilizce)</a> kullanan bir .py'den .exe'ye dönüştürücü.</p>

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

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

دستور العمل های [فارسی](./README-Persian.md)

## Demo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## Başlarken

### Önkoşullar

- Python : 3.6-3.12

_Görsellerde gösterilen arayüze sahip olmak için Chrome tabanlı bir tarayıcıya ihtiyacınız olacak. Chrome kurulu değilse veya --default-browser parametresi sağlanmışsa, varsayılan tarayıcı kullanılacaktır._

> [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) itibarıyla, Python 2.7 artık desteklenmemektedir. Bu aracın Python 2.7 ile nasıl kullanılacağına ilişkin adımlar için aşağıdaki "[Python 2.7 Desteği](#python-27-destek)" bölümünü okuyun.

### Kurulum ve Kullanım

#### [PyPI](https://pypi.org/project/auto-py-to-exe/) Aracılığıyla Kurulum

Bu projeyi PyPI kullanarak kurabilirsiniz:

```
$ pip install auto-py-to-exe
```

Ardından çalıştırmak için terminalde aşağıdaki komutu yürütün:

```
$ auto-py-to-exe
```

> Python'un birden fazla sürümü kuruluysa, `auto-py-to-exe` yerine `python -m auto_py_to_exe` kullanabilirsiniz.

### [GitHub](https://github.com/brentvollebregt/auto-py-to-exe) Aracılığıyla Kurulum

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Ardından çalıştırmak için terminalde aşağıdaki komutu yürütün:

```
$ auto-py-to-exe
```

#### [Github](https://github.com/brentvollebregt/auto-py-to-exe) Üzerinden Yerel Olarak Çalıştırma (kurulum olmadan)

Aşağıdaki adımları izleyerek bu projeyi yerel olarak çalıştırabilirsiniz:

1. [Repoyu](https://github.com/brentvollebregt/auto-py-to-exe) klonlayın/indirin
2. Projeye cmd/terminal açın ve cd ile girin.
3. `python -m pip install -r requirements.txt` komutunu çalıştırın.

Şimdi uygulamayı çalıştırmak için `python -m auto_py_to_exe` komutunu yürütün. Proje içinde çalışırken uygulama modunda bir Chrome penceresi açılır.

> `python -m auto_py_to_exe` komutunu çağırırken auto_py_to_exe dizininde bulunduğunuzdan emin olun (3. adımdan sonra burada olacaksınız), aksi takdirde auto_py_to_exe klasörüne mutlak/göreli yol ile başvurmanız gerekir.

## Uygulamayı Kullanma

1. Betik konumunuzu seçin. (yapıştırın veya bir dosya gezgini kullanın)
   - Dosya mevcut olduğunda çerçeve mavi olur.
2. Diğer seçenekleri belirleyin ve ikon veya diğer dosyalar gibi şeyler ekleyin.
3. Dönüştürmek için alttaki büyük mavi düğmeye tıklayın.
4. Tamamlandığında dönüştürülen dosyalarınızı /output içinde bulabilirsiniz.

_Bu kadar kolay._

### Argümanlar

Kullanım: `auto-py-to-exe [-db] [-c [CONFIG]] [-o [PATH]] [filename]`

| Argüman                                                      | Tip                | Açıklama                                                                                                                                                                     |
| ------------------------------------------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | konumsal/opsiyonel | Kullanıcı arayüzündeki "Komut Dosyası Konumu" alanını önceden doldurun.                                                                                                      |
| -db, --default-browser                                       | opsiyonel          | Varsayılan tarayıcıyı (Chrome olabilir) kullanarak kullanıcı arayüzünü kalemleyin. Chrome'u bulmaya çalışmaz.                                                                |
| -nu, --no-ui                                                 | opsiyonel          | Kullanıcı arayüzünü bir tarayıcıda açmaya çalışmayın ve uygulamanın erişilebileceği adresi yazdırın.                                                                         |
| -c [CONFIG], --config [CONFIG]                               | opsiyonel          | Kullanıcı arayüzünü önceden doldurmak için bir yapılandırma dosyası (json) sağlayın. Bunlar ayarlar sekmesinde oluşturulabilir.                                            |
| -o [PATH], --output-dir [PATH]                               | opsiyonel          | Varsayılan çıktı dizinini ayarlayın. Bu, kullanıcı arayüzünde hala değiştirilebilir.                                                                                         |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | opsiyonel          | Varsayılan derleme dizinini geçersiz kılın. Antivirüs programınızın dosyaları kaldırmasını durdurmak için bir klasörü beyaz listeye almanız gerekiyorsa kullanışlıdır. |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | opsiyonel          | Kullanıcı arayüzüne, açarken varsayılan olarak hangi dili kullanması gerektiği konusunda ipucu verin. Dil kodları aşağıdaki "Çeviriler" altındaki tabloda bulunabilir.       |

> Bu paketi yerel olarak çalıştırıyorsanız, `auto-py-to-exe` yerine `python -m auto_py_to_exe` komutunu çağırmanız gerekecektir.

### JSON Yapılandırması

Aynı verileri kullanıcı arayüzüne tekrar tekrar eklemek yerine, ayarlar sekmesindeki "Yapılandırma" bölümüne gidip yapılandırmayı bir JSON dosyasına aktararak mevcut durumu dışa aktarabilirsiniz. Bu, daha sonra tüm alanları yeniden doldurmak için kullanıcı arayüzüne tekrar içe aktarılabilir.

Bilgisayarların taşınması farklı dizin yapıları anlamına gelebileceğinden, bu JSON yapılandırma dışa aktarma işlemi çıktı dizinini otomatik olarak kaydetmez. Çıktı dizininin JSON yapılandırmasında olmasını istiyorsanız, dizini JSON dosyasındaki "nonPyinstallerOptions.outputDirectory" altına ekleyin (yeni bir anahtar oluşturmanız gerekir).

## Video

Başlamanıza yardımcı olacak görsel bir şeye ihtiyacınız varsa, [Bu projenin orijinal sürümü için bir video hazırladım (İngilizce)](https://youtu.be/OZSZHmWSOeM); bazı şeyler farklı olabilir ama aynı kavramlar hala geçerli.

## Aracı Kullanmayla İlgili Sorunlar

Paketlenmiş yürütülebilir dosyayla ilgili sorun yaşıyorsanız veya genel olarak bu aracı kullanıyorsanız,
[auto-py-to-exe kullanırken sık karşılaşılan sorunlar hakkındaki blog yazımı (İngilizce)](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help) okumanızı tavsiye ederim. Bu yazı, Python betiklerini paketleme hakkında bilmeniz gereken şeyleri ve genellikle yanlış giden şeyler için çözümleri kapsar.

Bu araçla ilgili bir sorun bulduğunuzu düşünüyorsanız, lütfen [bir sorun bildirimi oluşturun (İngilizce)](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose) "Bug report" seçeneği tarafından sağlanan şablonu doldurun. Sorununuz yalnızca uygulamanızla ilgiliyse, lütfen bu depoda bir sorun bildirimi oluşturmayın - bunun yerine yardım gönderisine, videoya yorum yapın veya yeni bir tartışma oluşturun.

> Şablonu doldururken, neler olduğunu açık bir şekilde belirttiğinizden, sorunu yeniden oluşturma adımlarını paylaştığınızdan ve bir [minimal tekrarlanabilir örnek (İngilizce)](https://stackoverflow.com/help/minimal-reproducible-example) sunduğunuzdan emin olun. Ayrıca beklediğiniz sonucun ne olduğunu da açıklayın. Bu bilgiler olmadan sorununuzu çözmek daha uzun zaman alacaktır.

## Python 2.7 Desteği

9 Ağustos 2020'de yayınlanan [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) itibarıyla Python 2.7 artık desteklenmemektedir; PyInstaller'ın daha eski bir sürümünü yükleyerek bu aracı Python 2.7 ile kullanmaya devam edebilirsiniz. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6), Python 2.7'yi destekleyen son sürümdü; bunu yüklemek için önce PyInstaller'ın mevcut sürümlerini kaldırın ve ardından "python -m pip install pyinstaller==3.6" komutunu çalıştırın.

## Test

Testler `/tests` içinde bulunur ve pytest kullanılarak çalıştırılır:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Ekran Görüntüleri

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
