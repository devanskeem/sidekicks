import React from 'react'
import 'reset-css'
import axios from 'axios'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class EventDisplay extends React.Component {
    componentDidMount = () => {
        axios.get(`/auth/gettoyanduser/${this.props.________}`)
        .then(res => {
          console.log('res.data :', res.data); 
        })
    }
    render() {
    return (

      <FormContainer>
          <Image > <img src={this.props.________}/> </Image>
        <FormHeader>
          <FormTitle>{this.props.________}</FormTitle>
          <text>Posted by {this.props.________}</text>
          <text>{this.props.________}</text>
          <text>{this.props.________}</text>
          <text>{this.props.________}</text>
          <text>{this.props.________}</text>
          <text>{this.props.________}</text>
       
        </FormHeader>
        <FormBtn>create event</FormBtn>
      </FormContainer>
  
      
  
      )
  }
}

export default EventDisplay