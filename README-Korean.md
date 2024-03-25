<h1 align="center">Auto PY to EXE</h1>
<p align="center">간편한 그래픽 인터페이스와 Python의 <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a>를 사용한 .py → .exe 변환기</p>

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

To read README in English, press [here](./README.md)

阅读中文版的 README ，点击 [这里](./README-Chinese.md)

Suomenkieliset käyttöohjeet löydät [täältä](./README-Finnish.md)

Türkçe Talimatları [burada](./README-Turkish.md) bulabilirsiniz.

دستور العمل های [فارسی](./README-Persian.md)

## 데모

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## 시작하기

### 요구 사항

- Python : 3.6-3.12

_이미지와 같이 인터페이스를 표시하려면, Chrome이 필요합니다. Chrome이 설치되어 있지 않거나, --no-chrome 매개변수와 실행된다면, 기본 브라우저가 사용됩니다._

> [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0)부터 Python 2.7를 지원하지 않습니다. 아래의 "[Python 2.7 지원](#python-27-지원)" 문단을 차례로 읽고 Python 2.7에서 사용법을 알아보세요.

### 설치 및 사용법

#### [PyPI](https://pypi.org/project/auto-py-to-exe/)를 이용한 설치 방법

PyPI를 사용해 이 프로젝트를 설치할 수 있습니다:

```
$ pip install auto-py-to-exe
```

실행되었다면, 다음 명령어를 터미널에 입력하세요:

```
$ auto-py-to-exe
```

> 만약 두 개 이상의 Python 버전이 설치되어 있다면 `auto-py-to-exe` 대신에 `python -m auto_py_to_exe`를 사용할 수도 있습니다.

#### [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)를 이용한 설치 방법

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

실행되었다면, 다음 명령어를 터미널에 입력하세요:

```
$ auto-py-to-exe
```

#### [Github](https://github.com/brentvollebregt/auto-py-to-exe)를 이용한 로컬 사용 방법 (설치 X)

이 프로젝트를 로컬로 사용할 수 있습니다. 다음 차례를 참고하세요:

1. [레포지토리](https://github.com/brentvollebregt/auto-py-to-exe)를 클론/다운로드하세요
2. 터미널을 열고 경로를 `cd <프로젝트 경로>`를 이용해 프로젝트의 경로로 전환하세요
3. `python -m pip install -r requirements.txt`를 실행하세요

이제 앱을 열려면, `python -m auto_py_to_exe`을 실행하세요. 앱 모드의 Chrome 창이 프로젝트가 실행된 채로 열립니다.

> auto_py_to_exe 하에 있는 디렉토리에서 실행했는지 확인하세요. (차례 3번을 실행한 후 기준) 아니면 auto_py_to_exe 폴더를 귀하가 있는 절대/상대 경로로 참조해야 합니다.

## 앱을 사용해봅시다

1. 스크립트 위치를 선택합니다 (경로를 직접 붙여넣거나 파일 탐색기를 사용하세요)
   - 파일이 존재한다면 입력칸 경계선이 파란색으로 설정됩니다
2. 다른 옵션을 선택하거나 아이콘이나 다른 파일을 추가합니다
3. 맨 아래에 있는 파란색 큰 변환 버튼을 클릭합니다
4. 변환이 완료된다면, /output 경로에서 변환된 파일을 찾을 수 있습니다

_참 쉽죠?_

### 매개변수

사용법: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| 매개변수                                                 | 형식          | 설명                                                                                                                                    |
| -------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| filename                                                 | 위치적/선택적 | UI의 "스크립트 위치"를 미리 채웁니다(pre-fill).                                                                                         |
| -nc, --no-chrome                                         | 선택적        | UI를 Chrome 이 아닌 기본 브라우저(Chrome이 기본값일 수 있음)로 엽니다. 앱은 Chrome 설치 여부를 탐색하지 않습니다.                       |
| -nu, --no-ui                                             | 선택적        | 추가 브라우저 창을 열지 않고, 앱에 접근할 수 있는 localhost 주소값만 출력됩니다.                                                        |
| -c [구성], --config [구성]                               | 선택적        | UI를 미리 채울 수 있는 구성 파일(json)을 제공합니다. 설정 탭에서 생성됩니다.                                                            |
| -o [경로], --output-dir [경로]                           | 선택적        | 출력 디렉토리 기본값을 지정합니다. 이 값은 UI에서 직접 바꿀 수도 있습니다.                                                              |
| -bdo [폴더 경로], --build-directory-override [폴더 경로] | 선택적        | 기본값 빌드 디렉토리를 덮어씌웁니다. 안티바이러스(백신)에 의해 파일이 지워지는 걸 방지할 때 유용합니다.                                 |
| -lang [언어 코드], --language [언어 코드]                | 선택적        | UI에 기본값으로 설정될 언어를 지정합니다. 언어 코드는 README.md의 [Translations](./README.md#translations) 문단에서 확인할 수 있습니다. |

> 만약 로컬에서 이 패키지를 실행한다면, `auto-py-to-exe` 대신에 `python -m auto_py_to_exe`를 실행해야 합니다.

### JSON 구성

UI에 같은 데이터를 계속해서 집어넣는 대신에, "설정" 탭에 있는 "구성" 섹션에서 현재 적용된 설정을 JSON 파일에 저장할 수 있습니다. 이 파일을 추후에 UI에서 다시 파일을 불러와 이전에 저장한 설정을 적용할 수 있습니다.

호스트를 이동하면 디렉터리 구조가 달라질 수 있으므로 이 JSON 구성 저장 작업은 출력 디렉터리를 자동으로 저장하지 않습니다. JSON 구성에 출력 디렉터리를 포함하려면 JSON 파일의 `nonPyinstallerOptions.outputDirectory` 키를 생성해 디렉터리를 추가하세요(새 키를 생성해야 합니다).

```json
"nonPyinstallerOptions": {
  ...
  outputDirectory: <추가할 디렉토리>
}
```

## 영상 도움말

만약 영상 도움말을 보고 싶으시다면, [프로젝트의 정식 배포를 위해 제가 만든 영상(영어)](https://youtu.be/OZSZHmWSOeM)을 참고하세요.

## 앱 사용 중 문제가 발생했습니다

만약 패키징된 실행 파일이나 이 앱의 일반적인 툴을 사용하는 데 문제가 발생했다면, [auto-py-to-exe를 사용할 때 발생할 수 있는 문제에 대한 제 블로그 포스트(영어)](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help)를 읽는 것을 추천합니다. 이 포스트는 Python 스크립트를 패키징할 때 알고 있어야 할 것들과 문제가 발생했을 때의 해결 법을 다룹니다.

만약 이 앱과 관련된 문제가 발생했다면, [issue를 생성해주세요](https://github.com/brentvollebregt/auto-py-to-exe/issues/new/choose) ("Get Started"를 클릭합니다) 그리고 "Bug report" 옵션에 제공된 템플릿을 모두 채워넣습니다. 만약 issue가 귀하의 컴퓨터에서만 발생되고 관련된 문제라면, issue를 생성하지 마세요. 대신, 블로그 포스트나 영상에 댓글을 달거나, 새 discussion을 여세요.

> 템플릿을 채워넣을 때, 정확히 어떤 일이 일어났는지 설명하고, 어떤 방법을 통하면 이 문제가 발생하는 지 [간단한 재현 가능한 예제](https://stackoverflow.com/help/minimal-reproducible-example)를 제공하고, 원래 의도된 작업이 무엇일지 설명해주세요. 이러한 구체적인 명시가 없으면 문제를 찾는 데 많은 시간이 소요될 수 있습니다.

## Python 2.7 지원

[PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0)이 2020년 8월 9일에 지원 시작된 이후부터 Python 2.7를 지원하지 않습니다. 하지만, 아직 PyInstaller의 이전 버전을 설치해 Python 2.7에서 실행 할 수 있습니다. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6)은 Python 2.7을 지원하는 가장 마지막 버전입니다. 이 버전을 설치하기 위해선, 먼저 이미 설치된 버전의 PyInstaller를 삭제하고, 그 다음 `python -m pip install pyinstaller==3.6` 명령을 실행해 설치를 끝마칩니다.

## 테스트

테스트는 `tests/` 폴더에 있으며 pytest 모듈을 통해 실행됩니다:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## 스크린샷

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
