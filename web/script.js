async function doStuff() {
    let file = await eel.askFile()();
    document.getElementById('result').innerText = file;
}