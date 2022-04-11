export class UserInfo {
    constructor ({profileTitleSelector, profileSubtitleSelector, profileAvatarSelector}) {
        this._profileTitle = document.querySelector(profileTitleSelector);
        this._profileSubtitle = document.querySelector(profileSubtitleSelector);
        // this._avatar = document.querySelector(profileAvatarSelector);
    }
 
    getUserInfo() {
        return {
          userTitle: this._profileTitle.textContent,
          userSubtitle: this._profileSubtitle.textContent
        }
    }

    setUserInfo(name, job) {
        this._profileTitle.textContent = name,
        this._profileSubtitle.textContent = job
        // this._avatar.src = avatar
    } 

    // setUserAvatar(data) {
    //     this._avatar.src = data.avatar
    // }
}