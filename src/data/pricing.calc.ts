// The price maths, as pure functions: no DOM, no dates read behind your back. The calculator, the
// price tables, the order API and the tests all use these, with the numbers from pricing.config.ts.
import { PRICING, type Billing, type Tier } from './pricing.config.ts';

const cents = (euros: number) => Math.round(euros * 100) / 100;

/** A whole number of videos between 1 and `max`, whatever comes in (text, NaN, negative). */
export function clampCount(value: unknown, max = Number.MAX_SAFE_INTEGER): number {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(n, max);
}

/** One-off price per video: base, minus `step` for every block from `discountFrom`, never below the floor. */
export function oneOffPricePerVideo(tier: Tier, count: number): number {
  const r = PRICING.oneOff[tier];
  const n = clampCount(count);
  const blocks = n >= r.discountFrom ? Math.floor(n / r.block) - Math.floor(r.discountFrom / r.block) + 1 : 0;
  return Math.max(r.floor, r.base - r.step * blocks);
}

export function earlyBirdActive(now: number): boolean {
  return PRICING.earlyBird.percent > 0 && now < Date.parse(PRICING.earlyBird.until);
}

/** The amount without VAT in it. */
export function exclVat(inclVat: number): number {
  return cents(inclVat / (1 + PRICING.vatRate));
}

export interface Quote {
  tier: Tier;
  billing: Billing;
  count: number;
  /** More than the online maximum: show "custom quote" and no totals. */
  custom: boolean;
  perVideo: number;
  /** Price per video × count, before the early-bird discount. */
  subtotal: number;
  earlyBird: number;
  /** What the customer pays (per order, or per month for a plan). */
  total: number;
  totalExclVat: number;
  /** Against the tier's one-off base price for the same number of videos. */
  saved: number;
  /** One-off only: whether the total is paid 50/50. */
  split: boolean;
}

/**
 * Price for a tier, billing mode and number of videos, at a moment in time (for the early-bird).
 * Monthly plans snap to the nearest plan size; the early-bird applies to one-off orders only.
 */
export function quote(tier: Tier, billing: Billing, count: number, now: number): Quote {
  const base = PRICING.oneOff[tier].base;
  if (billing === 'monthly') {
    const sizes = PRICING.monthly.sizes;
    const n = sizes.reduce((best, s) => (Math.abs(s - count) < Math.abs(best - count) ? s : best), sizes[0]);
    const perVideo = PRICING.monthly.perVideo[tier][n];
    const total = perVideo * n;
    return { tier, billing, count: n, custom: false, perVideo, subtotal: total, earlyBird: 0, total, totalExclVat: exclVat(total), saved: Math.max(0, base * n - total), split: false };
  }
  const n = clampCount(count);
  const custom = n > PRICING.oneOff.maxVideos;
  const perVideo = oneOffPricePerVideo(tier, n);
  if (custom) {
    return { tier, billing, count: n, custom, perVideo, subtotal: 0, earlyBird: 0, total: 0, totalExclVat: 0, saved: 0, split: false };
  }
  const subtotal = perVideo * n;
  const earlyBird = earlyBirdActive(now) ? cents((subtotal * PRICING.earlyBird.percent) / 100) : 0;
  const total = cents(subtotal - earlyBird);
  return {
    tier, billing, count: n, custom, perVideo, subtotal, earlyBird, total,
    totalExclVat: exclVat(total),
    saved: cents(base * n - total),
    split: total >= PRICING.splitPaymentFrom,
  };
}

/** The next quantity at which the one-off price per video drops, if there is one within the online maximum. */
export function nextStep(tier: Tier, count: number): { count: number; perVideo: number } | null {
  const now = oneOffPricePerVideo(tier, count);
  for (let n = clampCount(count) + 1; n <= PRICING.oneOff.maxVideos; n++) {
    const p = oneOffPricePerVideo(tier, n);
    if (p < now) return { count: n, perVideo: p };
  }
  return null;
}
