export class UserInfo {
    constructor ({profileTitleSelector, profileSubtitleSelector}) {
        this._profileTitle = document.querySelector(profileTitleSelector);
        this._profileSubtitle = document.querySelector(profileSubtitleSelector);
    }
 
    getUserInfo() {
        return {
          userTitle: this._profileTitle.textContent,
          userSubtitle: this._profileSubtitle.textContent
        }
    }

    setUserInfo(data) {
        this._profileTitle.textContent = data.title
        this._profileSubtitle.textContent = data.subtitle
    }; 

}