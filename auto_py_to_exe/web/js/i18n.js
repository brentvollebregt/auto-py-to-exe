const translationMap = {
    ui: { // Static UI elements
        title: {
            scriptLocation: {
                en: 'Script Location',
                zh: '脚本位置'
            },
            oneFile: {
                en: 'Onefile',
                zh: '单文件'
            },
            consoleWindow: {
                en: 'Console Window',
                zh: '控制台窗口'
            },
            icon: {
                en: 'Icon',
                zh: '图标'
            },
            additionalFiles: {
                en: 'Additional Files',
                zh: '附加文件'
            },
            advanced: {
                en: 'Advanced',
                zh: '高级'
            },
            settings: {
                en: 'Settings',
                zh: '设置'
            },
            currentCommand: {
                en: 'Current Command',
                zh: '当前命令'
            },
            output: {
                en: 'Output',
                zh: '输出'
            },
            specificOptions: {
                en: 'auto-py-to-exe Specific Options',
                zh: 'auto-py-to-exe 特定的选项'
            },
            outputDirectory: {
                en: 'Output Directory',
                zh: '输出路径'
            },
            increaseRecursionLimit: {
                en: 'Increase Recursion Limit',
                zh: '增加递归限制'
            },
            manuallyProvideOptions: {
                en: 'Manually Provide Options',
                zh: '手动提供选项'
            },
            manualArgumentInput: {
                en: 'Manual Argument Input',
                zh: '手动参数输入'
            },
            configuration: {
                en: 'Configuration',
                zh: '配置'
            }
        },
        button: {
            browse: {
                en: 'Browse',
                zh: '浏览'
            },
            oneDirectory: {
                en: 'One Directory',
                zh: '单目录'
            },
            oneFile: {
                en: 'One File',
                zh: '单文件'
            },
            consoleBased: {
                en: 'Console Based',
                zh: '基于控制台的'
            },
            windowBased: {
                en: 'Window Based (hide the console)',
                zh: '基于窗口的 (隐藏控制台)'
            },
            addFiles: {
                en: 'Add Files',
                zh: '添加文件'
            },
            addFolder: {
                en: 'Add Folder',
                zh: '添加目录'
            },
            addBlank: {
                en: 'Add Blank',
                zh: '添加空白'
            },
            importConfig: {
                en: 'Import Config From JSON File',
                zh: '从JSON文件导入配置'
            },
            exportConfig: {
                en: 'Export Config To JSON File',
                zh: '将配置导出到JSON文件'
            },
            convert: {
                en: 'Convert .py to .exe',
                zh: '将.PY转换为.EXE'
            },
            openOutputFolder: {
                en: 'Open Output Folder',
                zh: '打开输出目录'
            },
            enable: {
                en: 'Enable',
                zh: '开启'
            }
        },
        links: {
            helpPost: {
                en: 'Help Post',
                zh: '帮助帖子'
            }
        },
        placeholders: {
            pathToFile: {
                en: 'Path to file',
                zh: '文件路径'
            },
            icoFile: {
                en: '.ico file',
                zh: '图标路径'
            },
            directory: {
                en: 'DIRECTORY',
                zh: '目录'
            },
            arguments: {
                en: 'ARGUMENTS',
                zh: '参数'
            },
        },
        helpText: {
            outputDirectory: {
                en: 'The directory to put the output in. Will be created if it doesn\'t exist',
                zh: '用于放置输出的目录。如果不存在，将创建该目录'
            },
            increaseRecursionLimit: {
                en: 'Having this enabled will set the recursion limit to 5000 using sys.setrecursionlimit(5000).',
                zh: '启用此功能将使用sys.setrecursionlimit（5000）将递归限制设置为5000。'
            },
            manualArgumentInput: {
                en: 'Inject raw text into the generated command.',
                zh: '将原始文本插入到生成的命令中。'
            }
        },
        notes: {
            oneFileAdditionalFilesNote: {
                en: 'Be careful when using additional files with onefile mode;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    'and update your code to work with PyInstaller.',
                zh: '使用单文件模式的附加文件时要小心;\n'+
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    '并更新您的代码以使用PyInstaller。'
            },
            rootDirectory: {
                en: 'If you want to put files in the root directory, put a period (.) in the destination.',
                zh: '如果要将文件放到根目录中，请在目标目录中输入句点(.)。'
            },
            somethingWrongWithOutput: {
                en: 'Something wrong with your exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    this post on how to fix common issues\n' +
                    '</a>\n' +
                    'for possible solutions.',
                zh: '你的exe有问题? 阅读' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    这篇文章是关于如何修复常见问题的\n' +
                    '</a>\n' +
                    '寻找可能的解决方案。'
            }
        }
    },
    // Elements dynamically added to the DOM
    dynamic: {
        title: {
            // For the usage of constants.js:advancedSections
            generalOptions: {
                en: 'General Options',
                zh: '常规选项'
            },
            whatToBundleWhereToSearch: {
                en: 'What to bundle, where to search',
                zh: '捆绑什么，搜索哪里'
            },
            howToGenerate: {
                en: 'How to generate',
                zh: '如何生成'
            },
            windowsSpecificOptions: {
                en: 'Windows specific options',
                zh: 'Windows特定选项'
            },
            windowsSideBySideAssemblySearchingOptions: {
                en: 'Windows Side-by-side Assembly searching options (advanced)',
                zh: '窗口并排汇编搜索选项(高级)'
            },
            macOsxSpecificOptions: {
                en: 'Mac OS X specific options',
                zh: 'Mac OS X特定选项'
            },
            rarelyUsedSpecialOptions: {
                en: 'Rarely used special options',
                zh: '很少使用的特殊选项'
            },
            other: {
                en: 'Other',
                zh: '其他'
            },
        },
        button: {
            // For the usage of interface.js_createSubSectionInAdvanced
            browseForFile: {
                en: 'Browse for File',
                zh: '浏览文件'
            },
            browseForFolder: {
                en: 'Browse for Folder',
                zh: '浏览文件夹'
            },
            enable: {
                en: 'Enable',
                zh: '开启'
            },
            converting: {
                en: 'Converting...',
                zh: '转换中······'
            },
            clearOutput: {
                en: 'Clear Output',
                zh: '清除输出f'
            },
        },
        modal: {
            configModalTitle: {
                en: 'Override current configuration?',
                zh: '覆盖当前配置？'
            },
            configModalDescription: {
                en: 'All previously inserted values will be erased.',
                zh: '所有先前插入的值将被删除。'
            },
            configModalConfirmButton: {
                en: 'Confirm',
                zh: '确认'
            },
            configModalCancelButton: {
                en: 'Cancel',
                zh: '取消'
            }
        }
    },
    // Things like alerts
    nonDom: {
        alert: {
            noScriptsLocationProvided: {
                en: 'You have not provided your scripts location.\nPlease enter this at the top of the page.',
                zh: '您尚未提供脚本位置。\n请在页面顶部输入。'
            },
            overwritePreviousOutput: {
                en: 'This action will overwrite a previous output in the output folder.\nContinue?',
                zh: '此操作将覆盖输出文件夹中以前的输出。\n是否继续？'
            }
        },
    }
};

const translate = (language) => {
    if (language === undefined) {
        language = currentLanguage;
    }

    // Check that the language is supported
    language = _checkLanguageIsSupportedOrDefault(language);
    currentLanguage = language;

    // Update text inside elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const keys = element.dataset.i18n.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        // If there is a translation, translate otherwise use the default language
        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.innerHTML = translationBlock[language];
        } else {
            element.innerHTML = translationBlock[_defaultLanguage];
        }
    });

    // Update placeholders
    const placeholdersToTranslate = document.querySelectorAll("[data-i18n_placeholder]");
    placeholdersToTranslate.forEach(element => {
        const keys = element.dataset.i18n_placeholder.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.placeholder = translationBlock[language];
        } else {
            element.placeholder = translationBlock[_defaultLanguage];
        }
    });

    // Update titles
    const titleToTranslate = document.querySelectorAll("[data-i18n_title]");
    titleToTranslate.forEach(element => {
        const keys = element.dataset.i18n_title.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.title = translationBlock[language];
        } else {
            element.title = translationBlock[_defaultLanguage];
        }
    });
};

const _getLanguage = () => {
    const language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
          navigator.language || // All browsers
          navigator.userLanguage; // IE <= 10

    let shortLang = language;
    if (shortLang.indexOf('-') !== -1) {
        shortLang = shortLang.split('-')[0];
    }
    if (shortLang.indexOf('_') !== -1) {
        shortLang = shortLang.split('_')[0];
    }

    return shortLang;
};

const _checkLanguageIsSupportedOrDefault = (language) => {
    if (supportedLanguages.map(x => x.code).indexOf(language) !== -1) {
        return language;
    } else {
        return _defaultLanguage;
    }
};

const getTranslation = (path) => {
    const keys = path.split(".");
    const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

    if (translationBlock !== undefined && translationBlock[currentLanguage] !== undefined) {
        return translationBlock[currentLanguage];
    } else {
        return translationBlock[_defaultLanguage];
    }
};

const _defaultLanguage = 'en';
const supportedLanguages = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: 'Chinese Simplified (简体中文)',
        code: 'zh',
    },
];
let currentLanguage = _checkLanguageIsSupportedOrDefault(_getLanguage()); // Keeps track of the current language
