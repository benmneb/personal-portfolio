import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  padding: 0;
  width: 100%;
  height: ${(props) => props.theme.headerHeight()};
  z-index: 2;
`;

const Tab = styled.div`
  height: 100%;
  width: 33%;
  vertical-align: middle;
  flex-grow: 1;
  text-align: center;
  line-height: ${(props) => props.theme.headerHeight()};
  background-color: ${(props) => props.theme.colors[props.bgColor]};

  a {
    display: block;
  }
`;

export function NavTabs() {
  return (
    <Nav>
      {['hello', 'projects', 'contact'].map((tabName) => (
        <Tab key={tabName} bgColor={tabName}>
          <a href={`#${tabName}`}>/{tabName}</a>
        </Tab>
      ))}
    </Nav>
  );
}
