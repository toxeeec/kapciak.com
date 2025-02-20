import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), icon()],
	site: "https://kapciak.com",

	vite: {
		plugins: [tailwindcss()],
	},
});
