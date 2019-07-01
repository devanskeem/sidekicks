import React from 'react'
import 'reset-css'
import {Link} from 'react-router-dom'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    Title,
    Paragraph
  } from './AppStylesMany';

  class TipsTricks extends React.Component {
    render() {
    return (
        <AppContainer>
          <Title style={{ textDecoration: 'none', color: '#5e0a0a' }}>tips and tricks: let US help YOU!</Title>
        <div>
            <FormContainer style={{ marginLeft: 85 }}>
           <Paragraph>
            <h1>your profile</h1>
            <br /> 
            <ul>
              <li>1: be honest with your pics; people want to see who you are so display pictures of yourself in different settings doing the things you love to do.</li>
              <br /> 
              <li>2: please only post appropriate pictures; you are a valuable member of our community and we want you to stay with us.</li>
              <br /> 
              <li>3: select tags that you're interested in. they can be things you like to do, or things you want to do.</li>
              <br /> 
              <h1>attending events</h1>
              <br />
              <li>1: be safe, especially as a female. if it's a public place, use your best judgement. if it's someone's home or a secluded area, wait for another person to arrive or plan to attend with a friend or have a friend accompany you.</li>
              <br /> 
              <li>2: be yourself, but be your besgt self. please practice good manners and hygiene.</li>
              <br />
              <h1>creating events</h1>
              <br />
              <li>1: please take the time to think about the event before creating it. a well-thought-out well-attended event is better than a poorly-thought-out cancelled-due-to-low-sign-up event.</li>
              <br /> 
              <li>2: include as many details as possible. it can be annoying to have to answer a lot of messages when you could have avoided that by creating a more thorough listing.</li>
              <br /> 
              <h1>examples of events</h1>
              <br />
              <li>go to this list of hobbies to get some ideas of different types of events you could host: ______</li>
              <br />
              <li>here are some of our ideas:</li>
              <br />
              <li>wine and cheese night (girls only:)</li>
              <br />
              <li>ultimate frisbee game</li>
              <br />
              <li>hackathon</li>
              <br />
              <li>film night</li>
              <br />
              <li>ping-pong tournament</li>
              <br />
              <li>indian-food potluck</li>
              <br />
              <li>pokemon for adults!</li>
            
            </ul>
            </Paragraph>
            </FormContainer>
        </div>
        </AppContainer>
    
        )
}
  }
export default TipsTricks