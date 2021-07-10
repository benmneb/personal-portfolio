import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		mobile: {
			up: '@media (min-width: 0px)',
			down: '@media (min-width: 0px)',
			only: '@media (min-width: 0px) and (max-width: 600px)',
		},
		tablet: {
			up: '@media (min-width: 601px)',
			down: '@media (max-width: 900px)',
			only: '@media (min-width: 601px) and (max-width: 900px)',
		},
		desktop: {
			up: '@media (min-width: 901px)',
			down: '@media (max-width: 901px)',
			only: '@media (min-width: 901px) and (max-width: 1279px)',
		},
		hd: {
			up: '@media (min-width: 1280px)',
			down: '@media (max-width: 1280px)',
			only: '@media (min-width: 1280px)',
		},
	},
	colors: {
		font: '#FFFFFF',
		hello: '#4495D4',
		projects: '#5B9E47',
		contact: '#F1A031',
	},
	headerHeight: '44px',
	spacing: function (x = 1) {
		return `${x * 8}px`;
	},
	transitions: {
		short: '300ms',
		long: '500ms',
	},
};

export const StyledTheme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
