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
    entryScriptNode.value = await askForFile('python');
    await scriptLocationChange({ target: entryScriptNode });
};

const oneFileOptionChange = (option) => (event) => {
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
    colourInput(event.target, true, true, false);
    updateCurrentCommandDisplay();
};

const iconLocationSearch = async (event) => {
    const iconPathNode = document.getElementById('icon-path');
    iconPathNode.value = await askForFile('icon');
    await iconLocationChange({ target: iconPathNode });
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
    // Pre-checks
    const willOverwrite = await eel.will_packaging_overwrite_existing(
        configuration.find(c => c.option === 'filenames').value, // TODO Get
        configuration.find(c => c.option === 'onefile').value, // TODO Get
        getNonPyinstallerConfiguration().outputDirectory
    )();
    if (willOverwrite && !confirm("This action will overwrite a previous output in the output folder.\nContinue?")) {
        return
    }

    eel.package(getCurrentCommand(), getNonPyinstallerConfiguration())();
};

const openOutputFolder = (event) => {
    eel.open_folder_in_explorer(getNonPyinstallerConfiguration().outputDirectory)();
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
    document.getElementById('recursion-limit-switch').addEventListener('click', e => recursionLimitToggle(e.target.classList.contains('unselected')));
    document.getElementById('raw-arguments').addEventListener('input', rawArgumentsChange);

    // Build buttons
    document.getElementById('package-button').addEventListener('click', packageScript);
    document.getElementById('open-output-folder-button').addEventListener('click', openOutputFolder);

    // Initialise advanced tab
    scriptLocationChange({ target: document.getElementById('entry-script') });
    oneFileOptionChange('one-directory')(null);
    consoleWindowOptionChange('console')(null);

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
};
