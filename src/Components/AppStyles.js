//Here are the colors from the palette we tentatively decided on:
//off-white/cream-ish #f9f8eb
//light-greenish #76b39d
//navy-blue-darkpurpleish #05004e
//orange #fd5f00
//website: https://colorhunt.co/palette/143563

import styled, { keyframes } from 'styled-components';

// Animations
const glow = keyframes`
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

// Styled Components
export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f9f8eb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const FormContainer = styled.form`
  width: 30%;
  height: 60%;
  background: #fd5f00;
  border: 2px solid #05004e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormTitle = styled.h1`
  font-size: 24px;
  color: #05004e;
`

export const FormInput = styled.input.attrs({
  placeholder: props => props.email ? 'email' : 'password',
  type: props => props.email ? 'email' : 'password'
})`
  width: 80%;
  height: 10%;
  outline: none;
  border: 1px solid #05004e;
`

export const FormBtn = styled.button`
  width: 80%;
  height: 10%;
  background: ${props => props.register ? '#76b39d' : '#76b39d'};
  color: #05004e;
  border: none;
  &:hover {
    background: ${props => props.register ? '#ff79c6' : '#ffb86c'};
    cursor: pointer;
  }
`

export const ThemeSwitcherBtn = styled.button`
  width: 25%;
  height: 10%;
  background: ${props => props.register ? 'pink' : 'aquamarine'};
  color: white;
  border: none;
`
