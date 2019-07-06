import "reset-css";
import styled from "styled-components";
import { device } from "../mediaQueries";
import img from "../../Assets/Hiking.jpg";
import hero from '../../Assets/Gathering.jpg';

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
// ====Navbar=======
export const Nav = styled.nav`
@media ${device.mobileS}{
  display:none;
  @media ${device.tablet}{
    display: flex;
    background: black;
    width: 100%;
    height: 65px;
  }`

export const TitleDiv = styled.div`
background: purple;
width: 35%;
height: 65px;
display: flex;
align-items: center;
justify-content: center;
`

// Navbar End =============

// =======HERO Start=========
export const Hero = styled.div`
@media ${device.mobileS}{
  display:none;
}
@media ${device.tablet}{
  background: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;


}`



// =====HERO END========

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
    color: #fd5f00;
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
  @media ${device.tablet}{
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
`;
