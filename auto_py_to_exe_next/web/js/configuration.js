/*
Handle configuration modifications
*/

const configurationGetters = []; // Each function on this should either return null or [option.dest, value]

// Get option-value pairs [[option, value], ...]
const getCurrentConfiguration = () => {
    const currentConfiguration = [
        {
            optionDest: 'noconfirm', // TODO Make `optionDest`
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
    // TODO
    return {
        outputDirectory: '',
        increaseRecursionLimit: true,
        manualArguments: ''
    };
};

const getCurrentCommand = () => {
    const currentConfiguration = getCurrentConfiguration();

    // Match configuration values with the correct flags
    const builtConfiguration = currentConfiguration.filter(c => c.optionDest !== 'filenames').map(c => {
        // Identify the options
        const option = options.find(o => o.dest === c.optionDest);

        if (option.nargs === 0) {
            // For switches, there are some switches for false switches that we can use
            const potentialOption = options.find(o => o.dest === c.optionDest && o.const === c.value);
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

    // Identify the entry script provided
    const entryScriptConfig = currentConfiguration.find(c => c.option === 'filenames');
    const entryScript = entryScriptConfig === undefined ? "" : entryScriptConfig.value;

    return `pyinstaller ${builtConfiguration.join(' ')} ${getNonPyinstallerConfiguration().manualArguments} "${entryScript}"`;
};

const updateCurrentCommandDisplay = () => {
    document.querySelector('#current-command textarea').value = getCurrentCommand();
};
