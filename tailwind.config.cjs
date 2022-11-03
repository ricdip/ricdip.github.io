/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	darkMode: "class",
	theme: {
		extend: {
			/*fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'sans-serif': ['sans-serif'],
			},*/
			colors: {
				'dark': '#121212',
			},
			opacity: {
				'emphasis-high': '.87',
				'emphasis-medium': '.60',
				'emphasis-low': '.38',
			}
		},
		
	},
	plugins: [
		require('flowbite/plugin')
	],
}
