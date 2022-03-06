
// import { validationConfig } from './constants.js'

export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings

        this._inputs = this._form.querySelectorAll(settings.inputSelector);
        this._button = this._form.querySelector(settings.submitButtonSelector); 
    }

    _showError(input, errorContainer)  {
        const {inputErrorClass, errorVisibleClass} = this._settings
        input.classList.add(inputErrorClass);
        errorContainer.classList.add(errorVisibleClass);
        errorContainer.textContent = input.validationMessage;
    }
    
    _hideError(input, errorContainer)  {
        const {inputErrorClass, errorVisibleClass} = this._settings
        input.classList.remove(inputErrorClass);
        errorContainer.classList.remove(errorVisibleClass);
        errorContainer.textContent = '';
    }

    _toggleButton() {
        const {inactiveButtonClass} = this._settings
        
        const isFormValid = this._form.checkValidity();
    
        if (isFormValid) {
            button.classList.remove(inactiveButtonClass);
            button.removeAttribute('disabled');
    
        } else {
            button.classList.add(inactiveButtonClass);
            button.setAttribute('disabled', '');
        }
    }

    _validateInput() {
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        
        if (input.validity.valid) {
            this._hideError(input, errorContainer);
    
        } else {
            this._showError(input, errorContainer);
        }
    
        this._toggleButton();
    }

    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        
        
        this._validateInput(input, classes)            
        
    } 
}


// const settings = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     inputErrorClass: 'popup__input_type_error',
//     errorVisibleClass: 'popup__error_visible',
//     errorClass: '.popup__error',
//     submitButtonSelector: '.popup__save',
//     inactiveButtonClass: 'popup__save_disabled'
// }

// const profileEditModal =  document.querySelector('.popup_type_edit')
// const cardAddModal = document.querySelector('.popup_type_add-element')

// const editFormValidator = new FormValidator(settings, profileEditModal)
// const addCardFormValidator = new FormValidator(settings, cardAddModal)