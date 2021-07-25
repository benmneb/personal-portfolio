import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  svg {
    margin: ${(props) => props.theme.spacing(0, 1)};
    transition: ${(props) => `transform ${props.theme.transitions.long} ease`};

    ${(props) => props.theme.breakpoints.only('mobile')} {
      max-width: 80vw;
    }

    :hover {
      transform: scale(1.3);
    }
  }
`;

export function IconsBox({ children }) {
  return <Box>{children}</Box>;
}
