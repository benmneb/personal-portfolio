import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		min: {
			small: '@media (min-width: 400px)',
			medium: '@media (min-width: 800px)',
		},
		max: {
			small: '@media (max-width: 400px)',
			medium: '@media (max-width: 800px)',
		},
	},
	colors: {
		hello: '#4495D4',
		projects: '#5B9E47',
		contact: '#F1A031',
	},
	headerHeight: '40px',
	spacing: '8px',
};

export const StyledTheme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
