import {device} from '../mediaQueries'
import styled from 'styled-components'
import 'reset-css'

export const Mbody2 = styled.body`
@media ${device.mobileS}{
  width: 100%;
  height: 100%;
  font-family: 'Sansita';
  display: flex;
  flex-direction: column;
  align-items: center;
  background: whitesmoke;
}`;


export const Container = styled.div`
width: 85%;
height: 300px;
margin-bottom: 10px;
background: white;
box-shadow: 1px 1px 2px 1px rgba(0,0,0, .2);
display: flex;
flex-direction: column;
align-items: center;
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