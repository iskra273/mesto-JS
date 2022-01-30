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
const imageOpenModal= document.querySelector('.popup_type_image-element') 


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

// 
const list = document.querySelector('.elements')  
const elementTemplate = document.querySelector('.element-template').content

// function openPopup(popup) {
//   popup.classList.add('popup_opened')
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened')
// }



// // Закрытие попапа по клику фона
function closeProfilePopupOverlay() {
  if (event.target === event.currentTarget)
  profileEditModal.classList.remove('popup_opened')
}

profileEditModal.addEventListener('click', closeProfilePopupOverlay);


function closeAddPopupOverlay() {
  if (event.target === event.currentTarget)
  cardAddModal.classList.remove('popup_opened')
}

cardAddModal.addEventListener('click', closeAddPopupOverlay);


function closeImagePopupOverlay(event) {
  if (event.target === event.currentTarget)
  imageOpenModal.classList.remove('popup_opened')
}
    
imageOpenModal.addEventListener('mousedown', closeImagePopupOverlay);



//Закрытие попапа кнопкой Esc (установить при открытии попапа и удалить при закрыти, чтобы он работал только при открытом попапе)
function closeProfilePopupEsc(event) {
  if(event.key === 'Escape') {
    profileEditModal.classList.remove('popup_opened')
  }
 
}
document.addEventListener('keydown', closeProfilePopupEsc);



function closeAddPopupEsc(event) {
  if(event.key === 'Escape') {
    cardAddModal.classList.remove('popup_opened')
  }  
}

document.addEventListener('keydown', closeAddPopupEsc);

function closeImagePopupEsc(event) {
  if(event.key === 'Escape') {
    imageOpenModal.classList.remove('popup_opened')
  }  
}

document.addEventListener('keydown', closeImagePopupEsc);


// Открытие и закрытие попапа редактирования профайла
profileEditButton.addEventListener('click', function() {
  profileEditModal.classList.add('popup_opened')

  inputProfileTitle.value = profileTitle.textContent; 
  inputProfileSubtitle.value = profileSubtitle.textContent;
})

profileEditModalCloseButton .addEventListener('click', function() {
  profileEditModal.classList.remove('popup_opened')
})
  
// Открытие и закрытие попапа добавления места
cardAddButton.addEventListener('click', function() {
  cardAddModal.classList.add('popup_opened')
})

cardAddModalCloseButton.addEventListener('click', function() {
  cardAddModal.classList.remove('popup_opened')
})
  
// Закрытие попапа фото места
imageCloseButton.addEventListener('click', function() {
  imageOpenModal.classList.remove('popup_opened')
});


//Закрытие редактирования карточки места по кнопке Сохранить
cardAddForm.addEventListener('submit', (event) => {
  event.preventDefault()
  createElement({
    name: inputCardName.value,
    link: inputCardLink.value
  });

  cardAddModal.classList.remove('popup_opened')
})

//Закрытие редактирования профиля по кнопке Сохранить
profileEditForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  profileTitle.textContent = inputProfileTitle.value
  profileSubtitle.textContent = inputProfileSubtitle.value
  profileEditModal.classList.remove('popup_opened')
})

// Добавление карточки
function createCard (item) {
  const cardElement = elementTemplate.cloneNode(true)
  const elementImage = cardElement.querySelector('.element__image')
  const elementName = cardElement.querySelector('.element__name')
  const deleteButton = cardElement.querySelector('.element__delete')
  const likeButton = cardElement.querySelector('.element__like')
  const card = cardElement.querySelector('.element')
  const popupImagePhoto =  document.querySelector('.popup__image-element')
  const popupImageCaption =  document.querySelector('.popup__caption')
  
  
  elementName.textContent = item.name
  elementImage.src = item.link
  elementImage.alt = item.name

  
  function deleteElement() {
    card.remove()
  }

  function addLike() {
    likeButton.classList.toggle('element__like_active');
  }
  
  likeButton.addEventListener('click', addLike)
  deleteButton.addEventListener('click', deleteElement)

  elementImage.addEventListener('click', function() {
    imageOpenModal.classList.add('popup_opened')

    popupImagePhoto.src = item.link
    popupImageCaption.textContent = item.name
  });
  
  return cardElement;
  
}

function createElement(elementData) {
  const cardElement = createCard(elementData)
  list.prepend(cardElement)
}


initialCards.forEach(createElement)