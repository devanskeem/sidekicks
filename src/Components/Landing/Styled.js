import "reset-css";
import styled from "styled-components";
import { device } from "../mediaQueries";
import img from "../../Assets/Hiking.jpg";
import hero from "../../Assets/Gathering.jpg";

// ====Body of Landing Page ====
export const Test = styled.body`
  width: 100%;
  height: 100vh;
  @media ${device.mobileS} {
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Sansita";
  }
  @media ${device.tablet} {
    background: none;
  }
`;

// =======HERO Start=========
export const Hero = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: 100% 95%;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
  
  }
`
export const LogoDiv = styled.div`
height: 55%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const Logo = styled.img`
height: 85%
margin-top: 100px;
`
export const LogoP = styled.p`
color: white;
font-size: 26px
margin-bottom: 80px;
`
export const HeroBody = styled.div`
  @media ${device.tablet} {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const LearnMore = styled.button`
  width: 180px;
  height: 64px;
  background-color: transparent;
  letter-spacing: 0.2em;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  border: 2px solid #fff;
  color: white;
  :hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`;

export const Arrow = styled.img`
max-width: 100%;
height: auto;
margin-top: 40px;
`
export const HeroB = styled.div`
width: 100%;
height: 50px;
background: black;

`

// =====HERO END========

// ========DESKTOP BODY========
export const DesktopBody = styled.div`
@media ${device.mobileS}{
  display: none;
}
@media ${device.tablet}{
background: purple
width: 100%;
height: 100vh;
}`

// =====Parent Div that contains Title Headers======
export const Test2 = styled.div`
display: flex;
@media ${device.mobileS}{
height: 50%;
align-items: center;
flex-direction: column
justify-content: center;
}
@media ${device.tablet}{
  display: none;
}
`;

export const Title = styled.h1`
  @media ${device.mobileS} {
    font-size: 36px;
    font-weight: bold;
    color: #fd5f00;
  }
`;

export const Phrase = styled.h3`
  @media ${device.mobileS} {
    font-size: 24px;
    font-weight: bold;
    color: 
    ;
  }
`;
// End Styling for Title Headers=====

// ====Parent div for Login/Sign up buttons====
export const Form = styled.div`
  display: flex;
  @media ${device.mobileS} {
    width: 100%;
    height: 30vh;
    position: absolute;
    bottom: 0px;
    align-items: flex-end;
  }
`;

export const Join = styled.button`
  @media ${device.mobileS} {
    background: #fd5f00;
    width: 80%;
    color: white;
    font-size: 16px;
    height: 30px;
    text-transform: uppercase;
    border: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const Signup = styled.a`
  color: white;
  text-decoration: none;
  text-transform: capitalize;
`;

export const Form2 = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Loginbtn = styled.button`
@media ${device.mobileS}{
border: none; 
background-color: transparent
outline: none; 
}
`;
export const P = styled.p`
  @media ${device.mobileS} {
    color: white;
    padding-top: 10px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
