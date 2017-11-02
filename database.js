const fs = require('fs');

exports.writeTopics = async (array) => {
    await fs.writeFileSync('./datatopics.json', JSON.stringify(array));
} 
exports.writeUsers = async (array) => {
    await fs.writeFileSync('./datausers.json', JSON.stringify(array));
} 
exports.writeWeeks = async (array) => {
    await fs.writeFileSync('./dataweeks.json', JSON.stringify(array));
} 

exports.readTopics = () => {
    return JSON.parse(fs.readFileSync('./datatopics.json', 'utf8'));
}
exports.readUsers = () => {
    return JSON.parse(fs.readFileSync('./datausers.json', 'utf8'));
}
exports.readWeeks = () => {
    return JSON.parse(fs.readFileSync('./dataweeks.json', 'utf8'));
}