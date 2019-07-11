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
  display: none;
}
`


export const H1 = styled.h1`
font-size: 20px
font-weight: 800;
`

export const ImageContainer = styled.div`
background: grey;
width: 90%;
height: 200px;
display: flex;
align-items:center;
flex-direction: column;
justify-content: center;
margin-top: 15px;
`
export const ImageBody = styled.div`
svg {
  width: 50px;
  height: 80px;
}
`

export const InputBody = styled.div`
width: 100%;
height: 300px;
`
export const InputDiv = styled.div`
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
width: 100%;
height: 30px;
outline: none;
`