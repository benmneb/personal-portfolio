import styled, { css } from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(1, 0)};
  margin: ${(props) => props.theme.spacing(0.5, 1)};
  width: 50%;
  border-radius: ${(props) => props.theme.spacing(0.5)};
  border: ${(props) =>
    `${props.theme.spacing(0.25)} solid ${props.theme.colors.font}`};
  transition: ${(props) =>
    `background-color ${props.theme.transitions.shorter} ease-in-out, color ${props.theme.transitions.short} ease-in-out`};

  ${(props) =>
    props.primary
      ? css`
          background-color: ${(props) => props.theme.colors.font};
          color: ${(props) => props.theme.colors.projects};
          :hover {
            background-color: ${(props) => props.theme.colors.font + 'dd'};
            border-color: ${(props) => props.theme.colors.font + 'dd'};
          }
        `
      : css`
          background-color: transparent;
          :hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}
`;

export default function Button(props) {
  const { children, ...other } = props;
  return <StyledButton {...other}>{children}</StyledButton>;
}
