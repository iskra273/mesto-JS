
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__error_visible',
  errorClass: '.popup__error',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled'
};

export const imageOpenModal= document.querySelector('.popup_type_image-element');
export const popupImagePhoto =  document.querySelector('.popup__image-element');
export const popupImageCaption =  document.querySelector('.popup__caption');

// Модальные окна
export const profileEditModal =  document.querySelector('.popup_type_edit')
export const cardAddModal = document.querySelector('.popup_type_add-element')

// Формы
export const profileEditForm =  profileEditModal.querySelector('.popup__form')
export const cardAddForm =  cardAddModal.querySelector('.popup__form')

// Кнопки
export const profileEditButton = document.querySelector('.profile__edit');
export const profileEditModalCloseButton = profileEditModal.querySelector('.popup__close');
export const cardAddButton = document.querySelector('.profile__add')
export const cardAddModalCloseButton = cardAddModal.querySelector('.popup__close');
export const imageCloseButton = imageOpenModal.querySelector('.popup__close');

// Общее
// export const containerSelector = document.querySelector('.elements')
export const listCard = document.querySelector('.elements')  
export const cardTemplateSelector = '.element-template'