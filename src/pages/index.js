//импорты классов
import './index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
//импорты констант
import { initialCards } from "../scripts/utils/constants.js";
import { configFormSelector } from "../scripts/utils/constants.js";
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
    cards
} from "../scripts/utils/constants.js";
//создаем экземпляр большой картинки
const fullScreenImg = new PopupWithImage(popupFullScreen);
fullScreenImg.setEventListener();

//создаем экземпляр для класа юзер
const userInfo = new UserInfo({ name: profilename, description: profilejob });
//создаем экземпялр попапа профиля и навешиваем слушатели
const popupProfileForm = new PopupWithForm(popupProfile, {
    submitSelector: (input) => {
        const data = {
            name: input['input-name'],
            description: input['input-job']
        }
        userInfo.setUserInfo(data);
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
    submitSelector: (input) => {
        const data = {
            name: input['input-text'],
            link: input['input-link']
        }
        section.newItem(createCard(data));
    }
});
popupCardForm.setEventListener();
profileAddbutton.addEventListener('click', () => {
    popupCardForm.open();
});
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

