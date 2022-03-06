import { openPopup } from './utils.js'
import { imageOpenModal, popupImagePhoto, popupImageCaption} from './constants.js'

export class Card {
  constructor(item, cardTemplateSelector) {
    this._name = data.name
    this._link = data.link
    this._template = document.querySelector(cardTemplateSelector).content

  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this_.addLike)
    this._deleteButton.addEventListener('click', this_.deleteElement)
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
    this._elementImage = cardElement.querySelector('.element__image')
    this._elementName = cardElement.querySelector('.element__name')
    this._deleteButton = cardElement.querySelector('.element__delete')
    this._likeButton = cardElement.querySelector('.element__like')
    const card = cardElement.querySelector('.element')
        
    this._fillCard()
      

    _deleteElement = () => {
      card.remove()
    };
      
    _addLike() = () => {
      this._likeButton.classList.toggle('element__like_active');
    };
        

    this._setEventListeners()
        
    return this._cardElement; 
  }

};


// const cardTemplateSelector = '.element-template'
// const card = new Card({ name: '', link: ''}, cardTemplateSelector)
// const cardElement = card.createCard()
// list.prepend(cardElement)