import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
const popupProfile = document.querySelector('.popup_profile');
const profileElement = document.querySelector('.profile__popup');
const popupCloseProfile = document.querySelector('.popup__close-button_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__form_profile');
const profilename = document.querySelector('.profile__title');
const profilejob = document.querySelector('.profile__subtitle');


const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
}
//открытие попапа профиля
export const openPopup = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}
//закрытие попапа профиля
const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}


profileElement.addEventListener('click', () => {
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
    openPopup(popupProfile);
});
popupCloseProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});


function handleFormSubmitProfile(event) {
    event.preventDefault();
    profilename.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    closePopup(popupProfile);
}
profileForm.addEventListener('submit', handleFormSubmitProfile);
//объявляем переменные для второго попапа
const profileAddbutton = document.querySelector('.profile__button-add');
const popupCards = document.querySelector('.popup_cards')
const popupcloseCard = document.querySelector('.popup__close-button_cards');
//объявляем третий попап
const popupFullScreen = document.querySelector('.popup_fullscreen');
const popupFullScreenClose = document.querySelector('.popup__fullscreen-close');
//открытие попапа карточек
profileAddbutton.addEventListener('click', () => {
    openPopup(popupCards);
});
//закрытие попапа карточек
popupcloseCard.addEventListener('click', () => {
    closePopup(popupCards);
});

const cards = document.querySelector('.cards');

//закрыть попап большой картинки
popupFullScreenClose.addEventListener('click', () => {
    closePopup(popupFullScreen);
});

// добавить свою карточку
const cardInputtext = document.querySelector('.popup__input_type_title');
const cardInputimg = document.querySelector('.popup__input_type_link');
const popupFormCards = document.querySelector('.popup__form_cards');
function addNewCard(event) {
    event.preventDefault();
    const cardData = {
        name: cardInputtext.value,
        link: cardInputimg.value
    };
    const newCard = new Card(cardData, '.template');
    const cardElement = newCard.generateCard();
    cards.prepend(cardElement);
    popupFormCards.reset();
    closePopup(popupCards);
}
popupFormCards.addEventListener('submit', addNewCard);
// закрытие кликом на оверлей
function closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}
popupProfile.addEventListener('mousedown', closeByOverlay);
popupCards.addEventListener('mousedown', closeByOverlay);
popupFullScreen.addEventListener('mousedown', closeByOverlay);
//закрытие на escape
function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};

initialCards.forEach((item) => {
    const newCard = new Card(item, '.template');
    const cardElement = newCard.generateCard();
    cards.append(cardElement);
});
const profileValidation = new FormValidator(configFormSelector, popupProfile);
profileValidation.enableValidation();
const cardValidation = new FormValidator(configFormSelector, popupCards);
cardValidation.enableValidation();

