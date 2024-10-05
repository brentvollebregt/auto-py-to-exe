const importConfiguration = (configuration) => {
  // TODO Check for version to support older versions

  // Re-init UI by clearing everything (copy the array first as it will be mutated during the iteration)
  [...configurationCleaners].forEach((cleaner) => cleaner());

  if ('pyinstallerOptions' in configuration) {
    configuration.pyinstallerOptions.forEach(({ optionDest, value }) => {
      if (configurationSetters.hasOwnProperty(optionDest)) {
        configurationSetters[optionDest](value);
      } else {
        // TODO Warn user?
        // TODO noconfirm is expected to come here
      }
    });
  }

  // setup nonPyinstallerOptions
  if ('nonPyinstallerOptions' in configuration) {
    if ('increaseRecursionLimit' in configuration.nonPyinstallerOptions) {
      recursionLimitToggle(configuration.nonPyinstallerOptions.increaseRecursionLimit);
    }
    if ('manualArguments' in configuration.nonPyinstallerOptions) {
      document.getElementById('raw-arguments').value = configuration.nonPyinstallerOptions.manualArguments;
    }
    if ('outputDirectory' in configuration.nonPyinstallerOptions) {
      document.getElementById('output-directory').value = configuration.nonPyinstallerOptions.outputDirectory;
    }
  }
};

const _collectDataToExport = async () => {
  const nonPyinstallerConfiguration = getNonPyinstallerConfiguration();
  delete nonPyinstallerConfiguration.outputDirectory; // This does not need to be saved in the config

  return {
    version: 'auto-py-to-exe-configuration_v1',
    pyinstallerOptions: await getCurrentConfiguration(true),
    nonPyinstallerOptions: nonPyinstallerConfiguration,
  };
};

const onConfigurationImport = async () => {
  if (!(await isCommandDefault())) {
    const response = await displayModal(
      getTranslation('dynamic.modal.configModalTitle'),
      getTranslation('dynamic.modal.configModalDescription'),
      [
        getTranslation('dynamic.modal.configModalConfirmButton'),
        getTranslation('dynamic.modal.configModalCancelButton'),
      ]
    );

    if (response !== getTranslation('dynamic.modal.configModalConfirmButton')) return;
  }

  const data = await eel.import_configuration()();
  if (data !== null) {
    importConfiguration(data);
  }
};

const onConfigurationExport = async () => {
  const data = await _collectDataToExport();
  await eel.export_configuration(data)();
};
