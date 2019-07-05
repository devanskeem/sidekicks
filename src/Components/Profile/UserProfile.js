import React, { Component } from 'react'
import { Test, Test2 } from './Styled'
export class UserProfile extends Component {
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
