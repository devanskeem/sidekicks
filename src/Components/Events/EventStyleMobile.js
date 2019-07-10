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
overflow: auto;
margin-top: 50px;
@media ${device.mobileS}{
  background: whitesmoke;
}
@media ${device.tablet}{
  display: none;
}`

export const Mbody2 = styled.body`
height: 100vh;
width: 100%;
font-family: "Sansita";
display: flex;
align-items: center;
flex-direction: column;
overflow: auto;
@media ${device.mobileS}{
  background: whitesmoke;
}
@media ${device.tablet}{
  display: none;
}`

export const Container = styled.form` 
  width: 80vw;
  height: 120px;
  background: white;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid #fd5f00;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0, .2)
`
export const Image = styled.img`
  object-fit: cover;
  border-radius: 4px 0 0 4px;
  height: 100%;
  min-width: 25%;
  max-width: 25%;
`

export const Content = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`
export const Name = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #5e0a0a;
`
export const Header = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  background: white;
  border-bottom: 1px solid darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Searchbar = styled.input`
width: 60%;
border: none;
font-size: 22px;
height: 27px;
background: lightgrey;
border-radius: 5px;
width: 360px;
::placeholder{
  color: grey;
}
`

export const SearchBtn = styled.button`
border: none;
margin: 2px 0 0 5px;
height: 28px;
background: #fd5f00;
color: white;
font-weight: 700;
border-radius: 4px;
`