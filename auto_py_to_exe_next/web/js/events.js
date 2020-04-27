/*
Handle user events
*/

const scriptLocationChange = async (event) => {
    const value = event.target.value;
    modifyOption('filenames', '', value);
    colourInput(event.target, false, true, false);
};

const scriptLocationSearch = async (event) => {
    const entryScriptNode = document.getElementById('entry-script');
    entryScriptNode.value = await askForFile('python');
    await scriptLocationChange({ target: entryScriptNode });
};

const oneFileOptionChange = (option) => (event) => {
    if (option === 'one-file') {
        modifyOption('onefile', '', true);
    } else if (option === 'one-directory') {
        modifyOption('onefile', '', false);
    } else {
        throw new Error('Incorrect option provided')
    }

    const oneFileButton = document.getElementById('one-file-button');
    oneFileButton.classList.add(option === 'one-file' ? 'selected' : 'unselected');
    oneFileButton.classList.remove(option !== 'one-file' ? 'selected' : 'unselected');
    const oneDirectoryButton = document.getElementById('one-directory-button');
    oneDirectoryButton.classList.add(option === 'one-directory' ? 'selected' : 'unselected');
    oneDirectoryButton.classList.remove(option !== 'one-directory' ? 'selected' : 'unselected');
};

const consoleWindowOptionChange = (option) => (event) => {
    if (option === 'console') {
        modifyOption('console', '', true);
    } else if (option === 'window') {
        modifyOption('console', '', false);
    } else {
        throw new Error('Incorrect option provided')
    }

    const consoleButton = document.getElementById('console-based-button');
    consoleButton.classList.add(option === 'console' ? 'selected' : 'unselected');
    consoleButton.classList.remove(option !== 'console' ? 'selected' : 'unselected');
    const windowButton = document.getElementById('window-based-button');
    windowButton.classList.add(option === 'window' ? 'selected' : 'unselected');
    windowButton.classList.remove(option !== 'window' ? 'selected' : 'unselected');
};

const iconLocationChange = async (event) => {
    const value = event.target.value;
    if (value === "") {
        removeOption('icon_file', '')
    } else {
        modifyOption('icon_file', '', value);
    }
    colourInput(event.target, true, true, false);
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

const packageScript = (event) => {

};

const openOutputFolder = (event) => {

};

const setupEvents = () => {
    document.getElementById('entry-script').addEventListener('input', scriptLocationChange);
    document.getElementById('entry-script-search').addEventListener('click', scriptLocationSearch);
    document.getElementById('one-directory-button').addEventListener('click', oneFileOptionChange('one-directory'));
    document.getElementById('one-file-button').addEventListener('click', oneFileOptionChange('one-file'));
    document.getElementById('console-based-button').addEventListener('click', consoleWindowOptionChange('console'));
    document.getElementById('window-based-button').addEventListener('click', consoleWindowOptionChange('window'));
    document.getElementById('icon-path').addEventListener('input', iconLocationChange);
    document.getElementById('icon-path-search').addEventListener('click', iconLocationSearch);
    document.getElementById('additional-files-add-files-button').addEventListener('click', additionalFilesAddFiles);
    document.getElementById('additional-files-add-folder').addEventListener('click', additionalFilesAddFolder);
    document.getElementById('additional-files-add-blank').addEventListener('click', additionalFilesAddBlank);
    document.getElementById('package-button').addEventListener('click', packageScript);
    document.getElementById('open-output-folder-button').addEventListener('click', openOutputFolder);

    // Call event methods to initially setup ui
    scriptLocationChange({ target: document.getElementById('entry-script') });
    oneFileOptionChange('one-directory')(null);
    consoleWindowOptionChange('console')(null);
};
