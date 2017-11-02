module.exports = class User {
    constructor(username) {
        this.username = username;
        this.homework = [];
    }

    sayUsername() {
        console.log(this.username);
    }

    addHomework(hw) {
        this.homework.push(hw);
    }

    listHw() {
        console.log(this.homework);
    }

    submitHw(weekNumber) {
        weekNumber.addHomeworker(this.username);
    }
}