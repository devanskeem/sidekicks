import {device} from '../../mediaQueries'
import styled from 'styled-components'
import 'reset-css'

export const Mbody = styled.body`
height: 100vh;
width: 100%;
font-family: "Sansita";
display: flex;
align-items: center;
flex-direction: column;
overflow: auto;
margin-top: 50px;
@media ${device.mobileS}{
  background: whitesmoke;
}@media ${device.tablet}{
  display: flex;
  flex-wrap: wrap;
}
`
export const Container = styled.form`
@media ${device.mobileS}{ 
  width: 80vw;
  height: 120px;
  background: white;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid #fd5f00;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0, .2)
}
  @media ${device.tablet}{
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 250px;
   border-radius: 0
   border: none;
   overflow: visible;
  }
`
export const Image = styled.img`
@media ${device.mobileS}{
  object-fit: cover;
  border-radius: 4px 0 0 4px;
  height: 100%;
  min-width: 25%;
  max-width: 25%;
}  
@media ${device.tablet}{
  border-radius: 0;
  height: 100%;
  min-width: 100%;
  object-fit: none;
  object-fit: none;
  background-repeat: no-repeat;
  background-size: cover;
}
`

export const Content = styled.div`
@media ${device.mobileS}{
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
}
@media ${device.tablet}{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 63px;
} 
`
export const Name = styled.h1`
@media ${device.mobileS}{
  font-size: 22px;
  font-weight: bold;
  color: #5e0a0a;
}@media ${device.tablet}{
  margin-bottom: 5px;
  font-size: 18px
  color: black;
  font-weight: 400;
}
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
  @media ${device.tablet}{
    background: whitesmoke;
    border: none;

  }
`

export const Searchbar = styled.input`
width: 60%;
border: none;
font-size: 22px;
height: 27px;
background: lightgrey;
border-radius: 5px;
width: 360px;
::placeholder{
  color: grey;
}
@media ${device.tablet}{
  border: none;
  outline: none;
  background: whitesmoke;
}
`

export const SearchBtn = styled.button`
@media ${device.mobileS}{
border: none;
outline: none;
height: 28px;
font-weight: 700;
background: transparent;
svg {
  color: grey;
  :hover{
    color: red;
  }
}
}
@media ${device.tablet}{
  border: none;
background: transparent;
outline: none;
svg {
  dislay: flex;
  color: grey;
  :hover {
    color: red;
  }
}
}
`

export const Preview = styled.div`
@media ${device.tablet}{
  width: 100%;
  height:75%;
  :hover {
    background: grey;
    opacity: 0.3;
  }
}
`

