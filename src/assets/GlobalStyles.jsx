import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    *, *::before, *::after {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Mono', monospace;
    color: ${(props) => props.theme.colors.font};

    p,
    div {
      font-size: 1.3rem;

      ${(props) => props.theme.breakpoints.mobile.only} {
        font-size: 1rem;
      }
    }

    h1, h2 {
      font-size: 4rem;

      ${(props) => props.theme.breakpoints.mobile.only} {
        font-size: 3rem;
      }
    }
  }
`;
