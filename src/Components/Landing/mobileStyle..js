import {device} from '../mediaQueries'
import styled from 'styled-components'
import Hiking from '../../Assets/Hiking.jpg'
import 'reset-css'

export const Body = styled.body`
height: 100vh;
width: 100%;
font-family: "Sansita";
@media ${device.mobileS}{
  background-image: url(${Hiking});
  background-repeat: no-repeat;
  background-size: cover;
  
}
@media ${device.tablet}{
  display: none;
}`

export const MBody1 = styled.div`
@media ${device.mobileS}{
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
`

export const MTitle = styled.h1`
color: orange;
font-size: 46px;
font-weight: bold;
`
export const MP = styled.p`
color: orange;
font-size: 32px;
font-weight: 500
`

export const MBody2 = styled.div`
@media ${device.mobileS}{
  width: 100%;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`

export const MSignUp = styled.button`
@media ${device.mobileS}{
  background: #fd5f00;
    width: 80%;
    font-size: 16px;
    height: 30px;
    text-transform: uppercase;
    border: none;
    margin: 140px 0 10px 0;
}`

export const A = styled.a`
text-decoration: none;
color: white;
`

export const MP2 = styled.p`
color: white;
text-decoration: none;
text-transform: capitalize;

`
export const MLoginBtn = styled.button`
border: none; 
background-color: transparent
outline: none; 
color: white;
`

export const Logo1 = styled.img`
width: 275px;
height: 275x;
`