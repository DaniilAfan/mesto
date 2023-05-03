const popupElement = document.querySelector('.popup_profile');
const profilepopupElement = document.querySelector('.profile__popup');
const popupcloseElement = document.querySelector('.popup__close-button_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupForm = document.querySelector('.popup__form_profile');
const profilename = document.querySelector('.profile__title');
const profilejob = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.popup__save-button_profile');
//открытие попапа профиля
const togglePopupVisibility = function () {
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
    popupElement.classList.add('popup_opened');
}
//закрытие попапа профиля
const togglePopupInVisibility = function () {
    popupElement.classList.remove('popup_opened');
}

profilepopupElement.addEventListener('click', () => {
    togglePopupVisibility();
});
popupcloseElement.addEventListener('click', togglePopupInVisibility);


function handleFormSubmit(event) {
    event.preventDefault();
    profilename.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    togglePopupInVisibility();
}
popupForm.addEventListener('submit', handleFormSubmit);
//объявляем переменные для второго попапа
const profileAddbutton = document.querySelector('.profile__button-add');
const popupLink = document.querySelector('.popup__input_type_link');
const popupName = document.querySelector('.popup__input_type_title');
const popupElement2 = document.querySelector('.popup_cards')
const popupclosebutton = document.querySelector('.popup__close-button_cards');
//открытие попапа карточек
function popupOpen() {
    popupElement2.classList.add('popup_opened');
}
profileAddbutton.addEventListener('click', popupOpen);
//закрытие попапа карточек
function popupClose() {
    popupElement2.classList.remove('popup_opened');
}
popupclosebutton.addEventListener('click', popupClose);
//добавление карточек на страницу
const template = document.querySelector('.template').content;
const cards = document.querySelector('.cards');
function createCard(item) {
    const templateElement = template.cloneNode(true);
    const cardLogo = templateElement.querySelector('.card__logo');
    const cardTitle = templateElement.querySelector('.card__title');
    const deleteButton = templateElement.querySelector('.card__button-trash');
    cardLogo.src = item.link;
    cardTitle.textContent = item.name;
    cardLogo.alt = item.name;

    //удаление карточки
    function deleteCard() {
        const removeElement = deleteButton.closest('.card');
        removeElement.remove();
    }
    deleteButton.addEventListener('click', deleteCard);
    return templateElement;
}
initialCards.forEach(function (item) {
    const card = createCard(item);
    cards.prepend(card);
});
// добавить свою карточку
const cardInputtext = document.querySelector('.popup__input_type_title');
const cardInputimg = document.querySelector('.popup__input_type_link');
const popupFormCards = document.querySelector('.popup__form_cards');
function addNewCard(event) {
    event.preventDefault();
    const templateElement = template.cloneNode(true);
    const cardLogo = templateElement.querySelector('.card__logo');
    const cardTitle = templateElement.querySelector('.card__title');
    const deleteButton = templateElement.querySelector('.card__button-trash');
    cardLogo.src = cardInputimg.value;
    cardTitle.textContent = cardInputtext.value;
    cardLogo.alt = cardInputtext.value;
    function deleteCard() {
        const removeElement = deleteButton.closest('.card');
        removeElement.remove();
    }
    deleteButton.addEventListener('click', deleteCard);
    cards.prepend(templateElement);
    popupFormCards.reset();
    popupClose();
}
popupFormCards.addEventListener('submit', addNewCard);
