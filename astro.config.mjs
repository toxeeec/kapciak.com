// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap(), icon()],
	site: "https://kapciak.com",
});
