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
        
        let formNameInput = document.querySelector('.profile__info-title');
        let formJobInput = document.querySelector('.profile__info-subtitle');
            
        function textInput() {
            nameValue.textContent = formNameInput.value;
            jobValue.textContent = formJobInput.value;
        }

        textInput()
    }

        formElement.addEventListener('submit', formSubmitHandler); 

}
popupOpenButton.addEventListener('click', openPopup);
function closePopup() {
    popup.classList.remove('popup_opened');
}


popupCloseButton.addEventListener('click', closePopup);

