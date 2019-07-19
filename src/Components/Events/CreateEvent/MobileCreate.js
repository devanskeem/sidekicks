import {device} from '../../mediaQueries'
import 'reset-css'
import styled from 'styled-components'

export const MobileBody= styled.body`
width: 100%;
height: 100vh;
font-family: 'Sansita';
@media ${device.mobileS}{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media ${device.tablet}{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
`


export const H1 = styled.h1`
font-size: 20px
font-weight: 800;
`


export const ImageContainer = styled.img`
width: 90%;
max-width: 350px;
height: 200px;
box-shadow: 3px 3px 4px grey;
margin: 15px 0;
border-radius: 4px;
`
export const ImageBody = styled.div`
svg {
  width: 50px;
  height: 80px;
}
`

export const InputBody = styled.div`
max-width: 500px;
width: 100%;
height: 300px;
`
export const InputDiv = styled.div`
max-width: 500px;
height: 57px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
`
export const InputDiv2 = styled.div`
height: 58px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border-bottom: 1px solid grey;
`

export const H3 = styled.h3`
font-size: 13px;
margin-bottom: 5px;
`

export const Input = styled.input`
border: none;
max-width: 500px;
width: 100%;
height: 30px;
outline: none;
`

export const CreateBtn = styled.button`
max-width: 250px;
color: white;
background: #fd5f00
border: none;
border-radius: 3px;
height: 30px;
width: 40%;
font-weight: 600;
margin: 15px;
`