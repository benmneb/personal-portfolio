import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  padding: 0;
  padding-top: ${(props) =>
    props.name === 'hello' ? props.theme.headerHeight() : 0};
  margin: 0;
  min-height: ${(props) => `calc(100vh - ${props.theme.headerHeight()})`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors[props.name]};
  box-sizing: content-box;
`;

const CenteredContent = styled.div`
  height: 100%;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spacing(4)};
  text-align: center;
`;

export function Section({ name, children }) {
  return (
    <StyledSection name={name} id={name}>
      <CenteredContent>{children}</CenteredContent>
    </StyledSection>
  );
}
