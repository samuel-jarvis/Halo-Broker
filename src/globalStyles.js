import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #131e2a;
    --green: #1cbe74;
    --yellow: #fab52c;
    --blue: #0094fe;
    --red: #f35130;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-family: 'Jost', sans-serif;
  }

  html {
    font-size: 62.5%; 
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
  }
`;

export const Container = styled.div`
  padding: 10rem 8rem;
  /* max-width: 1400px; */
`;

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 500;
`

export const SubHeading = styled.p`
  font-size: 2.2rem;
  margin-bottom: 4rem;
`

export const Button = styled.div`
  font-size: 1.8rem;
  color: white;
  padding: 1rem 2.5rem;
  background-color: var(--blue);
  border-radius: 0.5rem;
`
// Themes
export const lightTheme = {
  background: '#efe7e7',
  text: '#131e2a'
}

export const darkTheme = {
  background: '#131e2a',
  text: 'white'
}


export default GlobalStyles;
