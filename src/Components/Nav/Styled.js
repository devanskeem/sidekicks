import 'reset-css'
import styled from 'styled-components'
import {device} from '../mediaQueries'

export const MobileBody = styled.div`
@media ${device.mobileS}{
display: flex;
align-items: flex-end;
height: 100vh;
}
@media ${device.tablet}{
    display: none;
}
`


export const NavBorder= styled.div`
height: 10%;
width: 100%;
border-top: 1px solid grey;
display: flex;
align-items: flex-start;
justify-content: space-around;
position: fixed;
background: white;
bottom: 0;
`


export const Button= styled.button`
@media ${device.mobileS}{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    border: none;
    tex-decoration: none;
    svg{
        color: grey;
        :hover,
        active{
            color: red;
        }
    }
    }
    padding: 0;
`
export const P = styled.p`
text-transform: uppercase;
font-size: 8px;
margin-top: 3px;
color: grey;
`