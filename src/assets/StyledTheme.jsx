import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		up: {
			small: '@media (min-width: 400px)',
			medium: '@media (min-width: 800px)',
		},
		down: {
			small: '@media (max-width: 400px)',
			medium: '@media (max-width: 800px)',
		},
	},
	colors: {
		hello: '#4495D4',
		projects: '#5B9E47',
		contact: '#F1A031',
	},
	headerHeight: '44px',
	spacing: '8px',
	transitions: {
		short: '0.3s',
		long: '0.5s',
	},
};

export const StyledTheme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
