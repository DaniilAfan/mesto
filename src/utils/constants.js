export const initialCards = [
    {
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
export const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
}
//работа с первым попапом
export const popupProfile = document.querySelector('.popup_profile');
export const profileElement = document.querySelector('.profile__popup');
export const popupCloseProfile = document.querySelector('.popup__close-button_profile');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const profileForm = document.querySelector('.popup__form_profile');
export const profilename = document.querySelector('.profile__title');
export const profilejob = document.querySelector('.profile__subtitle');
//работа со вторым попапом
export const profileAddbutton = document.querySelector('.profile__button-add');
export const popupCards = document.querySelector('.popup_cards')
export const popupcloseCard = document.querySelector('.popup__close-button_cards');
export const cardInputtext = document.querySelector('.popup__input_type_title');
export const cardInputimg = document.querySelector('.popup__input_type_link');
export const popupFormCards = document.querySelector('.popup__form_cards');
//работа с третьим попапом
export const popupFullScreen = document.querySelector('.popup_fullscreen');
export const popupFullScreenClose = document.querySelector('.popup__fullscreen-close');
//секция для хранения карточек
export const cards = document.querySelector('.cards');