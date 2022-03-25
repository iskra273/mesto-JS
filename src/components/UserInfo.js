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
    
    setUserInfo(data) {
        this._profileTitle.textContent = data.title
        this._profileSubtitle.textContent = data.subtitle
    }; 

}