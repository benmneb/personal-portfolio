import { ThemeProvider } from 'styled-components';

const theme = {
	breakpoints: {
		mobile: {
			min: '0px',
			max: '600px',
		},
		tablet: {
			min: '601px',
			max: '900px',
		},
		desktop: {
			min: '901px',
			max: '1279px',
		},
		hd: {
			min: '1280px',
		},
		/**
		 * @param {string} x
		 */
		only: function (x) {
			return `@media (min-width: ${this[x].min}) and (max-width: ${this[x].max})`;
		},
		/**
		 * @param {string} x
		 */
		up: function (x) {
			return `@media (min-width: ${this[x].min})`;
		},
		/**
		 * @param {string} x
		 */
		down: function (x) {
			return `@media (max-width: ${this[x].max})`;
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
