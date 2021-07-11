import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		mobile: {
			only: '@media (min-width: 0px) and (max-width: 600px)',
			up: '@media (min-width: 0px)',
			down: '@media (max-width: 600px)',
		},
		tablet: {
			only: '@media (min-width: 601px) and (max-width: 900px)',
			up: '@media (min-width: 601px)',
			down: '@media (max-width: 900px)',
		},
		desktop: {
			only: '@media (min-width: 901px) and (max-width: 1279px)',
			up: '@media (min-width: 901px)',
			down: '@media (max-width: 901px)',
		},
		hd: {
			only: '@media (min-width: 1280px)',
			up: '@media (min-width: 1280px)',
			down: '@media (max-width: 1280px)',
		},
	},
	colors: {
		font: '#FFFFFF',
		hello: '#4495D4',
		projects: '#5B9E47',
		contact: '#F1A031',
	},
	headerHeight: function (v = window.matchMedia('(max-width: 600px)')) {
		if (v.matches) {
			return '36px';
		} else {
			return '42px';
		}
	},
	spacing: function (s = 1, x, y, z) {
		if (typeof z === 'number') return `${s * 8}px ${x * 8}px ${y * 8}px ${z * 8}px`;
		if (typeof y === 'number') return `${s * 8}px ${x * 8}px ${y * 8}px`;
		if (typeof x === 'number') return `${s * 8}px ${x * 8}px`;
		return `${s * 8}px`;
	},
	transitions: {
		short: '300ms',
		long: '500ms',
	},
};

export const StyledTheme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
