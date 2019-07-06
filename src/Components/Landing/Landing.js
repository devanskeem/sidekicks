import React, { Component } from 'react'
import { Form, Form2, Join, Loginbtn, Test, Test2,Title, Phrase, P, Signup} from './Styled'




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
          <Join>
          <Signup href="http://localhost:3333/auth/google">sign up</Signup>
          </Join>
          <P>
            Already Signup Member? 
            <Loginbtn>
              <Signup href="http://localhost:3333/auth/google">
                Login
              </Signup>
            </Loginbtn>
          </P>
          </Form2>
        </Form>
      </Test>
    )
  }
}


