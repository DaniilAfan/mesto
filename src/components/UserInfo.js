class UserInfo {
    constructor({ name, description, avatar }) {
        this._userName = name;
        this._userInfo = description;
        this._userAvatar = avatar;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            description: this._userInfo.textContent,
            avatar: this._userAvatar.src
        }
    }

    setUserInfo({ name, description, avatar }) {
        this._userName.textContent = name;
        this._userInfo.textContent = description;
        this._userAvatar.src = avatar;
    }
}
export default UserInfo;