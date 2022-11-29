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
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [],
};
