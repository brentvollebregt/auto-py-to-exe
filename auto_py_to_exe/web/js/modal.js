/*
 * Renders the native JS modal over the window.
 * Returns selected option from **buttonOptions** list.
 *
 * Input:
 *   - title: string
 *   - description: string
 *   - [optional] buttonOptions: string[] = ['Yes', 'No']
 *   - [optional]: closeEvent: string = 'Close'
 *
 * Returns:
 *   - Promise<string>
 */
const displayModal = (title, description, buttonOptions = ['Yes', 'No'], closeEvent = 'Close') => {
  const buildHeader = (_title) => {
    const header = document.createElement('div');
    header.classList.add('modal-section', 'modal-header');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    header.appendChild(closeButton);

    const titleElement = document.createElement('h2');
    titleElement.innerText = _title;
    header.appendChild(titleElement);

    return {
      header: header,
      closeButton: closeButton,
    };
  };

  const buildBody = (_description) => {
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-section');

    const descriptionElement = document.createElement('a');
    descriptionElement.innerText = _description;
    modalBody.appendChild(descriptionElement);

    return {
      body: modalBody,
    };
  };

  const buildFooter = () => {
    const footerButtons = [];
    const footer = document.createElement('div');
    footer.classList.add('modal-section', 'modal-footer');

    for (const label of buttonOptions) {
      const footerButton = document.createElement('button');
      footerButton.classList.add('modal-btn');
      footerButton.innerText = label;
      footer.appendChild(footerButton);
      footerButtons.push(footerButton);
    }

    return {
      footer: footer,
      footerButtons: footerButtons,
    };
  };

  const modalArea = document.getElementById('modal-area');
  modalArea.classList.remove('modal-coverage-hidden');

  const headerElement = buildHeader(title);
  const bodyElement = buildBody(description);
  const footerElement = buildFooter();
  const footerButtons = footerElement.footerButtons;

  const clearEventListeners = () => {
    headerElement.closeButton.removeEventListener('click', (_) => {});
    footerButtons.forEach((button) => button.removeEventListener('click', (_) => {}));
  };

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modalContent.appendChild(headerElement.header);
  modalContent.appendChild(bodyElement.body);
  modalContent.appendChild(footerElement.footer);

  modalArea.appendChild(modalContent);

  return new Promise((resolve) => {
    headerElement.closeButton.addEventListener('click', (_) => {
      clearEventListeners();
      modalArea.removeChild(modalContent);
      modalArea.classList.add('modal-coverage-hidden');
      resolve(closeEvent);
    });

    for (const [label, button] of zip(buttonOptions, footerButtons)) {
      button.addEventListener('click', (_) => {
        clearEventListeners();
        modalArea.removeChild(modalContent);
        modalArea.classList.add('modal-coverage-hidden');
        resolve(label);
      });
    }
  });
};
