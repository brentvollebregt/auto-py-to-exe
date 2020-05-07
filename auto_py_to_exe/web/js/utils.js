/*
Util functions
*/

const flatMap = (xs) => xs.reduce((x,y ) => x.concat(y), []); // Not all browsers have Array.flatMap

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
