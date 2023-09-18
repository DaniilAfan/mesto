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
import loading from '../utils/constants.js';
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
    popupDelete,
    profileAva,
    popupWithAvatar,
    editAvatarButton
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
function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: (name, link) => {
            fullScreenImg.open(name, link);
        },
        handleDeleteClick: () => {
            popupWithConfirm.open();
            popupWithConfirm.submitCallback(() => {
                loading(popupDelete, 'Удаление...');
                api.deleteCard(card.getId())
                    .then(() => {
                        card.deleteCard();
                        popupWithConfirm.close();
                    })
                    .catch((err) => {
                        console.log(`deleteCard - ошибка: ${err}`);
                    })
                    .finally(() => {
                        loading(popupDelete, 'Да');
                    })
            })
        },
        handleSetLike: (cardId) => {
            api.setLike(cardId)
                .then((data) => {
                    card.makeLike(data);
                })
                .catch((err) => {
                    console.log(`makeLike - ошибка: ${err}`);
                })
        },
        handleDeleteLike: (cardId) => {
            api.deleteLike(cardId)
                .then((data) => {
                    card.makeLike(data);
                })
                .catch((err) => {
                    console.log(`handleDeleteLike - ошибка: ${err}`);
                })
        }
    }, '.template', userId);
    return card.generateCard();
}
//загружаем карточки
const section = new Section({
    renderer: (item) => {
        section.addItem(createCard(item))
    },
}, cards);
//создаем экземпляр для класа юзер
const userInfo = new UserInfo({ Selectorname: profilename, Selectordescription: profilejob, Selectoravatar: profileAva });
//создаем экземпялр попапа профиля и навешиваем слушатели
const popupProfileForm = new PopupWithForm(popupProfile, {
    handleFormSubmit: (data) => {
        loading(popupProfile, 'Сохранение...');
        api.setUserData(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                popupProfileForm.close();
            })
            .catch((err) => {
                console.log(`getUserInfo - ошибка: ${err}`);
            })
            .finally(() => {
                loading(popupProfile, 'Сохранить');
            })
    }
})
popupProfileForm.setEventListener();
profileElement.addEventListener('click', () => {
    popupProfileForm.open();
    const input = userInfo.getUserInfo();
    nameInput.value = input.name;
    jobInput.value = input.about;
});
//попап редактирования аватарки
const popupAvatar = new PopupWithForm(popupWithAvatar, {
    handleFormSubmit: (data) => {
        loading(popupWithAvatar, 'Сохранение...');
        api.setAvatar(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                popupAvatar.close();
            })
            .catch((err) => {
                console.log(`setAvatar - ошибка: ${err}`);
            })
            .finally(() => {
                loading(popupWithAvatar, 'Сохранить');
            })
    }
})
popupAvatar.setEventListener();
editAvatarButton.addEventListener('click', () => {
    popupAvatar.open();
})
//создаем экземпляр попапа карточек
const popupCardForm = new PopupWithForm(popupCards, {
    handleFormSubmit: (data) => {
        loading(popupCards, 'Сохранение...');
        console.log(data);
        api.addNewPhotocard(data.title, data.link)
            .then((res) => {
                section.newItem(createCard(res));
                popupCardForm.close();
            })
            .catch((err) => {
                console.log(`NewCard - ошибка: ${err}`);
            })
            .finally(() => {
                loading(popupCards, 'Сохранить');
            })
    }
});
popupCardForm.setEventListener();
profileAddbutton.addEventListener('click', () => {
    popupCardForm.open();
});

const profileValidation = new FormValidator(configFormSelector, popupProfile);
profileValidation.enableValidation();
const cardValidation = new FormValidator(configFormSelector, popupCards);
cardValidation.enableValidation();
const avatarValidation = new FormValidator(configFormSelector, popupWithAvatar);
avatarValidation.enableValidation();

