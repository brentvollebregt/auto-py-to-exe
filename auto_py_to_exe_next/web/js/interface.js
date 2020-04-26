/*
Handle visual events
*/

const expandSection = (sectionName) => {
    const root = document.getElementById(`section-${sectionName}`);
    const chevron = root.querySelector('.header img');
    const content = root.querySelector(`.content`);

    if (root.getAttribute('data-expanded') === null) {
        // Show the section
        chevron.style.transform = 'rotate(0deg)';
        content.style.display = 'block';
        root.setAttribute('data-expanded', '');
    } else {
        // Hide the section
        chevron.style.transform = 'rotate(180deg)';
        content.style.display = 'none';
        root.removeAttribute('data-expanded');
    }
};

const colourInputBasedOnIfFileExists = async (inputNode, allowedToBeADirectory) => {
    const { value } = inputNode;
    if (
        await doesFileExist(value)
        || (allowedToBeADirectory && await doesFolderExist(value))
    ) {
        inputNode.style.border = "";
    } else {
        inputNode.style.border = '1px solid rgb(244, 67, 54)';
    }
};

const addAdditionalFile = (source, destination) => {
    const id = generateId(16);
    modifyOption('datas', id, [source, destination]);

    // Construct visible inputs
    const wrapper = document.createElement('div');
    wrapper.id = `datas-${id}`;
    const sourceInput = document.createElement('input');
    const destinationInput = document.createElement('input');
    const removeButton = document.createElement('img');
    wrapper.appendChild(sourceInput);
    wrapper.appendChild(destinationInput);
    wrapper.appendChild(removeButton);

    // Setup values and event listeners
    sourceInput.value = source;
    destinationInput.value = destination;
    removeButton.src = 'img/remove.svg';
    sourceInput.addEventListener('input', (event) => {
        const value = event.target.value;
        modifyOption('datas', id, [value, destinationInput.value]);
        colourInputBasedOnIfFileExists(sourceInput, true);
    });
    destinationInput.addEventListener('input', (event) => {
        const value = event.target.value;
        modifyOption('datas', id, [sourceInput.value, value]);
    });
    removeButton.addEventListener('click', () => {
        removeOption('datas', id);
        wrapper.remove();
    });

    // Add the elements to the list
    const datasList = document.getElementById('datas-list');
    datasList.appendChild(wrapper);
};

const staticAndIgnoredArguments =[
    'help', // Will trigger an unwanted short circuit
    'filenames', // filenames is handled by static content
    'onefile', // onefile and onedir and handled by static content
    'console', // console and windowed and handled by static content
    'icon_file', // icon_file is handled by static content
    'datas', // datas is handled by static content
    'specpath', // This is overrided by auto-py-to-exe
    'distpath', // This is overrided by auto-py-to-exe
    'workpath', // This is overrided by auto-py-to-exe
    'noconfirm' // This always used by auto-py-to-exe (-y)
];

const sectionArguments = [
    {
        title: 'General Options',
        arguments: ['upx_dir', 'ascii', 'clean_build', 'loglevel']
    },
    {
        title: 'What to generate',
        arguments: ['name']
    },
    {
        title: 'What to bundle, where to search',
        arguments: ['binaries', 'pathex', 'hiddenimports', 'hookspath', 'runtime_hooks', 'excludes', 'key']
    },
    {
        title: 'How to generate',
        arguments: ['debug', 'strip', 'noupx', 'upx_exclude']
    },
    {
        title: 'Windows specific options',
        arguments: ['version_file', 'manifest', 'resources', 'uac_admin', 'uac_uiaccess']
    },
    {
        title: 'Windows Side-by-side Assembly searching options (advanced)',
        arguments: ['win_private_assemblies', 'win_no_prefer_redirects']
    },
    {
        title: 'Mac OS X specific options',
        arguments: ['bundle_identifier']
    },
    {
        title: 'Rarely used special options',
        arguments: ['runtime_tmpdir', 'bootloader_ignore_signals']
    },
];

const _createSubSectionInAdvanced = (title, options) => {
    const parent = document.querySelector('#section-advanced .content');
    const subSectionNode = document.createElement('div');
    parent.appendChild(subSectionNode);

    // Setup title
    const subSectionTitleNode = document.createElement('h3');
    subSectionTitleNode.textContent = title;
    subSectionTitleNode.classList.add('noselect');
    subSectionNode.appendChild(subSectionTitleNode);

    // Setup options
    options.forEach(o => {
        // Container
        const container = document.createElement('div');
        subSectionNode.appendChild(container);

        // Option title / name
        const optionNode = document.createElement('span');
        container.appendChild(optionNode);
        optionNode.textContent = o.option_strings[o.option_strings.length - 1];

        // Help icon
        const helpNode = document.createElement('span');
        container.appendChild(helpNode);
        helpNode.title = o.help;
        helpNode.textContent = '?TMP'; // TODO Remove when CSS styled

        // Identify what type of inputs to use
        if (o.nargs === 0) {
            container.classList.add('switch');

            const enableButton = document.createElement('button');
            container.appendChild(enableButton);
            enableButton.textContent = 'Enable'

        } else if (o.choices !== null) {
            container.classList.add('choice');

            const selectNode = document.createElement('select');
            container.appendChild(selectNode);

            const defaultOptionNode = document.createElement('option');
            selectNode.appendChild(defaultOptionNode);
            defaultOptionNode.textContent = '';

            o.choices.map(choice => {
                const optionNode = document.createElement('option');
                selectNode.appendChild(optionNode);
                optionNode.textContent = choice;
            });

        } else if (o.default !== null || o.dest === 'upx_exclude') {
            container.classList.add('multiple-input');

            const addButton = document.createElement('button');
            container.appendChild(addButton);
            addButton.textContent = 'Add';

        } else {
            container.classList.add('input');

            const inputNode = document.createElement('input');
            container.appendChild(inputNode);
            inputNode.placeholder = o.metavar || 'Value'
        }
    });
};

const constructAdvancedSection = (pyinstallerOptions) => {
    options = pyinstallerOptions;

    // Setup pre-defined sections
    sectionArguments.forEach(section =>
        _createSubSectionInAdvanced(
            section.title,
            options.filter(o => section.arguments.indexOf(o.dest) !== -1)
        )
    );

    // Setup extra arguments
    const usedSectionArguments = flatMap(sectionArguments.map(s => s.arguments));
    const extraArguments = options.filter(o =>
        usedSectionArguments.indexOf(o.dest) === -1
        && staticAndIgnoredArguments.indexOf(o.dest) === -1
    );
    if (extraArguments.length > 0) {
        console.log('extraArguments', extraArguments);
        _createSubSectionInAdvanced(
            'Other',
            extraArguments
        );
    }
};
