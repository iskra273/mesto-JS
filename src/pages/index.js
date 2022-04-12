import { validationConfig, profileEditModal, cardAddModal, avatarEditModal, profileEditForm, cardAddForm, avatarEditForm, profileEditButton, 
  cardAddButton, avatarEditButton, cardTemplateSelector, containerSelector, inputProfileTitle, inputProfileSubtitle
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import '../pages/index.css';
import { api } from '../components/Api.js';


let userId

api.getProfile()
  .then(res => {
    // console.log('ответ', res)
    userInfo.setUserInfo(res.name, res.about, res.avatar)
    
    userId = res._id
  })

api.getInitialCards()
  .then(cardListNew => {
    console.log('cardListNew', cardListNew)
    cardListNew.forEach(data => {
      const card = createElement({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })  
           
      cardList.addItem(card) 
      // console.log(cardListNew)
    })  
  })  


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
const сardAddFormValidator = new FormValidator(validationConfig, cardAddForm)
const avatarEditFormValidator = new FormValidator(validationConfig, avatarEditForm)
formEditValidator.enableValidation()
сardAddFormValidator.enableValidation()
avatarEditFormValidator.enableValidation()

// Открытие попапа фото
function handleCardClick(name, link) {
  popupImage.open(name, link)
}

// Открытие попапа редактирования   аватара
avatarEditButton.addEventListener('click', function() {
  avatarEditFormValidator.toggleButton()
  avatarPopup.open();
})

// Открытие попапа редактирования профайла
profileEditButton.addEventListener('click', function() {
  
  const userData = userInfo.getUserInfo();
  inputProfileTitle.value = userData.userTitle;
  inputProfileSubtitle.value = userData.userSubtitle;

  formEditValidator.toggleButton()
  profileEditFormNew.open();
})

// Открытие попапа добавления места
cardAddButton.addEventListener('click', function() {
  сardAddFormValidator.toggleButton()
  popupAddCardNew.open();
})

 
// Создание карточки
function createElement(elementData) {
  const card = new Card(
    elementData, 
    cardTemplateSelector, 
    handleCardClick,
    (id) => {
      confirmPopup.open()
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            card.deleteCard()
            confirmPopup.close()
            // console.log(res)
          })
      })  
    },
    (id) => {
      if(card.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
      } else {
          api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
      }       
    },
  );

  const cardElement = card.createCard()
  return cardElement
}

function createCardElement(cardElement) {
  const cardElementNew = createElement(cardElement)
  cardList.addItem(cardElementNew) 
}

const cardList = new Section({ 
  items: [],
  renderer: (item) => {
    createCardElement(item)
  } 
}, containerSelector);

cardList.renderer()

const userInfo = new UserInfo({
  profileTitleSelector: '.profile__info-title',
  profileSubtitleSelector: '.profile__info-subtitle',
  profileAvatarSelector: '.profile__avatar-foto'
});

const popupImage = new PopupWithImage ('.popup_type_image-element');
popupImage.setEventListeners();

//Закрытие редактирования профиля
const profileEditFormNew = new PopupWithForm({
  popupSelector:'.popup_type_edit', 
  handleFormSubmit: (data) => {
    profileEditFormNew.changeButtonMessage(true);
    
    const {title, subtitle} = data
    api.editProfile(title, subtitle)
      .then(res => {
        userInfo.setUserInfo({name: title, job:subtitle})
        profileEditFormNew.close();
      })
      .finally(() => {
        profileEditFormNew.changeButtonMessage(false);
      })
  } 
})

profileEditFormNew.setEventListeners()

//Закрытие добавления места
const popupAddCardNew = new PopupWithForm({
  popupSelector:'.popup_type_add-element', 
  handleFormSubmit: (data) => {   
    // console.log(data)
    popupAddCardNew.changeButtonMessage(true);
    api.addCard(data.name, data.link)
      .then(res => {
        // console.log('res', res)
        const cardElementAdd = createElement({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          userId: userId,
          ownerId: res.owner._id
        });
        
        cardList.addItem(cardElementAdd); 
        popupAddCardNew.close();
      })
      .finally(() => {
        popupAddCardNew.changeButtonMessage(false);
      })
    }
})

popupAddCardNew.setEventListeners()

const confirmPopup = new PopupWithForm({
  popupSelector:'.popup_type_delete-confirm'
})

confirmPopup.setEventListeners()

const avatarPopup = new PopupWithForm({
  popupSelector:'.popup_type_avatar',
  handleFormSubmit: (data) => {
    avatarPopup.changeButtonMessage(true);
   
    const {link} = data
    api.updateAvatar(link)
      .then(res => {
        // console.log('res', res)
        userInfo.setUserInfo({avatar: link})
        avatarPopup.close()
      })
      .finally(() => {
        avatarPopup.changeButtonMessage(false);
      })
  }
})

avatarPopup.setEventListeners()


