// import { closeByEscape } from '../pages/index.js'

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
    };

    open() {
       this._popup.classList.add('popup_opened');
       document.addEventListener('keydown', (event) => this._handleEscClose(event));
    };
     
    close() {
        this._popup.classList.remove('popup_opened')
        this.setEventListeners()
    };

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close()
        }
    };

    setEventListeners() {
        document.addEventListener('keydown', (event) => this._handleEscClose(event));
    }; 
}