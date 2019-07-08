require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const event_ctrl = require ('./controllers/event_controller')
const auth_ctrl = require ('./controllers/auth_controller')
const message_ctrl = require ('./controllers/message_controller')
const user_ctrl = require ('./controllers/user_controller')


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

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL,
        scope: 'openid profile email',
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, extraParams, profile, done) {
        const db = req.app.get('db');

        

        db.users.find({auth_id: profile.id})
            .then(users => {
                if (users.length === 0){
                    console.log('profile', profile.picture)
                    return db.users.insert({
                        display_name: profile.displayName,
                        image: profile.picture,
                        auth_id: profile.id
                    })
                }
                return done(null, users[0])
            })
            .then(user => {
                done(null, user)
            })
            .catch(error => {
                if(error) throw error
            })
    }
))




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database set')
})

//event endpoints

app.get('/events/all', event_ctrl.getAllEvents) //response: [{eventId: int, eventTitle: string, eventDescription: string, eventHost: {user}, attendees: [users}]
app.get('/events/:id', event_ctrl.getEventById)
app.get('/events/creator/:creator_id', event_ctrl.getEventsByCreator)
app.put('/events/update/:id', event_ctrl.updateEvent)
// app.get('/events/user/:user_id', event_ctrl.getEventsByUser)
app.put('/events/update/:id', event_ctrl.updateEvent) 
app.delete('/events/delete/:id', event_ctrl.deleteEvent) //response: status code
app.post('/events/add', event_ctrl.addEvent) //response: newly created {event}
//message endpoints 

app.get('/messages/:event-id', message_ctrl.getMessagesByEvent) ////response: [{messageId: int, user: {user}, content: string, timestamp}]
app.delete('/messages/delete/:id', message_ctrl.deleteMessageById) //response: status code
app.delete('/messages/delete/:event-id', message_ctrl.deleteMessagesByEvent) //response: status code
app.post('/messages/add', message_ctrl.addMessage) //response: newly created {message}

//user endpoints 

app.get('/users/all', user_ctrl.getAllUsers) //response: [{userId: int, username: string, firstName: string, lastName: string, age: integer, location: string, gender: string, image: string,bio: string}]
app.get('/users/current', user_ctrl.getCurrentUser)
app.get('/users/:id', user_ctrl.getUserById) //response: {user} 
app.get('/users/:event-id', user_ctrl.getUserByEvent) //response: [{user}]
app.post('/users/add', user_ctrl.addUser) //response newly create {user}
app.put('/users/update', user_ctrl.updateUser)


//auth endpoint

app.get("/auth/callback", passport.authenticate("auth0", {successRedirect: `${process.env.FRONT_END_URL}/browseevents`}), (req, res) => {
    res.send(req.user)
});

app.get('/auth/google',
  passport.authenticate('auth0', {connection: 'google-oauth2'})
);

app.get("/auth/user", (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send("Unauthorized User");
    }
});

app.get("/auth/logout", (req, res) => {
    req.logOut();
    // this is a built in method in passport that kills the session and resets the user property
    res.redirect(`${process.env.FRONT_END_URL}/`);
});

app.listen(SERVER_PORT, () => {
    console.log('listening on port: ', SERVER_PORT)
})