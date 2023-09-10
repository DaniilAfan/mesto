class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._name = data.title;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
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
        this._elementImg.src = this._link;
        this._elementImg.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        this._deleteButton = this._element.querySelector('.card__button-trash');
        this._likeButton = this._element.querySelector('.card__item');
        this._setEventListener();
        return this._element;

    }
    _setEventListener() {
        this._likeButton.addEventListener('click', this._makeLike);
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._elementImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }
    _makeLike = () => {
        this._likeButton.classList.toggle('card__item_active');
    }
    _deleteCard = () => {
        this._removeCard = this._element;
        this._removeCard.remove();
    }
}
export default Card;