
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
export const profileEditModal =  document.querySelector('.popup_type_edit');
export const cardAddModal = document.querySelector('.popup_type_add-element');
export const avatarEditModal = document.querySelector('.popup_type_avatar');

// Формы
export const profileEditForm =  profileEditModal.querySelector('.popup__form');
export const cardAddForm =  cardAddModal.querySelector('.popup__form');
export const avatarEditForm =  avatarEditModal.querySelector('.popup__form');

// Инпуты
// export const inputCardName = document.querySelector('.popup__input_name_add-name')
// export const inputCardLink = document.querySelector('.popup__input_name_add-link')
export const inputProfileTitle = document.querySelector('.popup__input_name_title');
export const inputProfileSubtitle = document.querySelector('.popup__input_name_subtitle');

// Кнопки
export const profileEditButton = document.querySelector('.profile__edit');
export const profileEditModalCloseButton = profileEditModal.querySelector('.popup__close');
export const cardAddButton = document.querySelector('.profile__add');
export const cardAddModalCloseButton = cardAddModal.querySelector('.popup__close');
export const imageCloseButton = imageOpenModal.querySelector('.popup__close');
export const avatarEditButton = document.querySelector('.profile__avatar-foto-edit');

// Общее
export const containerSelector = '.elements';
export const cardTemplateSelector = '.element-template';