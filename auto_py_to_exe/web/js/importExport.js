const importConfiguration = (configuration) => {
    // TODO Check for version to support older versions

    configuration.pyinstallerOptions.forEach(({ optionDest, value }) => {
        if (configurationSetters.hasOwnProperty(optionDest)) {
            configurationSetters[optionDest](value);
        } else {
            // TODO Warn user?
        }
    });

    // setup nonPyinstallerOptions
    // TODO Add support for recursion-limit-switch (should most likely have setters and getters for these also)
    document.getElementById('raw-arguments').value = configuration.nonPyinstallerOptions.manualArguments;
};

const _collectDataToExport = () => {
    const nonPyinstallerConfiguration = getNonPyinstallerConfiguration();
    delete nonPyinstallerConfiguration.outputDirectory; // This does not need to be saved in the config

    return {
        version: "auto-py-to-exe-configuration_v1",
        pyinstallerOptions: getCurrentConfiguration(),
        nonPyinstallerOptions: getNonPyinstallerConfiguration()
    }
};

const onConfigurationImport = async () => {
    const data = await eel.import_configuration()();
    importConfiguration(data);
};

const onConfigurationExport = async () => {
    const data = _collectDataToExport();
    await eel.export_configuration(data)();
};
