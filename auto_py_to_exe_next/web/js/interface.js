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

const colourInput = async (inputNode, allowedToBeEmpty, allowedToBeFile, allowedToBeADirectory) => {
    const { value } = inputNode;
    if (
        (allowedToBeEmpty && value === '')
        || (!allowedToBeEmpty && value !== '' && !allowedToBeFile && !allowedToBeADirectory)
        || (allowedToBeFile && await doesFileExist(value))
        || (allowedToBeADirectory && await doesFolderExist(value))
    ) {
        inputNode.style.border = "";
    } else {
        inputNode.style.border = '1px solid rgb(244, 67, 54)';
    }
};

const addDoubleInputForSrcDst = (parentNode, optionDest, source, destination, sourceCanBeFile, sourceCanBeDirectory) => {
    const id = generateId(16);
    modifyOption(optionDest, id, [source, destination]);

    // Construct visible inputs
    const wrapper = document.createElement('div');
    parentNode.appendChild(wrapper);
    const sourceInput = document.createElement('input');
    wrapper.appendChild(sourceInput);
    const destinationInput = document.createElement('input');
    wrapper.appendChild(destinationInput);
    const removeButton = document.createElement('img');
    wrapper.appendChild(removeButton);

    wrapper.classList.add('dual-value');

    sourceInput.value = source;
    sourceInput.addEventListener('input', (event) => {
        const value = event.target.value;
        modifyOption(optionDest, id, [value, destinationInput.value]);
        colourInput(sourceInput, false, sourceCanBeFile, sourceCanBeDirectory);
    });

    destinationInput.value = destination;
    destinationInput.addEventListener('input', (event) => {
        const value = event.target.value;
        modifyOption(optionDest, id, [sourceInput.value, value]);
    });

    removeButton.src = 'img/remove.svg';
    removeButton.addEventListener('click', () => {
        removeOption(optionDest, id);
        wrapper.remove();
    });
};

const staticAndIgnoredOptions =[
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

const sectionOptions = [
    {
        title: 'General Options',
        options: ['name', 'upx_dir', 'ascii', 'clean_build', 'loglevel']
    },
    {
        title: 'What to bundle, where to search',
        options: ['binaries', 'pathex', 'hiddenimports', 'hookspath', 'runtime_hooks', 'excludes', 'key']
    },
    {
        title: 'How to generate',
        options: ['debug', 'strip', 'noupx', 'upx_exclude']
    },
    {
        title: 'Windows specific options',
        options: ['version_file', 'manifest', 'resources', 'uac_admin', 'uac_uiaccess']
    },
    {
        title: 'Windows Side-by-side Assembly searching options (advanced)',
        options: ['win_private_assemblies', 'win_no_prefer_redirects']
    },
    {
        title: 'Mac OS X specific options',
        options: ['bundle_identifier']
    },
    {
        title: 'Rarely used special options',
        options: ['runtime_tmpdir', 'bootloader_ignore_signals']
    },
];

// Options that expect file and directory paths
const fileOptions = ['runtime_hooks', 'version_file', 'manifest', 'resources'];
const directoryOptions = ['upx_dir', 'pathex', 'hookspath', 'runtime_tmpdir'];

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
        container.classList.add('option-container');

        // Option title / name
        const optionNode = document.createElement('span');
        container.appendChild(optionNode);
        optionNode.textContent = o.option_strings[o.option_strings.length - 1];

        // Help icon
        const helpNode = document.createElement('span');
        optionNode.appendChild(helpNode); // Put the icon inside the option text
        helpNode.title = o.help.replace(/R\|/, '');
        helpNode.classList.add('info_icon');

        // Identify what type of inputs to use
        if (o.nargs === 0) {
            // Single switch toggle
            container.classList.add('switch');

            const enableButton = document.createElement('button');
            container.appendChild(enableButton);
            enableButton.textContent = 'Enable';
            enableButton.classList.add('unselected');
            enableButton.addEventListener('click', () => {
                if (enableButton.classList.contains('unselected')) {
                    modifyOption(o.dest, "", true);
                    enableButton.classList.remove('unselected');
                    enableButton.classList.add('selected');
                } else {
                    removeOption(o.dest, "");
                    enableButton.classList.add('unselected');
                    enableButton.classList.remove('selected');
                }
            });

        } else if (o.choices !== null) {
            // Particular values allowed
            container.classList.add('choice');

            const selectNode = document.createElement('select');
            container.appendChild(selectNode);
            selectNode.addEventListener('change', (event) => {
                if (event.target.value === '') {
                    removeOption(o.dest, "");
                } else {
                    modifyOption(o.dest, "", event.target.value);
                }
            });

            const defaultOptionNode = document.createElement('option');
            selectNode.appendChild(defaultOptionNode);
            defaultOptionNode.textContent = '';

            o.choices.map(choice => {
                const optionNode = document.createElement('option');
                selectNode.appendChild(optionNode);
                optionNode.textContent = choice;
                optionNode.value = choice;
            });

        } else if (o.dest === 'binaries') {
            // Similar to datas (specific option value formatting)
            container.classList.add('multiple-input');

            const addButton = document.createElement('img');
            container.appendChild(addButton);
            addButton.src = 'img/plus.svg';

            const valuesContainer = document.createElement('div');
            container.appendChild(valuesContainer);

            addButton.addEventListener('click', async () => {
                const initialValue = await askForFile(null);
                if (initialValue !== '') {
                    addDoubleInputForSrcDst(valuesContainer, o.dest, initialValue, '.', true, false);
                }
            });

        } else if (o.default !== null || o.dest === 'upx_exclude') {
            // Multiple values
            container.classList.add('multiple-input');

            const isOptionFileBased = fileOptions.indexOf(o.dest) !== -1;
            const isOptionDirectoryBased = directoryOptions.indexOf(o.dest) !== -1;

            const addButton = document.createElement('img');
            container.appendChild(addButton);
            addButton.src = 'img/plus.svg';

            const valuesContainer = document.createElement('div');
            container.appendChild(valuesContainer);

            addButton.addEventListener('click', async () => {
                // Get initial value
                let initialValue = '';
                if (isOptionFileBased || isOptionDirectoryBased) {
                    initialValue = isOptionFileBased ? await askForFile(null) : await askForFolder();
                    if (initialValue === '') {
                        return
                    }
                }

                const id = generateId(16);
                modifyOption(o.dest, id, initialValue);

                const valueContainer = document.createElement('div');
                valuesContainer.appendChild(valueContainer);

                const inputNode = document.createElement('input');
                valueContainer.appendChild(inputNode);
                inputNode.value = initialValue;
                inputNode.placeholder = o.metavar || 'Value';
                colourInput(inputNode, false, isOptionFileBased, isOptionDirectoryBased);
                inputNode.addEventListener('input', (event) => {
                    modifyOption(o.dest, id, event.target.value);
                    colourInput(inputNode, false, isOptionFileBased, isOptionDirectoryBased);
                });

                const removeButtonNode = document.createElement('img');
                removeButtonNode.src = 'img/remove.svg';
                valueContainer.appendChild(removeButtonNode);
                removeButtonNode.addEventListener('click', () => {
                    valueContainer.remove();
                    removeOption(o.dest, id);
                });
            });

        } else {
            // Single value
            container.classList.add('input');

            const isOptionFileBased = fileOptions.indexOf(o.dest) !== -1;
            const isOptionDirectoryBased = directoryOptions.indexOf(o.dest) !== -1;

            const inputNode = document.createElement('input');
            container.appendChild(inputNode);
            inputNode.placeholder = o.metavar || 'Value';
            inputNode.addEventListener('input', (event) => {
                if (event.target.value === '') {
                    removeOption(o.dest, "");
                } else {
                    modifyOption(o.dest, "", event.target.value);
                }

                if (isOptionFileBased || isOptionDirectoryBased) {
                    colourInput(inputNode, true, isOptionFileBased, isOptionDirectoryBased);
                }
            });

            // Show browse button if required (only file or folder - not both)
            if (isOptionFileBased || isOptionDirectoryBased) {
                container.classList.add('with-browse');
                const searchButton = document.createElement('button');
                container.appendChild(searchButton);
                searchButton.textContent = isOptionFileBased ? 'Browse for File' : 'Browse for Folder';
                searchButton.addEventListener('click', async () => {
                    inputNode.value = isOptionFileBased ? await askForFile(null) : await askForFolder();
                    inputNode.dispatchEvent(new Event('input'));
                });
            }
        }
    });
};

const constructAdvancedSection = (pyinstallerOptions) => {
    options = pyinstallerOptions;

    // Setup pre-defined sections
    sectionOptions.forEach(section =>
        _createSubSectionInAdvanced(
            section.title,
            options.filter(o => section.options.indexOf(o.dest) !== -1)
        )
    );

    // Setup extra arguments
    const usedSectionOptions = flatMap(sectionOptions.map(s => s.options));
    const extraOptions = options.filter(option =>
        usedSectionOptions.indexOf(option.dest) === -1
        && staticAndIgnoredOptions.indexOf(option.dest) === -1
    );
    if (extraOptions.length > 0) {
        _createSubSectionInAdvanced(
            'Other',
            extraOptions
        );
    }
};
