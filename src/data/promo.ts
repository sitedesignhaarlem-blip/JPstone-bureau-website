// Early-bird discount. Orders placed online before `until` (Dutch time) get `percent` off the total.
// After that date it stops by itself everywhere: the order form, the price calculator and the season
// message. Set percent to 0 to switch it off. The texts take the date and percentage from here.
export const EARLY_BIRD = {
  percent: 10,
  until: '2027-01-01T00:00:00+01:00',
};

export const earlyBirdActive = (now = Date.now()) => EARLY_BIRD.percent > 0 && now < Date.parse(EARLY_BIRD.until);

/** Discount in cents on a total in cents (rounded to whole cents). */
export const earlyBirdDiscount = (totalCents: number) => Math.round((totalCents * EARLY_BIRD.percent) / 100);

/** The end date written out in a language, in Dutch time ("1 januari 2027"). */
export const earlyBirdDate = (locale: string) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Amsterdam' }).format(new Date(EARLY_BIRD.until));

const label = { en: 'Early-bird discount', nl: 'Vroegboekkorting' };

/** The line saved at the top of the order note, so you, the customer and the admin see the discount. */
export const earlyBirdNote = (lang: 'en' | 'nl', discountCents: number, baseCents: number) => {
  const fmt = (c: number) => new Intl.NumberFormat(lang === 'nl' ? 'nl' : 'en-GB', { style: 'currency', currency: 'EUR' }).format(c / 100);
  return `${label[lang]} ${EARLY_BIRD.percent}%: −${fmt(discountCents)} (was ${fmt(baseCents)})`;
};

/** Reads that line back from a note: the discount line and the rest of the note apart. */
export const splitEarlyBirdNote = (note: string | null) => {
  const [first, ...rest] = (note ?? '').split('\n');
  const hit = first.startsWith(label.en) || first.startsWith(label.nl);
  return { discount: hit ? first : null, note: (hit ? rest.join('\n') : note ?? '').trim() || null };
};
