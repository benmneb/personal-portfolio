import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    * {
      box-sizing: border-box;
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

      ${(props) => props.theme.breakpoints.only('mobile')} {
        font-size: 1rem;
      }
    }

    h1, h2 {
      font-size: 4rem;

      ${(props) => props.theme.breakpoints.only('mobile')} {
        font-size: 3rem;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.font};
    }
  }

  #modal {
    transition: opacity 200ms ease-in-out, visibility 100ms ease;
  }

  #backdrop {
    transition: opacity 100ms ease-in-out, visibility 50ms ease;
  }

  #modalCard {
    transition: scale 150ms ease-in;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    scale: 0.8;
  }

  .visible {
    visibility: visible;
    opacity: 1;
    scale: 1.2;
  }
`;
