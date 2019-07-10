import React, { Component } from 'react'
import { updateUser, updateEvents, updateCurrEvent } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import {
Container,
  Image,
  Content,
  Name,
  Header,
  Mbody 
} from './EventStyleMobile'

import 'reset-css'

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
        <Container onClick={() => this.toggleEventDisplay(event.event_id)} key={i}>
          <Image src={event.image} />
          <Content>
            <Name>{event.name}</Name>
            <p>{event.description}</p>
            <p>{event.location}</p>
            <p>Cost: {event.cost}</p>
          </Content>
        </Container>
      )
    })

    return (
      <div>
        <Header>
          <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder="Search Events" />
          <button onClick={this.handleButtonClick}>Search</button>
        </Header>
        <Mbody>
          {eventDisplay}
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