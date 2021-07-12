import styled from 'styled-components';

import { Section, LanguagesBox } from '../components';
import { TypeThis } from '../utils';

const Heading = styled.h1`
	margin-top: 0;
	min-height: ${(props) => props.theme.spacing(10.5)};

	${(props) => props.theme.breakpoints.only('mobile')} {
		min-height: ${(props) => props.theme.spacing(15.75)};
	}
`;

export function Hello() {
	return (
		<Section name="hello">
			<Heading>
				<TypeThis strings={[`Hi, I'm a React dev.`, `Hi, I'm Benjamin.`]} />
			</Heading>
			<LanguagesBox />
		</Section>
	);
}
