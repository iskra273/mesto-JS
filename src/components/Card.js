import {containerSelector, cardTemplateSelector} from "../utils/constants.js";

export class Card {
  constructor(elementData, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = elementData.name;
    this._link = elementData.link;
    this._likes = elementData.likes;
    this._id = elementData.id;
    this._userId = elementData.userId;
    this._ownerId = elementData.ownerId;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  deleteCard = () => {
    this._cardElement.remove();
    this._element = null;
  };

  
  _openImage = () => {
    this._handleCardClick(this._name, this._link)
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._toggleLike);
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._elementImage.addEventListener('click', this._openImage);
  }
  
  _toggleLike = () => {
    this._likeButton.classList.toggle('element__like_active');
  };
  
  isLiked() {
    const userHasLikeCard = this._likes.find(user => user._id === this._userId)
    return userHasLikeCard
  }

  setLikes(newLikes) {
    this._likes = newLikes
    const likeCountElement = this._cardElement.querySelector('.element__like-count')
    likeCountElement.textContent = this._likes.length

    if(this.isLiked()) {
      this._toggleLike()
    }
  }


  _fillCard() {
    this._elementName.textContent = this._name
    this._elementImage.src = this._link
    this._elementImage.alt = this._name  
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.element-template')
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  createCard () {
    this._cardElement = this._getTemplate();
    this._elementImage = this._cardElement.querySelector('.element__image')
    this._elementName = this._cardElement.querySelector('.element__name')
    this._deleteButton = this._cardElement.querySelector('.element__delete')
    this._likeButton = this._cardElement.querySelector('.element__like')
    
    this.setLikes(this._likes)
    
    if(this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none'
    }

    this._fillCard()       
    this._setEventListeners()    
    return this._cardElement; 
  }

};


