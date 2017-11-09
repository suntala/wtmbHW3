module.exports = class User {
    constructor(id, username) {
        this.id = id
        this.username = username
        this.homework = []
    }

    static create(obj) {
        return new User(obj.id, obj.username, obj.homework);
    }
}
