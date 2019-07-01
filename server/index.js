require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const app = express()

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

app.listen(SERVER_PORT, () => {
    console.log('listening on port: ', SERVER_PORT)
})