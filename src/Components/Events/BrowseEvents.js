import React, { Component } from 'react'
import axios from 'axios'

export default class BrowseEvents extends Component {
  constructor(){
    super()
    this.state = {
      events: []
    }
  }
  

    componentDidMount(){
      axios.get('events/all').then(res => {
        console.log(res.data)
        this.setState({
          events: res.data
        })
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
    const eventDisplay = this.state.events.map((event, i) => {
      return (
        <div key={i} style={{
          border: '1px solid black',
          width: '200px'
          }}>
          <img src={event.image} alt=""/>
          <p>{event.name}</p>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>Cost: {event.cost}</p>
        </div>
      )
    })
    console.log('eventDisplay', this.state.events)
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

