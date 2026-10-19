// /sitemap.xml: every public page in every language, each with its hreflang alternates.
// Built from the page list in src/i18n/config.ts, so new pages are added automatically.
// Prospect pages (/p/…) are private links and are left out on purpose.
import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';
import { defaultLocale, hreflang, locales, pageIds, pagePath } from '../i18n';

const abs = (path: string) => new URL(path, SITE_URL).href;

export const GET: APIRoute = () => {
  const urls = pageIds.flatMap((page) =>
    locales.map((lang) => {
      const alternates = locales
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${abs(pagePath(l, page))}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pagePath(defaultLocale, page))}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(pagePath(lang, page))}</loc>\n${alternates}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
