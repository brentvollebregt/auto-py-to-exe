# Contributing to auto-py-to-exe

👍🎉 First off, thanks for your interest in contributing! 🎉👍

This document describes contribution guidelines that are specific to auto-py-to-exe. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table Of Contents

- [I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [Reporting an Issue](#reporting-an-issue)
- [Request a Feature](#request-a-feature)
- [Pull Requests](#pull-requests)
  - [A New Feature / Change to an Existing Feature](#a-new-feature-change-to-an-existing-feature)
  - [Add or Update a Translation](#add-or-update-a-translation)

## I don't want to read this whole thing, I just have a question!!!

> Please don't create an issue to ask a question.

For questions and general help, [create a new discussion](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose) and provide a clear description of what's going on.

## Reporting an Issue

> Please don't create an issue to ask a question or get help with something specific to your application. Instead [create a new discussion](https://github.com/brentvollebregt/auto-py-to-exe/discussions/new/choose).

If you run into an error or bug with auto-py-to-exe:

1. Open a [new issue with the "Bug report" template](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=bug_report.md)
2. Fill out the template
3. Create the issue

Please be sure to clearly explain what's happening, give reproduction steps and a [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) and explain what you believe should have happened.

## Request a Feature

If auto-py-to-exe doesn't do something you need or want it to do:

1. Open a [new issue with the "Feature request" template](https://github.com/brentvollebregt/auto-py-to-exe/issues/new?template=feature_request.md)
2. Fill out the template
3. Create the issue

Please provide as much context as you can about what you're running into and be clear about why existing features and alternatives would not work for you.

## Pull Requests

### A New Feature / Change to an Existing Feature

If you want to add a feature or change something that's existing:

1. Go to create a pull request
2. When filling out the description initially, read the instructions to pick the `✨ A new feature` template
3. Fill out the new template
4. Create the PR

### Add or Update a Translation

If you want to add a new or update an existing translation:

1. Update [i18n.js](https://github.com/brentvollebregt/auto-py-to-exe/blob/master/auto_py_to_exe/web/js/i18n.js)
2. Go to create a pull request
3. When filling out the description initially, read the instructions to pick the `📄 A new or updated translation` template
4. Fill out the new template
5. Create the PR

> If you are unable to submit a pull request, you can also submit the changes in a new issue.

## Style Guide

For Python, we use [Ruff](https://github.com/astral-sh/ruff) to format, lint and auto-sort imports. The easiest way to use Ruff is through the Visual Studio Code extension - formatting is run on save. You can also format using Ruff's CLI by first installing ruff using `pip install ruff` and then executing `ruff format .`.

For JavaScript, CSS, HTML, Markdown, JSON and YAML, we use [Prettier](https://prettier.io/). The easiest way to use Prettier is through the Visual Studio Code extension - formatting is run on save. You can also format using Prettier's CLI by executing `npx prettier@2.8.8 --write .`.

Formatting is checked using a GitHub Action workflow - all PRs are checked to comply with the formatters and linting.
