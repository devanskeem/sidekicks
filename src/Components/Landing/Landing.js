import React, { Component } from "react";
import { Body, MBody1, MTitle, MP, MBody2, MSignUp, MP2, MLoginBtn } from "./mobileStyle.";
import {DBody, Hero, DBar, TitleDiv, Phrase, JoinDiv, JoinBtn, Arrow,Footer,DBarTitle,DBar2, DBar3, DBar4, Img, H2, P, Logo} from './desktopStyle'
import arrow from '../../Assets/Arrow.png'
import mg from '../../Assets/magnifier.png'
import Add from '../../Assets/Add.png'
import * as Icon from 'react-feather'
import hero from '../../Assets/Sidekicks2.png'

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
          <MSignUp href="http://localhost:3333/auth/google">Sign up</MSignUp>
          <MP2>
            Already a member?<MLoginBtn href="http://localhost:3333/auth/google">Log in</MLoginBtn>
          </MP2>
        </MBody2>
      </Body>
      {/* =====Desktop View===== */}

      <DBody>
        <Hero>
          <TitleDiv>
              <Logo src={hero}></Logo>
            <Phrase>social event organizer</Phrase>
          </TitleDiv>
          <JoinDiv>
            <JoinBtn href="http://localhost:3333/auth/google">Join Now</JoinBtn>
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
              <H2>dicover events</H2>
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
