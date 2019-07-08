import React, { Component } from "react";
import { Body, MBody1, MTitle, MP, MBody2, MSignUp, MP2, MLoginBtn } from "./mobileStyle.";
import {DBody, Hero, DBar, TitleDiv, Title, Phrase, JoinDiv, JoinBtn, Arrow,Footer,DBarTitle,DBar2, DBar3, DBar4, Img, H2, P} from './desktopStyle'
import arrow from '../../Assets/Arrow.png'
import mg from '../../Assets/magnifier.png'
import Add from '../../Assets/Add.png'
import * as Icon from 'react-feather'

export default class App extends Component {
  render() {
    return (
      // ===== Mobile View==========
      <div>
      <Body>
        <MBody1>
          <MTitle>SideKicks</MTitle>
          <MP>social event organizer</MP>
        </MBody1>
        <MBody2>
          <MSignUp>Sign up</MSignUp>
          <MP2>
            Already a member?<MLoginBtn>Log in</MLoginBtn>
          </MP2>
        </MBody2>
      </Body>
      {/* =====Desktop View===== */}

      <DBody>
        <Hero>
          <TitleDiv>
            <Title>sidekicks</Title>
            <Phrase>social event organizer</Phrase>
          </TitleDiv>
          <JoinDiv>
            <JoinBtn>Join Now</JoinBtn>
            <Arrow src={arrow}/>
          </JoinDiv>
        </Hero>
        <DBar>
          <DBarTitle>
            <h1>how sidekicks works</h1>
          </DBarTitle>
            <DBar2>
            <Img src={mg} alt=''/>
            <DBar3>
              <H2>dicover events</H2>
              <P>See who’s hosting events for all the things you love.</P>
            </DBar3>
            <Img src={Add} alt=''/>
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
