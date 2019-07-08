import React, { Component } from "react";
import arrow from '../../Assets/Arrow.png'
import logo from '../../Assets/Sidekicks2.png'


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
  Arrow,
  HeroB,
  // Nav
  LogoDiv,
  Logo,
  LogoP,
  DesktopBody
} from "./Styled";

export default class Landing extends Component {
  render() {
    return (
      <Test>
        {/* <Nav>
          <TitleDiv>
            <h1>sidkicks</h1>
          </TitleDiv>
        </Nav> */}
        <Hero>
          <LogoDiv>
            <Logo src={logo}></Logo>
            <LogoP>Social Event Organizer</LogoP>
          </LogoDiv>
          <HeroBody>
            <LearnMore href="http://localhost:3333/auth/google">join now</LearnMore>
            <Arrow src={arrow}></Arrow>
          </HeroBody>
        </Hero>
        <DesktopBody>
          Hello
        </DesktopBody>
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
