import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateCurrEvent} from '../../redux/reducer'
import axios from 'axios'
import { Mbody, ProfileImg, Header, Logout } from './Styled'

import {Container, Image, Name, Content} from '../Events/BrowseEvents/bEStyle'
export class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hostedEvents: []
    }
  }

  componentDidMount() {
    axios.get(`/events/host/${this.props.user.user_id}`).then(res => {
      this.setState({
        hostedEvents: res.data
      })
    })
  }

  toggleEventDisplay = (id) => {
    this.props.updateCurrEvent(id)
    this.props.history.push('/eventdisplay')
  };

  render() {
    console.log('process.env', process.env)
    const eventDisplay = this.state.hostedEvents.map((event, i) => {
      return (
        <Container onClick={() => this.toggleEventDisplay(event.event_id)} key={i}>
          <Image src={event.image} />
          <Content>
            <Name>{event.name}</Name>
            <p>{event.location}</p>
          </Content>
        </Container>
      )
    })
    return (
      <Mbody>
        <Header >
          User Profile
        </Header>
        <h1>{this.props.user.display_name}</h1>
        <ProfileImg src={this.props.user.image} alt="" />
        <a href={process.env.REACT_APP_LOGOUT}><Logout>Logout</Logout></a>
        Events I'm Hosting
        {eventDisplay}
      </Mbody>
    )
  }
}


function mapStateToProps(reduxState) {
  return reduxState
}
const mapDispatchToProps = {updateCurrEvent}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
