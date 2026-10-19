import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

// Languages are routed by src/pages/[...path].astro (see src/i18n/config.ts).
// English is the default at /, the others under /nl/, /de/, /fr/, /es/.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Strict Content Security Policy: Astro adds a <meta> tag with a hash of every inline
  // script and style, so nothing else can run. frame-ancestors and the other headers
  // that cannot live in a <meta> tag are set in vercel.json.
  // No code blocks on the site; Shiki's inline styles would clash with the CSP.
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "media-src 'self'",
        "font-src 'self'",
        "connect-src 'self' https://formspree.io",
        "form-action 'self' mailto: https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
  // Prospect pages (/p/…) are private links and stay out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/p/') })],
});
