// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pm.chiba.tw',
  output: 'static',
  integrations: [sitemap()],
});