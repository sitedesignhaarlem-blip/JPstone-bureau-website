// Every price, discount, plan size, date and VAT rate on the site. Change a number here and the
// price calculator, the price tables, the order form, the structured data and the e-mail text follow.
// All amounts are in euros, including VAT.

export type Tier = 'standard' | 'premium';
export type Billing = 'oneoff' | 'monthly';

export interface OneOffRule {
  /** Price per video before any volume discount. */
  base: number;
  /** Euros off per video for every extra block. */
  step: number;
  /** Videos per block. */
  block: number;
  /** The first discount starts at this many videos (5 → €95, 10 → €90, 15 → €85 …). */
  discountFrom: number;
  /** The price per video never goes below this. */
  floor: number;
}

export const PRICING = {
  currency: 'EUR',
  /** Used only to work out amounts without VAT; the site shows every price including VAT. */
  vatRate: 0.21,

  tiers: {
    standard: { seconds: 35, revisions: 2, formats: ['16:9'] },
    premium: { seconds: 55, revisions: 3, formats: ['16:9', '9:16'] },
  },

  oneOff: {
    standard: { base: 95, step: 5, block: 5, discountFrom: 10, floor: 50 } satisfies OneOffRule,
    premium: { base: 149, step: 5, block: 5, discountFrom: 10, floor: 100 } satisfies OneOffRule,
    /** Above this many videos the calculator shows "custom quote" instead of a total. */
    maxVideos: 100,
  },

  monthly: {
    /** Videos per month you can choose. Unused videos do not roll over. */
    sizes: [3, 6, 10],
    /** Price per video for each plan size. Extra videos on a plan cost the same per-video rate. */
    perVideo: {
      standard: { 3: 83, 6: 79, 10: 75 },
      premium: { 3: 133, 6: 127, 10: 119 },
    } as Record<Tier, Record<number, number>>,
    /** Months of notice to cancel. */
    noticeMonths: 1,
  },

  /** Early-bird discount on one-off orders placed before `until` (Dutch time). Set percent to 0 to switch it off. */
  earlyBird: { percent: 10, until: '2027-01-01T00:00:00+01:00' },

  /** One-off orders from this total (incl. VAT) pay 50% up front and 50% after delivery. */
  splitPaymentFrom: 1000,

  /** Turnaround, as words only: no delivery date is promised. */
  turnaroundWeeks: 3,
};
