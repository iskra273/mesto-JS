const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');  
let nameInput = document.querySelector('.popup__input popup__input_name_title');
let jobInput = document.querySelector('.popup__input popup__input_name_subtitle');
let profileNameInput = document.querySelector('.profile__info-title');
let profileJobInput = document.querySelector('.profile__info-subtitle');


function openPopup() {
    popup.classList.add('popup_opened');
}

function addProfileInput() {
    profileNameInput.textContent = nameInput.value;
    profileJobInput.textContent = jobInput.value;
}


function handleProfileEditSubmit (evt) {
    evt.preventDefault();          
    profileNameInput.textContent = nameInput.value;
    profileJobInput.textContent = jobInput.value; 
    nameInput.textContent = profileNameInput;
    jobInput.textContent = profileJobInput;  
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupOpenButton.addEventListener('click', addProfileInput);
formElement.addEventListener('submit', handleProfileEditSubmit);
popupCloseButton.addEventListener('click', closePopup);
