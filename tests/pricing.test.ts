// Run with: npm test (Node's own test runner, no extra packages).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clampCount, earlyBirdActive, exclVat, nextStep, oneOffPricePerVideo, quote } from '../src/data/pricing.calc.ts';
import { PRICING } from '../src/data/pricing.config.ts';

const BEFORE = Date.parse('2026-12-31T22:59:00Z'); // 23:59 in Amsterdam, 31 December 2026
const AFTER = Date.parse('2026-12-31T23:00:00Z'); // midnight in Amsterdam, 1 January 2027

test('standard one-off ladder', () => {
  const p = (n: number) => oneOffPricePerVideo('standard', n);
  assert.deepEqual([1, 5, 9, 10, 14, 15, 50, 100, 101].map(p), [95, 95, 95, 90, 90, 85, 50, 50, 50]);
});

test('premium one-off ladder and floor', () => {
  const p = (n: number) => oneOffPricePerVideo('premium', n);
  assert.deepEqual([1, 5, 9, 10, 15, 50, 55, 100].map(p), [149, 149, 149, 144, 139, 104, 100, 100]);
});

test('prices never go below the floor', () => {
  for (const tier of ['standard', 'premium'] as const) {
    for (let n = 1; n <= 500; n++) assert.ok(oneOffPricePerVideo(tier, n) >= PRICING.oneOff[tier].floor);
  }
});

test('bad input is clamped, never NaN or negative', () => {
  assert.equal(clampCount('abc'), 1);
  assert.equal(clampCount(-4), 1);
  assert.equal(clampCount(0), 1);
  assert.equal(clampCount(7.9), 7);
  assert.equal(clampCount(500, 101), 101);
  const q = quote('standard', 'oneoff', Number.NaN, BEFORE);
  assert.equal(q.count, 1);
  assert.ok(Number.isFinite(q.total) && q.total > 0);
});

test('early-bird applies before 1 January 2027 and not after', () => {
  assert.equal(earlyBirdActive(BEFORE), true);
  assert.equal(earlyBirdActive(AFTER), false);
  const before = quote('standard', 'oneoff', 10, BEFORE);
  assert.equal(before.subtotal, 900);
  assert.equal(before.earlyBird, 90);
  assert.equal(before.total, 810);
  const after = quote('standard', 'oneoff', 10, AFTER);
  assert.equal(after.earlyBird, 0);
  assert.equal(after.total, 900);
});

test('quantity 1 and 15, both tiers', () => {
  assert.equal(quote('standard', 'oneoff', 1, AFTER).total, 95);
  assert.equal(quote('premium', 'oneoff', 1, AFTER).total, 149);
  assert.equal(quote('premium', 'oneoff', 15, AFTER).total, 15 * 139);
  assert.equal(quote('premium', 'oneoff', 15, BEFORE).total, 1876.5);
});

test('savings against the base price include the early-bird', () => {
  assert.equal(quote('standard', 'oneoff', 1, AFTER).saved, 0);
  assert.equal(quote('standard', 'oneoff', 50, AFTER).saved, 50 * 95 - 50 * 50);
  assert.equal(quote('standard', 'oneoff', 10, BEFORE).saved, 950 - 810);
});

test('above the maximum is a custom quote with no totals', () => {
  const q = quote('premium', 'oneoff', 101, BEFORE);
  assert.equal(q.custom, true);
  assert.equal(q.total, 0);
  assert.equal(quote('premium', 'oneoff', 100, BEFORE).custom, false);
});

test('50/50 payment from the split amount, on the total after discount', () => {
  assert.equal(quote('standard', 'oneoff', 12, BEFORE).split, false); // 1080 − 108 = 972
  assert.equal(quote('standard', 'oneoff', 12, AFTER).split, true);
});

test('monthly plans', () => {
  const s3 = quote('standard', 'monthly', 3, BEFORE);
  assert.equal(s3.total, 249);
  assert.equal(s3.earlyBird, 0);
  assert.equal(quote('premium', 'monthly', 3, BEFORE).total, 399);
  assert.equal(quote('standard', 'monthly', 6, BEFORE).total, 6 * 79);
  assert.equal(quote('premium', 'monthly', 10, BEFORE).total, 10 * 119);
  // Odd sizes snap to the nearest plan.
  assert.equal(quote('standard', 'monthly', 7, BEFORE).count, 6);
  assert.equal(quote('standard', 'monthly', 50, BEFORE).count, 10);
});

test('monthly rates go down with size and stay above the one-off floor', () => {
  for (const tier of ['standard', 'premium'] as const) {
    const rates = PRICING.monthly.sizes.map((s) => PRICING.monthly.perVideo[tier][s]);
    for (let i = 1; i < rates.length; i++) assert.ok(rates[i] < rates[i - 1]);
    assert.ok(rates.every((r) => r > PRICING.oneOff[tier].floor));
  }
});

test('excl. VAT', () => {
  assert.equal(exclVat(121), 100);
  assert.equal(exclVat(95), 78.51);
});

test('next price step', () => {
  assert.deepEqual(nextStep('standard', 5), { count: 10, perVideo: 90 });
  assert.deepEqual(nextStep('standard', 12), { count: 15, perVideo: 85 });
  assert.equal(nextStep('standard', 50), null);
});
