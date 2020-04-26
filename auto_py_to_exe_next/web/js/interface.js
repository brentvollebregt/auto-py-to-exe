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
