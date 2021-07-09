import styled from 'styled-components';

const ScrollSnapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	width: 100%;
	min-height: ${(props) => `calc(100vh - ${props.theme.headerHeight})`};
	background-color: ${(props) => props.theme.colors[props.bgColor]};
	scroll-snap-align: start;
`;

const CenteredContent = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
`;

export function Section({ name, children }) {
	return (
		<ScrollSnapper bgColor={name} id={name}>
			<CenteredContent>{children}</CenteredContent>
		</ScrollSnapper>
	);
}
