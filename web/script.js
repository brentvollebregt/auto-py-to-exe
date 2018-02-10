async function getFile() {
    let file = await eel.askFile()();
    document.getElementById('file').value = file;
}