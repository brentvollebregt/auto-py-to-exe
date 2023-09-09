const importConfiguration = (configuration) => {
    // TODO Check for version to support older versions

    // Re-init UI by clearing everything (copy the array first as it will be mutated during the iteration)
    [...configurationCleaners].forEach(cleaner => cleaner());

    configuration.pyinstallerOptions.forEach(({ optionDest, value }) => {
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
    if ('outputDirectory' in configuration.nonPyinstallerOptions) {
        document.getElementById('output-directory').value = configuration.nonPyinstallerOptions.outputDirectory;
    }
    if ('useDarkTheme' in configuration.nonPyinstallerOptions) {
        const root = document.querySelector("body");
        const darkThemeButton = document.querySelector(".dark-theme-button");
        const lightThemeButton = document.querySelector(".light-theme-button");

        if (configuration.nonPyinstallerOptions.useDarkTheme) {
            darkThemeButton.style.display = "none";
            lightThemeButton.style.display = "inline";
            root.setAttribute('data-dark-theme', '');
        } else {
            darkThemeButton.style.display = "inline";
            lightThemeButton.style.display = "none";
            root.removeAttribute('data-dark-theme');
        }
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
    if (!isCommandDefault()) {
        const response = await displayModal(
            getTranslation('dynamic.modal.configModalTitle'),
            getTranslation('dynamic.modal.configModalDescription'),
            [
                getTranslation('dynamic.modal.configModalConfirmButton'),
                getTranslation('dynamic.modal.configModalCancelButton')
            ]);

        if (response !== getTranslation('dynamic.modal.configModalConfirmButton'))
            return;
    }

    const data = await eel.import_configuration()();
    importConfiguration(data);
};

const onConfigurationExport = async () => {
    const data = _collectDataToExport();
    await eel.export_configuration(data)();
};
