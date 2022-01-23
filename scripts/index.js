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
const editModal =  document.querySelector('.popup_type_edit')
const addCardModal = document.querySelector('.popup_type_add-element')
const openImageCardModal = document.querySelector('.popup_type_image-element') 

// Поля профиля

const profileTitle =  document.querySelector('.profile__info-title')
const profileSubtitle = document.querySelector('.profile__info-subtitle')

// Формы

const editForm =  editModal.querySelector('.popup__form')
const addCardForm =  addCardModal.querySelector('.popup__form')

// Кнопки

const editProfileButton = document.querySelector('.profile__edit');
const closeEditModalButton = editModal.querySelector('.popup__close');

// Инпуты
const inputCardName = document.querySelector('.popup__input_name_add-name')
const inputCardLink = document.querySelector('.popup__input_name_add-link')

const inputProfileTitle = document.querySelector('.popup__input_name_title')
const inputProfileSubtitle = document.querySelector('.popup__input_name_subtitle')

// 
const addCardButton = document.querySelector('.profile__add')
const closeAddCardModalButton = addCardModal.querySelector('.popup__close'); 

const list = document.querySelector('.elements')  
const elementTemplate = document.querySelector('.element-template').content



function toggleModal(modal) {
  modal.classList.toggle('popup_opened');
  addProfileInput();
}

function addProfileInput() {
  inputProfileTitle.value = profileTitle.textContent; 
  inputProfileSubtitle.value = profileSubtitle.textContent;
}

editProfileButton.addEventListener('click', () => toggleModal(editModal))
closeEditModalButton.addEventListener('click', () => toggleModal(editModal))
  

addCardButton.addEventListener('click', () => toggleModal(addCardModal))
closeAddCardModalButton.addEventListener('click', () => toggleModal(addCardModal))
  

addCardForm.addEventListener('submit', (event) => {
  event.preventDefault()
  createElement({
    name: inputCardName.value,
    link: inputCardLink.value
  })

  toggleModal(addCardModal)
})


editForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  profileTitle.textContent = inputProfileTitle.value
  profileSubtitle.textContent = inputProfileSubtitle.value

  toggleModal(editModal)

})


function createElement(elementData) {
  const cardElement = elementTemplate.cloneNode(true)
  const elementImage = cardElement.querySelector('.element__image')
  const elementName = cardElement.querySelector('.element__name')
  const deleteButton = cardElement.querySelector('.element__delete')
  const likeButton = cardElement.querySelector('.element__like')
  const card = cardElement.querySelector('.element')
  const popupImage =  document.querySelector('.popup_type_image-element')
  const popupCloseImage = document.querySelector('.popup__close_image_vert')
  const popupImagePhoto= document.querySelector('.popup__image-element')
  const popupImageCaption =  document.querySelector('.popup__caption')
  
  
  elementName.textContent = elementData.name
  elementImage.src = elementData.link
  elementImage.alt = elementData.name

  
  function deleteElement() {
    card.remove()
  }

  function addLike() {
    likeButton.classList.add('element__like_active');
  }
 
  function openPopupImage() {
    popupImage.classList.add('popup_opened');
    addImageElement()
  }

  function addImageElement() {
    popupImagePhoto.src = elementData.link
    popupImageCaption.textContent = elementData.name
  }

  function closePopupImage() {
    popupImage.classList.remove('popup_opened');
}
  

  likeButton.addEventListener('click', addLike)
  deleteButton.addEventListener('click', deleteElement)
  elementImage.addEventListener('click', openPopupImage)
  popupCloseImage.addEventListener('click', closePopupImage)
  

  list.prepend(cardElement)
  
}

initialCards.forEach(createElement)