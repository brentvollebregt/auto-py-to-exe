/*
Handle the initialisation of the ui
*/

let options = [];

let pathSeparator = '';

const buildUpOptions = (providedOptions) => {
  return providedOptions.map((option) => {
    const name = option.dest;

    let placement = OPTION_SHOW;
    if (options_ignored.indexOf(name) !== -1) {
      placement = OPTION_IGNORED;
    } else if (options_static.indexOf(name) !== -1) {
      placement = OPTION_STATIC;
    } else if (options_overridden.indexOf(name) !== -1) {
      placement = OPTION_OVERRIDDEN;
    }

    let inputType = OPTION_INPUT_TYPE_INPUT;
    if (option.nargs === 0) {
      inputType = OPTION_INPUT_TYPE_SWITCH;
    } else if (option.choices !== null) {
      inputType = OPTION_INPUT_TYPE_DROPDOWN;
    } else if (option.dest === 'datas' || option.dest === 'binaries') {
      inputType = OPTION_INPUT_TYPE_DOUBLE_MULTIPLE_INPUT;
    } else if (option.default !== null || option.dest === 'upx_exclude') {
      inputType = OPTION_INPUT_TYPE_MULTIPLE_INPUT;
    }

    const allowedInputValues = [];
    if (options_inputTypeFile.indexOf(name) !== -1) {
      allowedInputValues.push(OPTION_INPUT_VALUE_FILE);
    }
    if (options_inputTypeDirectory.indexOf(name) !== -1) {
      allowedInputValues.push(OPTION_INPUT_VALUE_DIRECTORY);
    }
    if (options_inputTypeDoubleFileDest.indexOf(name) !== -1) {
      allowedInputValues.push(OPTION_INPUT_VALUE_DOUBLE_FILE_DEST);
    }
    if (options_inputTypeDoubleDirectoryDest.indexOf(name) !== -1) {
      allowedInputValues.push(OPTION_INPUT_VALUE_DOUBLE_DIRECTORY_DEST);
    }
    if (allowedInputValues.length === 0) {
      allowedInputValues.push(OPTION_INPUT_VALUE_TEXT);
    }

    return {
      ...option,
      placement,
      inputType,
      allowedInputValues,
    };
  });
};

// Get initialisation data from the server and setup the ui
window.addEventListener('load', async () => {
  // Get initialisation data from Python
  console.log('Getting initialisation data');
  const initialisationData = await eel.initialise()();
  console.log('Received initialisation data');
  options = buildUpOptions(initialisationData.options);
  pathSeparator = initialisationData.pathSeparator;

  // Setup user's default color scheme
  setupTheme();

  // Setup ui events (for static content) and setup initial state
  setupEvents();

  // Setup language selection
  setupLanguageSelection();

  // Setup advanced section (for dynamic content)
  constructAdvancedSection(options);

  // Setup json config file is supplied
  if (initialisationData.suppliedUiConfiguration !== null) {
    importConfiguration(initialisationData.suppliedUiConfiguration);
  }

  // Set the output directory to the default if it hasn't already been set by `initialisationData.suppliedUiConfiguration`
  if (document.getElementById('output-directory').value === '') {
    document.getElementById('output-directory').value = initialisationData.defaultOutputFolder;
  }

  // If a file is provided, put it in the script location
  if (initialisationData.filename !== null) {
    configurationSetters['filenames'](initialisationData.filename);
  }

  // Display any warnings provided
  setupWarnings(initialisationData.warnings);

  // Update the current command when setup is complete
  await updateCurrentCommandDisplay();

  // Try to translate to the default browser language
  translate(initialisationData.languageHint);

  // If the server stops, close the UI
  window.eel._websocket.addEventListener('close', (e) => window.close());

  console.log('Application initialised');
  document.getElementById('spinner-root').style.display = 'none';
});
