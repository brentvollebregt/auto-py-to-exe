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
