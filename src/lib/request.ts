// Small helpers for the account pages.
import type { AstroGlobal } from 'astro';

/** The visitor's IP address as Vercel reports it; used only (hashed) for attempt limits. */
export function clientIp(astro: Pick<AstroGlobal, 'clientAddress'>): string {
  try {
    return astro.clientAddress || 'unknown';
  } catch {
    return 'unknown';
  }
}

export const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) && v.length <= 200;
