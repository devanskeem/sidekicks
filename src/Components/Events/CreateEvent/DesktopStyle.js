import 'reset-css'
import {device} from '../../mediaQueries'
import styled from 'styled-components'


export const DesktopBody = styled.body`
@media ${device.mobileS}{
  display: none;
}
@media ${device.tablet}{
width: 100%;
height: 100vh;
display: flex;
}
`

export const DImageC = styled.div`
width: 100%;
height: 300px;
`

export const EditImage = styled.div``
