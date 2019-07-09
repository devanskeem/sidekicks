import React, { Component } from 'react'
import {updateUser, updateEvents} from '../../redux/reducer'
import {connect} from 'react-redux'
import axios from 'axios'
import 'reset-css'



class BrowseEvents extends Component {
    componentDidMount(){
      axios.get('events/all').then(res => {
        this.props.updateEvents(res.data)
        this.forceUpdate()
      })

      axios.get('/auth/user').then(res => {
        this.props.updateUser(res.data)
      })
    }
    handleInputChange = e => {
      this.setState({ userInput: e.target.value });
    };
  
    handleKeyPress = e => {
      if (e.which === 13) {
        this.handleButtonClick();
      }
    };
  
    handleButtonClick = () => {
    
  
      // axios
      //   .get(url)
      //   .then(response => this.setState({ recipes: response.data.recipes }));
    };
  
  

  render() {
    const eventDisplay = this.props.events.map((event, i) => {
      return (
        <div key={i} style={{
          border: '1px solid black',
          width: '200px'
          }}>
          <img src={event.image}/>
          <p>{event.name}</p>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>Cost: {event.cost}</p>
        </div>
      )
    })
    return (
      <div>
      This is the Browse events component
      <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder="Search Events"/>
      <button onClick={this.handleButtonClick}>Submit</button>
      {eventDisplay}
      </div>
    )
  }
}



function mapStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = {updateUser, updateEvents}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents)