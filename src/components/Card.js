import { handleCardClick } from '../pages/index.js'

export class Card {
  constructor(elementData, cardTemplateSelector) {
    this._name = elementData.name;
    this._link = elementData.link;
    this._template = document.querySelector(cardTemplateSelector).content;
    this._handleCardClick = handleCardClick;
  }

  _deleteElement = () => {
    this._cardElement.remove();
    this._element = null;
  };

  _toggleLike = () => {
    this._likeButton.classList.toggle('element__like_active');
  };
  
  _openImage = () => {
    this._handleCardClick(this._name, this._link)
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._toggleLike)
    this._deleteButton.addEventListener('click', this._deleteElement)
    this._elementImage.addEventListener('click', this._openImage)
  }
  
  _fillCard() {
    this._elementName.textContent = this._name
    this._elementImage.src = this._link
    this._elementImage.alt = this._name  
  }

  createCard () {
    this._cardElement = this._template.querySelector('.element').cloneNode(true);
    this._elementImage = this._cardElement.querySelector('.element__image')
    this._elementName = this._cardElement.querySelector('.element__name')
    this._deleteButton = this._cardElement.querySelector('.element__delete')
    this._likeButton = this._cardElement.querySelector('.element__like')
        
    this._fillCard()       
    this._setEventListeners()    
    return this._cardElement; 
  }

};


