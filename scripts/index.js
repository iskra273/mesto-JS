const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');  
let nameInput = document.querySelector('.popup__input_name_title');
let jobInput = document.querySelector('.popup__input_name_subtitle');
let profileNameInput = document.querySelector('.profile__info-title');
let profileJobInput = document.querySelector('.profile__info-subtitle');


function openPopup() {
    popup.classList.add('popup_opened');
    addProfileInput();
}

function addProfileInput() {
    nameInput.value = profileNameInput.textContent; 
    jobInput.value = profileJobInput.textContent;
}


function handleProfileEditSubmit (evt) {
    evt.preventDefault();          
    profileNameInput.textContent = nameInput.value;
    profileJobInput.textContent = jobInput.value;
    
    closePopup();
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', handleProfileEditSubmit);
popupCloseButton.addEventListener('click', closePopup);