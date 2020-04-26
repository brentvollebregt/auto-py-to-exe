/*
Handle configuration modifications
*/

const modifyOption = (option, id, value) => {
    // id is provided so an option can have more than once value
    removeOption(option, id);
    configuration.push({ option, id, value });
    updateCurrentCommandDisplay();
};

const removeOption = (option, id) => {
    configuration = configuration.filter(c => !(c.option === option && c.id === id));
    updateCurrentCommandDisplay();
};

const generateCurrentCommand = () => {
    const entryScript = configuration.find(c => c.option === 'filenames');
    // TODO
    return `pyinstaller ${entryScript !== undefined ? entryScript.value : ''}`;
};

const updateCurrentCommandDisplay = () => {
    document.querySelector('#current-command textarea').value = generateCurrentCommand();
};

// Initial configuration
let configuration = [];
