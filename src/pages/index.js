import { validationConfig, imageOpenModal, profileEditModal, cardAddModal, profileEditForm, 
  cardAddForm, profileEditButton, profileEditModalCloseButton, cardAddButton, 
  cardAddModalCloseButton, imageCloseButton, listCard, cardTemplateSelector
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import '../pages/index.css';

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// Валидация форм
const formEditValidator = new FormValidator(validationConfig, profileEditForm)
const addCardFormValidator = new FormValidator(validationConfig, cardAddForm)
formEditValidator.enableValidation()
addCardFormValidator.enableValidation()

//Открытие попапа фото
function handleCardClick(name, link) {
  popupImage.open(name, link)
}

// Открытие попапа редактирования профайла
profileEditButton.addEventListener('click', function() {
  userInfo.getUserInfo();
  formEditValidator.toggleButton()
  profileEditFormNew.open();
})

// Открытие попапа добавления места
cardAddButton.addEventListener('click', function() {
  addCardFormValidator.toggleButton()
  popupAddCardNew.open();
})

 
// Создание карточки
function createElement(elementData) {
  const card = new Card(elementData, cardTemplateSelector, handleCardClick)
  const cardElement = card.createCard()
  return cardElement
}

function createCardElement(cardElement) {
  const cardElementNew = createElement(cardElement)
  listCard.prepend(cardElementNew)
  // cardList.addItem(cardElementNew)
  
}

const cardList = new Section({ 
  items: initialCards,
  renderer: (item) => {
    createCardElement(item)
  } 
}, cardTemplateSelector);

cardList.renderer()
// cardList.addItem()

const userInfo = new UserInfo({
  profileTitleSelector: '.profile__info-title',
  profileSubtitleSelector: '.profile__info-subtitle',
});

// userInfo.getUserInfo();

const popupImage = new PopupWithImage ('.popup_type_image-element');
popupImage.setEventListeners();

const profileEditFormNew = new PopupWithForm({
  popupSelector:'.popup_type_edit', 
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data)
    profileEditFormNew.close()
  } 
})

profileEditFormNew.setEventListeners()


const popupAddCardNew = new PopupWithForm({
  popupSelector:'.popup_type_add-element', 
  handleFormSubmit: (data) => {   
      
    createCardElement(data)
    cardList.addItem(data) 
    
    cardAddForm.reset();
    popupAddCardNew.close();
    addCardFormValidator.toggleButton()
  }
})

popupAddCardNew.setEventListeners()



