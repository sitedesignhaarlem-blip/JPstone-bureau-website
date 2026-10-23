// Writes llms-full.txt into the build output after the build: the full English text of every public page in one
// plain-text file, so AI assistants can read the whole site in one request. Runs after
// `astro build` and reads the built pages, so it is never out of date. See /llms.txt for the summary.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// The static files: dist/client with the Vercel adapter (copied to .vercel/output/static, which is
// what Vercel serves), or dist without it.
const root = new URL('../', import.meta.url).pathname;
const outputs = ['.vercel/output/static', 'dist/client', 'dist'].map((d) => join(root, d)).filter((d) => existsSync(join(d, 'sitemap.xml')));
const dist = outputs[0];
const site = 'https://stilltofilm.com';
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
// English pages only: those without a language prefix.
const english = locs.filter((u) => !/^https:\/\/[^/]+\/(nl|de|fr|es|hr|pt)\//.test(u));

const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return entities[e] ?? m;
});
// Block-level tags become a space, so a heading and the text after it in one list item stay apart.
const inline = (s) => decode(s.replace(/<\/(a|span)>(?=\s*<(a|h[1-6]|p)\b)/g, ' ').replace(/<br\s*\/?>|<\/(h[1-6]|p|div|dt|dd|li)>/g, ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();

function toText(html) {
  let main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  main = main
    .replace(/<(script|style|svg|template|nav|video|button|form)\b[\s\S]*?<\/\1>/g, '')
    .replace(/<[^>]+\b(hidden|aria-hidden="true")[^>]*>[\s\S]*?<\/(div|span|p)>/g, '');
  const out = [];
  const re = /<(h[1-4]|p|li|tr|summary|dt|dd)\b[^>]*>([\s\S]*?)<\/\1>/g;
  for (const [, tag, body] of main.matchAll(re)) {
    if (tag === 'tr') {
      const cells = [...body.matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => inline(c[1]));
      if (cells.length) out.push(`| ${cells.join(' | ')} |`);
      continue;
    }
    const text = inline(body);
    if (!text) continue;
    if (tag[0] === 'h') out.push('', `${'#'.repeat(Number(tag[1]) + 1)} ${text}`);
    else if (tag === 'summary') out.push('', `**${text}**`);
    else if (tag === 'li') out.push(`- ${text}`);
    else out.push(text);
  }
  // A paragraph inside a list item or table cell is matched twice; keep the first.
  return out.filter((line, i) => line === '' || out.indexOf(line) === i).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

const parts = [];
for (const url of english) {
  const file = join(dist, new URL(url).pathname, 'index.html');
  if (!existsSync(file)) continue;
  const html = readFileSync(file, 'utf8');
  const title = inline(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? url);
  parts.push(`# ${title}\n\nURL: ${url}\n\n${toText(html)}`);
}

const header = `# Still to Film: full text of the English pages

> The complete text of every public English page on ${site}, generated at build time. The short summary is at ${site}/llms.txt. Prices include VAT. Other languages: Dutch (/nl/), German (/de/), French (/fr/), Spanish (/es/), Croatian (/hr/) and Portuguese (/pt/).

Generated: ${new Date().toISOString().slice(0, 10)}`;
for (const out of outputs) writeFileSync(join(out, 'llms-full.txt'), `${header}\n\n---\n\n${parts.join('\n\n---\n\n')}\n`);
console.log(`llms-full.txt: ${parts.length} pages`);
