import React, { Component } from "react";
import { Body, MBody1, MBody2, MSignUp, MP2, MLoginBtn, A, Logo1 } from "./mobileStyle.";
import {DBody, Hero, DBar, TitleDiv, Phrase, JoinDiv, JoinBtn, Arrow,Footer,DBarTitle,DBar2, DBar3, Img, H2, P, Logo, DesktopA} from './desktopStyle'
import arrow from '../../Assets/Arrow.png'
import * as Icon from 'react-feather'
import hero from '../../Assets/Sidekicks2.png'

export default class App extends Component {
  render() {
    return (
      // ===== Mobile View==========
      <div>
      <Body>
        <MBody1>
          <Logo1 src={hero}></Logo1>
          {/* <MP>social event organizer</MP> */}
        </MBody1>
        <MBody2>
        <MSignUp href={process.env.REACT_APP_LOGIN}>Sign up</MSignUp> 
          <MP2>
            Already a member?<MLoginBtn> <A href={process.env.REACT_APP_LOGIN}>Log in</A></MLoginBtn>
          </MP2>
        </MBody2>
      </Body>
      {/* =====Desktop View===== */}

      <DBody>
        <Hero>
          <TitleDiv>
              <Logo src={hero}></Logo>
            <Phrase>social event organizer </Phrase>
          </TitleDiv>
          <JoinDiv>
          <DesktopA  href={process.env.REACT_APP_LOGIN}> <JoinBtn>Join Now</JoinBtn></DesktopA>
            <Arrow src={arrow}/>
          </JoinDiv>
        </Hero>
        <DBar>
          <DBarTitle>
            <h1>how sidekicks works</h1>
          </DBarTitle>
            <DBar2>
            <Img><Icon.Search></Icon.Search></Img>
            <DBar3>
              <H2>discover events</H2>
              <P>See who’s hosting events for all the things you love.</P>
            </DBar3>
            <Img> <Icon.PlusSquare></Icon.PlusSquare> </Img>
            <DBar3>
              <H2>create an event</H2>
              <P>Create your own event, and draw from a community of millions.</P>
            </DBar3>
          </DBar2>
        </DBar>
        <Footer></Footer> 
      </DBody>
      </div>
    );
  }
}
