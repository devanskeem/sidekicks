import {device} from '../../mediaQueries'
import styled from 'styled-components'
import 'reset-css'


export const MBody = styled.body`
width: 100%;
height: 100vh;
@media ${device.mobileS}{
  display: flex;
  align-items: center;
  flex-direction: column;
}

`
export const EventBorder = styled.div`
width: 95%;
height: 300px;
margin-top: 25px;
border-radius: 3px;
`

export const Image = styled.img`
width: 100%;
height: 100px;
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