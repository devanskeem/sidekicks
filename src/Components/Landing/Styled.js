import 'reset-css'
import styled from 'styled-components'
import {device} from '../mediaQueries'
import img from '../../Assets/Chill2.jpg'

export const Test = styled.body`
width: 100%
height: 100vh
background: purple;
`

export const Test2= styled.div`
display: flex;
@media ${device.mobileS}{
height: 50%;
align-items: center;
flex-direction: column
justify-content: center;
}
`

export const Title = styled.h1`
@media ${device.mobileS}{
font-size: 36px;
font-weight: bold;
}
`

export const Phrase = styled.h3`
@media ${device.mobileS}{
font-size: 24px;
font-weight: bold;
}
`

export const Form = styled.div`
display: flex;
@media ${device.mobileS}{
width: 100%;
height: 30vh;
background: aqua;
position: absolute;
bottom: 0px;
align-items:flex-end
}
`

export const Join = styled.button`
@media ${device.mobileS}{
background: #fd5f00;
width: 80%;
color: white;
font-size: 16px;
height: 30px;
text-transform: uppercase;
border: none;
}
`

export const Form2 = styled.div`
@media ${device.mobileS}{
background: blue;
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
}
` 

export const Loginbtn = styled.button`
@media ${device.mobileS}{
border: none; 
background-color: transparent
outline: none; 
}
`