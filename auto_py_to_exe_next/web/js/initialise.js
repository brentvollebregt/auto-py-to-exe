/*
Handle the initialisation of the ui
*/

let options = [];

let settings = {
    pathSeparator: '',
    outputFolder: ''
};

// Get initialisation data from the server and setup the ui
window.addEventListener("load", async () => {
    // Get initialisation data from Python
    const initialisationData = await eel.initialise()();
    options = initialisationData.options;
    settings.pathSeparator = initialisationData.pathSeparator;
    settings.outputFolder = initialisationData.defaultOutputFolder;

    // Setup ui events (for static content)
    setupEvents();

    // Setup advanced section (for dynamic content)
    constructAdvancedSection(initialisationData.options);

    // TODO Setup provided config json

    // If a file is provided, put it in the script location
    if (initialisationData.filename !== null) {
        const entryScriptNode = document.getElementById('entry-script');
        entryScriptNode.value = initialisationData.filename;
        scriptLocationChange({ target: entryScriptNode });
    }

    // TODO Display warnings with initialisation_data.warnings
});

// Trigger events to initially setup the ui
window.addEventListener("load", async () => {

});
