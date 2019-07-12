import React, { Component } from 'react'
import { updateUser, updateEvents, updateCurrEvent } from '../../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import {
Container,
  Image,
  Content,
  Name,
  Header,
  Mbody,
  SearchBtn,
  Searchbar,
  Preview
} from './bEStyle'
import 'reset-css'
import * as Icon from 'react-feather'

class BrowseEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event_id: null,
      events: []
    }
  }

  componentDidMount() {
    axios.get('/events/all').then(res => {
      const shuffled = res.data.sort(() => Math.random() - 0.5);
      this.props.updateEvents(shuffled)
      this.setState({
        events: shuffled
      })
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
  selectAll = () => {
    document.getElementById("search").select()
  }
  handleSearch = (e) => {
    const filtered = this.props.events.filter((event) => {      return (
        event.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.location.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    this.setState({
      events: filtered
    })

  }


  render() {
    const eventDisplay = this.state.events.map((event, i) => {
      return (
        <Container onClick={() => this.toggleEventDisplay(event.event_id)} key={i}>
          <Preview>
          <Image src={event.image}/>
            </Preview>
          <Content>
            <Name>{event.name}</Name>
            <p>{event.location}</p>
          </Content>
        </Container>
      )
    })

    return (
      <div>
        <Mbody>
        <Header>
          <SearchBtn><Icon.Search/></SearchBtn>
          <Searchbar id='search' onClick={this.selectAll} onChange={e => this.handleSearch(e)} placeholder=" Search" />
        </Header>
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

