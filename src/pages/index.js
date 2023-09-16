//импорты классов
import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from '../components/Api.js';
import popupConfirm from '../components/PopupConfirm.js'
//импорты констант
import { initialCards } from "../utils/constants.js";
import { configFormSelector } from "../utils/constants.js";
import {
    popupProfile,
    profileElement,
    nameInput,
    jobInput,
    profilename,
    profilejob,
    profileAddbutton,
    popupCards,
    popupFullScreen,
    cards,
    popupDelete
} from "../utils/constants.js";
import PopupConfirm from '../components/PopupConfirm.js';

let userId = 0;

//создаем экземпляр класса Api
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-75',
    headers: {
        authorization: 'd25a4b59-6e9e-48dd-a4cd-d6be3faa899b',
        'Content-Type': 'application/json'
    }
});
Promise.all([api.getUserInfo(), api.getInitialsCards()])
    .then(([data, cards]) => {
        userId = data._id;
        userInfo.setUserInfo(data);
        section.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })
//создаем экземпляр большой картинки
const fullScreenImg = new PopupWithImage(popupFullScreen);
fullScreenImg.setEventListener();
//создаем экземпляр подтверждения удаления
const popupWithConfirm = new PopupConfirm(popupDelete);
popupWithConfirm.setEventListener();
//создаем функцию создания карт  через класс Card
function createCard(item) {
    const card = new Card({
        data: item,
        handleCardClick: (name, link) => {
            fullScreenImg.open(name, link);
        }
    }, '.template');
    const cardElement = card.generateCard();
    return cardElement;
}
//создаем экземпляр для класа юзер
const userInfo = new UserInfo({ name: profilename, description: profilejob });
//создаем экземпялр попапа профиля и навешиваем слушатели
const popupProfileForm = new PopupWithForm(popupProfile, {
    handleFormSubmit: (input) => {
        userInfo.setUserInfo(input);
    }
})
popupProfileForm.setEventListener();
profileElement.addEventListener('click', () => {
    popupProfileForm.open();
    const input = userInfo.getUserInfo();
    nameInput.value = input.name;
    jobInput.value = input.description;
});
//создаем экземпляр попапа карточек
const popupCardForm = new PopupWithForm(popupCards, {
    handleFormSubmit: (input) => {

        section.newItem(createCard(input));
    }
});
popupCardForm.setEventListener();
profileAddbutton.addEventListener('click', () => {
    popupCardForm.open();
});
const section = new Section({
    items: initialCards,
    renderer: (item) => {
        section.addItem(createCard(item))
    },
}, cards);
section.renderItems();

const profileValidation = new FormValidator(configFormSelector, popupProfile);
profileValidation.enableValidation();
const cardValidation = new FormValidator(configFormSelector, popupCards);
cardValidation.enableValidation();

