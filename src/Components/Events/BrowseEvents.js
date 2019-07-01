import React, { Component } from 'react'
import axios from 'axios'

export default class BrowseEvents extends Component {
  constructor(){
    super()
    this.state = {
      event: [],
      image: ''
    }

    componentDidMount(){
      .get('')
      .then(res => {
        this.setState =({
          event: res.data.event
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
    
  
      axios
        .get(url)
        .then(response => this.setState({ recipes: response.data.recipes }));
    };
  
  }

  render() {
    const eventDisplay = this.state.event.map((event, i) => {
      return (
        <div key={i}></div>
      )
    })

    return (
      <div>
      <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder="Search Events"/>
      <button onClick={this.handleButtonClick}>Submit</button>
      {eventDisplay}
      </div>
    )
  }
}
