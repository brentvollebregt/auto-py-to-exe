const displayModal = (title, description, confirmLabel='Yes', declineLabel='No') => {
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
          closeButton: closeButton
      }
    };

    const buildBody = (_description) => {
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-section');

        const descriptionElement = document.createElement('a');
        descriptionElement.innerText = _description;
        modalBody.appendChild(descriptionElement);

        return {
            body: modalBody
        }
    }

    const buildFooter = () => {
        const footer = document.createElement('div');
        footer.classList.add('modal-section', 'modal-footer');

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.innerText = confirmLabel;
        footer.appendChild(confirmButton);

        const declineButton = document.createElement('button');
        declineButton.innerText = declineLabel;
        footer.appendChild(declineButton);

        return {
            footer: footer,
            confirmButton: confirmButton,
            declineButton: declineButton
        }
    }

    const modalArea = document.getElementById("modal-area");
    modalArea.classList.remove('modal-coverage-hidden');

    const headerElement = buildHeader(title);
    const bodyElement = buildBody(description);
    const footerElement = buildFooter();

    const clearEventListeners = () => {
        headerElement.closeButton.removeEventListener('click', (_) => {});
        footerElement.confirmButton.removeEventListener('click', (_) => {});
        footerElement.declineButton.removeEventListener('click', (_) => {});
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
            resolve(declineLabel);
        });

        footerElement.confirmButton.addEventListener('click', (_) => {
            clearEventListeners();
            modalArea.removeChild(modalContent);
            modalArea.classList.add('modal-coverage-hidden');
            resolve(confirmLabel);
        });

        footerElement.declineButton.addEventListener('click', (_) => {
            clearEventListeners();
            modalArea.removeChild(modalContent);
            modalArea.classList.add('modal-coverage-hidden');
            resolve(declineLabel);
        });
    })
};
