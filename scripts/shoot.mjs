// Usage: node scripts/shoot.mjs <path> <outPrefix> [fullPage=1]
import { chromium } from 'playwright';
const [, , path = '/', prefix = 'shot', full = '1'] = process.argv;
const base = process.env.BASE || 'http://localhost:4321';
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const width of [390, 768, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: width < 500 ? 844 : 900 }, deviceScaleFactor: width < 500 ? 2 : 1 });
  await page.goto(base + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in')));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${prefix}-${width}.png`, fullPage: full === '1' });
  await page.close();
}
await browser.close();
