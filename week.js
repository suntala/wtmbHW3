module.exports = class Week {
    constructor(weekNumber) {
        this.weekNumber = weekNumber;
        this.topics = [];
        this.hwSubmitted = [];
    }

    growOutline(topicDescription) {
        this.topics.push(topicDescription);
    }

    listOutline() {
        console.log(this.topics);
    }

    creditLogger(topic, user) {
        topic.setLogger(user);
    }

    addHomeworker(name) {
        this.hwSubmitted.push(name);
    }

    sayHwSubmitted() {
        console.log(this.hwSubmitted);
    }
}