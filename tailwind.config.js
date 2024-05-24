/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-green": {
					200: "#dff1e7",
					600: "#0c7d69",
				},
				"theme-red": {
					500: "#d73c3c",
				},
				"theme-gray": {
					500: "#87a3a6",
					900: "#2b4246",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
