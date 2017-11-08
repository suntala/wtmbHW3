const express = require('express')
const bodyParser = require ('body-parser')
const TopicService = require('./services/topic-service');
const UserService = require('./services/user-service')
const WeekService = require('./services/week-service')

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

    res.render('topic', { topic })
})

