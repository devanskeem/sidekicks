// loginform home

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import BrowseEvents from './Components/Events/BrowseEvents/BrowseEvents'
import EventDisplay from './Components/Events/EventDisplay/EventDisplay'
import Messages from './Components/Profile/Messages'
import UserProfile from './Components/Profile/UserProfile'
import TipsTricks from './Components/TipsTricks'
import EditProfile from './Components/Profile/EditProfile'
import CreateEvent from './Components/Events/CreateEvent/CreateEvent'
import MyEvents from './Components/Events/MyEvents'



export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/browseevents' component={BrowseEvents}/>
        <Route path='/eventdisplay' component={EventDisplay}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/tipstricks' component={TipsTricks}/>
        <Route path='/editprofile' component={EditProfile}/>
        <Route path='/createevent' component={CreateEvent}/>
        <Route path='/myevents' component={MyEvents}/>
    </Switch>
)
