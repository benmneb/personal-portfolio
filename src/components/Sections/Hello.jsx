import styled from 'styled-components';

import { Section, LanguagesBox, TypeThis } from '../../utils';

const Heading = styled.h1`
	margin-top: 0;
	min-height: ${(props) => props.theme.spacing(10.5)};

	${(props) => props.theme.breakpoints.mobile.only} {
		min-height: ${(props) => props.theme.spacing(15.75)};
	}
`;

export function Hello() {
	return (
		<Section name="hello">
			<Heading>
				<TypeThis>Hi, I'm Benjamin.</TypeThis>
			</Heading>
			<LanguagesBox />
		</Section>
	);
}
