import styled from 'styled-components';
import { HTML, CSS, Javascript, ReactJS, Redux, NodeJS, MongoDB } from '../../assets';

import { Section } from '../../utils';

const Heading = styled.h1`
	font-size: 4rem;
	margin-top: 0;

	${(props) => props.theme.breakpoints.max.small} {
		font-size: 3rem;
	}
`;

const IconsBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100vw;

	svg {
		margin: 0 8px;
		transition: transform 0.5s ease;

		${(props) => props.theme.breakpoints.max.small} {
			max-width: 80vw;
		}

		:hover {
			transform: scale(1.3);
		}
	}
`;

export function Hello() {
	return (
		<Section name="hello">
			<Heading>Hi, I'm Benjamin.</Heading>
			<p>I speak</p>
			<IconsBox>
				<HTML />
				<CSS />
				<Javascript />
				<ReactJS />
				<Redux />
				<NodeJS />
				<MongoDB />
			</IconsBox>
			<p>HTML5, CSS3, JS, ReactJS, Redux, NodeJS, MongoDB</p>
		</Section>
	);
}
