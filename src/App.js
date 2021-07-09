import { StyledTheme } from './assets';
import { GlobalStyles } from './assets/GlobalStyles';
import { NavTabs, Hello, Projects, Contact } from './components';

export function App() {
	return (
		<StyledTheme>
			<GlobalStyles />
			<NavTabs />
			<main>
				<Hello />
				<Projects />
				<Contact />
			</main>
		</StyledTheme>
	);
}
