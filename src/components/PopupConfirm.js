import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');

    }
    submitCallback(del) {
        this._handleSubmit = del;
    }
    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
}
