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
overflow: scroll;
margin: 50px 0;
}`


export const Container = styled.form`
@media ${device.mobileS}{ 
  width: 80vw;
  min-height: 120px;
  max-height: 120px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid #fd5f00;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0, .2)
}
  @media ${device.tablet}{
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 250px;
   border-radius: 0
   border: none;
   overflow: visible;
  }
`
export const Image = styled.img`
width: 90%;
height: 200px;
margin-top: 10px;
box-shadow: 3px 3px 4px grey;
border-radius: 4px;
@media ${device.mobileM}{
 
}`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 80px
  flex-direction: column;
  justify-content: center;
`
export const Name = styled.h1`
  font-size: 18px;
  font-weight: bold;

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
  @media ${device.tablet}{
    background: whitesmoke;
    border: none;

  }
`