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

var command_data = {
    "onefile" : false,
    "console" : true,
    "additional_files" : {},
    "advanced" : {
        "clean" : true,
        "name" : ""
    }
}

async function getFile() {
    let file = await eel.askFile()();
    document.getElementById('file').value = file;
    checkScript(document.getElementById('file'));
}

async function checkScript(node) {
    let exists = await eel.checkIfFileExists(node.value)();
    if (exists) {
        node.style.border = "1px solid #458BC6";
    } else {
        node.style.border = "1px solid #f44336";
    }
    generateCurrentCommand();
}

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

async function getIcon() {
    let file = await eel.askFile()();
    document.getElementById('icon').value = file;
    checkScript(document.getElementById('icon'));
    generateCurrentCommand();
}

function additionalFilesAdd() {

}

function additionalFilesRemove() {

}

function additionalFilesEdit() {
    generateCurrentCommand();
}

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
    if (JSON.stringify(command_data['additional_files']) === JSON.stringify({})) {

    }
    command += '"' + document.getElementById('file').value + '"';
    node.value = command
}

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

window.addEventListener('resize', function () {
    checkInfoBar();
});

window.addEventListener('load', function () {
    checkInfoBar();
});

generateCurrentCommand();