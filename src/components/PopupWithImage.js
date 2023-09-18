import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._image = this._popupElement.querySelector('.popup__fullscreen-img');
        this._title = this._popupElement.querySelector('.popup__fullscreen-title');
    }
    open(name, link) {
        super.open();
        this._title.textContent = name;
        this._image.src = link;
        this._image.alt = name;
    }
}
export default PopupWithImage;