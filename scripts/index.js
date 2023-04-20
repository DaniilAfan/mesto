const popupElement = document.querySelector(".popup");
const profilepopupElement = document.querySelector(".profile__popup");
const popupcloseElement = document.querySelector(".popup__close-button");
const nameInput = document.querySelector(".popup__paragraph-name");
const jobInput = document.querySelector(".popup__paragraph-inf");
const popupForm = document.querySelector(".popup__form");
const profilename = document.querySelector(".profile__title");
const profilejob = document.querySelector(".profile__subtitle");
const submitButton = document.querySelector(".popup__save-button");

const togglePopupVisibility = function () {
    popupElement.classList.add('popup_is-opened');
}
const togglePopupInVisibility = function () {
    popupElement.classList.remove('popup_is-opened');
}

profilepopupElement.addEventListener('click', togglePopupVisibility);
popupcloseElement.addEventListener('click', togglePopupInVisibility);
function disabledSavebutton() {
    const saveButton = document.querySelector(".popup__save-button");
    saveButton.setAttribute("disabled", true);
}

function handleFormSubmit(event) {
    event.preventDefault();
    profilename.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    togglePopupInVisibility();
}
submitButton.addEventListener("click", handleFormSubmit);