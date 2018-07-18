// Expand groups
function expand(node) {
    var expandDiv_node = document.getElementById(node.dataset.expand);
    if (node.style.transform !== "rotate(0deg)") {
        node.style.transform = 'rotate(0deg)';
        if (node.dataset.display !== undefined) {
            expandDiv_node.style.display = node.dataset.display;
        } else {
            expandDiv_node.style.display = 'block';
        }
    } else {
        node.style.transform = 'rotate(180deg)';
        expandDiv_node.style.display = 'none';
    }
}

// Group end command data
var command_data = {
    "onefile" : false,
    "console" : true,
    "additional_files" : {},
    "advanced" : {
        "clean" : true,
        "name" : ""
    }
}

// Get and Check files
async function getFile(for_id) {
    let file = await eel.askFile()();
    document.getElementById(for_id).value = file;
    checkFile(document.getElementById(for_id));
}

async function checkFile(node) {
    let exists = await eel.checkIfFileExists(node.value)();
    if (exists) {
        node.style.border = "1px solid #458BC6";
    } else {
        node.style.border = "1px solid #f44336";
    }
    generateCurrentCommand();
}

// Onefile
function switchOnefile(active) {
    if (active) {
        document.getElementById('onefile_inactive').classList.add('btn_choice_greyed')
        document.getElementById('onefile_active').classList.remove('btn_choice_greyed')
        document.getElementById('onefileAdditionalFilesNote').style.display = 'block';
    } else {
        document.getElementById('onefile_active').classList.add('btn_choice_greyed')
        document.getElementById('onefile_inactive').classList.remove('btn_choice_greyed')
        document.getElementById('onefileAdditionalFilesNote').style.display = 'none';
    }
    command_data['onefile'] = active
    generateCurrentCommand();
}

// No window
function switchConsole(active) {
    if (active) {
        document.getElementById('console_inactive').classList.add('btn_choice_greyed')
        document.getElementById('console_active').classList.remove('btn_choice_greyed')
    } else {
        document.getElementById('console_active').classList.add('btn_choice_greyed')
        document.getElementById('console_inactive').classList.remove('btn_choice_greyed')
    }
    command_data['console'] = active
    generateCurrentCommand();
}

// Additional files
async function additionalFilesAddFiles() {
    let files = await eel.askFiles()();
    for (file of files) {
        additionalFilesAdd(file);
    }
}

async function additionalFilesAddFolder() {
    let folder = await eel.askFolder()();
    additionalFilesAdd(folder);
}

function additionalFilesAdd(src) {
    var parent_node = document.getElementById('additional_files_content');
    var div = document.createElement('div');
    var id = 'addFiles_' + Math.random().toString(36).substring(7);
    while (Object.keys(command_data['additional_files']).indexOf(id) !== -1) { // TODO Get rid of the need for 'additional_files' in command data
        id = 'addFiles_' + Math.random().toString(36).substring(7);
    }
    div.innerHTML =
        '<div style="margin: 1px 0;" id="' + id + '">\n' +
        '<input placeholder="Source" onkeyup="additionalFilesEdit(\'' + id + '\')" style="max-width: 45%; width: 400px;">\n' +
        '<input placeholder="Destination" onkeyup="additionalFilesEdit(\'' + id + '\')" style="max-width: 45%; width: 400px; margin-left: 0;">\n' +
        '<img src="img/remove.svg" onclick="additionalFilesRemove(\'' + id + '\')" style="height: 20px; margin-bottom: -5px; cursor: pointer;">\n' +
        '</div>';
    parent_node.insertBefore(div.firstChild, document.getElementById('onefileAdditionalFilesNote'));
    document.getElementById(id).children[0].value = src;
    document.getElementById(id).children[1].value = 'assets/';
    command_data["additional_files"][id] = {
        "file" : "",
        "filename" : ""
    };
    generateCurrentCommand();
    additionalFilesEdit(id);
}

function additionalFilesRemove(id) {
    var block = document.getElementById(id);
    block.parentNode.removeChild(block);
    delete command_data["additional_files"][id];
    generateCurrentCommand();
}

function additionalFilesEdit(id) {
    command_data["additional_files"][id]["file"] = document.getElementById(id).children[0].value;
    command_data["additional_files"][id]["filename"] = document.getElementById(id).children[1].value;
    generateCurrentCommand();
}

// Advanced
// - Output directory
async function getFolder(for_id) {
    let file = await eel.askFolder()();
    document.getElementById(for_id).value = file;
}

// - General flag switches
function switchButton(node) {
    if (node.classList.contains('btn_choice_greyed')) {
        node.classList.remove('btn_choice_greyed');
    } else {
        node.classList.add('btn_choice_greyed');
    }
    generateCurrentCommand();
}

function setupAdvancedSwitchesAndInputs() {
    for (const node of document.querySelectorAll('*[id^="OPTION"]')) {
        node.onclick = function () { switchButton(node); };
    }
    for (const node of document.querySelectorAll('*[id^="VALUE"]')) {
        node.onkeyup = function () { generateCurrentCommand(); };
        node.style.marginBottom = '2px';
    }
}

// Command generation
function generateCurrentCommand() {
    var node = document.getElementById("current_command")
    var command = 'pyinstaller -y ';
    // Basic
    if (command_data['onefile']) {
        command += "-F "
    }
    if (!command_data['console']) {
        command += "-w "
    }
    if (document.getElementById("icon").value !== "") {
        command += '-i "' + document.getElementById("icon").value + '" ';
    }
    if (Object.keys(command_data['additional_files']).length > 0) {
        for (const id of Object.keys(command_data['additional_files'])) {
            var src = document.getElementById(id).children[0].value;
            var dst = document.getElementById(id).children[1].value;
            command += '--add-data "' + src + '"' + OSPathSep() + '"' + dst + '" ';
        }
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

    // Final
    command += document.getElementById('extra_command_data').value + ' "' + document.getElementById('file').value + '"';
    node.value = command
}

function OSPathSep() {
    if (window.navigator.userAgent.indexOf("Windows")!= -1) { return ';'; } else { return ':'; }
}

// Convert
async function convert() {
    if (document.getElementById('file').value === "") {
        alert("Script location required");
        return;
    }
    if (document.getElementById('convert').style.cursor !== '') {return;}
    if (document.getElementById('convert').innerHTML === 'Converting...') {return;}
    if (document.getElementById('convert').innerHTML === 'Clear Output') {
        clearOutput();
        return;
    }

    generateCurrentCommand();
    var command = document.getElementById("current_command").value;
    var output = document.getElementById("output_location").value;
    if (output === '') {
        output = 'output/';
    }
    if (!output.endsWith('/')) {
        output += '/'
    }
    var command_split = command.split('"');
    var filename;
    if (document.getElementById('VALUE-n').value !== '') {
        filename = document.getElementById('VALUE-n').value + '.py';
    } else {
        filename = command_split[command_split.length-2].replace(/^.*[\\\/]/, '');
    }
    let check = await eel.convertPreCheck(filename, command_data['onefile'], output)();
    if (!check) {
        if(!confirm("File will overwrite current file\nContinue?")) {
            return;
        }
    }
    eel.convert(command, output)();

    document.getElementById('convert').style.filter = 'grayscale(1)';
    document.getElementById('convert').style.cursor = 'not-allowed';
    document.getElementById('convert').innerHTML = "Converting...";
}

// Execution output
eel.expose(addOutput);
function addOutput(line) {
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').children[1].value += line
    if (!line.endsWith('\n')) {
        document.getElementById('output').children[1].value += '\n';
    }
    document.getElementById('output').children[1].style.height = 'auto';
    document.getElementById('output').children[1].style.height = (document.getElementById('output').children[1].scrollHeight + 10) + 'px';
    window.scrollTo(0, document.body.scrollHeight);
}

eel.expose(outputComplete);
function outputComplete() {
    document.getElementById('convert').style.cursor = '';
    document.getElementById('convert').style.filter = '';
    document.getElementById('convert').innerHTML = "Clear Output";
    // Show open folder button
    document.getElementById('btm_main_wrapper').style.display = 'grid';
    document.getElementById('btm_main_wrapper').style.gridGap = '4px';
    document.getElementById('btm_main_wrapper').style.gridTemplateColumns = '1fr 1fr';
    document.getElementById('openOutput').style.display = 'block';
}

function clearOutput() {
    document.getElementById('output').style.display = 'none';
    document.getElementById('output').children[1].value = '';
    document.getElementById('output').children[1].rows = "0";

    document.getElementById('convert').innerHTML = "Convert .py to .exe";
    // Hide open folder button
    document.getElementById('btm_main_wrapper').style.display = 'block';
    document.getElementById('openOutput').style.display = 'none';
}

// Left info bar
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

// Get file from args
async function getFileFromArgs() {
    let filename = await eel.getFileFromArgs()();
    document.getElementById('file').value = filename;
    checkFile(document.getElementById('file'));
}

// Open output folder
function openOutputFolder() {
    var output = document.getElementById("output_location").value;
    if (output === '') {
        output = 'output/';
    }
    if (!output.endsWith('/')) {
        output += '/'
    }
    eel.openOutputFolder(output)();
}

// Events
window.addEventListener('resize', function () {
    checkInfoBar();
});

window.addEventListener('load', function () {
    checkInfoBar();
    setupAdvancedSwitchesAndInputs();
    getFileFromArgs();
});
