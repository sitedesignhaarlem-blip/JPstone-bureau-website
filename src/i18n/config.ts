// Languages and page addresses. English is the default and lives at the root (/),
// the others under their own prefix (/nl/, /de/, /fr/, /es/).

export const locales = ['en', 'nl', 'de', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
};

// <html lang> per language; English is written for a British audience.
export const htmlLang: Record<Locale, string> = { nl: 'nl', en: 'en-GB', de: 'de', fr: 'fr', es: 'es' };
// hreflang targets the language as a whole, so every English-speaking country gets the English pages.
export const hreflang: Record<Locale, string> = { nl: 'nl', en: 'en', de: 'de', fr: 'fr', es: 'es' };
export const ogLocale: Record<Locale, string> = { nl: 'nl_NL', en: 'en_GB', de: 'de_DE', fr: 'fr_FR', es: 'es_ES' };

export type PageId = 'home' | 'library' | 'how' | 'contact' | 'privacy' | 'terms' | 'cookies';
export const pageIds: PageId[] = ['home', 'library', 'how', 'contact', 'privacy', 'terms', 'cookies'];

// Page addresses per language. '' is the language's home page.
export const slugs: Record<Locale, Record<PageId, string>> = {
  nl: { home: '', library: 'bibliotheek', how: 'werkwijze', contact: 'contact', privacy: 'privacy', terms: 'voorwaarden', cookies: 'cookies' },
  en: { home: '', library: 'library', how: 'how-it-works', contact: 'contact', privacy: 'privacy', terms: 'terms', cookies: 'cookies' },
  de: { home: '', library: 'bibliothek', how: 'so-funktionierts', contact: 'kontakt', privacy: 'datenschutz', terms: 'agb', cookies: 'cookies' },
  fr: { home: '', library: 'bibliotheque', how: 'comment-ca-marche', contact: 'contact', privacy: 'confidentialite', terms: 'conditions', cookies: 'cookies' },
  es: { home: '', library: 'biblioteca', how: 'como-funciona', contact: 'contacto', privacy: 'privacidad', terms: 'condiciones', cookies: 'cookies' },
};

/** Address of a page in a language, always with a trailing slash. */
export function pagePath(locale: Locale, page: PageId, hash = ''): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const slug = slugs[locale][page];
  return `${prefix}/${slug ? `${slug}/` : ''}${hash}`;
}
