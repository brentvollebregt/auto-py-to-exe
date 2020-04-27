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
    const builtOptionsFromConfiguration = configuration.filter(c => c.option !== 'filenames').map(c => {
        // Identify the options
        const option = options.find(o => o.dest === c.option);

        if (option.nargs === 0) {
            // For switches, there are some switches for false switches that we can use
            const potentialOption = options.find(o => o.dest === c.option && o.const === c.value);
            if (potentialOption !== undefined) {
                return potentialOption.option_strings[potentialOption.option_strings.length - 1];
            } else {
                return null; // If there is no alternate option, skip it as it won't be required
            }
        } else {
            const optionFlag = option.option_strings[option.option_strings.length - 1];
            const value = !Array.isArray(c.value)
                ? c.value
                : c.value.join(pathSeparator);
            return `${optionFlag} "${value}"`;
        }
    }).filter(x => x !== null);

    const entryScript = configuration.find(c => c.option === 'filenames');
    return `pyinstaller ${builtOptionsFromConfiguration.join(' ')} "${entryScript !== undefined ? entryScript.value : ''}"`;
};

const updateCurrentCommandDisplay = () => {
    document.querySelector('#current-command textarea').value = generateCurrentCommand();
};

// Initial configuration
let configuration = [
    {
        option: 'noconfirm',
        id: "",
        value: true
    }
];

let nonPyinstallerConfiguration = {
    outputDirectory: '',
    increaseRecursionLimit: true,
    manualArguments: ''
};
