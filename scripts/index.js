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

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameInput.value
    jobInput.value
    
    let formNameInput = nameInput.value
    let formJobInput = jobInput.value
    
    function textInput() {
        nameInput.textContent = formNameInput.value; 
        jobInput.textContent = formJobInput.value;
    }
}

formElement.addEventListener('submit', formSubmitHandler); 