class FormValidator {
    constructor(config, popup) {
        this.config = config;
        this._popup = popup;
        this._form = Array.from(this._popup.querySelectorAll(this.config.formSelector));
        this._inputList = Array.from(this._popup.querySelectorAll(this.config.inputSelector));
        this._buttonElement = this._popup.querySelector(this.config.submitButtonSelector);
    }
    _showInputError(inputElement, errorElement) {
        inputElement.classList.add(this.config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this.config.inputErrorClass);
        errorElement.textContent = '';
    }
    _toggleButtonstate(isActive) {
        if (!isActive) {
            this._buttonElement.disabled = 'disabled';
            this._buttonElement.classList.add(this.config.inactiveButtonClass);
        } else {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this.config.inactiveButtonClass);
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



