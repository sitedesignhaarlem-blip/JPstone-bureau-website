import en, { type UI } from './en';
import nl from './nl';
import de from './de';
import fr from './fr';
import es from './es';
import type { Locale } from './config';

export * from './config';
export type { UI };

const dictionaries: Record<Locale, UI> = { en, nl, de, fr, es };

/** All texts for one language. */
export function useTranslations(locale: Locale): UI {
  return dictionaries[locale];
}

// Date the legal pages were last checked. Update when the legal text changes.
const LEGAL_UPDATED = new Date('2026-10-17T12:00:00Z');

/** The legal "last updated" date, written the way each language writes dates. */
export function legalDate(locale: Locale): string {
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(LEGAL_UPDATED);
}
