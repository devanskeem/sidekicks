import React, { Component } from 'react'
import axios from 'axios';
import {updateCurrEvent} from '../../redux/reducer'
import {connect} from 'react-redux'
class MyEvents extends Component {

  constructor() {
    super();
    this.state = {
      hostedEvents: [],
      joinedEvents: []
    };
  }

  componentDidMount() {
    axios.get(`/events/user/${this.props.user.user_id}`).then(res => {
      this.setState({
        joinedEvents: res.data
      })
    });

    axios.get(`/events/host/${this.props.user.user_id}`).then(res => {
      this.setState({
        hostedEvents: res.data
      })
    })
  }

  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };

  toggleEventDisplay = (id) => {
    this.props.updateCurrEvent(id)
    this.props.history.push('/eventdisplay')
  };

  render() {
    const hostedEventDisplay = this.state.hostedEvents.map((event, i) => {
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

    const JoinedEventDisplay = this.state.joinedEvents.map((event, i) => {
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
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
      >
        <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        >
          JoinedEventDisplay
          {JoinedEventDisplay}

        </div>
        <div
         style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        >
          hostedEventDisplay
          {hostedEventDisplay}
        </div>
      </div>

    )
  }

}

function mapStateToProps(reduxState){
  return reduxState
}

const mapDispatchToProps = {updateCurrEvent}
export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
