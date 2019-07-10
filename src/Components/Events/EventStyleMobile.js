import {device} from '../mediaQueries'
import styled from 'styled-components'
import 'reset-css'

export const Mbody = styled.body`
height: 100vh;
width: 100%;
font-family: "Sansita";
display: flex;
align-items: center;
flex-direction: column;
margin-top: 65px;
@media ${device.mobileS}{
  background: whitesmoke;
}
@media ${device.tablet}{
  display: none;
}`

export const Container = styled.form`
  width: 90vw;
  height: 120px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid #fd5f00
  box-shadow: 1px 2px 2px rgba(0,0,0, .3)
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  min-width: 160px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #5e0a0a;
`
export const Header = styled.div`
  width: 100vw;
  height: 8%;
  position: fixed;
  top: 0;
  background: white;
  border-bottom: 1px solid #fd5f00;
`

export const MBody1 = styled.div`
@media ${device.mobileS}{
  width: 100%;
  height: 400px;
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