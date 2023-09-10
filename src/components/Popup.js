class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._buttonClose = this._popupElement.querySelector('.popup__close-button');
        this._closeByEsc = this._closeByEsc.bind(this);
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
    setEventListener() {
        this._buttonClose.addEventListener('click', () => {
            this.close();
        });
        this._popupElement.addEventListener('click', (evt) => {
            this._closeByOverlay(evt);
        });
    }
    _closeByOverlay(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }
    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
}
export default Popup;