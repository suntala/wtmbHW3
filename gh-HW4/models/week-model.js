module.exports = class Week {
    constructor(id, weekNumber, topics = [], hwSubmitted = []) {
        this.id = id
        this.weekNumber = weekNumber
        this.topics = topics
        this.hwSubmitted = hwSubmitted
    }

    static create(obj) {
        return new Week(obj.id, obj.weekNumber, obj.topics, obj.hwSubmitted);
    }
}
