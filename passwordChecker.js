class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }
    get password() {
        return '*'.repeat(this._password.length);
    }
    set password(newPassword) {
        const passwordCriteria = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        if (passwordCriteria.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.log("Error: Password must be at least 8 characters long, include one number, and one uppercase letter.");
        }
    }
}