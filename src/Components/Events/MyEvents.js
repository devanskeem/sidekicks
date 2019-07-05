import React, { Component } from 'react'
import axios from 'axios';

class MyEvents extends Component {

  constructor(){
    super();
    this.state = {
      events: [],
      user: '',
    };
  }
  
  componentDidMount(){
    axios.get('events/user').then(response => {
      this.props.getEvents(response.data);
   });

  
   axios.get(`events/creator/:user_id'/${this.props.user.id}`).then(res =>{
     this.setState({
       myEvents: res.data,
       isLoading: false
     });
   })
  }
  
   handleInputChange = e => {
     this.setState({userInput: e.target.value});
   };
  
   handleKeyPress = e =>{
     if(e.which === 5)
      this.handleButtonClick();
   };
  
    render(){
      const eventDisplay = this.state.events.map((event, i) => {
        return (
          <div key = {i}>
            {event}
          </div>
        )
      })
      return(
        <div>
        <img src="{event.image}" alt="" />
        <p>{event.name}</p>
        <p>{event.description}</p>
        <p>{event.location}</p>
        <p>Cost: {event.cost}</p>
        </div>
        
      )
    }
   
}

export default MyEvents;
