const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');


function openPopup() {
    popup.classList.add('popup_opened');

    let formElement = document.querySelector('.popup__form');  
    let nameInput = document.querySelector('.popup__text-title');
    let jobInput = document.querySelector('.popup__text-subtitle');
 
function formSubmitHandler (evt) {
    evt.preventDefault();
   
    let nameValue = nameInput.value
    let jobValue = jobInput.value
   
    let formNameInput = document.querySelector('.popup__text-title');
    let formJobInput = document.querySelector('.popup__text-subtitle');
   
    function textInput() {
        nameValue.textContent = formNameInput.value;
        jobValue.textContent = formJobInput.value;
    }
}

formElement.addEventListener('submit', formSubmitHandler); 

}

function closePopup() {
    popup.classList.remove('popup_opened');
}


popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

