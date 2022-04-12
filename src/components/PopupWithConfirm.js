import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popup = document.querySelector(popupSelector)
    }

    changeSubmitHandler(newSubmitHandler) {
        this._handleFormSubmit = newSubmitHandler
    };

    setEventListeners = () => {
        super.setEventListeners();
        
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(event)
        })
    };
}
