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
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const profilename = document.querySelector('.profile__title');
export const profilejob = document.querySelector('.profile__subtitle');
//работа со вторым попапом
export const profileAddbutton = document.querySelector('.profile__button-add');
export const popupCards = document.querySelector('.popup_cards');
//работа с третьим попапом
export const popupFullScreen = document.querySelector('.popup_fullscreen');
//секция для хранения карточек
export const cards = document.querySelector('.cards');
//9 ый спринт перемнные
export const popupDelete = document.querySelector('.popup_delete-confirm');
export default function loading(popup, text) {
    const saveButton = popup.querySelector('.popup__save-button')
    saveButton.textContent = text;
}
export const profileAva = document.querySelector('.profile__photo');
export const popupWithAvatar = document.querySelector('.popup_avatar');
export const editAvatarButton = document.querySelector('.profile__edit-avatar');