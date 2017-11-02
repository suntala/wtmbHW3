const User = require('./user');
const Week = require('./week');
const Topic = require('./topic');
const Database = require('./database');

const users = [];
const weeks = [];
const topics = []; 

let aline = new User('ali3'); 
let bal = new User('balu');

let week1 = new Week (1);
let week2 = new Week (2);

let howPackage = new Topic ('How to Open a New Package', '1:16:30', 2);
let howFunction = new Topic ('How to Create a Function', '58:30', 1); 
let howClass = new Topic ('How to Create a Class', '1:53:10', 1);

users.push(aline);
users.push(bal);

weeks.push(week1);
weeks.push(week2);

topics.push(howPackage);
topics.push(howFunction);
topics.push(howClass);



////////////
aline.sayUsername();
aline.addHomework('Week 1 Super Project');
aline.listHw();

week1.growOutline('How to Create a Function');
week1.listOutline();
week1.creditLogger(howFunction, aline); 
week1.addHomeworker('rando');
aline.submitHw(week1);
week1.sayHwSubmitted();

printDescription = (topic) => topic.sayDescription();
topicMenu = () => topics.forEach(printDescription);
printLocation = (topic) => topic.sayLocation();
matchLocation = (description) => {
    switch (description) {
        case 'How to Open a New Package':
            console.log(howPackage.sayLocation());
            break;
        case 'How to Create a Function': 
            console.log(howFunction.sayLocation());
            break;
        case 'How to Create a Class': 
            console.log(howClass.sayLocation());
            break;
        default:
            console.log('Invalid entry. Please try again.');
            break;
    }
}
week1.creditLogger(howFunction, aline);
howFunction.sayLogger();
howFunction.sayDescription();
printDescription(howPackage);
topicMenu = () => topics.forEach(printDescription);
topicMenu();
howClass.sayLocation();
printLocation(howClass);
matchLocation('How to Open a New Package');
matchLocation('How to Create a Class');
//////////////
//figure out why I am getting undefined each time I use matchLocation()



 const main = async () => {
    await Database.writeTopics(topics);
    await Database.writeUsers(users);
    await Database.writeWeeks(weeks);

    const speakTopics = await Database.readTopics();
    const speakUsers = await Database.readUsers();
    const speakWeeks = await Database.readWeeks();
    
    console.log(speakTopics);
    console.log(speakUsers);
    console.log(speakWeeks);
 };

 main();