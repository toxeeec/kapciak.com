// @ts-check
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,ts,tsx}"],
	theme: {
		colors: {
			primary: colors.black,
			secondary: colors.neutral[100],
		},
	},
	plugins: [],
};
