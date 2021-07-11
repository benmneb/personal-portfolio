import styled from 'styled-components';

import { Section } from '../components';
import { GitHub } from '../assets';

const Link = styled.a`
	svg {
		padding-top: ${(props) => props.theme.spacing(5)};
		transition: ${(props) => `transform ${props.theme.transitions.long} ease`};

		${(props) => props.theme.breakpoints.tablet.down} {
			transform: scale(1);
		}

		:hover {
			transform: scale(1.1);
		}
	}
`;

export function Contact() {
	return (
		<Section name="contact">
			<h2>Let's work together.</h2>
			<Link
				href="https://github.com/benmneb"
				target="_blank"
				rel="noreferrer"
				id="profile-link"
			>
				<GitHub />
			</Link>
		</Section>
	);
}
