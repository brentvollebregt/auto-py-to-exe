/*
Handle visual events
*/

// Expand a section (typically triggered by clicking on a section heading)
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

// Colour an input based on the "allowed" arguments
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
        colourInput(sourceInput, false, sourceCanBeFile, sourceCanBeDirectory);
        updateCurrentCommandDisplay();
    });
    colourInput(sourceInput, false, sourceCanBeFile, sourceCanBeDirectory);

    destinationInput.value = destination;
    destinationInput.addEventListener('input', (event) => {
        updateCurrentCommandDisplay();
    });

    // Add configurationGetter
    const configurationGetter = () => ([optionDest, `${sourceInput.value}${pathSeparator}${destinationInput.value}`]);
    configurationGetters.push(configurationGetter);

    removeButton.src = 'img/remove.svg';
    removeButton.addEventListener('click', () => {
        wrapper.remove();
        const configurationGetterIndex = configurationGetters.indexOf(configurationGetter);
        configurationGetters.splice(configurationGetterIndex, 1);
        updateCurrentCommandDisplay();
    });

    updateCurrentCommandDisplay();
};


const _createSubSectionInAdvanced = (title, options) => {
    const parent = document.querySelector('#section-advanced .content');

    // The div wrapping the whole section
    const subSectionNode = document.createElement('div');
    parent.appendChild(subSectionNode);

    // Setup title
    const subSectionTitleNode = document.createElement('h3');
    subSectionTitleNode.textContent = title;
    subSectionTitleNode.classList.add('noselect');
    subSectionNode.appendChild(subSectionTitleNode);

    // Setup options
    options.forEach(o => {
        // Container for option
        const container = document.createElement('div');
        subSectionNode.appendChild(container);
        container.classList.add('option-container');

        // Option title / name
        const optionNode = document.createElement('span');
        container.appendChild(optionNode);
        optionNode.textContent = chooseOptionString(o.option_strings);

        // Help icon
        const helpNode = document.createElement('span');
        optionNode.appendChild(helpNode); // Put the icon inside the option text
        helpNode.title = o.help.replace(/R\|/, '');
        helpNode.classList.add('info_icon');

        if (o.inputType === OPTION_INPUT_TYPE_SWITCH) {
            container.classList.add('switch');

            // Add button
            const enableButton = document.createElement('button');
            container.appendChild(enableButton);
            enableButton.textContent = 'Enable';
            enableButton.classList.add('unselected');

            // Function used to set the value of the switch
            const setValue = (enabled) => {
                if (enabled) {
                    enableButton.classList.remove('unselected');
                    enableButton.classList.add('selected');
                } else {
                    enableButton.classList.add('unselected');
                    enableButton.classList.remove('selected');
                }
                updateCurrentCommandDisplay();
            };

            // When clicked, toggle the value
            enableButton.addEventListener('click', () => {
                setValue(!enableButton.classList.contains('selected'));
            });

            // Add configurationGetter
            const configurationGetter = () => ([o.dest, !enableButton.classList.contains('unselected')]);
            configurationGetters.push(configurationGetter);

            // Add configurationSetter
            configurationSetters[o.dest] = setValue;

        } else if (o.inputType === OPTION_INPUT_TYPE_DROPDOWN) {
            container.classList.add('choice');

            // Add dropdown
            const selectNode = document.createElement('select');
            container.appendChild(selectNode);
            selectNode.addEventListener('change', (event) => {
                updateCurrentCommandDisplay();
            });

            // Add options (including default '')
            const defaultOptionNode = document.createElement('option');
            selectNode.appendChild(defaultOptionNode);
            defaultOptionNode.textContent = '';

            o.choices.map(choice => {
                const optionNode = document.createElement('option');
                selectNode.appendChild(optionNode);
                optionNode.textContent = choice;
                optionNode.value = choice;
            });

            // Add configurationGetter
            const configurationGetter = () => {
                const value = selectNode.value;
                return value === '' ? null : [o.dest, value];
            };
            configurationGetters.push(configurationGetter);

            // Add configurationSetter
            configurationSetters[o.dest] = (value) => {
                if (o.choices.indexOf(value) !== 1) {
                    selectNode.value = value;
                } else {
                    selectNode.value = '';
                }
                selectNode.dispatchEvent(new Event('change'));
            };

        } else if (o.inputType === OPTION_INPUT_TYPE_INPUT) {
            container.classList.add('input');

            const isOptionFileBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_FILE) !== -1;
            const isOptionDirectoryBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_DIRECTORY) !== -1;

            // Add input node
            const inputNode = document.createElement('input');
            container.appendChild(inputNode);
            inputNode.placeholder = o.metavar || 'VALUE';
            inputNode.addEventListener('input', (event) => {
                updateCurrentCommandDisplay();

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
                    const value = isOptionFileBased ? await askForFile(null) : await askForFolder();
                    if (value !== null) {
                        inputNode.value = value;
                        inputNode.dispatchEvent(new Event('input'));
                    }
                });
            }

            // Add configurationGetter
            const configurationGetter = () => {
                const value = inputNode.value;
                return value === '' ? null : [o.dest, value];
            };
            configurationGetters.push(configurationGetter);

            // Add configurationSetter
            configurationSetters[o.dest] = (value) => {
                inputNode.value = value;
                inputNode.dispatchEvent(new Event('input'));
            };

        } else if (o.inputType === OPTION_INPUT_TYPE_MULTIPLE_INPUT) {
            container.classList.add('multiple-input');

            const isOptionFileBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_FILE) !== -1;
            const isOptionDirectoryBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_DIRECTORY) !== -1;

            // Add button to add an entry
            const addButton = document.createElement('img');
            container.appendChild(addButton);
            addButton.src = 'img/plus.svg';

            // Container to hold the values
            const valuesContainer = document.createElement('div');
            container.appendChild(valuesContainer);

            const addValue = (value) => {
                // Container to hold the pair
                const valueContainer = document.createElement('div');
                valuesContainer.appendChild(valueContainer);

                // Value input
                const inputNode = document.createElement('input');
                valueContainer.appendChild(inputNode);
                inputNode.value = value;
                inputNode.placeholder = o.metavar || 'VALUE';
                colourInput(inputNode, false, isOptionFileBased, isOptionDirectoryBased);
                inputNode.addEventListener('input', (event) => {
                    colourInput(inputNode, false, isOptionFileBased, isOptionDirectoryBased);
                    updateCurrentCommandDisplay();
                });

                // Add configurationGetter
                const configurationGetter = () => ([o.dest, inputNode.value]);
                configurationGetters.push(configurationGetter);

                // Remove button
                const removeButtonNode = document.createElement('img');
                removeButtonNode.src = 'img/remove.svg';
                valueContainer.appendChild(removeButtonNode);
                removeButtonNode.addEventListener('click', () => {
                    valueContainer.remove();
                    const configurationGetterIndex = configurationGetters.indexOf(configurationGetter);
                    configurationGetters.splice(configurationGetterIndex, 1);
                    updateCurrentCommandDisplay();
                });

                updateCurrentCommandDisplay();
            };

            // Event to add a new input pair
            addButton.addEventListener('click', async () => {
                // Get initial value
                let initialValue = '';
                if (isOptionFileBased || isOptionDirectoryBased) {
                    initialValue = isOptionFileBased ? await askForFile(null) : await askForFolder();
                    if (initialValue === null) {
                        return;
                    }
                }
                addValue(initialValue);
            });

            // Add configurationSetter
            configurationSetters[o.dest] = (value) => {
                addValue(value);
            };

        } else if (o.inputType === OPTION_INPUT_TYPE_DOUBLE_MULTIPLE_INPUT) {
            container.classList.add('multiple-input');

            const isOptionFileBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_DOUBLE_FILE_DEST) !== -1;
            const isOptionDirectoryBased = o.allowedInputValues.indexOf(OPTION_INPUT_VALUE_DOUBLE_DIRECTORY_DEST) !== -1;

            // Add button to add an entry
            const addButton = document.createElement('img');
            container.appendChild(addButton);
            addButton.src = 'img/plus.svg';

            // Container to hold the value pairs
            const valuesContainer = document.createElement('div');
            container.appendChild(valuesContainer);

            addButton.addEventListener('click', async () => {
                // Get initial value
                let initialValue = '';
                if (isOptionFileBased || isOptionDirectoryBased) {
                    initialValue = isOptionFileBased ? await askForFile(null) : await askForFolder();
                    if (initialValue === null) {
                        return
                    }
                }

                addDoubleInputForSrcDst(valuesContainer, o.dest, initialValue, '.', true, false);
            });

            // Add configurationSetter
            configurationSetters[o.dest] = (value) => {
                const [val1, val2] = value.split(pathSeparator);
                addDoubleInputForSrcDst(valuesContainer, o.dest, val1, val2, true, false);
            };
        }
    });
};

const constructAdvancedSection = () => {
    // Setup pre-defined sections
    advancedSections.forEach(section =>
        _createSubSectionInAdvanced(
            section.title,
            options.filter(o => section.options.indexOf(o.dest) !== -1)
        )
    );

    // Setup extra arguments
    const usedSectionOptions = flatMap(advancedSections.map(s => s.options));
    const extraOptions = options.filter(option =>
        usedSectionOptions.indexOf(option.dest) === -1
        && option.placement !== OPTION_IGNORED
        && option.placement !== OPTION_STATIC
        && option.placement !== OPTION_OVERRIDDEN
    );
    if (extraOptions.length > 0) {
        _createSubSectionInAdvanced(
            'Other',
            extraOptions
        );
    }
};

const setupWarnings = (warnings) => {
    if (warnings.length === 0) {
        return
    }

    const warningsRootNode = document.getElementById('warnings');

    warnings.forEach(warning => {
        // Create wrapper
        const wrapperNode = document.createElement('div');
        warningsRootNode.appendChild(wrapperNode);

        // Create message
        const messageNode = document.createElement('p');
        wrapperNode.appendChild(messageNode);
        messageNode.innerText = warning.message;

        // Add link is provided
        if (warning.link !== null) {
            const linkNodeContainer = document.createElement('a');
            wrapperNode.appendChild(linkNodeContainer);
            linkNodeContainer.href = warning.link;
            linkNodeContainer.innerText = 'Read more here.';
            linkNodeContainer.target = '_blank';
        }
    });
};
