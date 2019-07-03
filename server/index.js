require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const app = express()
const event_ctrl = require ('./controllers/event_controller')
const auth_ctrl = require ('./controllers/auth_controller')
const message_ctrl = require ('./controllers/message_controller')
const user_ctrl = require ('./controllers/user_controller')

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        max_age: 60 * 60 * 1000
    }
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database set')
})

//event endpoints

app.get('/events/all', event_ctrl.getAllEvents) //response: [{eventId: int, eventTitle: string, eventDescription: string, eventHost: {user}, attendees: [users}]
app.get('/events/:id', event_ctrl.getEventsById)
app.get('/events/user', event_ctrl.getEventByUser)
app.put('/events/update/:id', event_ctrl.updateEvent) 
app.delete('/events/delete/:id', event_ctrl.deleteEvent) //response: status code
app.post('/events/add', event_ctrl.addEvent) //response: newly created {event}

//message endpoints getImageArray{img1, img2, img3} = 

app.get('/messages/:event-id', event_ctrl.getMessagesByEvent) ////response: [{messageId: int, user: {user}, content: string, timestamp}]
app.delete('/messages/delete/:id', event_ctrl.deleteMessageById) //response: status code
app.delete('/messages/delete/:event-id', event_ctrl.deleteMessageByEvent) //response: status code
app.post('/messages/add', event_ctrl.addMessage) //response: newly created {message}

//user endpoints 

app.get('/users/all', user_ctrl.getAllUsers) //response: [{userId: int, username: string, firstName: string, lastName: string, age: integer, location: string, gender: string, image: string,bio: string}]
app.get('/users/current', user_ctrl.getCurrentUser)
app.get('/users/:id', user_ctrl.getUserById) //response: {user} 
app.get('/users/:event-id', user_ctrl.getUserByEvent) //response: [{user}]
app.post('/users/add', user_ctrl.addUser) //response newly create {user}
app.put('/users/update', user_ctrl.updateUser)


//auth endpoint

//app.post('/auth/login', auth_ctrl.login)
//app.post('/auth/register', auth_ctrl.register)
//app.get('/auth/logout', auth_ctrl.logout)

app.listen(SERVER_PORT, () => {
    console.log('listening on port: ', SERVER_PORT)
})