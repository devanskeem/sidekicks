import React, { Component } from 'react'
import { Form, Form2, Join, Loginbtn, Test, Test2,Title, Phrase} from './Styled'




export default class Landing extends Component {
  render() {
    return (
      <Test >
        <Test2>
          <Title>sidekicks</Title>
          <Phrase>social event organizer</Phrase>
        </Test2>
        <Form>
          <Form2>
          <Join>sign up</Join>
          <p>
            Already a Member? 
            <Loginbtn>
              <a href="http://localhost:3333/auth/google">
                Login
              </a>
            </Loginbtn>
          </p>
          </Form2>
        </Form>
      </Test>
    )
  }
}


