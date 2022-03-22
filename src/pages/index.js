import { validationConfig, imageOpenModal, popupImagePhoto, popupImageCaption } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
// import { Popup } from '../components/Popup.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'


export function handleCardClick(name, link) {
  popupImage.open(name, link)
}

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

// Модальные окна
const profileEditModal =  document.querySelector('.popup_type_edit')
const cardAddModal = document.querySelector('.popup_type_add-element')

// Поля профиля
const profileTitle =  document.querySelector('.profile__info-title')
const profileSubtitle = document.querySelector('.profile__info-subtitle')

// Формы
const profileEditForm =  profileEditModal.querySelector('.popup__form')
const cardAddForm =  cardAddModal.querySelector('.popup__form')

// Кнопки
const profileEditButton = document.querySelector('.profile__edit');
const profileEditModalCloseButton = profileEditModal.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add')
const cardAddModalCloseButton = cardAddModal.querySelector('.popup__close');
const imageCloseButton = imageOpenModal.querySelector('.popup__close');

// Инпуты
const inputCardName = document.querySelector('.popup__input_name_add-name')
const inputCardLink = document.querySelector('.popup__input_name_add-link')
const inputProfileTitle = document.querySelector('.popup__input_name_title')
const inputProfileSubtitle = document.querySelector('.popup__input_name_subtitle')

// Общее
const listCard = document.querySelector('.elements')  
const cardTemplateSelector = '.element-template'
// const popupSelector =  document.querySelector('.popup')

// Фото места

// Валидация форм
const editFormValidator = new FormValidator(validationConfig, profileEditForm)
const addCardFormValidator = new FormValidator(validationConfig, cardAddForm)
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

//Закрытие попапа по клику фона
function closeProfilePopupOverlay(event) {
  if (event.target === event.currentTarget)
    popupEditProfileNew.close(profileEditModal);
}

profileEditModal.addEventListener('click', closeProfilePopupOverlay);

function closeAddPopupOverlay(event) {
  if (event.target === event.currentTarget)
  popupAddCardNew.close(cardAddModal);
}

cardAddModal.addEventListener('click', closeAddPopupOverlay);


function closeImagePopupOverlay(event) {
  if (event.target === event.currentTarget)
  popupImage.close(imageOpenModal)
}
    
imageOpenModal.addEventListener('mousedown', closeImagePopupOverlay);

// // Открытие и закрытие попапа редактирования профайла
// profileEditButton.addEventListener('click', function() {
//   // inputProfileTitle.value = profileTitle.textContent; 
//   // inputProfileSubtitle.value = profileSubtitle.textContent;
//   userInfo.getUserInfo()
//   console.log(userInfo.getUserInfo())
//   editFormValidator.toggleButton()
//   popupProfile.open(profileEditModal);
//   // popupEditProfileNew.open();
// })

profileEditModalCloseButton.addEventListener('click', function() {
  editFormValidator.toggleButton()
  popupEditProfileNew.close(profileEditModal);
})
  
// Открытие и закрытие попапа добавления места
cardAddButton.addEventListener('click', function() {
  addCardFormValidator.toggleButton()
  popupAddCardNew.open(cardAddModal);
})


cardAddModalCloseButton.addEventListener('click', function() {
  addCardFormValidator.toggleButton()
  popupAddCardNew.close(cardAddModal);
})
  
// Закрытие попапа фото места
imageCloseButton.addEventListener('click', function() {
  popupImage.close(imageOpenModal)
});

//Закрытие редактирования карточки места по кнопке Сохранить
cardAddForm.addEventListener('submit', (event) => {
  event.preventDefault()
  createCardElement({
    name: inputCardName.value,
    link: inputCardLink.value,
  });

  // cardAddForm.reset();
  popupAddCardNew.close(cardAddModal);
  addCardFormValidator.toggleButton()
})


//Закрытие редактирования профиля по кнопке Сохранить
profileEditForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // profileTitle.textContent = inputProfileTitle.value;
  // profileSubtitle.textContent = inputProfileSubtitle.value;

  // userInfo.setUserInfo()

  popupEditProfileNew.close(profileEditModal);
})

const popupImage = new PopupWithImage ('.popup_type_image-element');
popupImage.open();
popupImage.close();

const cardList = new Section({ 
  items: initialCards,
  renderer: (item) => {
    createCardElement(item)
  } 
}, cardTemplateSelector);

cardList.renderer()
cardList.addItem()

function createElement(elementData) {
  const card = new Card(elementData, cardTemplateSelector, handleCardClick)
  const cardElement = card.createCard()
  return cardElement
}

function createCardElement(cardElement) {
  const cardElementNew = createElement(cardElement)
  listCard.prepend(cardElementNew)
}


const userInfo = new UserInfo({
  profileTitleSelector: '.profile__info-title',
  profileSubtitleSelector: '.profile__info-subtitle',
});

userInfo.getUserInfo()


const profileEditFormNew = new PopupWithForm({
  popupSelector:'.popup_type_edit', 
  handleFormSubmit: () => {
    // userInfo.getUserInfo();
    profileEditFormNew.open(profileEditModal);
  } 
})


profileEditFormNew.open()
// profileEditFormNew.close()

const popupAddCardNew = new PopupWithForm({
  popupSelector:'.popup_type_add-element', 
  handleFormSubmit: () =>{
    createCardElement({
      name: inputCardName.value,
      link: inputCardLink.value,
    });
  }
})

popupAddCardNew.open()
// popupAddCardNew.close()
profileEditModal.setEventListeners()


// Открытие и закрытие попапа редактирования профайла
profileEditButton.addEventListener('click', function() {
  userInfo.getUserInfo()
  editFormValidator.toggleButton()
  // popupProfile.open(profileEditModal);
  profileEditFormNew.open(profileEditModal);
})

