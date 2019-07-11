import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Image, MBody, EventBorder, Button, ButtonBorder,Host, Title, UserIcon, ImgIcon, Users} from './EventMobile'
import 'reset-css'
import * as Icon from 'react-feather'




export class EventDisplay extends Component {
    constructor(){
      super();
      
      this.state = {
        usersAttending: [], //array of user objects {display_name, image}
        host: null,
        title: '',
        description: '',
        image: '',
        location: ''
      };
    }

    componentDidMount() {
      if(this.props.currEvent === null) this.props.history.push('/browseevents')
      axios.get(`/users/byevent/${this.props.currEvent}`).then(res => {
        this.setState({
          usersAttending: res.data
        });
      })
      axios.get(`/event/byid/${this.props.currEvent}`).then( res => {
        this.setState({
          title: res.data[0].name,
          description: res.data[0].description,
          image: res.data[0].image,
          location: res.data[0].location
        })
        axios.get(`/users/${res.data[0].host}`).then(res => {
          this.setState({
            host: res.data[0].display_name
          })
        })
      })
      
    }

     handleJoin = () => {
      axios.post(`/events/joinevent/${this.props.currEvent}`)
    }

  render() {  
    const {title, description, host, image, usersAttending} = this.state
    const userDisplay = usersAttending.slice(0,8).map((element, index) => {
      return(
        <UserIcon>
          <ImgIcon src={element.image} />
          <p>{element.display_name}</p>
        </UserIcon>
      )
    })
 
    return (

      <div>
        <MBody>
          <EventBorder>
        <Image src={image} alt=""/>
        <Title>{title}</Title>
        

        {/* <div className='attending-users'>
          {displayUsers}
        </div> */}

        
        </EventBorder>
        <ButtonBorder>
        <Button onClick={this.handleJoin}> Join and RSVP</Button>
        </ButtonBorder>
        <Host >
         <Icon.User></Icon.User> Hosted by: {host}
        </Host>
        <p>About:{description}</p>
        <Users>
          {userDisplay}
        </Users>
        </MBody>

      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, null)(EventDisplay)
