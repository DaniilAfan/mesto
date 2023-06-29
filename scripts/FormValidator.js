
// showError(inputElement, errorElement, config) {
//     inputElement.classList.add(config.inputErrorClass);
//     errorElement.textContent = inputElement.validationMessage;
// };
// hideError(inputElement, errorElement, config) {
//     inputElement.classList.remove(config.inputErrorClass);
//     errorElement.textContent = inputElement.validationMessage;
// };
// toggleButtonState(buttonElement, isActive, config) {
//     if (!isActive) {
//         buttonElement.disabled = 'disabled';
//         buttonElement.classList.add(config.inactiveButtonClass);
//     } else {
//         buttonElement.disabled = false;
//         buttonElement.classList.remove(config.inactiveButtonClass);
//     }
// };
// chechInputValidity(inputElement, formElement, config) {
//     const isInputValid = inputElement.validity.valid;
//     const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
//     if (!errorElement) return;

//     if (!isInputValid) {
//         showError(inputElement, errorElement, config);
//     } else {
//         hideError(inputElement, errorElement, config);
//     }
// };

// setEventListener(formElement, config) {
//     const inputLists = formElement.querySelectorAll(config.inputSelector);
//     const saveButton = formElement.querySelector(config.submitButtonSelector);

//     toggleButtonState(saveButton, formElement.checkValidity(), config);

//     formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//     });
//     [...inputLists].forEach((inputItem) => {
//         inputItem.addEventListener('input', () => {
//             toggleButtonState(saveButton, formElement.checkValidity(), config);
//             chechInputValidity(inputItem, formElement, config);
//         })
//     });
// }

// enableValidation(config) {
//     const forms = document.querySelectorAll(config.formSelector);
//     [...forms].forEach((formitem) => {
//         setEventListener(formitem, config);
//     });
// }
// enableValidation(configFormSelector);
class FormValidator {
    constructor(config, popup) {
        this.config = config;
        this._popup = popup;
        this._form = Array.from(this._popup.querySelectorAll('.popup__form'));
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._buttonElement = this._popup.querySelector('.popup__save-button');
    }
    _showInputError(inputElement, errorElement) {
        inputElement.classList.add('popup__input_type_error');
        errorElement.textContent = inputElement.validationMessage;
    }
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove('popup__input_type_error');
        errorElement.textContent = '';
    }
    _toggleButtonstate(isActive) {
        if (!isActive) {
            this._buttonElement.disabled = 'disabled';
            this._buttonElement.classList.add('popup__save-button_disabled');
        } else {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove('popup__save-button_disabled');
        }
    }
    _checkInputValidity(inputElement) {
        const isInputValid = inputElement.validity.valid;
        const errorElement = this._popup.querySelector(`#${inputElement.name}-error`);

        if (!errorElement) return;

        if (!isInputValid) {
            this._showInputError(inputElement, errorElement);
        }
        else {
            this._hideInputError(inputElement, errorElement);
        }
    }
    _setEventListener(formElement) {
        this._toggleButtonstate(formElement.checkValidity());
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        })
        this._inputList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._toggleButtonstate(formElement.checkValidity());
                this._checkInputValidity(inputItem);
            })
        })
    }
    enableValidation() {
        this._form.forEach((formItem) => {
            this._setEventListener(formItem);
        })
    }
}
export default FormValidator;



