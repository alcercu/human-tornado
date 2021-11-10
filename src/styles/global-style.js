import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Open Sans", sans-serif;
    margin: 0px;
    background: ${props => props.theme.background};
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    margin: 0;
    color: ${props => props.theme.headline};
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
    color: ${props => props.theme.headline};
  }

  p, input, button {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
    color: ${props => props.theme.paragraph};
    background: ${props => props.theme.background};
    border: none;

    :focus-visible {
      outline: none;
    }
  }

  button {
    border-radius: 25px;
    box-shadow: 4px 4px 8px #1a1f35, -4px -4px 8px #2c3358;

    :active {
      box-shadow: inset 4px 4px 8px #1a1f35, inset -4px -4px 8px #2c3358;
    }

    :hover:not(.pressed){
      cursor: pointer;
    }
  }

  input {
    height: 45px;
    padding: 0 12px;
    border-radius: 25px;
    box-shadow: inset 4px 4px 8px #1a1f35, inset -4px -4px 8px #2c3358;
    width: calc(100% - 24px);
  }

  .pressed {
    box-shadow: inset 4px 4px 8px #1a1f35, inset -4px -4px 8px #2c3358;
    font-size: 14px;
  }

  hr {
    opacity: 1;
  }

  svg, img {
    vertical-align: top;
  }
`
