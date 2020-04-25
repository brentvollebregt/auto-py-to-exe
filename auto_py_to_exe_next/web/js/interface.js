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

// Mutually Exclusive Button Pair Toggle
const meButtonPairToggle = (buttonGroupName) => {
    const root = document.getElementById(`me-button-pair-${buttonGroupName}`);

    // Since this only supports two buttons, we can just flip the toggled states
    root.querySelectorAll('button').forEach(buttonNode => {
        if (buttonNode.classList.contains('btn_choice_greyed')) {
        buttonNode.classList.remove('btn_choice_greyed');
    } else {
        buttonNode.classList.add('btn_choice_greyed');
    }
    });
};
