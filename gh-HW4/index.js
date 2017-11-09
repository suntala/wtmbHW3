const express = require('express')
const bodyParser = require ('body-parser')
const TopicService = require('./services/topic-service');
const UserService = require('./services/user-service');
const WeekService = require('./services/week-service');

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())


app.listen(3000, () => {
    console.log('Server listening')
})

app.get('/', (req, res, next) => {
    res.render('index')
})

app.get('/topic/all', async (req, res, next) => {
    const topics = await TopicService.findAllTopics()

    res.render('topic', { topics })
})

app.get('/user/all', async (req, res, next) => {
    const users = await UserService.findAllUsers()

    res.render('user', { users })
})

app.get('/week/all', async (req, res, next) => {
    const weeks = await WeekService.findAllWeeks()

    res.render('week', { weeks })
})

////////////

app.post('/topic', async (req, res, next) => {
    const topic = await TopicService.addTopic(req.body)
    res.send(topic) 
})

app.delete('/topic/:id', async (req, res, next) => {
    await TopicService.delTopic(req.params.id)

    res.send('deleted')
})

app.get('/topic/:id', async (req, res, next) => {
    const topic = await TopicService.findTopic(req.params.id)

    res.render('individualTopic', { topic })
})
//is this fine how it looks in the browser console?


///////////////////
app.post('/user', async (req, res, next) => {
    const user = await UserService.addUser(req.body)
    res.send(user) 
})

app.delete('/user/:id', async (req, res, next) => {
    await UserService.delUser(req.params.id)

    res.send('deleted')
})

//////////////////
app.post('/week', async (req, res, next) => {
    const week = await WeekService.addWeek(req.body)
    res.send(week) 
})

app.delete('/week/:id', async (req, res, next) => {
    await WeekService.delWeek(req.params.id)

    res.send('deleted')
})