import React, { Component } from 'react'
import { updateUser, updateEvents, updateCurrEvent } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'

import {
  Body,
  Image,
  Name,
  Header,
  AppContainer,
  Container,
  MBody1,
  MTitle,
  MP,
  MBody2,
  Mbody
} from './EventStyleMobile';

import 'reset-css'



import EventDisplay from './EventDisplay'


class BrowseEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event_id: null
    }
  }

  componentDidMount() {
    axios.get('/events/all').then(res => {
      this.props.updateEvents(res.data)
      this.forceUpdate()
    })

    axios.get('/auth/user').then(res => {
      this.props.updateUser(res.data)
    })
  }

  toggleEventDisplay = (id) => {
    this.props.updateCurrEvent(id)
    this.props.history.push('/eventdisplay')
  };



  render() {
    const eventDisplay = this.props.events.map((event, i) => {
      return (
        <div>
        <div onClick={() => this.toggleEventDisplay(event.event_id)} key={i} style={{
          border: '1px solid black',
          width: '200px'
        }}>
          <Header>
            <div>
          <Image><img src={event.image} /></Image>
          </div>
          <div>
          <Name><p>{event.name}</p></Name>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>Cost: {event.cost}</p>
          </div>
          </Header>
          </div>
        </div>
      )
    })
    return (
      //=========Mobile View========
      <div>
        <Mbody>
          This is the Browse events component
        <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder="Search Events" />
          <button onClick={this.handleButtonClick}>Submit</button>

          <AppContainer>
          {eventDisplay}
          </AppContainer>
          </Mbody>
      </div>
    )
  }
}



function mapStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = { updateUser, updateEvents, updateCurrEvent }

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents)