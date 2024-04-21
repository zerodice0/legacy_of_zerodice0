import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "http://192.168.100.18/",
	integrations: [mdx(), sitemap()],
  base: "/\~zerodice0/legacy"
});
