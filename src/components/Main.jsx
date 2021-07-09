import styled from 'styled-components';

const Wrapper = styled.main`
	display: flex;
`;

const Container = styled.div`
	flex-basis: 100%;
	max-height: ${(props) => `calc(100vh - ${props.theme.headerHeight})`};
	margin-top: ${(props) => props.theme.headerHeight};
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`;

export function Main({ children }) {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
}
