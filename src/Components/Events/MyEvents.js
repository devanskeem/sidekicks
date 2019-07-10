import React, { Component } from 'react'
import axios from 'axios';
import { updateCurrEvent } from '../../redux/reducer'
import { connect } from 'react-redux'
import {
  Container,
  Image,
  Content,
  Name,
  Header,
  Mbody2,
  SearchBtn,
  Searchbar
} from './EventStyleMobile'

class MyEvents extends Component {

  constructor() {
    super();
    this.state = {
      joinedEvents: []
    };
  }
// this.props.user.user_idrs

  componentDidMount() {
    axios.get(`/events/user/${3}`).then(res => {
      this.setState({
        joinedEvents: res.data
      })
    });

    // axios.get(`/events/host/${this.props.user.user_id}`).then(res => {
    //   this.setState({
    //     hostedEvents: res.data
    //   })
    // })
  }

  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };

  toggleEventDisplay = (id) => {
    this.props.updateCurrEvent(id)
    this.props.history.push('/eventdisplay')
  };

  render() {
    let joinedEventDisplay = (
      <div>
        <h1>No Events To Display</h1>
      </div>
    )
    if (this.state.joinedEvents) {
      joinedEventDisplay = this.state.joinedEvents.map((event, i) => {
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
    }
    return (
      <div>
        <Mbody2>
          {joinedEventDisplay}
        </Mbody2>
      </div>
    )
  }

}

function mapStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = { updateCurrEvent }
export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
