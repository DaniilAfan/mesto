import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupElement, { handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
        this._formInputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    }
    _getInputValues() {
        this._inputValues = {};
        this._formInputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}
export default PopupWithForm;