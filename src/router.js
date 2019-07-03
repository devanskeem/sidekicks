// loginform home

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './Components/Login/LoginForm'
import BrowseEvents from './Components/Events/BrowseEvents'
import EventDisplay from './Components/Events/EventDisplay'
import Messages from './Components/Profile/Messages'
import UserProfile from './Components/Profile/UserProfile'
import TipsTricks from './Components/TipsTricks'
import EditProfile from './Components/Profile/EditProfile'
import CreateEvent from './Components/Events/CreateEvent'
import MyEvents from './Components/Events/MyEvents'


export default (
    <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route path='/browseevents' component={BrowseEvents}/>
        <Route path='/eventdisplay' component={EventDisplay}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/tipstricks' components={TipsTricks}/>
        <Route path='/editprofile' components={EditProfile}/>
        <Route path='/createevent' components={CreateEvent}/>
        <Route path='/myevents' components={MyEvents}/>
    </Switch>
)
