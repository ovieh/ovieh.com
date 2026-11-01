// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ovieh.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()]
});