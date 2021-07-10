import styled from 'styled-components';

import { Section } from '../../utils';
import { mainProjects } from '../../assets';

const Heading = styled.h2`
	padding-top: ${(props) => props.theme.spacing(3)};
	display: inline;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;

	> * {
		margin: 32px 0;
	}
`;

const ProjectCard = styled.div`
	display: flex;
	width: 100%;
	padding: ${(props) => props.theme.spacing(2)};
	flex-direction: ${(props) => (props.index % 2 ? 'row-reverse' : 'row')};

	& > * {
		width: 50%;
		height: 300px;
		padding-left: ${(props) => props.theme.spacing(2)};
	}

	${(props) => props.theme.breakpoints.tablet.down} {
		flex-direction: column;

		& > * {
			width: 100%;
			padding-top: ${(props) => props.theme.spacing(2)};
			padding-left: 0;
		}
	}
`;

const ProjectMedia = styled.div`
	max-width: 100%;
	background-image: ${(props) => `url(${props.image})`};
	background-size: cover;
	background-position: center;
	overflow: hidden;
	filter: brightness(75%);
	transition: ${(props) => `filter ${props.theme.transitions.long} ease`};

	:hover {
		filter: brightness(100%);
		::after {
			transform: scale(1.05);
		}
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: inherit;
		background-size: cover;
		transform-origin: center;
		transition: ${(props) => `transform ${props.theme.transitions.long} ease`};
	}

	${(props) => props.theme.breakpoints.tablet.down} {
		filter: brightness(100%);
	}
`;

const ProjectInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: left;
`;

const ProjectTitle = styled.h3`
	line-height: ${(props) => props.theme.spacing(5)};
	align-self: flex-start;
	margin: 0;
`;

const List = styled.ul`
	margin-left: ${(props) => props.theme.spacing(-2)};
`;

const ProjectActions = styled.div`
	display: flex;
`;

const Button = styled.a`
	border-radius: ${(props) => props.theme.spacing(0.5)};
	padding: ${(props) => `${props.theme.spacing()} 0`};
	margin: ${(props) => `${props.theme.spacing(0.5)} ${props.theme.spacing(1)}`};
	width: 50%;
	background-color: transparent;
	border: ${(props) => `${props.theme.spacing(0.25)} solid ${props.theme.colors.font}`};
	text-align: center;
	transition: ${(props) =>
		`background-color ${props.theme.transitions.short} ease-in-out, color ${props.theme.transitions.short} ease-in-out`};

	:hover {
		background-color: ${(props) => props.theme.colors.font};
		color: ${(props) => props.theme.colors.projects};
	}
`;

export function Projects() {
	return (
		<Section name="projects">
			<Heading>Selected works.</Heading>
			<Container>
				{mainProjects.map((project, i) => (
					<ProjectCard key={project.title} index={i}>
						<ProjectMedia image={project.image} />
						<ProjectInfo>
							<ProjectTitle>{project.title}</ProjectTitle>
							<List>
								{project.keyPoints.map((text) => (
									<li key={text}>{text}</li>
								))}
							</List>
							<ProjectActions>
								<Button href={project.url}>View</Button>
								<Button href={project.github}>GitHub</Button>
							</ProjectActions>
						</ProjectInfo>
					</ProjectCard>
				))}
			</Container>
		</Section>
	);
}
