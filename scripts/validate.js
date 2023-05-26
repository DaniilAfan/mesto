function chechInputValidity(inputElement, formElement) {
    console.log(inputElement.validationMessage);
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) return;
    if (!isInputValid) {
        inputElement.classList.add('popup__input_type_error');
        errorElement.textContent = inputElement.validationMessage;
    } else {
        inputElement.classList.remove('popup__input_type_error');
        errorElement.textContent = inputElement.validationMessage;
    }
}



function setEventListener(formElement) {
    const inputLists = formElement.querySelectorAll('.popup__input');
    const saveButton = formElement.querySelectorAll('.popup__save-button');
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('Форма успешно отправлена!');
    });
    [...inputLists].forEach((inputItem) => {
        inputItem.addEventListener('input', () => {
            chechInputValidity(inputItem, formElement);
        })
    });
}



function enableValidation() {
    const forms = document.querySelectorAll('.popup__form');
    console.log(forms);
    [...forms].forEach((formitem) => {
        setEventListener(formitem);
    });
}
enableValidation();