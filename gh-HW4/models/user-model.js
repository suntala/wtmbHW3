module.exports = class User {
    constructor(id, username, homework = []) {
        this.id = id
        this.username = username
        this.homework = homework
    }

    static create(obj) {
        return new User(obj.id, obj.username, obj.homework);
    }
}
