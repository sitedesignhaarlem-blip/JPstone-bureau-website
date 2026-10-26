import en, { type UI } from './en';
import nl from './nl';
import de from './de';
import fr from './fr';
import es from './es';
import hr from './hr';
import pt from './pt';
import { htmlLang, type Locale } from './config';

export * from './config';
export type { UI };

const dictionaries: Record<Locale, UI> = { en, nl, de, fr, es, hr, pt };

/** All texts for one language. */
export function useTranslations(locale: Locale): UI {
  return dictionaries[locale];
}

// Date the legal pages were last checked. Update when the legal text changes.
const LEGAL_UPDATED = new Date('2026-10-26T12:00:00Z');

/** The legal "last updated" date, written the way each language writes dates. */
export function legalDate(locale: Locale): string {
  return formatDate(locale, LEGAL_UPDATED);
}

// When the text of the landing pages (yacht, hotel, pricing…) last changed. Shown on the page and
// sent as dateModified, so search engines and AI assistants can see the information is current.
// Change it whenever you change prices or other facts on those pages.
export const CONTENT_UPDATED = '2026-10-23';

/** A date written out in the language, e.g. "23 October 2026". */
export function formatDate(locale: Locale, date: Date | string): string {
  return new Intl.DateTimeFormat(htmlLang[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
}
