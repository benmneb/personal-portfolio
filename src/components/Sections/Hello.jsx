import { useState } from 'react';

import styled from 'styled-components';

import { HTML, CSS, Javascript, ReactJS, Redux, NodeJS, MongoDB } from '../../assets';

import { Section } from '../../utils';

const Heading = styled.h1`
	margin-top: 0;
`;

const IconsBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100vw;

	svg {
		margin: 0 8px;
		transition: ${(props) => `transform ${props.theme.transitions.long} ease`};

		${(props) => props.theme.breakpoints.down.small} {
			max-width: 80vw;
		}

		:hover {
			transform: scale(1.3);
		}
	}
`;

const React = styled(ReactJS)`
	animation: spin 40s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Languages = styled.div`
	display: flex;
	margin-top: 20px;
`;

const HoverLanguages = styled.div`
	width: 100%;
	opacity: ${(props) => (props.hovering ? 1 : 0)};
	transition: ${(props) => `opacity ${props.theme.transitions.long}`};
`;

const DefaultLanguages = styled(HoverLanguages)`
	margin-left: -100%;
	opacity: ${(props) => (props.hovering ? 0 : 1)};
`;

export function Hello() {
	const [hovering, setHovering] = useState(null);

	return (
		<Section name="hello">
			<Heading>Hi, I'm Benjamin.</Heading>
			<p>I speak</p>
			<IconsBox>
				<HTML
					onMouseEnter={() => setHovering('HTML5')}
					onMouseLeave={() => setHovering(null)}
				/>
				<CSS
					onMouseEnter={() => setHovering('CSS3, SASS, CSS-in-JS')}
					onMouseLeave={() => setHovering(null)}
				/>
				<Javascript
					onMouseEnter={() => setHovering('Javascript ES6+, jQuery')}
					onMouseLeave={() => setHovering(null)}
				/>
				<React
					onMouseEnter={() => setHovering('ReactJS 17+')}
					onMouseLeave={() => setHovering(null)}
				/>
				<Redux
					onMouseEnter={() => setHovering('Redux, React-Redux')}
					onMouseLeave={() => setHovering(null)}
				/>
				<NodeJS
					onMouseEnter={() => setHovering('NodeJS, ExpressJS')}
					onMouseLeave={() => setHovering(null)}
				/>
				<MongoDB
					onMouseEnter={() => setHovering('MongoDB, Mongoose')}
					onMouseLeave={() => setHovering(null)}
				/>
			</IconsBox>
			<Languages>
				<HoverLanguages hovering={Boolean(hovering)}>{hovering}</HoverLanguages>
				<DefaultLanguages hovering={Boolean(hovering)}>
					HTML5, CSS3, JS, ReactJS, Redux, NodeJS, MongoDB
				</DefaultLanguages>
			</Languages>
		</Section>
	);
}
