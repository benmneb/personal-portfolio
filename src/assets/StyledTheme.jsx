import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		mobile: {
			only: '@media (min-width: 0px) and (max-width: 600px)',
			up: '@media (min-width: 0px)',
			down: '@media (max-width: 600px)',
			values: {
				min: '0px',
				max: '600px',
			},
		},
		tablet: {
			only: '@media (min-width: 601px) and (max-width: 900px)',
			up: '@media (min-width: 601px)',
			down: '@media (max-width: 900px)',
			values: {
				min: '601px',
				max: '900px',
			},
		},
		desktop: {
			only: '@media (min-width: 901px) and (max-width: 1279px)',
			up: '@media (min-width: 901px)',
			down: '@media (max-width: 1279px)',
			values: {
				min: '901px',
				max: '1279px',
			},
		},
		hd: {
			only: '@media (min-width: 1280px)',
			up: '@media (min-width: 1280px)',
			down: '@media (max-width: 1280px)',
			values: {
				min: '1280px',
			},
		},
	},
	colors: {
		font: '#FFFFFF',
		hello: '#4495D4',
		projects: '#5B9E47',
		contact: '#F1A031',
	},
	headerHeight: function (x = 1, v = window.matchMedia('(max-width: 600px)')) {
		if (v.matches) {
			return `${x * 36}px`;
		} else {
			return `${x * 42}px`;
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
