/*
Handle the initialisation of the ui
*/

let options = {};

const setupOption = (option) => {

};

const constructAdvancedSection = (pyinstallerOptions) => {
    options = pyinstallerOptions;

    // Filter options we don't need to manually setup
    const filteredOptions = options.filter(o =>
        o.dest !== 'help'
        && o.dest !== 'onefile' // Handles onefile and onedir
        && o.dest !== 'specpath'
    );

    // Setup options left over

    console.log('initialisation_data', pyinstallerOptions);
};

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
});

// Trigger events to initially setup the ui
window.addEventListener("load", async () => {

});
