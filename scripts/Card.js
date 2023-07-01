import { togglePopupVisibility } from "./index.js";
class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._popupFullScreen = document.querySelector('.popup_fullscreen');
        this._popupFullScreenImg = this._popupFullScreen.querySelector('.popup__fullscreen-img');
        this._popupFullScreenTitle = this._popupFullScreen.querySelector('.popup__fullscreen-title');
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._elementImg = this._element.querySelector('.card__logo');
        this._elementImg.src = this._data.link;
        this._elementImg.alt = this._data.name;
        this._element.querySelector('.card__title').textContent = this._data.name;
        this._deleteButton = this._element.querySelector('.card__button-trash');
        this._likeButton = this._element.querySelector('.card__item');
        this._setEventListener();
        return this._element;

    }
    _setEventListener() {
        this._likeButton.addEventListener('click', this._makeLike);
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._elementImg.addEventListener('click', this._openFullScreen);
    }
    _makeLike = () => {
        this._likeButton.classList.toggle('card__item_active');
    }
    _deleteCard = () => {
        this._removeCard = this._element;
        this._removeCard.remove();
    }
    _openFullScreen = () => {
        this._popupFullScreenImg.src = this._data.link;
        this._popupFullScreenImg.alt = this._data.name;
        this._popupFullScreenTitle.textContent = this._data.name;
        togglePopupVisibility(this._popupFullScreen);
    }
}
export default Card;