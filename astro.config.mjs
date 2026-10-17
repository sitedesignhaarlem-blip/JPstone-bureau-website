import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

// Languages are routed by src/pages/[...path].astro (see src/i18n/config.ts).
// English is the default at /, the others under /nl/, /de/, /fr/, /es/.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
