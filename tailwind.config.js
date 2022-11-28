/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./node_modules/flowbite-react/**/*.js",
		"./public/**/*.html",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("flowbite/plugin")],
	theme: {
		extend: {},
		colors: {
			primary: "#F1C40F",
			secondary: "#FF9F43",
			"primary-light": "#ffdf0f",
		},
	},
	plugins: [],
};
