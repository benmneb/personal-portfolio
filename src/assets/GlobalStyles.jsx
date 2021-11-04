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
    font-family: 'Fira Code', monospace;
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

    .index_controls__9z-dM {
      top: 2px
    }

    .index_controls__9z-dM,
    .index_lineText__2Poex {
      font-size: 18px
    }

    .index_editor__2tqRz {
      overscroll-behavior: contain;
    }
  }
`;
