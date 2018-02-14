async function getFile() {
    let file = await eel.askFile()();
    document.getElementById('file').value = file;
}

function checkInfoBar() {
    if (window.innerWidth >= 1050) {
        document.getElementById('content').style.gridTemplateColumns = '250px 800px'; // 266 = info bar + body margins
        document.getElementById('info_bar').style.display = 'block';
        document.getElementById('mid').style.maxWidth = '1050px';

        document.getElementById('header').style.width = '100%';
        document.getElementById('header').style.margin = 'auto';
        document.getElementById('header').style.maxWidth = '1050px';
    } else {
        document.getElementById('content').style.gridTemplateColumns = '1fr';
        document.getElementById('info_bar').style.display = 'none';
        document.getElementById('mid').style.maxWidth = '';

        document.getElementById('header').style.width = '';
        document.getElementById('header').style.margin = '';
        document.getElementById('header').style.maxWidth = '';
    }
}

window.addEventListener('resize', function () {
    checkInfoBar();
});

window.addEventListener('load', function () {
    checkInfoBar();
});