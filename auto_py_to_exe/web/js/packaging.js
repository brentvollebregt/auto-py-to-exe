let packagingState = PACKAGING_STATE_READY;

const setPackagingState = (newState) => {
    packagingState = newState;

    const outputSectionNode = document.getElementById('output');
    const outputTextAreaNode = outputSectionNode.querySelector('textarea');
    const convertButtonNode = document.getElementById('package-button');
    const openOutputButtonNode = document.getElementById('open-output-folder-button');
    const commonIssueLinkNode = document.getElementById('common-issue-link');

    switch (newState) {
        case PACKAGING_STATE_READY:
            // Clear output
            outputSectionNode.classList.remove('show');
            outputTextAreaNode.value = '';
            outputTextAreaNode.rows = 0;
            outputTextAreaNode.classList.remove('failure');
            // Set the main button back to initial value
            convertButtonNode.innerHTML = "Convert .py to .exe";
            // Hide open folder button
            openOutputButtonNode.classList.remove('show');
            // Hide common issue link
            commonIssueLinkNode.classList.remove('show');
            return;
        case PACKAGING_STATE_PACKAGING:
            // Disable convert button
            convertButtonNode.disabled = true;
            convertButtonNode.innerHTML = "Converting...";
            // Show output
            outputSectionNode.classList.add('show');
            return;
        case PACKAGING_STATE_COMPLETE:
            // Re-enable convert button and re-purpose it
            convertButtonNode.disabled = false;
            convertButtonNode.innerHTML = "Clear Output";
            // Show open folder button (beside "Clear Output" button)
            openOutputButtonNode.classList.add('show');
            // Show common issue link
            commonIssueLinkNode.classList.add('show');
            return;
    }
};

const startPackaging = () => {
    eel.package(getCurrentCommand(), getNonPyinstallerConfiguration())();
    setPackagingState(PACKAGING_STATE_PACKAGING);
};

const setPackagingComplete = (successful) => {
    setPackagingState(PACKAGING_STATE_COMPLETE);

    // Show red border around output on failure
    if (!successful) {
        const outputTextAreaNode = document.querySelector('#output textarea');
        outputTextAreaNode.classList.add('failure');
    }
};
