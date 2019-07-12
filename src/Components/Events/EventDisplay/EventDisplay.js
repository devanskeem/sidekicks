import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Image, MBody, EventBorder, Button, P, ButtonBorder, Title, UserIcon, ImgIcon, Users, Content, Name, Input, TextArea, ImgIconSm, UserIconSm, PCenter} from './EventMobile'
import 'reset-css'
import * as Icon from 'react-feather'




export class EventDisplay extends Component {
    constructor(){
      super();
      
      this.state = {
        usersAttending: [], //array of user objects {display_name, image}
        host: {},
        title: '',
        description: '',
        image: '',
        location: '',
        price: null
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
          location: res.data[0].location,
          cost: res.data[0].cost
        })
        axios.get(`/users/${res.data[0].host}`).then(res => {
          this.setState({
            host: res.data[0]
          })
        })
      })
      
    }

     handleJoin = () => {
      axios.post(`/events/joinevent/${this.props.currEvent}`)
      this.props.history.push('/browseevents')
    }

  render() {  
    const isHost = this.props.user.user_id === this.state.host.user_id
    if (this.props.user.user_id === this.state.host.user_id) {
      console.log('hosting')
    }
    const {title, description, host, cost, image, usersAttending} = this.state
    const userDisplay = usersAttending.slice(0,8).map((element, index) => {
      return(
        <UserIcon >
          <ImgIcon src={element.image} />
          <Name>{element.display_name}</Name>
        </UserIcon>
      )
    })
 
    return (
      <div>

      {isHost 
        ?
        <MBody>
          <EventBorder>
            <Image src={image} alt=""/>
          </EventBorder>
          <Content>
            <P>Image URL: <Input defaultValue={image}/></P>
            <P>Title: <Input defaultValue={title}/>    </P>
            
            <P>Cost: <Input defaultValue={`$ ${cost}`}/> </P>
            
            <P>About: </P>
            <TextArea defaultValue={description}/>
          </Content>

        <Users>
          {userDisplay}
        </Users>
        </MBody>
        :
        <MBody>
          <EventBorder>
        <Image src={image} alt=""/>
        <Title>
          {title} 
          <UserIconSm>
            <ImgIconSm src={this.state.host.image} />
            <Name>{host.display_name}</Name>
          </UserIconSm>
        </Title>
        <PCenter>{description}</PCenter>
        </EventBorder>
        <ButtonBorder>
        <Button onClick={this.handleJoin}> Join and RSVP</Button>
        </ButtonBorder>
        <Users>
          <P>Attending: </P>
          {userDisplay}
        </Users>
        </MBody>

      }
      </div>

    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, null)(EventDisplay)
