require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const Auth0Strategy = require('passport-auth0')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, FRONTEND_URL, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN } = process.env

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true
}))
// var strategy = new Auth0Strategy(
//     {
//       domain: AUTH0_DOMAIN,
//       clientID: AUTH0_CLIENT_ID,
//       clientSecret: AUTH0_CLIENT_SECRET,
//       callbackURL:
//         process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
//     },
//     function (accessToken, refreshToken, extraParams, profile, done) {
//       // accessToken is the token to call Auth0 API (not needed in the most cases)
//       // extraParams.id_token has the JSON Web Token
//       // profile has all the information from the user
//       return done(null, profile);
//     }
//   );
  
  passport.use(strategy);
app.use(passport.session())
app.use(passport.initialize())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database set')
})

//event endpoints

//app.get('/events/all', event_ctrl.getAllEvents) response: [{eventId: int, eventTitle: string, eventDescription: string, eventHost: {user}, attendees: [users}]
//app.put('/events/update/:id, event_ctrl.updateEvent) response: updated {event}
//app.delete('/events/delete/:id', event_ctrl.deleteEvent) response: status code
//app.post('/events/add', event_ctrl.addEvent) response: newly created {event}

//message endpoints

//app.get('/messages/:event-id', event_ctrl.getMessagesByEvent) response: [{messageId: int, user: {user}, content: string, timestamp}]
//app.delete('/messages/delete/:id', event_ctrl.deleteMessageById) response: status code
//app.delete('/messages/delete/:event-id', event_ctrl.deleteMessageByEvent) response: status code
//app.post('/messages/add', event_ctrl.addMessage) response: newly created {message}

//user endpoints 

//app.get('/users/all', user_ctrl.getAllUsers) response: [{userId: int, username: string, firstName: string, lastName: string, age: integer, location: string, gender: string, image: string,bio: string}]
//app.get('/users/current', user_ctrl.getCurrentUser)
//app.get('/users/:id', user_ctrl.getUserById) response: {user} 
//app.get('/users/:event-id', user_ctrl.getUserByEvent) response: [{user}]
//app.post('/users/add', user_ctrl.addUser) response newly create {user}
//app.put('/users/update' user_ctrl.updateUser)


//auth endpoint

//app.post('/auth/login', auth_ctrl.login)
//app.post('/auth/register', auth_ctrl.register)
//app.get('/auth/logout', auth_ctrl.logout)

app.listen(SERVER_PORT, () => {
    console.log('listening on port: ', SERVER_PORT)
})


 // Endpoints to authentciate (we'll hit these with axios on our front end)
// app.get(
//     "/auth/google",
//     passport.authenticate("auth0", {
//         scope: ["profile", "email"],
//         prompt: "select_account"
//     })
// );
// // call back url
// app.get(
//     "/auth/callback",
//     passport.authenticate("auth0", {
//         // this redirects the user back to the front end where they started the login process
//         successRedirect: `${FRONTEND_URL}/#/browse-events`
//         // user the hash symbol above because we are using Hashrouter
//     })
// );

// app.get("/auth/user", (req, res) => {
//     if (req.user) {
//         res.status(200).send(req.user);
//     } else {
//         res.status(401).send("Unauthorized User");
//     }
// });

// app.get("/auth/logout", (req, res) => {
//     req.logOut();

//     // this is a built in method in passport that kills the session and resets the user property
//     res.redirect(process.env.FRONTEND_URL);
// });