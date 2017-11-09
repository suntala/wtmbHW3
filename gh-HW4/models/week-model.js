module.exports = class Week {
    constructor(id, weekNumber) {
        this.id = id
        this.weekNumber = weekNumber
        this.topics = []
        this.hwSubmitted = []
    }

    static create(obj) {
        return new Week(obj.id, obj.weekNumber, obj.topics, obj.hwSubmitted);
    }
}
