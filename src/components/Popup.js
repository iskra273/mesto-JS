export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._button = this._popup.querySelector('.popup__close')
    };

    open() {
       this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (event) => this._handleEscClose(event));
    };
     
    close() {
        this._popup.classList.remove('popup_opened')
    };

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close()
        }
    };

    setEventListeners() {
        this._popup.addEventListener('click', (event) => {
          if (event.target.classList.contains('popup_opened')) {
            this.close()
          }
          if (event.target.classList.contains('popup__close')) {
            this.close()
          }
        })

        this._button.addEventListener('click', (event) => this.close(event));
    };
}