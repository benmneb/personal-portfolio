import styled from 'styled-components';

import { Section } from '../../utils';
import { mainProjects } from '../../assets';

const Heading = styled.h2`
	padding-top: ${(props) => props.theme.spacing(3)};
	display: inline;
`;

const ProjectsBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: ${(props) => props.theme.spacing(4)};
	padding: ${(props) => props.theme.spacing(6)};

	${(props) => props.theme.breakpoints.tablet.down} {
		grid-template-columns: 1fr;
	}
`;

const ProjectCard = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
`;

const ProjectMedia = styled.img`
	width: 100%;
	object-fit: cover;
	height: 300px;
	transition: ${(props) => `all ${props.theme.transitions.long} ease`};
	filter: brightness(75%);

	${(props) => props.theme.breakpoints.tablet.down} {
		filter: brightness(100%);
	}

	:hover {
		transform: scale(1.1);
		filter: brightness(100%);
	}
`;

const ProjectTitle = styled.div`
	background-color: ${(props) => props.theme.colors.projects};
	line-height: ${(props) => props.theme.spacing(5)};
	align-self: flex-end;
	width: 100%;
	z-index: 1;
`;

export function Projects() {
	return (
		<Section name="projects">
			<Heading>Selected works.</Heading>
			<ProjectsBox>
				{mainProjects.map((project) => (
					<a href={project.url} target="_blank" rel="noreferrer">
						<ProjectCard>
							<ProjectMedia src={project.image} alt={project.title} />
							<ProjectTitle>{project.title}</ProjectTitle>
						</ProjectCard>
					</a>
				))}
			</ProjectsBox>
		</Section>
	);
}
