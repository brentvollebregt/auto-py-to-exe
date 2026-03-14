<h1 align="center">Auto PY to EXE</h1>
<p align="center">一个 .py 到 .exe 的转换器，使用简单的图形界面和 Python 中的 <a href="https://www.pyinstaller.org/">PyInstaller</a></p>

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
| **简体中文**
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

## 演示

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="auto-py-to-exe Demo">
</p>

## 让我们开始！

### 需要事先准备：

- Python: 3.6-3.14

_要使用图像中显示的界面，您需要使用 Chrome。如果未安装 Chrome 或提供了 `--default-browser` 参数，则将使用默认浏览器。_

### 安装和使用

#### 通过 [PyPI](https://pypi.org/project/auto-py-to-exe/) 安装

您可以使用 PyPI 安装此项目：

```
$ pip install auto-py-to-exe
```

然后运行它，在终端中执行以下命令：

```
$ auto-py-to-exe
```

> 如果您安装了一个以上的 Python 版本，您可以使用 `python -m auto_py_to_exe` 来代替 `auto-py-to-exe`。

### 通过 [GitHub](https://github.com/brentvollebregt/auto-py-to-exe) 安装

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

然后运行它，在终端中执行以下命令：

```
$ auto-py-to-exe
```

#### 在本地通过 [Github](https://github.com/brentvollebregt/auto-py-to-exe) 运行（无需安装）

您可以通过以下步骤在本地运行此项目:

1. 克隆/下载 [该存储库](https://github.com/brentvollebregt/auto-py-to-exe)
2. 打开 cmd 或终端并 cd 到该项目的根目录
3. 执行 `python -m pip install -r requirements.txt`
4. 执行 `python -m auto_py_to_exe` 以运行应用

## 使用本程序

1. 选择您的脚本文件的位置（粘贴或使用文件浏览器）
   - 文件存在时轮廓将变为蓝色
2. 选择其他选项并添加图标或其他文件之类的内容
3. 点击底部的蓝色大按钮进行转换
4. 完成后在目录 /output 中找到转换后的文件

_简单！_

### 参数

使用 help 标志来获取用法: `auto-py-to-exe --help`

| 参数                                                         | 类型      | 描述                                                                                                                   |
| ------------------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| filename                                                     | 位置/可选 | 在用户界面中预先填写“脚本位置”字段。                                                                                   |
| -db, --default-browser                                       | 可选      | 使用默认浏览器（可能是 Chrome）打开用户界面。 不会尝试寻找 Chrome。                                                    |
| -nu, --no-ui                                                 | 可选      | 不要试图在浏览器中打开用户界面，而只是打印出可以访问该应用程序的地址。                                                 |
| -c [CONFIG], --config [CONFIG]                               | 可选      | 提供配置文件（json）以预填充 UI。 这些可以在设置选项卡中生成。                                                         |
| -o [PATH], --output-dir [PATH]                               | 可选      | 设置默认输出目录。这仍然可以在 UI 中更改。                                                                             |
| -bdo [FOLDER_PATH], --build-directory-override [FOLDER_PATH] | 可选      | 覆盖默认构建目录。在您需要在杀毒软件中添加排除项以停止移除文件时有用。                                                 |
| -lang [LANGUAGE_CODE], --language [LANGUAGE_CODE]            | 可选      | 告诉 UI 启动时默认应显示什么语言。语言代码可在[英文 README 的 “Translations” 部分](../../README.md#translations)找到。 |

### JSON 配置

您无需反复在用户界面中输入相同的数据，可以通过进入设置选项卡中的“设置”部分，将当前状态导出为 JSON 文件。之后，该文件可以再次导入到用户界面中，以重新填充所有字段。

此 JSON 配置导出操作不会自动保存输出目录，因为更换主机可能意味着不同的目录结构。如果需要在 JSON 配置中包含输出目录，请在 JSON 文件的 `nonPyinstallerOptions.outputDirectory` 下添加该目录（需要创建一个新键）。

## 示例

[examples/](../../examples/) 文件夹提供了一些关于如何编写您的脚本并用 auto-py-to-exe 打包它们的示例。

- [基础（控制台程序）](../../examples/1-basic/readme.md)
- [无控制台（通常基于图形界面的应用程序所需）](../../examples/2-no-console/readme.md)
- [图片和其他非 .py 文件（需要包含的静态文件）](../../examples/3-images-and-other-non-py-files/readme.md)
- [持久化数据（例如数据库）](../../examples/4-persistent-data/readme.md)

## 演示视频

如果您需要可视化的东西来帮助您入门， [我为这个项目的最初版本制作了一段视频](https://youtu.be/OZSZHmWSOeM) ；有些事情可能有所不同，但相同的概念仍然适用。

## 贡献

查阅 [CONTRIBUTING-Chinese_Simplified.md](../contributing/CONTRIBUTING-Chinese_Simplified.md) 来了解关于如何贡献的指引。本文档介绍了如果你有新功能、更改、翻译更新，或者在 auto-py-to-exe 中发现了问题，应该怎么做。

## 使用该工具时出现的问题

如果您在打包的可执行文件或一般情况下使用此工具时遇到问题，建议您阅读 [我关于使用 auto-py-to-exe 时常见问题的博客文章](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help)。 这篇文章涵盖了一些你应该知道的关于打包 Python 脚本和修复常见错误的内容。

如果您确信您发现了这个工具的一个问题，请遵循 [CONTRIBUTING-Chinese.md 文档的“报告一个问题”部分](../contributing/CONTRIBUTING-Chinese_Simplified.md#reporting-an-issue).

## Python 2.7 支持

从 2020 年 8 月 9 日发布的 [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) 开始，不再支持 Python 2.7；不过，通过安装旧版本的 PyInstaller，您仍然可以在 Python 2.7 中使用该工具。
[PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) 是支持 Python 2.7 的最后一个版本；要安装此版本，请先卸载任何现有版本的 PyInstaller，然后执行 `python -m pip install pyinstaller==3.6`。

## 测试

测试文件位于 `tests/` 中，它们被 pytest 运行:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## 屏幕截图

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |

中文翻译：[jiangzhe](https://github.com/jiangzhe11)、[Emptylight](https://github.com/emptylight370)
