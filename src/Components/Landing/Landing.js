import React, { Component } from 'react'

import { Form, Form2, Join, Loginbtn, Test, Test2,Title, Phrase} from './Styled'
import sidekick from './../../images/sidekick.png'
// import sidekick2 from './../../images/sidekick2.png'





export default class Landing extends Component {
  render() {
    return (
      <Test >

        {/* <Test2>*/}
        <div>
          <div className="logo">
            <a
            id="loginanimation"
            className='login animated slideOutDown'

            >
             
             <img
               alt=""
               src={sidekick}
               style={{
                 height:"300px",
                 margin: "70px",
                 position: "center",
                 top: "50px",
                 left: "60px"
               }}
             />

            </a>

          </div>
        </div>
        <Form>
          <Form2>
          <Join>sign up</Join>
          <P>
            Already a Member? 
            <Loginbtn>
              <a href="http://localhost:3333/auth/google">
                Login
              </a>
            </Loginbtn>
          </P>
          </Form2>
        </Form>
      </Test>
    )
  }
}


