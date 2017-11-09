module.exports = class Topic {
    constructor(id, description, timecode, weekNumber, logger = '') {
        this.id = id
        this.description = description
        this.timecode = timecode
        this.weekNumber = weekNumber
        this.logger = logger
    }

    static create(obj) {
        return new Topic(obj.id, obj.description, obj.timecode, obj.weekNumber, obj.logger);
    }
}