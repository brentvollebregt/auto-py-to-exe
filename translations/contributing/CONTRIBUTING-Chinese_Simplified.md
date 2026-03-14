# 贡献给 auto-py-to-exe

[English](../../CONTRIBUTING.md)
| [српски](../../CONTRIBUTING-Serbian_Cyrillic.md)
| [srpski](../../CONTRIBUTING-Serbian_Latin.md)
| **简体中文**

👍🎉 首先，感谢您对贡献的兴趣！ 🎉👍

本文档介绍了专门针对 auto-py-to-exe 的贡献指南。这些大多是指导原则，而非硬性规定。请运用您的最佳判断，并欢迎通过拉取请求对本文档提出修改建议。

## 目录

- [我不想读这全部内容，我只是有个问题！！！](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [报告一个问题](#reporting-an-issue)
- [请求添加一个功能](#request-a-feature)
- [拉取请求（Pull Requests）](#pull-requests)
  - [一个新功能/修改现有的功能](#a-new-feature-change-to-an-existing-feature)
  - [添加或更新一个翻译](#add-or-update-a-translation)
- [代码风格指南](#style-guide)

## 我不想读这全部内容，我只是有个问题！！！ <a id="i-dont-want-to-read-this-whole-thing-i-just-have-a-question"></a>

> 请不要创建一个 issue 来问一个问题。

对于问题和一般的帮助，[创建一个新讨论](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose)并提供一个清晰的描述说明发生了什么。

## 报告一个问题 <a id="reporting-an-issue"></a>

> 请不要创建一个 issue 来问一个问题或获取特定于您应用的帮助。请[创建一个新讨论](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose).

如果你在使用 auto-py-to-exe 时遇到错误或漏洞:

1. [使用 "Bug report" 模板打开一个新 issue](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=bug_report.md)
2. 填写模板
3. 创建 issue

请确认已经清晰地解释了发生了什么，提供复现步骤和一个[最小化重现示例](https://stackoverflow.com/help/minimal-reproducible-example)并解释您确信应该发生什么。

## 请求添加一个功能 <a id="request-a-feature"></a>

如果 auto-py-to-exe 没有做什么您需要的或想要它做的:

1. [使用 "Feature request" 模板打开一个新 issue](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=feature_request.md)
2. 填写模板
3. 创建 issue

请尽可能详细地描述您遇到的问题，并清楚地说明为什么现有的功能或替代方案对您不适用。

## 拉取请求（Pull Requests） <a id="pull-requests"></a>

### 一个新功能/修改现有的功能 <a id="a-new-feature-change-to-an-existing-feature"></a>

如果你想添加一个新功能或修改现有内容：

1. 前往创建一个拉取请求
2. 在最初填写描述时，阅读说明并选择 `✨ A new feature` 模板
3. 填写新模板
4. 创建拉取请求

### 添加或更新一个翻译 <a id="add-or-update-a-translation"></a>

如果您想要添加一个新的翻译或更新现有的翻译:

1. 更新 [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js)
2. 前往创建一个拉取请求
3. 填写描述时，先阅读说明并选择 `📄 A new or updated translation` 模板。
4. 填写新模板
5. 创建拉取请求

> 如果您无法提交拉取请求，您可以在新 issue 中提交更改。

## 代码风格指南 <a id="style-guide"></a>

对于 Python，我们使用 [Ruff](https://github.com/astral-sh/ruff) 进行格式化、代码检查以及自动排序导入。使用 Ruff 最简单的方式是通过 Visual Studio Code 扩展——保存文件时自动运行格式化。你也可以通过 Ruff 的命令行工具进行格式化，首先使用 `pip install ruff` 安装 ruff，然后执行 `ruff format .`。

对于 JavaScript、CSS、HTML、Markdown、JSON 和 YAML，我们使用 [Prettier](https://prettier.io/)。使用 Prettier 最简单的方式是通过 Visual Studio Code 扩展——保存文件时自动运行格式化。你也可以通过 Prettier 的命令行工具进行格式化，执行 `npx prettier@2.8.8 --write .`。

格式化检查通过 GitHub Actions 工作流进行——所有拉取请求都会被检查是否符合格式化和代码检查规范。
