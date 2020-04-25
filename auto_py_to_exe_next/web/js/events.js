/*
Handle user events
*/

const scriptLocationChange = async (event) => {
    const value = event.target.value;
    modifyOption('filenames', value);

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
    if (option === 'one-file') {

    } else if (option === 'one-directory') {

    } else {
        throw new Error('Incorrect option provided')
    }

    // TODO Update internal config
    // TODO Remove the mutually exclusive javascript button stuff, do it manually here to be 100% it's right
};

const consoleWindowOptionChange = (option) => (event) => {
    if (option === 'console') {

    } else if (option === 'window') {

    } else {
        throw new Error('Incorrect option provided')
    }

    // TODO Update internal config
    // TODO Remove the mutually exclusive javascript button stuff, do it manually here to be 100% it's right
};

const iconLocationChange = (event) => {
    // TODO Update internal config
    // TODO Check if file is valid
};

const iconLocationSearch = (event) => {
    // TODO Update internal config
    // TODO Check if file is valid
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
};
