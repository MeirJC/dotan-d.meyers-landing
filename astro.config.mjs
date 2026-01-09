// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  // Note: Using custom sitemap.xml.ts instead of @astrojs/sitemap plugin
  // for more control over changefreq and priority per page type
  integrations: [icon(), mdx(), react()],
  site: "https://www.dmeyers.pro",
  vite: {
    plugins: [tailwindcss()]
  }
});
