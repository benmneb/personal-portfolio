import styled from 'styled-components';
import { Section } from '../../utils';
import { GitHub } from '../../assets';

const Heading = styled.h2`
	font-size: 4rem;

	${(props) => props.theme.breakpoints.max.small} {
		font-size: 3rem;
	}
`;

const Link = styled.a`
	svg {
		padding-top: 40px;
		transition: transform 0.5s ease;

		${(props) => props.theme.breakpoints.max.medium} {
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
			<Heading>Let's work together.</Heading>
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
