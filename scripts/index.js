const popupElement = document.querySelector('.popup');
const profilepopupElement = document.querySelector('.profile__popup');
const popupcloseElement = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupForm = document.querySelector('.popup__form_profile');
const profilename = document.querySelector('.profile__title');
const profilejob = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.popup__save-button');

const togglePopupVisibility = function () {
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
    popupElement.classList.add('popup_opened');
}
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