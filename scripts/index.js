const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');


function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');  
let nameInput = document.querySelector('.popup__text-title');
let jobInput = document.querySelector('.popup__text-subtitle');
let formNameInput = document.querySelector('.profile__info-title');
let formJobInput = document.querySelector('.profile__info-subtitle');
    
function handleProfileEditSubmit (evt) {
    evt.preventDefault();          
    
    formNameInput.textContent = nameInput.value;
    formJobInput.textContent = jobInput.value;
   
}

formElement.addEventListener('submit', handleProfileEditSubmit); 