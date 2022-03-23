export class UserInfo {
    constructor ({profileTitleSelector, profileSubtitleSelector}) {
        this._profileTitle = document.querySelector(profileTitleSelector);
        this._profileSubtitle = document.querySelector(profileSubtitleSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.profileTitle = this._profileTitle.textContent;
        this._userInfo.profileSubtitle = this._profileSubtitle.textContent;
        return this._userInfo;
    }
    
    setUserInfo() {
        this._profileTitle.textContent = this._profileTitle.value
        this._profileSubtitle.textContent = this._profileSubtitle.value
    };  
}

// profileTitle.textContent = inputProfileTitle.value;
  // profileSubtitle.textContent = inputProfileSubtitle.value;