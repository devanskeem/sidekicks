import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import add_image_icon from './../../Assets/add_image_icon.png'
// import { storage } from ''




export class EventDisplay extends Component {
    constructor(){
      super();
      
      this.state = {
        usersAttending: [], //array of user objects {display_name, image}
        host: {},
        title: '',
        description: '',
        image: '',
      };
    }

    componentDidMount() {
      axios.get(`/users/getUsersByEvent/${this.props.events.id}`).then(res => {
        console.log('res.data', res.data)
        this.setState({
          usersAttending: res.data
        });
      });
    }

  render() {  
    const {title, description, host, image, usersAttending} = this.state
    const displayUsers = usersAttending.map((element, index) => {
      return(
        <div>
          <img src={element.image} alt=""/>
          <p>{element.display_name}</p>
        </div>
      )
    })
 
    return (
      <div>
        <img src={image} alt=""/>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className='attending-users'>
          {displayUsers}
        </div>

        <div className='host'>
          <img src={host.image} alt=""/>
          <p>{host.display_name}</p>
        </div>

      </div>
    )
  }
}

export default EventDisplay
