//---- Generic Movement ----//
// Expand groups using blue chevrons
function expand(el) {
    let expandDiv_node = document.getElementById(el.dataset.expand);
    if (el.style.transform !== "rotate(0deg)") {
        el.style.transform = 'rotate(0deg)';
        if (el.dataset.display !== undefined) {
            expandDiv_node.style.display = el.dataset.display;
        } else {
            expandDiv_node.style.display = 'block';
        }
    } else {
        el.style.transform = 'rotate(180deg)';
        expandDiv_node.style.display = 'none';
    }
}

// General flag switches (with no arguments - these are buttons)
function switchButton(node) {
    if (node.classList.contains('btn_choice_greyed')) {
        node.classList.remove('btn_choice_greyed');
    } else {
        node.classList.add('btn_choice_greyed');
    }
    generateCurrentCommand();
}



//---- Server Functions ----//
// Init method to tell the server we have started and get the file from the args if it exists
async function onInit() {
    let init_data = await eel.ui_on_init()();

    // Setup file from args
    if (init_data.filename !== null) {
        document.getElementById('file').value = init_data.filename;
    }
    await checkFile(document.getElementById('file'));

    // Setup configuration
    if (init_data.supplied_ui_configuration !== null) {
        await setConfiguration(JSON.stringify(init_data.supplied_ui_configuration));
    }
}

// Ask the user for a file and put it in a node with id=for_id. Re-check if exists to get rid of any red
async function getFile(for_id, type) {
    document.getElementById(for_id).value = await eel.ask_file(type)();
    checkFile(document.getElementById(for_id));
}

// Ask the user for a folder and put it in a node with id=for_id.
async function getFolder(for_id) {
    document.getElementById(for_id).value = await eel.ask_folder()();
    checkFolder(document.getElementById(for_id));
}

// Check if the value of a node is a filename that exists.
async function checkFile(node) {
    checkExists(node, async function() {
        return await eel.check_if_file_exists(node.value)();
    });
}

// Check if the value of a node is a directory that exists.
async function checkFolder(node) {
    checkExists(node, async function() {
        return await eel.check_if_folder_exists(node.value)();
    });
}

// Colour borders based on the result of an 'exist check'
async function checkExists(node, existCheck) {
    if (node.value === '' && !node.required) {
        // If the input is empty and not required, don't make it look like it is missing
        node.style.border = "1px solid #458BC6";
    } else {
        let exists = await existCheck();
        if (exists) {
            node.style.border = "1px solid #458BC6";
        } else {
            node.style.border = "1px solid #f44336";
        }
    }
    generateCurrentCommand();
}

// Find the path separator for this OS
function OSPathSep() {
    if (window.navigator.userAgent.indexOf("Windows") !== -1) { return ';'; } else { return ':'; }
}

// Open output folder
function openOutputFolder() {
    let output = document.getElementById("output_location").value;
    if (output === '') {
        output = 'output/';
    }
    if (!output.endsWith('/')) {
        output += '/'
    }
    eel.open_output_folder(output)();
}



// Group end command data
let command_data = {
    onefile: false,
    console: true,
    additional_files: {},
};



//---- Top Switches ----//
// Onefile - Switch colours of buttons on selection
function switchOnefile(active) {
    if (active) {
        document.getElementById('onefile_inactive').classList.add('btn_choice_greyed');
        document.getElementById('onefile_active').classList.remove('btn_choice_greyed');
        document.getElementById('onefileAdditionalFilesNote').style.display = 'block';
    } else {
        document.getElementById('onefile_active').classList.add('btn_choice_greyed');
        document.getElementById('onefile_inactive').classList.remove('btn_choice_greyed');
        document.getElementById('onefileAdditionalFilesNote').style.display = 'none';
    }
    command_data.onefile = active;
    generateCurrentCommand();
}

// No window - Switch colours of buttons on selection
function switchConsole(active) {
    if (active) {
        document.getElementById('console_inactive').classList.add('btn_choice_greyed');
        document.getElementById('console_active').classList.remove('btn_choice_greyed');
    } else {
        document.getElementById('console_active').classList.add('btn_choice_greyed');
        document.getElementById('console_inactive').classList.remove('btn_choice_greyed');
    }
    command_data.console = active;
    generateCurrentCommand();
}



//---- Additional files ----//
// Add multiple files - request for file input before
async function additionalFilesAddFiles() {
    let files = await eel.ask_files()();
    for (file of files) {
        additionalFilesAdd(file, '.');
    }
}

// Add a single folder - request for folder input before
async function additionalFilesAddFolder() {
    let folder = await eel.ask_folder()();
    let destination;
    if (folder.split('/').length > 1) { // If we can find the last folder in the path, use that
        destination = folder.split('/').pop() + '/';
    } else { // If we can't find a last folder, use assets/
        destination = 'assets/';
    }
    additionalFilesAdd(folder, destination);
}

// Generic method to add files
function additionalFilesAdd(src, destination) {
    // Get root
    let parent_node = document.getElementById('additional_files_content');

    // Generate a unique id
    let id = 'addFiles_' + Math.random().toString(36).substring(7);
    while (Object.keys(command_data.additional_files).indexOf(id) !== -1) {
        id = 'addFiles_' + Math.random().toString(36).substring(7);
    }

    // Generate HTML content
    let localDivRoot = document.createElement('div');
    localDivRoot.style.margin = '1px 0';
    localDivRoot.id = id;

    let source_node = document.createElement('input');
    source_node.placeholder = 'Source';
    source_node.addEventListener('keyup', e => { additionalFilesEdit(id) });
    source_node.style.maxWidth = '45%';
    source_node.style.width = '400px';
    source_node.required = true;

    let destination_node = document.createElement('input');
    destination_node.placeholder = 'Destination';
    destination_node.addEventListener('keyup', e => { additionalFilesEdit(id) });
    destination_node.style.maxWidth = '45%';
    destination_node.style.width = '400px';
    destination_node.style.marginLeft = '5px';

    let remove_node = document.createElement('img');
    remove_node.src = 'img/remove.svg';
    remove_node.addEventListener('click', e => { additionalFilesRemove(id) });
    remove_node.style.height = '20px';
    remove_node.style.marginBottom = '-5px';
    remove_node.style.cursor = 'pointer';
    remove_node.style.marginLeft = '5px';

    localDivRoot.appendChild(source_node);
    localDivRoot.appendChild(destination_node);
    localDivRoot.appendChild(remove_node);

    // Populate the fields
    source_node.value = src;
    destination_node.value = destination;

    // Insert the node
    parent_node.insertBefore(localDivRoot, document.getElementById('onefileAdditionalFilesNote'));

    // Setup command data and then trigger command_data fill
    command_data.additional_files[id] = {
        source: '',
        destination: ''
    };
    additionalFilesEdit(id);
}

// Remove file/folder entry by id
function additionalFilesRemove(id) {
    let block = document.getElementById(id);
    block.parentNode.removeChild(block);
    delete command_data.additional_files[id];
    generateCurrentCommand();
}

// When file data is modified for an id, update it
function additionalFilesEdit(id) {
    let node = document.getElementById(id);
    let source_node = node.children[0];
    let destination_node = node.children[1];
    command_data.additional_files[id].source = source_node.value;
    command_data.additional_files[id].destination = destination_node.value;

    checkExists(source_node, async function() {
        let path = source_node.value;
        return await eel.check_if_file_exists(path)() || await eel.check_if_folder_exists(path)();
    });
    generateCurrentCommand();
}



//---- Command Generation ----//
// Command generation
function generateCurrentCommand() {
    let node = document.getElementById("current_command");
    let command = 'pyinstaller -y ';
    // Basic
    if (command_data.onefile) {
        command += "-F "
    }
    if (!command_data.console) {
        command += "-w "
    }
    if (document.getElementById("icon").value !== "") {
        command += '-i "' + document.getElementById("icon").value + '" ';
    }
    if (Object.keys(command_data.additional_files).length > 0) {
        Object.keys(command_data.additional_files).forEach(additional_file_id => {
            let {source, destination} = command_data.additional_files[additional_file_id];
            command += '--add-data "' + source + '"' + OSPathSep() + '"' + destination + '" ';
        });
    }
    // Advanced
    // - Simple button flags
    for (const node of document.querySelectorAll('*[id^="OPTION"]')) {
        if (!node.classList.contains('btn_choice_greyed')) {
            command += node.id.replace('OPTION', '') + ' ';
        }
    }
    // - Values
    for (const node of document.querySelectorAll('*[id^="VALUE"]')) {
        if (node.value !== '') {
            command += node.id.replace('VALUE', '') + ' ';
            command += node.value + ' ';
        }
    }
    // - Split by Comma Values
    for (const node of document.querySelectorAll('*[id^="COMMASPLIT"]')) {
        if (node.value !== '') {
            let flag = node.id.replace('COMMASPLIT', '') + ' ';
            let values = node.value.split(',');
            for (const value of values) {
                if (value.trim() !== '') {
                    command += flag + value.trim() + ' ';
                }
            }
        }
    }

    // Final
    command += document.getElementById('extra_command_data').value + ' "' + document.getElementById('file').value + '"';
    node.value = command;
}



//---- Packaging Scripts and Files ----//

const state = {
    ready: 'STATE_READY',
    packaging: 'STATE_PACKAGING',
    complete: 'STATE_COMPLETE',
};

let current_state = state.ready;

function setState(newState) {
    // Sets up the UI for each different state
    current_state = newState;
    switch (newState) {
        case state.ready:
            // Clear output
            document.getElementById('output').style.display = 'none';
            document.getElementById('output').children[1].value = '';
            document.getElementById('output').children[1].rows = "0";
            // Set the main button back to initial value
            document.getElementById('convert').innerHTML = "Convert .py to .exe";
            // Hide open folder button
            document.getElementById('btm_main_wrapper').style.display = 'block';
            document.getElementById('openOutput').style.display = 'none';
            // Hide common issue link
            document.getElementById('common-issue-link').style.display = 'none';
            return;
        case state.packaging:
            // Disable convert button
            document.getElementById('convert').style.filter = 'grayscale(1)';
            document.getElementById('convert').style.cursor = 'not-allowed';
            document.getElementById('convert').innerHTML = "Converting...";
            // Show output
            document.getElementById('output').style.display = 'block';
            return;
        case state.complete:
            // Re-enable convert button and re-purpose it
            document.getElementById('convert').style.cursor = '';
            document.getElementById('convert').style.filter = '';
            document.getElementById('convert').innerHTML = "Clear Output";
            // Show open folder button (beside "Clear Output" button)
            document.getElementById('btm_main_wrapper').style.display = 'grid';
            document.getElementById('btm_main_wrapper').style.gridGap = '4px';
            document.getElementById('btm_main_wrapper').style.gridTemplateColumns = '1fr 1fr';
            document.getElementById('openOutput').style.display = 'block';
            // Show common issue link
            document.getElementById('common-issue-link').style.display = 'block';
            return;
    }
}

// Convert (also handles clearing output)
async function convert() {
    if (current_state === state.packaging) {
        return; // Can't do anything while packaging
    } else if (current_state === state.complete) {
        clearOutput(); // If packaging is complete, this buttons clears output
        return;
    } // Else we can continue with packaging

    // Make sure a file is supplied (don't check it exists, they already have a warning)
    if (document.getElementById('file').value === "") {
        alert("Script location required");
        return;
    }

    generateCurrentCommand(); // Final checks on the command
    let command = document.getElementById("current_command").value; // Pull out command
    let output = document.getElementById("output_location").value;
    if (output === '') { // Set default output to 'output/'
        output = 'output/';
    }
    if (!output.endsWith('/')) { // Make sure the output ends with /
        output += '/'
    }
    let filename;
    if (document.getElementById('VALUE-n').value !== '') {
        filename = document.getElementById('VALUE-n').value + '.py';
    } else {
        let command_split = command.split('"');
        filename = command_split[command_split.length-2].replace(/^.*[\\\/]/, '');
    }
    // Check and warn if a file will be overwritten
    let check = await eel.convert_pre_check(filename, command_data.onefile, output)();
    if (!check) {
        if(!confirm("File will overwrite current file\nContinue?")) {
            return;
        }
    }
    // Check if Recursion Limit is enabled
    let disable_recursion_limit = !document.getElementById('disable_recursion_limit').classList.contains('btn_choice_greyed');
    // Make a call to convert and set the state to packaging
    eel.convert(command, output, disable_recursion_limit)();
    setState(state.packaging);
}

// Server output to client textarea
eel.expose(addOutput);
function addOutput(line) {
    document.getElementById('output').children[1].value += line; // Add the line
    if (!line.endsWith('\n')) {
        document.getElementById('output').children[1].value += '\n'; // If there was no new line, add one
    }
    // Set the correct height to fit all the output and then scroll to the bottom
    document.getElementById('output').children[1].style.height = 'auto';
    document.getElementById('output').children[1].style.height = (document.getElementById('output').children[1].scrollHeight + 10) + 'px';
    window.scrollTo(0, document.body.scrollHeight);
}

// Server notification for complete
eel.expose(outputComplete);
function outputComplete() {
    setState(state.complete);
    window.scrollTo(0, document.body.scrollHeight);
}

// When user clicks "Clear Output"
function clearOutput() {
    setState(state.ready);
}



//---- Configuration Importing and Exporting ----//
function getConfiguration() {
    let config = {
        command_data: {},
        id_injectable: {},
        switches: {}
    };
    // Command data
    config.command_data = command_data;
    // Injectable by id
    document.querySelectorAll('*[id^="VALUE"], *[id^="COMMASPLIT"], #file, #icon, #output_location, #extra_command_data').forEach(element => {
        config.id_injectable[element.id] = element.value
    });
    // Option toggle buttons
    document.querySelectorAll('*[id^="OPTION"], #disable_recursion_limit').forEach(element => {
        config.switches[element.id] = !element.classList.contains('btn_choice_greyed');
    });

    return JSON.stringify(config);
}

async function setConfiguration(configString) {
    let config;
    try { // Check this is valid JSON
        config = JSON.parse(configString);
    }
    catch (err) {
        alert('Unable to parse configuration from file:\n' + err.message);
        return false;
    }
    // Command data
    command_data = config.command_data;
    switchOnefile(command_data.onefile);
    switchConsole(command_data.console);
    Object.keys(config.command_data.additional_files).forEach(id => {
        let { source, destination } = config.command_data.additional_files[id];
        additionalFilesAdd(source, destination);
    });
    // Injectable by id
    Object.keys(config.id_injectable).forEach(id => {
        document.getElementById(id).value = config.id_injectable[id];
        document.getElementById(id).dispatchEvent(new Event('keyup')); // Manually trigger for folder/file checks
    });
    // Option toggle buttons
    Object.keys(config.switches).forEach(id => {
        if (config.switches[id]) {
            document.getElementById(id).classList.remove('btn_choice_greyed');
        } else {
            document.getElementById(id).classList.add('btn_choice_greyed');
        }
    });
    // Trigger required events (to get things checked)
    document.getElementById('file').dispatchEvent(new Event('keyup'));

    generateCurrentCommand();
    return true;
}

async function importConfigFromJSONFile() {
    let filename = await eel.ask_file('json')();
    if (filename !== '') {
        let data = await eel.get_file_contents(filename)();
        await setConfiguration(data);
    }
}

async function importConfigFromClipboard() {
    if (!navigator.clipboard) { // Check we can use navigator.clipboard
        alert('Cannot use clipboard operations in this browser');
        return;
    }
    const clipboardText = await navigator.clipboard.readText();
    await setConfiguration(clipboardText);
}

async function exportConfigToJSONFile() {
    let filename = await eel.ask_file_save_location('json')();
    if (filename !== '') {
        await eel.write_file_contents(filename, getConfiguration())();
    } else {
        alert('Please select a file to export config')
    }
}

async function exportConfigToClipboard() {
    if (!navigator.clipboard) { // Check we can use navigator.clipboard
        alert('Cannot use clipboard operations in this browser');
        return;
    }
    await navigator.clipboard.writeText(getConfiguration());
}



//---- Info Bar ----//
// Setting view of left information bar based on size of window
function checkInfoBar() {
    if (window.innerWidth >= 1050) {
        document.getElementById('content').style.gridTemplateColumns = '250px 800px'; // 266 = info bar + body margins
        document.getElementById('info_bar').style.display = 'block';
        document.getElementById('mid').style.maxWidth = '1050px';

        document.getElementById('header').style.width = '100%';
        document.getElementById('header').style.margin = 'auto';
        document.getElementById('header').style.maxWidth = '1050px';
    } else {
        document.getElementById('content').style.gridTemplateColumns = '1fr';
        document.getElementById('info_bar').style.display = 'none';
        document.getElementById('mid').style.maxWidth = '';

        document.getElementById('header').style.width = '';
        document.getElementById('header').style.margin = '';
        document.getElementById('header').style.maxWidth = '';
    }
}

// Events
window.addEventListener('resize', function () {
    checkInfoBar();
});



//---- Load Events ----//
window.addEventListener('load', function () {
    checkInfoBar();
    setupAdvancedSwitchesAndInputs();
    onInit();
    // If the server stops, close the UI
    window.eel._websocket.addEventListener('close', e => {window.close()})
});

// Setup onclicks for buttons and onkeyups for inputs
function setupAdvancedSwitchesAndInputs() {
    // General toggle click listeners
    for (const node of document.querySelectorAll('*[id^="OPTION"], #disable_recursion_limit')) {
        node.addEventListener('click', e => { switchButton(node); });
    }
    // Advanced input listeners
    for (const node of document.querySelectorAll('*[id^="VALUE"], *[id^="COMMASPLIT"]')) {
        node.addEventListener('change', e => { generateCurrentCommand(); });
    }
}
