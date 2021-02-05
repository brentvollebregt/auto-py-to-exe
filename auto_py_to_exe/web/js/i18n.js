const translationMap = {
    ui: { // Static UI elements
        title: {
            scriptLocation: {
                en: 'Script Location',
                zh: ''
            },
            oneFile: {
                en: 'Onefile',
                zh: ''
            },
            consoleWindow: {
                en: 'Console Window',
                zh: ''
            },
            icon: {
                en: 'Icon',
                zh: ''
            },
            additionalFiles: {
                en: 'Additional Files',
                zh: ''
            },
            advanced: {
                en: 'Advanced',
                zh: ''
            },
            settings: {
                en: 'Settings',
                zh: ''
            },
            currentCommand: {
                en: 'Current Command',
                zh: ''
            },
            output: {
                en: 'Output',
                zh: ''
            },
            specificOptions: {
                en: 'auto-py-to-exe Specific Options',
                zh: ''
            },
            outputDirectory: {
                en: 'Output Directory',
                zh: ''
            },
            increaseRecursionLimit: {
                en: 'Increase Recursion Limit',
                zh: ''
            },
            manuallyProvideOptions: {
                en: 'Manually Provide Options',
                zh: ''
            },
            manualArgumentInput: {
                en: 'Manual Argument Input',
                zh: ''
            },
            configuration: {
                en: 'Configuration',
                zh: ''
            }
        },
        button: {
            browse: {
                en: 'Browse',
                zh: ''
            },
            oneDirectory: {
                en: 'One Directory',
                zh: ''
            },
            oneFile: {
                en: 'One File',
                zh: ''
            },
            consoleBased: {
                en: 'Console Based',
                zh: ''
            },
            windowBased: {
                en: 'Window Based (hide the console)',
                zh: ''
            },
            addFiles: {
                en: 'Add Files',
                zh: ''
            },
            addFolder: {
                en: 'Add Folder',
                zh: ''
            },
            addBlank: {
                en: 'Add Blank',
                zh: ''
            },
            importConfig: {
                en: 'Import Config From JSON File',
                zh: ''
            },
            exportConfig: {
                en: 'Export Config To JSON File',
                zh: ''
            },
            convert: {
                en: 'Convert .py to .exe',
                zh: ''
            },
            openOutputFolder: {
                en: 'Open Output Folder',
                zh: ''
            },
            enable: {
                en: 'Enable',
                zh: ''
            }
        },
        links: {
            helpPost: {
                en: 'Help Post',
                zh: ''
            }
        },
        placeholders: {
            pathToFile: {
                en: 'Path to file',
                zh: ''
            },
            icoFile: {
                en: '.ico file',
                zh: ''
            },
            directory: {
                en: 'DIRECTORY',
                zh: ''
            },
            arguments: {
                en: 'ARGUMENTS',
                zh: ''
            },
        },
        helpText: {
            outputDirectory: {
                en: 'The directory to put the output in. Will be created if it doesn\'t exist',
                zh: ''
            },
            increaseRecursionLimit: {
                en: 'Having this enabled will set the recursion limit to 5000 using sys.setrecursionlimit(5000).',
                zh: ''
            },
            manualArgumentInput: {
                en: 'Inject raw text into the generated command.',
                zh: ''
            }
        },
        notes: {
            oneFileAdditionalFilesNote: {
                en: 'Be careful when using additional files with onefile mode;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    'and update your code to work with PyInstaller.',
                zh: ''
            },
            rootDirectory: {
                en: 'If you want to put files in the root directory, put a period (.) in the destination.',
                zh: ''
            },
            somethingWrongWithOutput: {
                en: 'Something wrong with your exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    this post on how to fix common issues\n' +
                    '</a>\n' +
                    'for possible solutions.',
                zh: ''
            }
        }
    },
    // Elements dynamically added to the DOM
    dynamic: {
        title: {
            // For the usage of constants.js:advancedSections
            generalOptions: {
                en: 'General Options',
                zh: ''
            },
            whatToBundleWhereToSearch: {
                en: 'What to bundle, where to search',
                zh: ''
            },
            howToGenerate: {
                en: 'How to generate',
                zh: ''
            },
            windowsSpecificOptions: {
                en: 'Windows specific options',
                zh: ''
            },
            windowsSideBySideAssemblySearchingOptions: {
                en: 'Windows Side-by-side Assembly searching options (advanced)',
                zh: ''
            },
            macOsxSpecificOptions: {
                en: 'Mac OS X specific options',
                zh: ''
            },
            rarelyUsedSpecialOptions: {
                en: 'Rarely used special options',
                zh: ''
            },
            other: {
                en: 'Other',
                zh: ''
            },
        },
        button: {
            // For the usage of interface.js_createSubSectionInAdvanced
            browseForFile: {
                en: 'Browse for File',
                zh: ''
            },
            browseForFolder: {
                en: 'Browse for Folder',
                zh: ''
            },
            enable: {
                en: 'Enable',
                zh: ''
            },
            converting: {
                en: 'Converting...',
                zh: ''
            },
            clearOutput: {
                en: 'Clear Output',
                zh: ''
            },
        }
    },
    // Things like alerts
    nonDom: {
        alert: {
            noScriptsLocationProvided: {
                en: 'You have not provided your scripts location.\nPlease enter this at the top of the page.',
                zh: ''
            },
            overwritePreviousOutput: {
                en: 'This action will overwrite a previous output in the output folder.\nContinue?',
                zh: ''
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
            element.innerHTML = translationBlock[_defaultLanguage];
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
            element.innerHTML = translationBlock[_defaultLanguage];
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
    if (supportedLanguages.indexOf(language) !== -1) {
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
const supportedLanguages = ['en', 'zh'];
let currentLanguage = _checkLanguageIsSupportedOrDefault(_getLanguage()); // Keeps track of the current language
