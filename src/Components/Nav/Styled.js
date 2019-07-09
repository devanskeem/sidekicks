import 'reset-css'
import styled from 'styled-components'
import {device} from '../mediaQueries'

export const Test = styled.div`
width: 100%;
height: 100vh;
display: flex
align-items: flex-end;
justify-content: space-between;
background: #f9f8eb;
`
export const Nav= styled.div`
{

display: flex;
align-items: flex-end;
justify-content: space-between;
height: 5%;
width: 100%;
}
`

// export const Button= styled.div`
// width: 10%;
//   height: 60%;
//   background: ${props => props.register ? '#76b39d' : '#76b39d'};
//   color: #05004e;
//   border: none;
//   &:hover {
//     background: ${props => props.register ? '#fd5f00' : '#fd5f00'};
//     cursor: pointer;
//   }
// `
export const Button= styled.button`
@media ${device.mobileS}{
    background: transparent;
    border: none;
    padding: 15px;
    border: 30px;
    svg{
        height: 100px;
        width: 50px;
        color: #fd5f00;
        
        :hover{
            color: #76b39d;
        }
    }
}
`