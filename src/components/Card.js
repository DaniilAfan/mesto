class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleSetLike, handleDeleteLike }, templateSelector, userId) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
        this._handleDeleteClick = handleDeleteClick;
        this._handleSetLike = handleSetLike;
        this._handleDeleteLike = handleDeleteLike;
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
        this._likeNumber = this._element.querySelector('.card__like-number');
        this._likeNumber.textContent = this._likes.length;

        if (this._ownerId !== this._userId) {
            this._deleteButton.remove();
        }
        this._chechLikedState();
        this._setEventListener();

        return this._element;
    }
    _chechLikedState() {
        this._data.likes.forEach((like) => {
            if (like._id === this._userID) {
                this._likeButton.classList.add('card__item_active');
            }
        });
    }
    getId() {
        return this._cardId
    }
    _setEventListener() {
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('card__item_active')) {
                this._handleDeleteLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        });
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._elementImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
    makeLike = (data) => {
        this._likes = data.likes;
        this._likeNumber.textContent = this._likes.length;
        this._likeButton.classList.toggle('card__item_active');
    }
    deleteCard = () => {
        if (this._element) {
            this._element.remove();
            this._element = null;
        }
    }
}
export default Card;