const fs = require('fs')
const GeneralService = require('../services/general-service')
const UserModel = require('../models/user-model')

pathName = `${__dirname}/../database-user.json`
modelName = UserModel 

findAllUsers = async () => await GeneralService.findAll(pathName, modelName);
addUser = async (obj) => await GeneralService.add(obj, pathName, modelName);
delUser = async (objId) => await GeneralService.del(objId, pathName, modelName);
findUser = async (objId) => await GeneralService.find(objId, pathName, modelName);
saveAllUsers = async (array) => await GeneralService.saveAll(array, pathName);

module.exports = {
    findAllUsers,
    findUser,
    addUser,
    delUser,
    saveAllUsers
}
