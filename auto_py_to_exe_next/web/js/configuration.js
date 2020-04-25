/*
Handle configuration modifications
*/

const modifyOption = (option, id, value) => {
    // id is provided so an option can have more than once value
    removeOption(option, id);
    configuration.push({ option, id, value });
};

const removeOption = (option, id) => {
    configuration = configuration.filter(c => c.option === option && c.id === id);
};

// Initial configuration
let configuration = [];
