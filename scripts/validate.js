const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
}

function showError(inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
};
function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
};
function toggleButtonState(buttonElement, isActive, config) {
    if (!isActive) {
        buttonElement.disabled = 'disabled';
        buttonElement.classList.add(config.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(config.inactiveButtonClass);
    }
};
function chechInputValidity(inputElement, formElement, config) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) return;

    if (!isInputValid) {
        showError(inputElement, errorElement, config);
    } else {
        hideError(inputElement, errorElement, config);
    }
};

function setEventListener(formElement, config) {
    const inputLists = formElement.querySelectorAll(config.inputSelector);
    const saveButton = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(saveButton, formElement.checkValidity(), config);

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    [...inputLists].forEach((inputItem) => {
        inputItem.addEventListener('input', () => {
            toggleButtonState(saveButton, formElement.checkValidity(), config);
            chechInputValidity(inputItem, formElement, config);
        })
    });
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    [...forms].forEach((formitem) => {
        setEventListener(formitem, config);
    });
}
enableValidation(configFormSelector);