import styled from 'styled-components';

import { Section, TypeThis } from '../../utils';
import { IconsBox } from './IconsBox';

const Heading = styled.h1`
	margin-top: 0;
	min-height: 83.5px;

	${(props) => props.theme.breakpoints.down.small} {
		min-height: 126px;
	}
`;

export function Hello() {
	return (
		<Section name="hello">
			<Heading>
				<TypeThis>Hi, I'm Benjamin.</TypeThis>
			</Heading>
			<IconsBox />
		</Section>
	);
}
