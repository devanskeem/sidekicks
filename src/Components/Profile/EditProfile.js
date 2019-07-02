import React, { Component } from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { updateUser} from '../redux/userReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    Title
  } from './AppStylesMany';

class EditUser extends React.Component {
    constructor() {
        super()
        this.state = {
            image: '',
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            city: '',
            password: ''
        }
    }
    handleEditUser = (e) => {
        e.preventDefault()
        const editobj = {
            image: this.state.image,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            city: this.state.city,
            password: this.state.password
            }
        axios.put(`/auth/edit/${this.props.user.user_id}`, editobj).then((res) => {

            this.props.updateUser(res.data[0])
            this.props.history.push('/patrondash')
              
        })
        this.setState({
            image: '',
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            city: '',
            password: ''
        })
        this.props.id && this.props.history.push('/details')
        
    }

    handleEditUserInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
            <AppContainer>
            <Title style={{ textDecoration: 'none', color: '#5e0a0a', padding: "20px" }}>Edit Your Profile</Title>
                <FormContainer style={{ width: '115px', padding: '5px'}}>
                
                <form onSubmit={this.handleEditUser}>
                {/* <input
                        type='img'
                        placeholder='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleEditUserInfoUpdate}
                    /> */}
                    <ul>
                        <li>
                    <input
                        type='text'
                        placeholder='first name'
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='last name'
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='city'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleEditUserInfoUpdate}
                    />
                    </li>
                    <li>
                    <button onClick={this.handleEditUser}>Confirm Edit</button>
                    </li>
                    </ul>
                </form>
                </FormContainer>
                </AppContainer>
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
  }
  
  export default withRouter (connect(
    mapStateToProps,
    { updateUser }
  )(EditUser))