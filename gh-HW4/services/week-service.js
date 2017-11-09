const fs = require('fs')
const GeneralService = require('../services/general-service')
const WeekModel = require('../models/week-model')

pathName = `${__dirname}/../database-week.json`
modelName = WeekModel 

findAllWeeks = async () => await GeneralService.findAll(pathName, modelName);
addWeek = async (obj) => await GeneralService.add(obj, pathName, modelName);
delWeek = async (objId) => await GeneralService.del(objId, pathName, modelName);
findWeek = async (objId) => await GeneralService.find(objId, pathName, modelName);
saveAllWeeks = async (array) => await GeneralService.saveAll(array, pathName);


module.exports = {
    findAllWeeks,
    findWeek,
    addWeek,
    delWeek,
    saveAllWeeks
}
