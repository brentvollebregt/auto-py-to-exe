<h1 align="center">Auto PY to EXE</h1>
<p align="center">一个.py到.exe的转换器，使用简单的图形界面和Python中的<a href="https://www.pyinstaller.org/">PyInstaller</a></p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Empty interface">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Downloads Per Month"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Supported Platforms"></a>
</p>

### To read README in English, press [here](./README.md)

## 让我们开始！

### 需要事先准备：
- Python : 3.5-3.9

*要在图像中显示界面，您需要使用Chrome。如果未安装Chrome或提供了--no-chrome 参数，则将使用默认浏览器。*

> 从 [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) 开始，不再支持Python 2.7。有关如何在Python2.7中使用此工具的步骤，请阅读下面的“[Python 2.7 支持](#python-27-支持)”

### 安装和使用
#### 通过 [PyPI](https://pypi.org/project/auto-py-to-exe/) 安装
您可以使用PyPI安装此项目：
```
$ pip install auto-py-to-exe
```
然后运行它，在终端中执行以下命令：
```
$ auto-py-to-exe
```

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
2. 打开cmd 或终端并cd 到该项目
3. 执行 ```python -m pip install -r requirements.txt```

现在运行应用程序，执行 ```python -m auto_py_to_exe```. 将在应用程序模式下打开一个Chrome窗口，并在其中运行本项目。

> 调用 `python -m auto_py_to_exe` 时，请确保您位于auto_py_to_exe下的目录中（在第3步之后），否则您将需要绝对/相对地将文件夹auto_py_to_exe引用到当前位置。

## 使用本程序
1. 选择您的脚本文件的位置（粘贴或使用文件浏览器）
   - 文件存在时轮廓将变为蓝色
2. 选择其他选项并添加图标或其他文件之类的内容
3. 点击底部的蓝色大按钮进行转换
4. 完成后在目录 /output中找到转换后的文件

*简单！*

### 参数
用法 `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| 参数 | 类型 | 描述 |
| - | - | - |
| filename | positional | 在用户界面中预先填写“脚本位置”字段。 |
| -nc, --no-chrome | optional | 使用默认浏览器（可能是Chrome）打开用户界面。 不会尝试寻找Chrome。 |
| -nu, --no-ui | optional | 不要试图在浏览器中打开用户界面，而只是打印出可以访问该应用程序的地址。 |
| -c [CONFIG], --config [CONFIG] | optional | 提供配置文件（json）以预填充UI。 这些可以在设置选项卡中生成。 |
| -o [PATH], --output-dir [PATH] | optional | 设置默认输出目录。这仍然可以在UI中更改。 |

> 如果您在本地运行此软件包，则需要调用 ```python -m auto_py_to_exe``` 而不是 ```auto-py-to-exe```

### 配置
您可以转到高级选项卡底部的“配置导入和导出”部分，并将JSON字符串导出到剪贴板或文件，从而导出UI的当前状态，而不是一遍又一遍地将相同的数据插入到UI中。然后可以再次将其导入到UI中，以重新填充所有字段。

## 演示视频

如果您需要可视化的东西来帮助您入门， [我为这个项目的最初版本制作了一段视频](https://youtu.be/OZSZHmWSOeM) ；有些事情可能有所不同，但相同的概念仍然适用。

## 使用该工具时出现的问题

如果您在打包的可执行文件或一般情况下使用此工具时遇到问题，建议您阅读 [我关于使用auto-py-to-exe时常见问题的博客文章](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help)。 这篇文章涵盖了一些你应该知道的关于打包Python脚本和修复常见错误的内容。

## Python 2.7 支持

从2020年8月9日发布的 [PyInstaller V4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) 开始，不再支持Python2.7；不过，通过安装旧版本的PyInstaller，您仍然可以在Python2.7中使用该工具。
[PyInstaller V3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) 是支持Python2.7的最后一个版本；要安装此版本，请先卸载任何现有版本的PyInstaller，然后执行 `python-m pip install pyinstaller==3.6`。

## 测试

测试文件位于 `tests/` 中，它们被 pytest 运行:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## 屏幕截图


| <!-- --> | <!-- --> |
| - | - |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png) | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png) |

中文翻译：[jiangzhe](https://github.com/jiangzhe11)
