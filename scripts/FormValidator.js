export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings
        
        this._inputs = this._form.querySelectorAll(this._settings.inputSelector);
        this._button = this._form.querySelector(this._settings.submitButtonSelector); 
    }

    _showError(input)  {
        const {inputErrorClass, errorVisibleClass} = this._settings
        input.classList.add(inputErrorClass);
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        errorContainer.classList.add(errorVisibleClass);
        errorContainer.textContent = input.validationMessage;
    }
    
    _hideError(input)  {
        const {inputErrorClass, errorVisibleClass} = this._settings
        input.classList.remove(inputErrorClass);
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        errorContainer.classList.remove(errorVisibleClass);
        errorContainer.textContent = '';
    }

    _enableSubmitButton() {
        const {inactiveButtonClass} = this._settings;
        this._button.classList.remove(inactiveButtonClass);
        this._button.removeAttribute('disabled');
    }

    
    _disableSubmitButton() {
        const {inactiveButtonClass} = this._settings;
        this._button.classList.add(inactiveButtonClass);
        this._button.setAttribute('disabled', '');
    }
    
    toggleButton() {
        const isFormValid = this._form.checkValidity();
        
        if (isFormValid) {
            this._enableSubmitButton();
    
        } else {
            this._disableSubmitButton();
        }
    }
    
    _validateInput(input) {
        
        if (input.validity.valid) {
            this._hideError(input);
    
        } else {
            this._showError(input);
        }
       
        this.toggleButton();
    }

    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
             
        });
         
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input);
            });
            
        });
    } 
}