/*
Handle the initialisation of the ui
*/

let options = [];

// Get initialisation data from the server and setup the ui
window.addEventListener("load", async () => {
    // Get initialisation data from Python
    const initialisation_data = await eel.initialise()();
    options = initialisation_data.options;

    // Setup ui events (for static content)
    setupEvents();

    // Setup advanced section (for dynamic content)
    constructAdvancedSection(initialisation_data.options);

    // TODO Setup provided config json

    // If a file is provided, put it in the script location
    if (initialisation_data.filename !== null) {
        const entryScriptNode = document.getElementById('entry-script');
        entryScriptNode.value = initialisation_data.filename;
        scriptLocationChange({ target: entryScriptNode });
    }

    // TODO Display warnings with initialisation_data.warnings
});

// Trigger events to initially setup the ui
window.addEventListener("load", async () => {

});
