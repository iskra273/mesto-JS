
export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings
        
        this._inputs = this._form.querySelectorAll(this._settings.inputSelector);
        this._button = this._form.querySelector(this._settings.submitButtonSelector); 
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
        console.log('isFormValid');
        if (isFormValid) {
            this._button.classList.remove(inactiveButtonClass);
            this._button.removeAttribute('disabled');
    
        } else {
            this._button.classList.add(inactiveButtonClass);
            this._button.setAttribute('disabled', '');
        }
    }

    _validateInput(input) {
        console.log('in validate input')
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        
        if (input.validity.valid) {
            this._hideError(input, errorContainer);
    
        } else {
            this._showError(input, errorContainer);
        }
    
        this._toggleButton();
    }

    enableValidation() {
        console.log('enable')
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('form submitted')
        });
        
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input);
            });
        });        
        
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