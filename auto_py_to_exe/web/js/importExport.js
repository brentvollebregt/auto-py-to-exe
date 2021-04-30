const importConfiguration = (configuration) => {
    // TODO Check for version to support older versions

    if ('pyinstallerOptions' in configuration) {
        configuration.pyinstallerOptions.forEach(({optionDest, value}) => {
            if (configurationSetters.hasOwnProperty(optionDest)) {
                configurationSetters[optionDest](value);
            } else {
                // TODO Warn user?
                // TODO noconfirm is expected to come here
            }
        });

        // setup nonPyinstallerOptions
        recursionLimitToggle(configuration.nonPyinstallerOptions.increaseRecursionLimit);
        document.getElementById('raw-arguments').value = configuration.nonPyinstallerOptions.manualArguments;
    }
};

const _collectDataToExport = () => {
    const nonPyinstallerConfiguration = getNonPyinstallerConfiguration();
    delete nonPyinstallerConfiguration.outputDirectory; // This does not need to be saved in the config

    return {
        version: "auto-py-to-exe-configuration_v1",
        pyinstallerOptions: getCurrentConfiguration(),
        nonPyinstallerOptions: nonPyinstallerConfiguration
    }
};

const onConfigurationImport = async () => {
    // TODO: Check default values
    // TODO: Add i18n

    const response = await displayModal(
        'Override current configuration?',
        'All previously inserted values will be erased.',
        ['Confirm', 'Decline']);

    if (response === 'Confirm') {
        const data = await eel.import_configuration()();
        importConfiguration(data);
    }
};

const onConfigurationExport = async () => {
    const data = _collectDataToExport();
    await eel.export_configuration(data)();
};
