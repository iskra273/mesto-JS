export class UserInfo {
    constructor ({profileTitleSelector, profileSubtitleSelector}) {
        this._profileTitle = document.querySelector(profileTitleSelector);
        this._profileSubtitle = document.querySelector(profileSubtitleSelector);
    }

    //подставляем в форму при открытии, забираем со страницы
    getUserInfo() {
        this._userInfo = {};
        this._userInfo.profileTitle = this._profileTitle.textContent;
        this._userInfo.profileSubtitle = this._profileSubtitle.textContent;
        return this._userInfo;
    }
    
    //принимает новые данные пользователя (получает объект), добавляет их на страницу
    setUserInfo() {
        this._profileTitle.textContent = this._profileTitle.value
        this._profileSubtitle.textContent = this._profileSubtitle.value
    };
    
}


