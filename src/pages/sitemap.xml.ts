// /sitemap.xml: every public page in every language, each with its hreflang alternates.
// Built from the page list in src/i18n/config.ts, so new pages are added automatically.
// Prospect pages (/p/…) and the review form are private links and are left out on purpose.
// The Insights articles come from src/insights/.
import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';
import { defaultLocale, hreflang, localesFor, pageIds, pagePath, type Locale } from '../i18n';
import { articleAlternates, articlesFor, indexAlternates, insightLocales } from '../insights';

const abs = (path: string) => new URL(path, SITE_URL).href;

export const GET: APIRoute = () => {
  const urls = pageIds.flatMap((page) =>
    localesFor(page).map((lang) => {
      const alternates = localesFor(page)
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${abs(pagePath(l, page))}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pagePath(defaultLocale, page))}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(pagePath(lang, page))}</loc>\n${alternates}\n  </url>`;
    }),
  );
  // Insights: the index page and each article, with the languages they exist in.
  const entry = (loc: string, alts: Partial<Record<Locale, string>>) => {
    const links = (Object.entries(alts) as [Locale, string][])
      .map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${abs(p)}"/>`);
    if (alts[defaultLocale]) links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alts[defaultLocale]!)}"/>`);
    return `  <url>\n    <loc>${abs(loc)}</loc>\n${links.join('\n')}\n  </url>`;
  };
  for (const lang of insightLocales()) {
    urls.push(entry(indexAlternates()[lang]!, indexAlternates()));
    for (const a of articlesFor(lang)) {
      const alts = articleAlternates(a.id);
      urls.push(entry(alts[lang]!, alts));
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
