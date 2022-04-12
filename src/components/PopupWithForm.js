import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formSubmitButton = this._form.querySelector('.popup__save');
    }

    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };
    
    setEventListeners = () => {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues())
        })
    };

    close  = () => {
        super.close();
        this._form.reset();
    };

    changeButtonMessage(isLoading) {
        if (isLoading === true) {
            this._formSubmitButton.textContent = 'Сохранение...';
        } else {
            this._formSubmitButton.textContent = 'Сохранить';
        }
    }
}