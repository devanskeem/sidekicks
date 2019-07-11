import 'reset-css'
import styled from 'styled-components'
import {device} from '../mediaQueries'

export const Mbody = styled.div`
width: 100%
height: 100vh
background: whitesmoke;
display: flex;
height: 100vh;
align-items: center;
flex-direction: column
`

export const ProfileImg = styled.img`
 margin-top: 40px;
 height: 7em;
 width: 7em;
 border-radius: 5em;
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

export const Logout = styled.button`
color: white;
background: #fd5f00
border: none;
border-radius: 3px;
height: 25px;
width: 60;
font-weight: 600;
`