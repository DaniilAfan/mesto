class UserInfo {
    constructor({ Selectorname, Selectordescription, Selectoravatar }) {
        this._userName = Selectorname;
        this._userInfo = Selectordescription;
        this._userAvatar = Selectoravatar;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userInfo.textContent,
            avatar: this._userAvatar.src
        }
    }

    setUserInfo({ name, about, avatar }) {
        this._userName.textContent = name;
        this._userInfo.textContent = about;
        this._userAvatar.src = avatar;
    }
}
export default UserInfo;