// Tells Bing, Yandex and other IndexNow search engines which pages exist, right after a production
// build on Vercel. Bing's index also feeds ChatGPT search and Copilot, so new pages show up there
// sooner. The key below must match the file public/<key>.txt. Never fails the build: if the
// request does not work, the site is still deployed and the search engines find it later.
import { existsSync, readFileSync } from 'node:fs';

const KEY = '23ad53eff542aca0db9da36d37f06850';
const HOST = 'stilltofilm.com';

if (process.env.VERCEL_ENV !== 'production') {
  console.log('IndexNow: skipped (not a production build)');
  process.exit(0);
}
try {
  const file = ['../dist/client/sitemap.xml', '../dist/sitemap.xml'].map((f) => new URL(f, import.meta.url)).find((f) => existsSync(f));
  const sitemap = readFileSync(file, 'utf8');
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000),
  });
  console.log(`IndexNow: ${res.status} for ${urlList.length} pages`);
} catch (error) {
  console.log(`IndexNow: not sent (${error.message})`);
}
