// Expand groups
function expand(node) {
    var expandDiv_node = document.getElementById(node.dataset.expand);
    if (node.style.transform === "") {
        node.style.transform = 'rotate(180deg)';
        if (node.dataset.display !== undefined) {
            expandDiv_node.style.display = node.dataset.display;
        } else {
            expandDiv_node.style.display = 'block';
        }
    } else {
        node.style.transform = '';
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

// Python script
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
        document.getElementById('onefile_inactive').classList.add('button_choice_greyed')
        document.getElementById('onefile_active').classList.remove('button_choice_greyed')
    } else {
        document.getElementById('onefile_active').classList.add('button_choice_greyed')
        document.getElementById('onefile_inactive').classList.remove('button_choice_greyed')
    }
    command_data['onefile'] = active
    generateCurrentCommand();
}

// No window
function switchConsole(active) {
    if (active) {
        document.getElementById('console_inactive').classList.add('button_choice_greyed')
        document.getElementById('console_active').classList.remove('button_choice_greyed')
    } else {
        document.getElementById('console_active').classList.add('button_choice_greyed')
        document.getElementById('console_inactive').classList.remove('button_choice_greyed')
    }
    command_data['console'] = active
    generateCurrentCommand();
}

// Additional files
function additionalFilesAdd() {
    var parent_node = document.getElementById('additional_files_content');
    var div = document.createElement('div');
    var id = 'addFiles_' + Math.random().toString(36).substring(7);
    while (Object.keys(command_data['additional_files']).indexOf(id) !== -1) {
        id = 'addFiles_' + Math.random().toString(36).substring(7);
    }
    div.innerHTML = '<div style="margin: 1px 0;" id="' + id + '">\n<input placeholder="File" onkeyup="additionalFilesEdit(\'' + id + '\')">\n<button class="button_search" onclick="additionalFilesSearch(\'' + id + '\')">Search</button>\n<input placeholder="Destination" onkeyup="additionalFilesEdit(\'' + id + '\')">\n<img src="img/remove.svg" onclick="additionalFilesRemove(\'' + id + '\')" style="height: 20px; margin-bottom: -5px; cursor: pointer;">\n</div>';
    parent_node_children = document.getElementById('additional_files_content').children;
    parent_node.insertBefore(div.firstChild, parent_node_children[parent_node_children.length-1]);
    command_data["additional_files"][id] = {
        "file" : "",
        "filename" : ""
    };
}

function additionalFilesRemove(id) {
    var block = document.getElementById(id);
    block.parentNode.removeChild(block);
    delete command_data["additional_files"][id];
}

function additionalFilesEdit(id) {
    command_data["additional_files"][id]["file"] = document.getElementById(id).children[0].value;
    command_data["additional_files"][id]["filename"] = document.getElementById(id).children[2].value;
    generateCurrentCommand();
}

async function additionalFilesSearch(id) {
    let file = await eel.askFile()();
    document.getElementById(id).children[0].value = file;
    document.getElementById(id).children[2].value = file.replace(/^.*[\\\/]/, '');
    additionalFilesEdit(id);
}

// Advanced
// Output directory
async function getFolder(for_id) {
    let file = await eel.askFolder()();
    document.getElementById(for_id).value = file;
}

// Command generation
function generateCurrentCommand() {
    var node = document.getElementById("current_command")
    var command = 'pyinstaller -y ';
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
            var dst = document.getElementById(id).children[2].value;
            command += '--add-data "' + src + '";"' + dst + '" ';
        }
    }
    command += '"' + document.getElementById('file').value + '"';
    node.value = command
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
    var filename = command_split[command_split.length-2].replace(/^.*[\\\/]/, '');
    let check = await eel.convertPreCheck(filename, command_data['onefile'], output)();
    if (!check) {
        console.log("Overwrite warning");
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
    document.getElementById('output').children[1].rows = (parseInt(document.getElementById('output').children[1].rows) + 1) + '';
    window.scrollTo(0, document.body.scrollHeight);
}

eel.expose(outputComplete);
function outputComplete() {
    document.getElementById('convert').style.cursor = '';
    document.getElementById('convert').style.filter = '';
    document.getElementById('convert').innerHTML = "Clear Output";
}

function clearOutput() {
    document.getElementById('output').style.display = 'none';
    document.getElementById('output').children[1].value = '';
    document.getElementById('output').children[1].rows = "0";

    document.getElementById('convert').innerHTML = "Convert .py to .exe";
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

// Events
window.addEventListener('resize', function () {
    checkInfoBar();
});

window.addEventListener('load', function () {
    checkInfoBar();
});
