import React, {Component} from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { updateUser, clearUser } from '../redux/userReducer'
import { connect } from 'react-redux'

import {
    AppContainer,
    FormContainer2,
    FormContainer3,
    Image,
    Image2,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    EditBtn,
    Title,
    FormWrapper
  } from './AppStylesPD';

  class UserProfile extends React.Component {
  
    handleUserLogout = () => {
      axios.get('/auth/logout').then((res) => {
        this.props.clearUser()
        this.props.history.push('/')
      })
      }

      handleUserDelete = () => {
        axios.delete(`/auth/delete/${this.props.user.user_id}`).then((res) =>{
          this.props.history.push('/')
        })
      }

    render() {
      console.log(this.props.user)
    return (
            
    <AppContainer>

      <PatronDisplay user={this.props.user} />

      <FormContainer3>

        <FormHeader>
          <FormTitle>User Profile</FormTitle>
        </FormHeader>

        <Link to='/eventdisplay'><FormBtn> events </FormBtn> </Link>
        <Link to='/messages'><FormBtn> messages </FormBtn> </Link>
        <Link to='/userprofile'> <FormBtn> my profile </FormBtn> </Link>
        <Link to='/tipstricks'> <FormBtn> tips&tricks </FormBtn> </Link>
        <Link to='/editprofile'> <FormBtn> edit profile </FormBtn> </Link>
        <FormBtn onClick={this.handleUserLogout}> Logout</FormBtn>
        <FormBtn onClick={this.handleUserDelete}> Delete Account</FormBtn>

      </FormContainer3>

      </AppContainer>
  
      
  
      )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}

const mapDispatchToProps = {
	updateUser,
	clearUser
}

export default connect (mapStateToProps, mapDispatchToProps) (UserProfile)