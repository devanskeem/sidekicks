import React, { Component } from 'react'
import { updateUser, updateEvents, updateCurrEvent } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
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
        <div onClick={() => this.toggleEventDisplay(event.event_id)} key={i} style={{
          border: '1px solid black',
          width: '200px'
        }}>
          <img src={event.image} />
          <p>{event.name}</p>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>Cost: {event.cost}</p>
        </div>
      )
    })
    return (
      <div>
        <div>
          This is the Browse events component
        <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder="Search Events" />
          <button onClick={this.handleButtonClick}>Submit</button>
          {eventDisplay}
        </div>
      </div>
    )
  }
}



function mapStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = { updateUser, updateEvents, updateCurrEvent }

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents)