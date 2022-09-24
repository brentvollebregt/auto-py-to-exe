/*
Handle configuration modifications
*/

const configurationGetters = []; // Each function in this should either return null or [option.dest, value]
const configurationSetters = {}; // dest: fn(value) => void, used to set option values
const configurationCleaners = []; // Each function in this should clear a dest value

// Get option-value pairs [[option, value], ...]
const getCurrentConfiguration = () => {
    const currentConfiguration = [
        {
            optionDest: 'noconfirm',
            value: true
        }
    ];

    // Call all functions to get data
    configurationGetters.forEach(getter => {
        const optionValuePair = getter();
        if (optionValuePair !== null) {
            currentConfiguration.push({
                optionDest: optionValuePair[0],
                value: optionValuePair[1],
            })
        }
    });

    return currentConfiguration;
};

const getNonPyinstallerConfiguration = () => {
    return {
        outputDirectory: document.getElementById('output-directory').value,
        increaseRecursionLimit: !document.getElementById('recursion-limit-switch').classList.contains('unselected'),
        manualArguments: document.getElementById('raw-arguments').value
    };
};

const getCurrentCommand = () => {
    const currentConfiguration = getCurrentConfiguration();

    // Match configuration values with the correct flags
    const optionsAndValues = currentConfiguration.filter(c => c.optionDest !== 'filenames').map(c => {
        // Identify the options
        const option = options.find(o => o.dest === c.optionDest);

        if (option.nargs === 0) {
            // For switches, there are some switches for false switches that we can use
            const potentialOption = options.find(o => o.dest === c.optionDest && o.const === c.value);
            if (potentialOption !== undefined) {
                return chooseOptionString(potentialOption.option_strings);
            } else {
                return null; // If there is no alternate option, skip it as it won't be required
            }
        } else {
            const optionFlag = chooseOptionString(option.option_strings);
            return `${optionFlag} "${c.value}"`;
        }
    }).filter(x => x !== null);

    // Identify the entry script provided
    const entryScriptConfig = currentConfiguration.find(c => c.optionDest === 'filenames');
    const entryScript = entryScriptConfig === undefined ? "" : entryScriptConfig.value;

    return `pyinstaller ${optionsAndValues.join(' ')} ${getNonPyinstallerConfiguration().manualArguments} "${entryScript}"`;
};

const updateCurrentCommandDisplay = () => {
    document.querySelector('#current-command textarea').value = getCurrentCommand();
};

const isCommandDefault = () => {
    return getCurrentCommand() === 'pyinstaller --noconfirm --onedir --console  ""';
}
