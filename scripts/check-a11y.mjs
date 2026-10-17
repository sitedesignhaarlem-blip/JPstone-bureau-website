// Accessibility check: runs axe-core (WCAG 2.1 AA) on every page against the preview server.
// Usage: npm run build && npm run preview, then in another terminal: node scripts/check-a11y.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const axe = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const base = process.env.BASE || 'http://localhost:4321';
// Every page in every language, read from the sitemap of the build.
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : f === 'index.html' ? [p] : []; });
const pages = walk('dist').map((p) => '/' + p.replace(/^dist\/?/, '').replace(/index\.html$/, '')).sort();
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
let failed = 0;
for (const w of [390, 1280]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.addScriptTag({ content: axe });
    const res = await page.evaluate(() => window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] }));
    const v = res.violations;
    failed += v.length;
    console.log(`${w}px ${path}: ${v.length ? v.map((x) => `${x.id} (${x.nodes.length})`).join(', ') : 'ok'}`);
    for (const x of v) for (const n of x.nodes.slice(0, 3)) console.log('   ', x.id, n.target.join(' '), n.failureSummary?.split('\n')[1]?.trim() ?? '');
  }
  await page.close();
}
await browser.close();
process.exit(failed ? 1 : 0);
