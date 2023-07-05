import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._image = this._popupElement.querySelector('.popup__fullscreen-img');
        this._title = this._popupElement.querySelector('.popup__fullscreen-title');
        this._alt = this._popupElement.querySelector('.popup__fullscreen-img');
    }
    open(name, link, alt) {
        this._title.textContent = name;
        this._image.src = link;
        this._alt.alt = alt;
    }
}
export default PopupWithImage;