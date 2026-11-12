// The Standard one-off ladder, for the parts of the site that show one price per video (home
// calculator, price tables, order form). The numbers live in pricing.config.ts.
import { PRICING } from './pricing.config.ts';
import { oneOffPricePerVideo } from './pricing.calc.ts';

export const BASE_PRICE = PRICING.oneOff.standard.base;
export const MIN_PRICE = PRICING.oneOff.standard.floor;

export function pricePerVideo(count: number): number {
  return oneOffPricePerVideo('standard', count);
}
