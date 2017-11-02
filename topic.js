module.exports = class Topic {
    constructor(description, timecode, weekNumber, logger = '') {
        this.description = description;
        this.timecode = timecode; 
        this.weekNumber = weekNumber;
        this.logger = logger;
    }

    sayDescription() {
        console.log(this.description);
    }
    
    sayLocation() {
        console.log(this.weekNumber, ', ', this.timecode);
    }

    setLogger(user) {
        this.logger = user;
    }
    
    sayLogger() {
        console.log(this.logger);
    }
}