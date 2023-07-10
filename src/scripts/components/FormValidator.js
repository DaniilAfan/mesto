class FormValidator {
    constructor(config, form) {
        this.config = config;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this.config.inputSelector));
        this._buttonElement = this._form.querySelector(this.config.submitButtonSelector);
    }
    _showInputError(inputElement, errorElement) {
        inputElement.classList.add(this.config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this.config.inputErrorClass);
        errorElement.textContent = '';
    }
    _toggleButtonstate() {
        if (this._hasInvalidInput()) {
            this._buttonElement.disabled = 'disabled';
            this._buttonElement.classList.add(this.config.inactiveButtonClass);
        } else {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this.config.inactiveButtonClass);
        }
    }
    _checkInputValidity(inputElement) {
        const isInputValid = inputElement.validity.valid;
        const errorElement = this._form.querySelector(`#${inputElement.name}-error`);

        if (!errorElement) return;

        if (!isInputValid) {
            this._showInputError(inputElement, errorElement);
        }
        else {
            this._hideInputError(inputElement, errorElement);
        }
    }
    _setEventListener() {
        this._toggleButtonstate();
        this._form.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonstate();
            }, 0);
        });
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
        this._inputList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._toggleButtonstate();
                this._checkInputValidity(inputItem);
            })
        })
    }
    _hasInvalidInput() {
        return this._inputList.some((item) => {
            return !item.validity.valid;
        });
    }
    enableValidation() {
        this._setEventListener();
    }
}
export default FormValidator;