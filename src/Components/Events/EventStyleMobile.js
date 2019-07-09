import {device} from '../mediaQueries'
import styled from 'styled-components'
import 'reset-css'

export const Mbody = styled.body`
height: 100vh;
width: 100%;
font-family: "Sansita";
@media ${device.mobileS}{
  background: black;
}
@media ${device.tablet}{
  display: none;
}`

export const Container = styled.form`
  width: 30%;
  height: 70%;
  background: #f9f8eb;
  border: 2px solid #5ca0d3;
  display: flex;
  margin: 1px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Image = styled.div`
  width: 15px;
  height: 15px;
  background: transparent;
  display: flex;
  color: black;
  font-family: bold;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Name = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #5e0a0a;
`
export const Header = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f9f8eb;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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