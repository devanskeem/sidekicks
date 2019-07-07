import React, { Component } from "react";
import arrow from '../../Assets/Arrow.png'

import {
  Form,
  Form2,
  Join,
  Loginbtn,
  Test,
  Test2,
  Title,
  Phrase,
  P,
  Signup,
  Hero,
  HeroBody,
  LearnMore,
  Arrow
} from "./Styled";

export default class Landing extends Component {
  render() {
    return (
      <Test>
        <Hero>
          <HeroBody>
            <LearnMore href="http://localhost:3333/auth/google">join now</LearnMore>
            <Arrow src={arrow}></Arrow>
            
          </HeroBody>
        </Hero>
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
              Already a Member?
              <Loginbtn>
                <Signup href="http://localhost:3333/auth/google">Login</Signup>
              </Loginbtn>
            </P>
          </Form2>
        </Form>
      </Test>
    );
  }
}
