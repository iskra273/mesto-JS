import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImage = this._popup.querySelector('.popup__image-element')
        this._cardCaption = this._popup.querySelector('.popup__caption')
    }

    open(name, link) {
        this._cardImage.src = link;
        this._cardCaption.textContent = name;
        this._cardImage.alt = name;
        super.open();
    };
}
