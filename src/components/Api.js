class Api {
  constructor({baseUrl, headers}) {
    this._headers = headers
    this._baseUrl = baseUrl
  }
  
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  }
 
  //1.Загрузка инф-ции о пользователе с сервера  
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
    })
    .then(this._getResponse)
    .catch(console.log)
  }

  // 2.Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
    })
    .then(this._getResponse)
    .catch(console.log)  
  }
  
  //3.Редактирование профиля
  editProfile(name, about) {
    console.log('editProfile')
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",  
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(this._getResponse)
    .catch(console.log)  
  }

  //4.Добавление карточки
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",  
      headers: this._headers,
      body: JSON.stringify({
        name, 
        link
      })
    })
    .then(this._getResponse)
    .catch(console.log)  
  }
  
  //7. Удаление карточки
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",  
      headers: this._headers
      
    })
    .then(this._getResponse)
    .catch(console.log)  
  }

  // 8. Постановка и снятие лайка
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",  
      headers: this._headers
    })
    .then(this._getResponse)
    .catch(console.log)  
  } 

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",  
      headers: this._headers
    })
    .then(this._getResponse)
    .catch(console.log)  
  }

  // 9. Обновление аватара пользователя
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",  
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._getResponse)  
    .catch(console.log)
    .then(res => {
      console.log('res', res)
    })      
  }
}
  
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
    headers: {
      authorization: '7ad94de5-0f27-4b33-9685-c939c2500319',
      'Content-Type': 'application/json'
    }
});