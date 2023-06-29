import { togglePopupVisibility } from "./index.js";
class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        this._popupFullScreen = document.querySelector('.popup_fullscreen');
        this._popupFullScreenImg = document.querySelector('.popup__fullscreen-img');
        this._popupFullScreenTitle = document.querySelector('.popup__fullscreen-title');
    }
    _getTemplate() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._elementImg = this._element.querySelector('.card__logo');
        this._elementImg.src = this.link;
        this._elementImg.alt = this.name;
        this._element.querySelector('.card__title').textContent = this.name;
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

        this._popupFullScreenImg.src = this.link;
        this._popupFullScreenImg.alt = this.name;
        this._popupFullScreenTitle.textContent = this.name;
        togglePopupVisibility(this._popupFullScreen);
    }
}
export default Card;