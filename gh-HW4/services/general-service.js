const fs = require('fs')

findAll = async (pathName, modelName) => {
    return new Promise((resolve,reject) => {
        fs.readFile(pathName, 'utf8', (err, contents) => {
            if (err) return reject(err);
            
            const topics = JSON.parse(contents).map(modelName.create);
            
            resolve(topics);   
        });
    });
}

add = async (element, pathName, modelName) => {
    const allMembers = await findAll(pathName, modelName)
    const lastMember = allMembers[allMembers.length - 1]
    const lastMemberId = lastMember && lastMember.id || 0 
    element.id = lastMemberId + 1 

    element = modelName.create(element)
    allMembers.push(element)

    await saveAll(allMembers, pathName)
    
    return element
}

del = async (elementId, pathName, modelName) => {
    const allMembers = await findAll(pathName, modelName) 
    const elementIndex = allMembers.findIndex(m => m.id == elementId)
    if (elementIndex < 0) return 
    
    allMembers.splice(elementIndex, 1)

    saveAll(allMembers, pathName)
}

find = async (elementId, pathName, modelName) => {
    const allMembers = await findAll(pathName, modelName)

    return allMembers.find(m => m.id == elementId) 
}

saveAll = async (array, pathName) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathName, JSON.stringify(array), (err, contents) => {
            if (err) return reject(err)
            
            resolve(contents);
        });
    });
}

module.exports = {
    findAll,
    find,
    add,
    del,
    saveAll
}

