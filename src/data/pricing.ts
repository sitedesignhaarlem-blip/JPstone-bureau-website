// Price per video: €100, and €5 less for every 5 videos, never below €50.
export const BASE_PRICE = 100;
export const STEP = 5;
export const MIN_PRICE = 50;

export function pricePerVideo(count: number): number {
  return Math.max(MIN_PRICE, BASE_PRICE - STEP * Math.floor(count / 5));
}
