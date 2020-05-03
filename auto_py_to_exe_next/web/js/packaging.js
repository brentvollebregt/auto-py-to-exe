let packagingState = PACKAGING_STATE_READY;

const setPackagingState = (newState) => {
    packagingState = newState;

    const outputSectionNode = document.getElementById('output');
    const outputTextAreaNode = outputSectionNode.querySelector('textarea');
    const mainButtonsWrapperNode = document.getElementById('package-button-wrapper');
    const convertButtonNode = document.getElementById('package-button');
    const openOutputButtonNode = document.getElementById('open-output-folder-button');
    const commonIssueLinkNode = document.getElementById('common-issue-link');

    // TODO Convert some of this to classes
    switch (newState) {
        case PACKAGING_STATE_READY:
            // Clear output
            outputSectionNode.style.display = 'none';
            outputTextAreaNode.value = '';
            outputTextAreaNode.rows = 0;
            // Set the main button back to initial value
            convertButtonNode.innerHTML = "Convert .py to .exe";
            // Hide open folder button
            mainButtonsWrapperNode.style.display = 'block';
            openOutputButtonNode.style.display = 'none';
            // Hide common issue link
            commonIssueLinkNode.style.display = 'none';
            return;
        case PACKAGING_STATE_PACKAGING:
            // Disable convert button
            convertButtonNode.style.filter = 'grayscale(1)';
            convertButtonNode.style.cursor = 'not-allowed';
            convertButtonNode.innerHTML = "Converting...";
            // Show output
            outputSectionNode.style.display = 'block';
            return;
        case PACKAGING_STATE_COMPLETE:
            // Re-enable convert button and re-purpose it
            convertButtonNode.style.cursor = '';
            convertButtonNode.style.filter = '';
            convertButtonNode.innerHTML = "Clear Output";
            // Show open folder button (beside "Clear Output" button)
            mainButtonsWrapperNode.style.display = 'grid';
            mainButtonsWrapperNode.style.gridGap = '4px';
            mainButtonsWrapperNode.style.gridTemplateColumns = '1fr 1fr';
            openOutputButtonNode.style.display = 'block';
            // Show common issue link
            commonIssueLinkNode.style.display = 'block';
            return;
    }
};

const startPackaging = () => {
    eel.package(getCurrentCommand(), getNonPyinstallerConfiguration())();
    setPackagingState(PACKAGING_STATE_PACKAGING);
};

const setPackagingComplete = (successful) => {
    setPackagingState(PACKAGING_STATE_COMPLETE);
};
