/*
Util functions
*/

const doesFileExist = async (path) => {
    return await eel.does_file_exist(path)();
};

const askForFile = async (fileType) => {
    return await eel.ask_file(fileType)();
};
