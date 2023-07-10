import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupElement, { submitSelector }) {
        super(popupElement);
        this._submitSelector = submitSelector;
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
            this._submitSelector(this._getInputValues());
            this.close();
        });
    }
}
export default PopupWithForm;