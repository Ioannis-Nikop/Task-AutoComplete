/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: [
				'Roboto',
				'sans-serif',
			],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
}
