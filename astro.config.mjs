import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import { SITE_URL } from './src/data/site.ts';

// Languages are routed by src/pages/[...path].astro (see src/i18n/config.ts).
// English is the default at /, the others under /nl/, /de/, /fr/, /es/, /hr/, /pt/.
export default defineConfig({
  site: SITE_URL,
  // Every page is built ahead of time, except the order form (/order/), the client portal
  // (/account/), the admin pages (/admin/) and the API routes (/api/), which run on Vercel on each request (prerender = false).
  output: 'static',
  adapter: vercel(),
  // Keys for the portal, set in Vercel (Settings → Environment Variables). All optional: without
  // them the marketing site works as before and the portal says it is not set up yet.
  env: {
    schema: {
      SUPABASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      SUPABASE_ANON_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      SUPABASE_SERVICE_ROLE_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      ADMIN_EMAILS: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
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
        // Supabase: video previews and downloads (signed links) and uploads from the admin page.
        "media-src 'self' https://*.supabase.co",
        "font-src 'self'",
        "connect-src 'self' https://formspree.io https://*.supabase.co",
        "form-action 'self' mailto: https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
