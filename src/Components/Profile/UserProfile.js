import React, { Component } from 'react'
import { Test, Test2 } from './Styled'
import {connect} from 'react-redux'
import axios from 'axios'
export class UserProfile extends Component {

<<<<<<< HEAD
  
  componentDidMount() {
    axios.get('/auth/user').then(res => {
      console.log('res.data', res.data)
    })
    
  }
=======
>>>>>>> master

  render() {
    return (
      <Test>
        <Test2 >
          <a href="http://localhost:3333/auth/logout">Logout</a>
          User Profile
          <h1>{this.props.user.display_name}</h1>
          <img src={this.props.user.image} alt=""/>

        </Test2 >
      </Test>
    )
  }
}


function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps)(UserProfile)
