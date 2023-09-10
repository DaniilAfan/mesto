class UserInfo {
    constructor({ name, description }) {
        this._userName = name;
        this._userInfo = description;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            description: this._userInfo.textContent
        }
    }

    setUserInfo({ name, description }) {
        this._userName.textContent = name;
        this._userInfo.textContent = description;
    }
}
export default UserInfo;