import React, { Component } from 'react'
import { Test, Test2 } from './Styled'
import axios from 'axios'
export class UserProfile extends Component {

  
  componentDidMount() {
    axios.get('/auth/user').then(res => {
      console.log('res.data', res.data)
    })
    
  }

  render() {
    return (
      <Test>
        <Test2 >
          <a href="http://localhost:3333/auth/logout">Logout</a>
          User Profile
        </Test2 >
      </Test>
    )
  }
}

export default UserProfile
