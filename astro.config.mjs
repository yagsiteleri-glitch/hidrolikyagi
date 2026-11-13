import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hidrolikyagi.com',
  integrations: [sitemap()],
});
