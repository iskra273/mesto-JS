import { validationConfig, imageOpenModal, popupImagePhoto, popupImageCaption } from './constants.js'
import { openPopup } from './utils.js'
import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  } 
}

const initialCards = [
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

// Фото места

// Валидация форм
const editFormValidator = new FormValidator(validationConfig, profileEditForm)
const addCardFormValidator = new FormValidator(validationConfig, cardAddForm)
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

function closePopup(popups) {
  popups.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape);
}

//Закрытие попапа по клику фона
function closeProfilePopupOverlay(event) {
  if (event.target === event.currentTarget)
  closePopup(profileEditModal)
}

profileEditModal.addEventListener('click', closeProfilePopupOverlay);


function closeAddPopupOverlay(event) {
  if (event.target === event.currentTarget)
  closePopup(cardAddModal)
}

cardAddModal.addEventListener('click', closeAddPopupOverlay);


function closeImagePopupOverlay(event) {
  if (event.target === event.currentTarget)
  closePopup(imageOpenModal)
}
    
imageOpenModal.addEventListener('mousedown', closeImagePopupOverlay);

//Закрытие попапа кнопкой Esc


// Открытие и закрытие попапа редактирования профайла
profileEditButton.addEventListener('click', function() {
  inputProfileTitle.value = profileTitle.textContent; 
  inputProfileSubtitle.value = profileSubtitle.textContent;

  openPopup(profileEditModal)
  toggleButton(profileEditForm, settings);
})

profileEditModalCloseButton .addEventListener('click', function() {
  closePopup(profileEditModal)
})
  
// Открытие и закрытие попапа добавления места
cardAddButton.addEventListener('click', function() {
  openPopup(cardAddModal)
})

cardAddModalCloseButton.addEventListener('click', function() {
  closePopup(cardAddModal)
})
  
// Закрытие попапа фото места
imageCloseButton.addEventListener('click', function() {
  closePopup(imageOpenModal)
});


//Закрытие редактирования карточки места по кнопке Сохранить
cardAddForm.addEventListener('submit', (event) => {
  event.preventDefault()
  createElement({
    name: inputCardName.value,
    link: inputCardLink.value
  });

  closePopup(cardAddModal);
  
  cardAddForm.reset();
    this.toggleButton(cardAddForm, settings);
})


//Закрытие редактирования профиля по кнопке Сохранить
profileEditForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  profileTitle.textContent = inputProfileTitle.value
  profileSubtitle.textContent = inputProfileSubtitle.value
  closePopup(profileEditModal)
})


function createElement(elementData) {
  // Создаем экземляр карточки
  const card = new Card(elementData, cardTemplateSelector)
  // Возвращаем DOM-элемент карточки
  const cardElement = card.createCard()
  // Добавляем карточку
  listCard.prepend(cardElement)
}

initialCards.forEach(createElement)
