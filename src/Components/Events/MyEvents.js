import React, { Component } from 'react'
import axios from 'axios';
import { updateCurrEvent } from '../../redux/reducer'
import { connect } from 'react-redux'
import {
  Container,
  Image,
  Content,
  Name,
  Mbody,
  Header
} from './myEventStyle'

class MyEvents extends Component {

  constructor() {
    super();
    this.state = {
      joinedEvents: []
    };
  }

  componentDidMount() {
    axios.get(`/events/user/${3}`).then(res => {
      this.setState({
        joinedEvents: res.data
      })
    });


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
    if (this.state.joinedEvents !== []) {
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
      <>
        {/* <Header>
          Events I'm Attending
        </Header> */}
        <Mbody>
          {joinedEventDisplay}
        </Mbody>
      </>
    )
  }

}

function mapStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = { updateCurrEvent }
export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
