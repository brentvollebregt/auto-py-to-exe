/*
Handle user events
*/

const scriptLocationChange = async (event) => {
    const value = event.target.value;
    modifyOption('filenames', '', value);

    if (await doesFileExist(value)) {
        event.target.style.border = "";
    } else {
        event.target.style.border = '1px solid rgb(244, 67, 54)';
    }
};

const scriptLocationSearch = async (event) => {
    const entryScriptNode = document.getElementById('entry-script');
    entryScriptNode.value = await askForFile('python');
    await scriptLocationChange({ target: entryScriptNode });
};

const oneFileOptionChange = (option) => (event) => {
    const oneDirectoryButton = document.getElementById('one-directory-button');
    const oneFileButton = document.getElementById('one-file-button');

    if (option === 'one-file') {
        modifyOption('onefile', '', true);
        oneDirectoryButton.classList.add('btn_choice_greyed');
        oneFileButton.classList.remove('btn_choice_greyed');
    } else if (option === 'one-directory') {
        modifyOption('onefile', '', false);
        oneDirectoryButton.classList.remove('btn_choice_greyed');
        oneFileButton.classList.add('btn_choice_greyed');
    } else {
        throw new Error('Incorrect option provided')
    }
};

const consoleWindowOptionChange = (option) => (event) => {
    const consoleButton = document.getElementById('console-based-button');
    const windowButton = document.getElementById('window-based-button');

    if (option === 'console') {
        modifyOption('console', '', true);
        consoleButton.classList.remove('btn_choice_greyed');
        windowButton.classList.add('btn_choice_greyed');
    } else if (option === 'window') {
        modifyOption('console', '', false);
        consoleButton.classList.add('btn_choice_greyed');
        windowButton.classList.remove('btn_choice_greyed');
    } else {
        throw new Error('Incorrect option provided')
    }
};

const iconLocationChange = async (event) => {
    const value = event.target.value;
    if (value === "") {
        removeOption('icon_file', '')
    } else {
        modifyOption('icon_file', '', value);
    }

    if (await doesFileExist(value) || value === "") {
        event.target.style.border = "";
    } else {
        event.target.style.border = '1px solid rgb(244, 67, 54)';
    }
};

const iconLocationSearch = async (event) => {
    const iconPathNode = document.getElementById('icon-path');
    iconPathNode.value = await askForFile('icon');
    await iconLocationChange({ target: iconPathNode });
};

const additionalFilesAddFiles = (event) => {
    // TODO Update internal config
};

const additionalFilesAddFolder = (event) => {
    // TODO Update internal config
};

const additionalFilesAddBlank = (event) => {
    // TODO Update internal config
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
