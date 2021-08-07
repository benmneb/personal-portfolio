import styled, { css } from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(1, 0)};
  margin: ${(props) => props.theme.spacing(0.5, 1)};
  width: 50%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
  border-radius: ${(props) => props.theme.spacing(0.5)};
  transition: ${(props) =>
    `all ${props.theme.transitions.shorter} ease-in-out`};

  ${(props) =>
    props.variant === 'projects' &&
    css`
      color: ${(props) => props.theme.colors.projects};
    `}
  ${(props) =>
    props.variant === 'contact' &&
    css`
      color: ${(props) => props.theme.colors.contact};
    `}

  ${(props) =>
    props.primary
      ? css`
          background-color: ${(props) => props.theme.colors.font};
          border: none;
          :hover {
            background-color: ${(props) => props.theme.colors.font + 'dd'};
          }
        `
      : css`
          background-color: transparent;
          border: ${(props) =>
            `${props.theme.spacing(0.25)} solid ${props.theme.colors.font}`};
          :hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}
`;

export default function Button(props) {
  const { children, icon, pending, pendingMessage, ...other } = props;

  return (
    <StyledButton {...other}>
      {!pending && icon && icon}
      {pending ? pendingMessage : children}
    </StyledButton>
  );
}
