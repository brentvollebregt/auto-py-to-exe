<h1 align="center">Auto PY to EXE</h1>
<p align="center">एक .py से .exe में रूपांतरक जो एक सरल ग्राफिकल इंटरफेस और पाइथन में <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> का उपयोग करता है।</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="खाली इंटरफेस">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI संस्करण"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI समर्थित संस्करण"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="लाइसेंस"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="प्रति माह डाउनलोड"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="समर्थित प्लेटफ़ॉर्म"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="दान करें"></a>
</p>

## इस फ़ाइल का अनुवाद

[यहाँ](./README-Chinese.md) चीनी संस्करण को पढ़ें

[यहाँ](./README-Finnish.md) फ़िनिश संस्करण के निर्देश प्राप्त करें

[Türkçe Talimatları burada](./README-Turkish.md) पाएं

[यहाँ](./README-Persian.md) फ़ारसी संस्करण के निर्देश प्राप्त करें

[यहाँ](./README-Korean.md) कोरियाई संस्करण को देखें

[यहाँ](README-Bulgarian.md) बल्गेरियाई संस्करण को देखें

## डेमो

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="ऑटो-पाई-टू-ईक्सी डेमो">
</p>

## प्रारंभ करना

### पूर्वापेक्षाएँ

- पाइथन: 3.6-3.12

_इसे चित्रों में प्रदर्शित करने के लिए, आपको Chrome की आवश्यकता होगी। यदि Chrome स्थापित नहीं है या `--default-browser` पास किया गया है, तो डिफ़ॉल्ट ब्राउज़र का उपयोग किया जाएगा।_

### स्थापना और उपयोग

#### [PyPI](https://pypi.org/project/auto-py-to-exe/) के माध्यम से स्थापना

आप इस परियोजना को PyPI का उपयोग करके स्थापित कर सकते हैं:

```
$ pip install auto-py-to-exe
```

फिर इसे चलाने के लिए, टर्मिनल में निम्नलिखित का अभ्यास करें:

```
$ auto-py-to-exe
```

> यदि आपके पास एक से अधिक पाइथन संस्करण स्थापित हैं, तो आप `python -m auto_py_to_exe` का उपयोग `auto-py-to-exe` के बजाय कर सकते हैं।

#### [GitHub](https://github.com/brentvollebregt/auto-py-to-exe) के माध्यम से स्थापना

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

फिर इसे चलाने के लिए, टर्मिनल में निम्नलिखित का अभ्यास करें:

```
$ auto-py-to-exe
```

#### [GitHub](https://github.com/brentvollebregt/auto-py-to-exe) के माध्यम से स्थानिक रूप से चलाना (स्थापना नहीं)

आप इस परियोजना को स्थानिक रूप से चला सकते हैं निम्नलिखित चरणों का पालन करके:

1. [रेपो](https://github.com/brentvollebregt/auto-py-to-exe) क्लोन/डाउनलोड करें
2. cmd/terminal खोलें और प्रोजेक्ट के रूट फ़ोल्डर में जाएं
3. `python -m pip install -r requirements.txt` का अभ्यास करें
4. अनुप्रयोग को चलाने के लिए `python -m auto_py_to_exe` का अभ्यास करें

## अनुप्रयोग का उपयोग

1. अपने स्क्रिप्ट स्थान का चयन करें (पेस्ट करें या फ़ाइल अन्वेषक का उपयोग करें)
   - बाहरीरेखा नीली हो जाएगी अगर फ़ाइल मौजूद है
2. अन्य विकल्पों का चयन करें और ऐसी चीजें जोड़ें जैसे एक प्रतिमा या अन्य फ़ाइलें
3. नीचे बड़े नीले बटन पर क्लिक करें कनवर्ट करने के लिए
4. पूरा होने पर /output में अपनी कनवर्ट की गई फ़ाइलें ढूंढें

_आसान।_

### तर्क

उपयोग के लिए मदद ध्वज का उपयोग करें: `auto-py-to-exe --help`

| तर्क                                                         | प्रकार         | विवरण                                                                                                                                       |
| ------------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| फ़ाइलनाम                                                     | स्थानिक/ऐच्छिक | UI में "स्क्रिप्ट स्थान" क्षेत्र को पूर्व-भरित करें।                                                                                        |
| -db, --default-browser                                       | ऐच्छिक         | डिफ़ॉल्ट ब्राउज़र का उपयोग करके UI खोलें (जो कि Chrome हो सकता है)। Chrome को खोजने का प्रयास नहीं किया जाएगा।                              |
| -nu, --no-ui                                                 | ऐच्छिक         | ब्राउज़र में UI खोलने का प्रयास न करें और केवल उस पते को मुद्रित करें जहां एप्लिकेशन तक पहुँचा जा सकता है।                                  |
| -c [CONFIG], --config [CONFIG]                               | ऐच्छिक         | UI को पूर्व-भरित करने के लिए एक कॉन्फ़िगरेशन फ़ाइल (JSON) प्रदान करें। इन्हें सेटिंग्स टैब में उत्पन्न किया जा सकता है।                     |
| -o [PATH], --output-dir [PATH]                               | ऐच्छिक         | डिफ़ॉल्ट आउटपुट निर्देशिका सेट करें। यह UI में अभी भी बदला जा सकता है।                                                                      |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | ऐच्छिक         | डिफ़ॉल्ट निर्माण निर्देशिका को ओवरराइड करें। अधिक सुरक्षित फ़ाइलें हटाने के लिए एक फ़ोल्डर को व्हाइटलिस्ट करने के लिए उपयोगी।               |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | ऐच्छिक         | UI को खोलते समय यह संकेत दें कि इसे कौनसी भाषा में डिफ़ॉल्ट करना चाहिए। भाषा कोड निम्नलिखित "अनुवाद" नीचे स्थानांतरण टेबल में मिल सकते हैं। |

### JSON कॉन्फ़िगरेशन

बार-बार UI में एक ही डेटा डालने के बजाय, आप वर्तमान स्थिति को "कॉन्फ़िगरेशन" खंड में जाकर अपनी स्थिति को निर्यात करके बचा सकते हैं JSON फ़ाइल में। इसे फिर से UI में आयात किया जा सकता है ताकि सभी फ़ील्डों को पुनः-भरने में मदद मिले।

यह जेएसओएन कॉन्फ़िग निर्यात क्रिया स्वचालित रूप से आउटपुट निर्देशिका को सहेजती नहीं है क्योंकि होस्ट को बदलने के बाद विभिन्न निर्देशिका संरचनाएँ हो सकती हैं। यदि आप जेएसओएन कॉन्फ़िग में आउटपुट निर्देशिका चाहते हैं, तो नया कुंजी बनाने के लिए जेएसओएन फ़ाइल में `nonPyinstallerOptions.outputDirectory` के तहत निर्देशिका जोड़ें (नई कुंजी बनानी होगी)।

## वीडियो

अगर आपको शुरू होने में सहायता के लिए कुछ दिखाई दे रहा है, [मैंने इस परियोजना के मूल रिलीज के लिए एक वीडियो बनाया](https://youtu.be/OZSZHmWSOeM) था; कुछ बातें भिन्न हो सकती हैं लेकिन वे यहाँ भी लागू होंगी।

## योगदान

योगदान कैसे करें, इसके लिए [CONTRIBUTING.md](./CONTRIBUTING.md) देखें। यह बताता है कि आपके पास नई सुविधा, परिवर्तन, अनुवाद अपडेट या auto-py-to-exe के साथ समस्या मिलने पर क्या करना चाहिए।

## उपकरण का उपयोग में समस्याएँ

यदि आप पैकेजड एक्सेक्यूटेबल के साथ समस्या हैं या सामान्य रूप से इस उपकरण का उपयोग करते समय कोई समस्या है, तो मैं सिफारिश करता हूं कि आप [auto-py-to-exe का उपयोग करते समय सामान्य समस्याओं पर मेरे ब्लॉग पोस्ट को पढ़ें](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help)। इस पोस्ट में आपको पायथन स्क्रिप्ट को पैकेज करने के बारे में जानकारी मिलेगी और जो चीजें आमतौर पर गलत हो जाती हैं के लिए ठीक कराव दिया जाता है।

यदि आपको लगता है कि आपने इस उपकरण के साथ कोई समस्या पाई है, तो कृपया [CONTRIBUTING.md में "समस्या की रिपोर्ट करना" अनुभाग का पालन करें](./CONTRIBUTING.md#reporting-an-issue)।

## Python 2.7 समर्थन

2020 के अगस्त 9 को जारी [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) के अनुसार, Python 2.7 का समर्थन अब नहीं है; हालांकि, आप प्याथन 2.7 के साथ इस उपकरण का उपयोग कर सकते हैं पुराने संस्करण की स्थापना करके। [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) आखिरी संस्करण था जिसने Python 2.7 का समर्थन किया; इसे स्थापित करने के लिए, पहले PyInstaller के किसी भी मौजूदा संस्करण को अनइंस्टॉल करें और फिर `python -m pip install pyinstaller==3.6` का निष्पादन करें।

## परीक्षण

परीक्षण `tests/` में स्थित हैं और pytest का उपयोग करके चलाए जाते हैं:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## स्क्रीनशॉट

| <!-- -->                                                                                                                                          | <!-- -->                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![खाली इंटरफेस](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![भरा हुआ](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![रूपांतरण](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)               | [![पूर्ण](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)     |
