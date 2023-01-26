/*
Util functions
*/

const flatMap = (xs) => xs.reduce((x,y ) => x.concat(y), []); // Not all browsers have Array.flatMap

/*
* Equivalent of Python zip(*args) function. Usage:
*
* for (let [var1, ..., varN] of zip(arr1, ..., arrN)) {
*   ...
* }
*/
const zip = (...arrays) => [...arrays[0]].map((_,index) => arrays.map(arr => arr[index]))

const doesFileExist = async (path) => {
    return await eel.does_file_exist(path)();
};

const doesFolderExist = async (path) => {
    return await eel.does_folder_exist(path)();
};

const askForFile = async (fileType) => {
    return await eel.ask_file(fileType)();
};

const askForFiles = async () => {
    return await eel.ask_files()();
};

const askForFolder = async () => {
    return await eel.ask_folder()();
};

const isFileAnIco = async (file_path) => {
    return await eel.is_file_an_ico(file_path)();
};

const chooseOptionString = (optionStrings) => {
    // Try not to use compressed flags
    if (optionStrings[0].length === 2 && optionStrings.length > 1) {
        return optionStrings[1];
    }
    return optionStrings[0];
};
