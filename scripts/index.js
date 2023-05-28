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
const togglePopupVisibility = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}
//закрытие попапа профиля
const togglePopupInVisibility = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}
function disabledSubmitButton(popup) {
    const button = popup.querySelector('.popup__save-button');
    button.classList.add('popup__save-button_disabled');
    button.setAttribute('disabled', true);
}

profilepopupElement.addEventListener('click', () => {
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
    togglePopupVisibility(popupElement);
});
popupcloseElement.addEventListener('click', () => {
    togglePopupInVisibility(popupElement);
});


function handleFormSubmitProfile(event) {
    event.preventDefault();
    profilename.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    disabledSubmitButton(popupElement);
    togglePopupInVisibility(popupElement);
}
popupForm.addEventListener('submit', handleFormSubmitProfile);
//объявляем переменные для второго попапа
const profileAddbutton = document.querySelector('.profile__button-add');
const popupLink = document.querySelector('.popup__input_type_link');
const popupName = document.querySelector('.popup__input_type_title');
const popupCards = document.querySelector('.popup_cards')
const popupclosebutton = document.querySelector('.popup__close-button_cards');
//объявляем третий попап
const popupFullScreen = document.querySelector('.popup_fullscreen');
const popupFullScreenImg = document.querySelector('.popup__fullscreen-img');
const popupFullScreenTitle = document.querySelector('.popup__fullscreen-title');
const popupFullScreenClose = document.querySelector('.popup__fullscreen-close');
//открытие попапа карточек
profileAddbutton.addEventListener('click', () => {
    togglePopupVisibility(popupCards);
});
//закрытие попапа карточек
popupclosebutton.addEventListener('click', () => {
    togglePopupInVisibility(popupCards);
});
//добавление карточек на страницу
const template = document.querySelector('.template').content;
const cards = document.querySelector('.cards');
function createCard(item) {
    const templateElement = template.cloneNode(true);
    const cardLogo = templateElement.querySelector('.card__logo');
    const cardTitle = templateElement.querySelector('.card__title');
    const deleteButton = templateElement.querySelector('.card__button-trash');
    const likeButton = templateElement.querySelector('.card__item');
    cardLogo.src = item.link;
    cardTitle.textContent = item.name;
    cardLogo.alt = item.name;
    //удаление карточки
    function deleteCard() {
        const removeElement = deleteButton.closest('.card');
        removeElement.remove();
    }
    deleteButton.addEventListener('click', deleteCard);
    // функция лайка
    function makeLike() {
        likeButton.classList.toggle('card__item_active');
    }
    likeButton.addEventListener('click', makeLike);
    //открыть попап с картинкой
    function openFullScreen() {
        popupFullScreenImg.src = cardLogo.src;
        popupFullScreenImg.alt = cardTitle.textContent;
        popupFullScreenTitle.textContent = cardTitle.textContent;
        togglePopupVisibility(popupFullScreen);
    }
    cardLogo.addEventListener('click', openFullScreen);
    return templateElement;
}
//закрыть попап большой картинки
popupFullScreenClose.addEventListener('click', () => {
    togglePopupInVisibility(popupFullScreen);
});
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
    const cardData = {
        name: cardInputtext.value,
        link: cardInputimg.value
    };
    cards.prepend(createCard(cardData));
    disabledSubmitButton(popupCards);
    popupFormCards.reset();
    togglePopupInVisibility(popupCards);
}
popupFormCards.addEventListener('submit', addNewCard);
// закрытие кликом на оверлей
function closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        togglePopupInVisibility(evt.target);
    }
}
popupElement.addEventListener('mousedown', closeByOverlay);
popupCards.addEventListener('mousedown', closeByOverlay);
popupFullScreen.addEventListener('mousedown', closeByOverlay);
//закрытие на escape
function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        togglePopupInVisibility(document.querySelector('.popup_opened'));
    }
};