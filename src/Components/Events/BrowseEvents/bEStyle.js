import { device } from "../../mediaQueries";
import styled from "styled-components";
import "reset-css";

export const Mbody = styled.body`
margin-bottom: 50px;
width: 100%;
height: 100%;
font-family: 'Sansita';
background: whitesmoke
overflow:auto;
display: flex;
flex-direction: column;
align-items: center;
`;

export const EventList = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px){
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow:auto;
  }
@media(min-width: 900px){
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow:auto;
}
`
export const Container = styled.div`
width: 280px;
height: 300px;
margin-bottom: 10px;
background: white;
box-shadow: 1px 1px 2px 1px rgba(0,0,0, .2);
display: flex;
flex-direction: column;
align-items: center;
`

export const Header = styled.div`
width: 100%;
height: 30px;
display: flex;
align-items: center;
`

export const SearchBtn = styled.button`
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
`;
export const Searchbar = styled.input`
width: 90%;
border: none;
outline: none;
background: whitesmoke;
`;
export const Image = styled.img`
width: 90%;
height: 200px;
margin-top: 10px;
box-shadow: 3px 3px 4px grey;
border-radius: 4px;
@media ${device.mobileM}{  
}`;

export const Name = styled.p`
font-size: 18px;
`;
export const Preview = styled.div``;

export const Content = styled.div`
width: 100%;
height: 80px;
display: flex; 
justify-content: center;
flex-direction: column;`;
