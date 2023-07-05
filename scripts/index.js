//импорты классов
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from "./components/Popup.js";
//импорты констант
import { initialCards } from "./utils/constants.js";
import { configFormSelector } from "./utils/constants.js";
import {
    popupProfile,
    profileElement,
    popupCloseProfile,
    nameInput,
    jobInput,
    profileForm,
    profilename,
    profilejob,
    profileAddbutton,
    popupCards,
    popupcloseCard,
    cardInputtext,
    cardInputimg,
    popupFormCards,
    popupFullScreen,
    popupFullScreenClose,
    cards
} from "./utils/constants.js";





const popupProfileElement = new Popup(popupProfile);
popupProfileElement.setEventListener();

profileElement.addEventListener('click', () => {
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
    popupProfileElement.openPopup();
});
// popupCloseProfile.addEventListener('click', () => {
//     closePopup(popupProfile);
// });


// function handleFormSubmitProfile(event) {
//     event.preventDefault();
//     profilename.textContent = nameInput.value;
//     profilejob.textContent = jobInput.value;
//     closePopup(popupProfile);
// }
// profileForm.addEventListener('submit', handleFormSubmitProfile);




// // //открытие попапа карточек
// // profileAddbutton.addEventListener('click', () => {
// //     openPopup(popupCards);
// // });





// //закрыть попап большой картинки
// // popupFullScreenClose.addEventListener('click', () => {
// //     closePopup(popupFullScreen);
// // });

// // добавить свою карточку
function addNewCard(event) {
    event.preventDefault();
    const cardData = {
        name: cardInputtext.value,
        link: cardInputimg.value
    };
    const newCard = createCard(cardData);
    cards.prepend(newCard);
    popupFormCards.reset();
    closePopup(popupCards);
}
// popupFormCards.addEventListener('submit', addNewCard);





function createCard(data) {
    const newCard = new Card(data, '.template');
    return newCard.generateCard();
};
initialCards.forEach((item) => {
    const cardElement = createCard(item);
    cards.append(cardElement);
});
const profileValidation = new FormValidator(configFormSelector, popupProfile);
profileValidation.enableValidation();
const cardValidation = new FormValidator(configFormSelector, popupCards);
cardValidation.enableValidation();

