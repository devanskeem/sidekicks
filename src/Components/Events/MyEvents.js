import React, { Component } from 'react'
import Axios from 'axios';

export class MyEvents extends Component {
constructor(){
  super();
  this.state = {
    event: [],
    user: '',
  };
}

componentDidMount(){
  axios.get('/events/user').then
  (response => {
    this.props.getUser
    (response.data);
  });

  axios.get('api/')
}





  render() {
    return (
      <div>
        My Events
      </div>
    )
  }
}

export default MyEvents
