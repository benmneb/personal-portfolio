import { useState } from 'react';
import styled from 'styled-components';

import { IconsBox } from '.';

const TextBox = styled.div`
  display: flex;
`;

const HoverTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spacing(0)};
  width: 100%;
  opacity: ${(props) => (props.hovering ? 1 : 0)};
  transition: ${(props) => `opacity ${props.theme.transitions.short}`};
`;

const DefaultTextBox = styled(HoverTextBox)`
  margin-left: -100%;
  opacity: ${(props) => (props.hovering ? 0 : 1)};
`;

const SubTitle = styled.h4`
  position: relative;
  margin: 0;
`;

export function ProjectCardBody({ project }) {
  const [hovering, setHovering] = useState(null);

  return (
    <>
      <TextBox>
        <HoverTextBox hovering={Boolean(hovering)}>
          <SubTitle>{hovering}</SubTitle>
        </HoverTextBox>
        <DefaultTextBox hovering={Boolean(hovering)}>
          <SubTitle>{project.subTitle}</SubTitle>
        </DefaultTextBox>
      </TextBox>
      <IconsBox>
        {project.stack.map((Lang) => (
          // eslint-disable-next-line react/jsx-pascal-case
          <Lang.icon
            key={Lang.icon.name}
            onMouseEnter={() => setHovering(Lang.description)}
            onMouseLeave={() => setHovering(null)}
          />
        ))}
      </IconsBox>
    </>
  );
}
