/*
Handle user events
*/

// Top level inputs

const scriptLocationChange = async (event) => {
    colourInput(event.target, false, true, false);
    updateCurrentCommandDisplay();
};

const scriptLocationSearch = async (event) => {
    const entryScriptNode = document.getElementById('entry-script');
    const value = await askForFile('python');
    if (value !== null) {
        entryScriptNode.value = value;
        await scriptLocationChange({ target: entryScriptNode });
    }
};

const oneFileOptionChange = (option) => (event) => {
    const onefileAdditionalFilesNote = document.getElementById('onefileAdditionalFilesNote');
    onefileAdditionalFilesNote.style.display = option === 'one-file' ? 'block' : 'none'; // Show the note if one-file is being used
    const oneFileButton = document.getElementById('one-file-button');
    oneFileButton.classList.add(option === 'one-file' ? 'selected' : 'unselected');
    oneFileButton.classList.remove(option !== 'one-file' ? 'selected' : 'unselected');
    const oneDirectoryButton = document.getElementById('one-directory-button');
    oneDirectoryButton.classList.add(option === 'one-directory' ? 'selected' : 'unselected');
    oneDirectoryButton.classList.remove(option !== 'one-directory' ? 'selected' : 'unselected');
    updateCurrentCommandDisplay();
};

const consoleWindowOptionChange = (option) => (event) => {
    const consoleButton = document.getElementById('console-based-button');
    consoleButton.classList.add(option === 'console' ? 'selected' : 'unselected');
    consoleButton.classList.remove(option !== 'console' ? 'selected' : 'unselected');
    const windowButton = document.getElementById('window-based-button');
    windowButton.classList.add(option === 'window' ? 'selected' : 'unselected');
    windowButton.classList.remove(option !== 'window' ? 'selected' : 'unselected');
    updateCurrentCommandDisplay();
};

const iconLocationChange = async (event) => {
    const valid = await colourInput(event.target, true, true, false);
    updateCurrentCommandDisplay();

    // If valid and a value exists, show the message if the file is not an ico file
    const warningElement = document.getElementById('icon-invalid-warning');
    if (valid && event.target.value !== "") {
        const isIcoFile = await isFileAnIco(event.target.value);
        warningElement.style.display = isIcoFile === false ? 'block' : 'none'; // isIcoFile is boolean | null
    } else {
        warningElement.style.display = 'none';
    }
};

const iconLocationSearch = async (event) => {
    const iconPathNode = document.getElementById('icon-path');
    const value = await askForFile('icon');
    if (value !== null) {
        iconPathNode.value = value;
        await iconLocationChange({ target: iconPathNode });
    }
};

const additionalFilesAddFiles = async (event) => {
    const files = await askForFiles();
    if (files !== null) {
        const datasListNode = document.getElementById('datas-list');
        files.forEach(file => {
            addDoubleInputForSrcDst(datasListNode, 'datas', file, '.', true, true);
        });
    }
};

const additionalFilesAddFolder = async (event) => {
    const folder = await askForFolder();
    if (folder !== '') {
        const datasListNode = document.getElementById('datas-list');
        const destinationFolder = folder.split(/[/\\]/);
        addDoubleInputForSrcDst(datasListNode, 'datas', folder, `${destinationFolder[destinationFolder.length - 1]}/`, true, true);
    }
};

const additionalFilesAddBlank = (event) => {
    const datasListNode = document.getElementById('datas-list');
    addDoubleInputForSrcDst(datasListNode, 'datas', '', '.', true, true);
};

// Settings section events

const outputDirectorySearch = async (event) => {
    const folder = await askForFolder();
    if (folder !== '') {
        const outputDirectoryInput = document.getElementById('output-directory');
        outputDirectoryInput.value = folder;
    }
};

const recursionLimitToggle = (enabled) => {
    const button = document.getElementById('recursion-limit-switch');
    if (enabled) {
        button.classList.add('selected');
        button.classList.remove('unselected');
    } else {
        button.classList.remove('selected');
        button.classList.add('unselected');
    }
};

const rawArgumentsChange = (event) => {
    updateCurrentCommandDisplay();
};

const packageScript = async (event) => {
    if (packagingState === PACKAGING_STATE_PACKAGING) {  // Do not do anything while packaging
        return;
    }
    if (packagingState === PACKAGING_STATE_COMPLETE) { // This is now the clear output button
        setPackagingState(PACKAGING_STATE_READY);
        return;
    }

    // Pre-checks
    const currentConfiguration = getCurrentConfiguration();
    const entryScript = currentConfiguration.find(c => c.optionDest === 'filenames').value;

    if (entryScript === '') {
        alert(getTranslation('nonDom.alert.noScriptsLocationProvided'));
        return;
    }

    const willOverwrite = await eel.will_packaging_overwrite_existing(
        entryScript,
        currentConfiguration.find(c => c.optionDest === 'onefile').value,
        getNonPyinstallerConfiguration().outputDirectory
    )();
    if (willOverwrite && !confirm(getTranslation('nonDom.alert.overwritePreviousOutput'))) {
        return
    }

    // If checks have passed, package the script
    startPackaging();
};

const openOutputFolder = (event) => {
    const currentConfiguration = getCurrentConfiguration();
    const entryScript = currentConfiguration.find(c => c.optionDest === 'filenames').value;
    const isOneFile = currentConfiguration.find(c => c.optionDest === 'onefile').value
    eel.open_output_in_explorer(getNonPyinstallerConfiguration().outputDirectory, entryScript, isOneFile)();
};

const setupEvents = () => {
    // Script location
    document.getElementById('entry-script').addEventListener('input', scriptLocationChange);
    document.getElementById('entry-script-search').addEventListener('click', scriptLocationSearch);

    // Output bundle type
    document.getElementById('one-directory-button').addEventListener('click', oneFileOptionChange('one-directory'));
    document.getElementById('one-file-button').addEventListener('click', oneFileOptionChange('one-file'));

    // Console switch
    document.getElementById('console-based-button').addEventListener('click', consoleWindowOptionChange('console'));
    document.getElementById('window-based-button').addEventListener('click', consoleWindowOptionChange('window'));

    // Icon
    document.getElementById('icon-path').addEventListener('input', iconLocationChange);
    document.getElementById('icon-path-search').addEventListener('click', iconLocationSearch);

    // Additional files
    document.getElementById('additional-files-add-files-button').addEventListener('click', additionalFilesAddFiles);
    document.getElementById('additional-files-add-folder').addEventListener('click', additionalFilesAddFolder);
    document.getElementById('additional-files-add-blank').addEventListener('click', additionalFilesAddBlank);

    // Settings
    document.getElementById('output-directory-search').addEventListener('click', outputDirectorySearch);
    document.getElementById('recursion-limit-switch').addEventListener('click', e => recursionLimitToggle(e.target.classList.contains('unselected')));
    document.getElementById('raw-arguments').addEventListener('input', rawArgumentsChange);
    document.getElementById('configuration-import').addEventListener('click', () => onConfigurationImport());
    document.getElementById('configuration-export').addEventListener('click', () => onConfigurationExport());

    // Build buttons
    document.getElementById('package-button').addEventListener('click', packageScript);
    document.getElementById('open-output-folder-button').addEventListener('click', openOutputFolder);

    // Add configurationGetters
    const getEntryScript = () => (['filenames', document.getElementById('entry-script').value]);
    const getOnefile = () => (['onefile', document.getElementById('one-directory-button').classList.contains('unselected')]);
    const getConsole = () => (['console', document.getElementById('window-based-button').classList.contains('unselected')]);
    const getIcon = () => {
        const path = document.getElementById('icon-path').value;
        return path === '' ? null : ['icon_file', path];
    };
    configurationGetters.push(getEntryScript);
    configurationGetters.push(getOnefile);
    configurationGetters.push(getConsole);
    configurationGetters.push(getIcon);

    // Add configurationSetters
    const setEntryScript = (value) => {
        document.getElementById('entry-script').value = value;
        scriptLocationChange({ target: document.getElementById('entry-script') });
    };
    const setOnefile = (value) => {
        if (value) {
            document.getElementById('one-directory-button').classList.add('unselected');
            document.getElementById('one-file-button').classList.remove('unselected');
        } else {
            document.getElementById('one-directory-button').classList.remove('unselected');
            document.getElementById('one-file-button').classList.add('unselected');
        }
    };
    const setConsole = (value) => {
        if (value) {
            document.getElementById('console-based-button').classList.remove('unselected');
            document.getElementById('window-based-button').classList.add('unselected');
        } else {
            document.getElementById('console-based-button').classList.add('unselected');
            document.getElementById('window-based-button').classList.remove('unselected');
        }
    };
    const setAdditionalFile = (value) => {
        const datasListNode = document.getElementById('datas-list');
        const [val1, val2] = value.split(pathSeparator);
        addDoubleInputForSrcDst(datasListNode, 'datas', val1, val2, true, true);
    };
    const setIcon = (value) => {
        document.getElementById('icon-path').value = value;
        document.getElementById('icon-path').dispatchEvent(new Event('input'));
    };
    configurationSetters['filenames'] = setEntryScript;
    configurationSetters['onefile'] = setOnefile;
    configurationSetters['console'] = setConsole;
    configurationSetters['datas'] = setAdditionalFile;
    configurationSetters['icon_file'] = setIcon;

    configurationCleaners.push(() => setEntryScript('')); // filenames
    configurationCleaners.push(() => setOnefile(false)); // onefile
    configurationCleaners.push(() => setConsole(false)); // console
    configurationCleaners.push(() => setIcon('')); // icon_file

    // Soft initialise (to trigger any required initial events)
    setEntryScript('');
    setOnefile(false);
    setConsole(true);
};
