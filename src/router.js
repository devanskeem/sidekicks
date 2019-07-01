// loginform home

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './Components/Login/LoginForm'
import BrowseEvents from './Components/Events/BrowseEvents'
import EventDisplay from './Components/Events/EventDisplay'
import Messages from './Components/Profile/Messages'
import UserProfile from './Components/Profile/UserProfile'
import TipsTricks from './Components/TipsTricks'

export default (
    <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route path='/browseevents' component={BrowseEvents}/>
        <Route path='/eventdisplay' component={EventDisplay}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/tipstricks' components={TipsTricks}/>
    </Switch>
)
