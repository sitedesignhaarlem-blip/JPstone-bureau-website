// SEO check on the built site (dist/): unique titles and descriptions, one H1, canonical,
// complete and reciprocal hreflang, valid JSON-LD, internal links that resolve, and media basics.
// Usage: npm run build && node scripts/check-seo.mjs
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://stilltofilm.com';
const LANGS = ['en', 'nl', 'de', 'fr', 'es', 'x-default'];
const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') pages.push(p);
  }
})(DIST);

const errors = [];
const seen = { title: new Map(), desc: new Map() };
const alternates = new Map(); // canonical -> { lang: href }
const get = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const urlOf = (file) => SITE + '/' + path.relative(DIST, path.dirname(file)).replace(/\\/g, '/') + (path.dirname(file) === DIST ? '' : '/');

for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const url = urlOf(file).replace(/\/\/$/, '/');
  const isPrivate = url.includes('/p/');
  const err = (m) => errors.push(`${url}: ${m}`);
  const title = get(html, /<title>([^<]*)<\/title>/g);
  const desc = get(html, /<meta name="description" content="([^"]*)"/g);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const canonical = get(html, /<link rel="canonical" href="([^"]*)"/g);
  if (title.length !== 1) err(`${title.length} titles`);
  if (desc.length !== 1) err(`${desc.length} descriptions`);
  if (h1 !== 1) err(`${h1} H1s`);
  if (canonical[0] !== url) err(`canonical ${canonical[0]} != ${url}`);
  if (!/<html lang="[a-z]{2}(-[A-Z]{2})?"/.test(html)) err('missing <html lang>');
  if (!/property="og:locale"/.test(html) || !/property="og:url"/.test(html)) err('missing Open Graph tags');
  if (!isPrivate) {
    for (const [k, v] of [['title', title[0]], ['desc', desc[0]]]) {
      if (seen[k].has(v)) err(`duplicate ${k} with ${seen[k].get(v)}`);
      seen[k].set(v, url);
    }
    const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    for (const l of LANGS) if (!alts[l]) err(`hreflang ${l} missing`);
    if (!Object.values(alts).includes(url)) err('hreflang does not reference itself');
    alternates.set(url, alts);
  }
  // JSON-LD must parse
  for (const block of get(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block); } catch (e) { err('invalid JSON-LD: ' + e.message); }
  }
  // internal links resolve to a built file
  for (const href of get(html, /href="(\/[^"#?]*)/g)) {
    const target = path.join(DIST, href.endsWith('/') ? href + 'index.html' : href);
    if (!fs.existsSync(target)) err(`broken link ${href}`);
  }
  // media basics
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\balt="/.test(img)) err(`img without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth="/.test(img) || !/\bheight="/.test(img)) err(`img without width/height: ${img.slice(0, 80)}`);
  }
  for (const v of html.match(/<video\b[^>]*>/g) || []) {
    if (!/preload="(none|metadata)"/.test(v)) err(`video without preload none: ${v.slice(0, 80)}`);
    if (!/aria-label="/.test(v)) err(`video without text description: ${v.slice(0, 80)}`);
  }
}
// hreflang must be reciprocal: every alternate points back to this page
for (const [url, alts] of alternates) {
  for (const [l, href] of Object.entries(alts)) {
    if (l === 'x-default') continue;
    const back = alternates.get(href);
    if (!back) errors.push(`${url}: hreflang ${l} -> ${href} is not a built page`);
    else if (!Object.values(back).includes(url)) errors.push(`${url}: ${href} does not link back`);
  }
}
// sitemap lists every public page
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
for (const url of alternates.keys()) if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap misses ${url}`);

console.log(`${pages.length} pages checked, ${alternates.size} public`);
if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
console.log('All SEO checks passed.');
