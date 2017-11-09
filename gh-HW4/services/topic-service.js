const fs = require('fs')
const GeneralService = require('../services/general-service')
const TopicModel = require('../models/topic-model')

pathName = `${__dirname}/../database-topic.json`
modelName = TopicModel 

findAllTopics = async () => await GeneralService.findAll(pathName, modelName);
addTopic = async (obj) => await GeneralService.add(obj, pathName, modelName);
delTopic = async (objId) => await GeneralService.del(objId, pathName, modelName);
findTopic = async (objId) => await GeneralService.find(objId, pathName, modelName);
saveAllTopics = async (array) => await GeneralService.saveAll(array, pathName);

module.exports = {
    findAllTopics,
    findTopic,
    addTopic,
    delTopic,
    saveAllTopics
}
