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
margin-top: 5px;
border-radius: 3px;
`

export const Image = styled.img`
max-width: 95vw;
height: 230px;
margin-top: 5px;
box-shadow: 3px 3px 4px grey;
border-radius: 4px;
`
export const Button = styled.button`
color: white;
background: #fd5f00
border: none;
border-radius: 3px;
height: 30px;
width: 90%;
margin: 8px;
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


export const Title = styled.div`
max-width: 95vw;
display: flex;
align-items: center;
margin: 10px;
font-size: 25px;
justify-content: space-evenly;
`

export const UserIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5px;
height: 50px;
font-size: 15px;
`

export const UserIconSm = styled.div`
display: flex;
justify-content: left;
align-items: center;
margin: 5px;
width: 100px;
height: 30px;
font-size: 15px;
`
export const ImgIconSm = styled.img`
margin: 0 5px;
height: 25px;
width: 25px; 
border-radius: 25px;
`

export const ImgIcon = styled.img`
margin: 0 5px;
height: 45px;
width: 45px; 
border-radius: 25px;
`

export const Users = styled.div`
width: 80%;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
overflow: auto;
`

export const Name = styled.p`
width: 1px;
margin: 0;
`
export const PCenter = styled.p`
text-align: center;
`
export const P = styled.p`
text-align: left;
display: flex;
justify-content: center;
align-items:center;
margin: 5px;
`

export const Input = styled.input`
border: none;
border: none;
outline: none;
width: 70%;
font-family: 'Sansita';
color: #black;
font-size: 16px;
margin-top: 5px;
border: 1px solid lightgrey;

`
export const TextArea = styled.textarea`
width: 100%;
border: none;
outline: none;
font-family: 'Sansita';
color: #black;
font-size: 16px;
border: 1px solid lightgrey;
`

export const Content = styled.div`
width: 80%;
`

export const BottomBtns = styled.div`
position: relative;
bottom: 55px;
`