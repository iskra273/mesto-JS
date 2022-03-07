import { imageOpenModal, popupImagePhoto, popupImageCaption } from './constants.js'
import { openPopup } from './utils.js'


export class Card {
  constructor(elementData, cardTemplateSelector) {
    this._name = elementData.name
    this._link = elementData.link
    this._template = document.querySelector(cardTemplateSelector).content

  }
  _deleteElement = () => {
    this._card.remove()
  };

  _addLike = () => {
    this._likeButton.classList.toggle('element__like_active');
  };
 
  _setEventListeners() {
    this._likeButton.addEventListener('click', this._addLike)
    this._deleteButton.addEventListener('click', this._deleteElement)
    this._elementImage.addEventListener('click', function() {
      openPopup(imageOpenModal)
      
      popupImagePhoto.src = this._link
      popupImageCaption.textContent = this._name
      popupImagePhoto.alt = this._name
    });
  }
  
  _fillCard() {
    this._elementName.textContent = this._name
    this._elementImage.src = this._link
    this._elementImage.alt = this._name  
  }

  createCard () {
    this._cardElement = this._template.cloneNode(true)
    this._elementImage = this._cardElement.querySelector('.element__image')
    this._elementName = this._cardElement.querySelector('.element__name')
    this._deleteButton = this._cardElement.querySelector('.element__delete')
    this._likeButton = this._cardElement.querySelector('.element__like')
    this._card = this._cardElement.querySelector('.element')
        
    this._fillCard()       
    this._setEventListeners()    
    return this._cardElement; 
  }

};