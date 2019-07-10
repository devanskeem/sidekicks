import {device} from '../../mediaQueries'
import styled from 'styled-components'
import 'reset-css'


export const MBody = styled.body`
width: 100%;
height: 100vh;
font-family: 'Sansita';
@media ${device.mobileS}{
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media ${device.tablet}{
  display: none;
}

`
export const EventBorder = styled.div`
width: 95%;
height: 275px;
margin-top: 25px;
border-radius: 3px;
`

export const Image = styled.img`
max-width: 95%;
height: 230px;
margin-top: 10px;
box-shadow: 3px 3px 4px grey;
`
export const Button = styled.button`
color: white;
background: #fd5f00
border: none;
border-radius: 3px;
height: 30px;
width: 90%;
`
export const ButtonBorder = styled.div`
width: 100%;
height: 55px;
border-top: .5px solid grey;
border-bottom: .5px solid grey;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
`

export const Host = styled.div`
margin-bottom: 5px;
svg {
  color: grey;
}
`

export const Title = styled.h1`
margin-top: 10px;
`

export const UserIcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 55px;
width: 55px;
`

export const ImgIcon = styled.img`
height: 25px;
width: 25px; 
border-radius: 25px
`

export const Users = styled.div`
margin-top: 40px;
display: flex;
overflow: auto;
`