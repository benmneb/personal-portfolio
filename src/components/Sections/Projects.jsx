import styled from 'styled-components';
import { Section } from '../../utils';

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
				<a
					href="https://codepen.io/benmneb/full/bGVMzNE"
					target="_blank"
					rel="noreferrer"
				>
					<ProjectCard>
						<ProjectMedia
							id="proj-1-img"
							src="https://i.ibb.co/6gBsR7d/Screen-Shot-2020-05-12-at-8-55-25-am.png"
							alt="img1"
						/>
						<ProjectTitle className="project-title">
							Original Technical Documentation
						</ProjectTitle>
					</ProjectCard>
				</a>

				<a
					href="https://codepen.io/benmneb/full/rNOdRbL"
					target="_blank"
					rel="noreferrer"
				>
					<ProjectCard>
						<ProjectMedia
							id="proj-2-img"
							src="https://i.ibb.co/m6sYBw2/Screen-Shot-2020-05-12-at-8-53-59-am.png"
							alt="img2"
						/>
						<ProjectTitle className="project-title">
							Real Product Landing Page
						</ProjectTitle>
					</ProjectCard>
				</a>

				<a
					href="https://codepen.io/benmneb/full/PoPRjpa"
					target="_blank"
					rel="noreferrer"
				>
					<ProjectCard>
						<ProjectMedia
							id="proj-3-img"
							src="https://i.ibb.co/9Nqx1Pn/Screen-Shot-2020-05-12-at-8-52-19-am.png"
							alt="img3"
						/>
						<ProjectTitle className="project-title">Important Survey Form</ProjectTitle>
					</ProjectCard>
				</a>

				<a
					href="https://codepen.io/benmneb/full/qBOoraY"
					target="_blank"
					rel="noreferrer"
				>
					<ProjectCard>
						<ProjectMedia
							id="proj-4-img"
							src="https://i.ibb.co/wsKcm17/Screen-Shot-2020-05-12-at-8-51-07-am.png"
							alt="Sasha Grey Tribute"
						/>
						<ProjectTitle className="project-title">Emotional Tribute</ProjectTitle>
					</ProjectCard>
				</a>
			</ProjectsBox>
		</Section>
	);
}
