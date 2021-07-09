import { StyledTheme } from './assets';
import { GlobalStyles } from './assets/GlobalStyles';
import { NavTabs, Main, Hello, Projects, Contact } from './components';

export function App() {
	return (
		<StyledTheme>
			<GlobalStyles />
			<NavTabs />
			<Main>
				<Hello />
				<Projects />
				<Contact />
			</Main>
		</StyledTheme>
	);
}
