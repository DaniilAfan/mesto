const configFormSelector = {
    formSelector: '.popup__form',

}







function showError(inputElement, errorElement) {
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = inputElement.validationMessage;
};
function hideError(inputElement, errorElement) {
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = inputElement.validationMessage;
};
function toggleButtonState(buttonElement, isActive) {
    if (!isActive) {
        buttonElement.disabled = 'disabled';
        buttonElement.classList.add('popup__save-button_disabled');
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove('popup__save-button_disabled');
    }
};
function chechInputValidity(inputElement, formElement,) {
    console.log(inputElement.validationMessage);
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) return;

    if (!isInputValid) {
        showError(inputElement, errorElement);
    } else {
        hideError(inputElement, errorElement);
    }
};

function setEventListener(formElement) {
    const inputLists = formElement.querySelectorAll('.popup__input');
    const saveButton = formElement.querySelector('.popup__save-button');


    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('Форма успешно отправлена!');
    });
    [...inputLists].forEach((inputItem) => {
        inputItem.addEventListener('input', () => {
            toggleButtonState(saveButton, formElement.checkValidity());
            chechInputValidity(inputItem, formElement);
        })
    });
}

function enableValidation() {
    const forms = document.querySelectorAll('.popup__form');
    [...forms].forEach((formitem) => {
        setEventListener(formitem);
    });
}
enableValidation();