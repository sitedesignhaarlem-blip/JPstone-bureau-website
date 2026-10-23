// Languages and page addresses. English is the default and lives at the root (/),
// the others under their own prefix (/nl/, /de/, /fr/, /es/, /hr/, /pt/).

export const locales = ['en', 'nl', 'de', 'fr', 'es', 'hr', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  hr: 'Hrvatski',
  pt: 'Português',
};

// <html lang> per language; English is written for a British audience, Portuguese for Portugal.
export const htmlLang: Record<Locale, string> = { nl: 'nl', en: 'en-GB', de: 'de', fr: 'fr', es: 'es', hr: 'hr', pt: 'pt-PT' };
// hreflang targets the language as a whole, so every English-speaking country gets the English pages.
export const hreflang: Record<Locale, string> = { nl: 'nl', en: 'en', de: 'de', fr: 'fr', es: 'es', hr: 'hr', pt: 'pt' };
export const ogLocale: Record<Locale, string> = { nl: 'nl_NL', en: 'en_GB', de: 'de_DE', fr: 'fr_FR', es: 'es_ES', hr: 'hr_HR', pt: 'pt_PT' };

export type PageId =
  | 'home' | 'library' | 'how' | 'contact' | 'privacy' | 'terms' | 'cookies'
  | 'yacht' | 'hotel' | 'rental' | 'aiVideo' | 'pricing' | 'faq';
export const pageIds: PageId[] = [
  'home', 'library', 'how', 'contact', 'privacy', 'terms', 'cookies',
  'yacht', 'hotel', 'rental', 'aiVideo', 'pricing', 'faq',
];

// Pages that exist in only some languages (the rest exist in all). A page is added to a
// language once its text is written in src/landing/<lang>/.
const pageLocales: Partial<Record<PageId, readonly Locale[]>> = {};

/** Whether a page exists in a language. */
export function hasPage(locale: Locale, page: PageId): boolean {
  return pageLocales[page]?.includes(locale) ?? true;
}

/** The languages a page exists in. */
export function localesFor(page: PageId): Locale[] {
  return locales.filter((l) => hasPage(l, page));
}

// Page addresses per language. '' is the language's home page.
export const slugs: Record<Locale, Record<PageId, string>> = {
  nl: { home: '', library: 'bibliotheek', how: 'werkwijze', contact: 'contact', privacy: 'privacy', terms: 'voorwaarden', cookies: 'cookies', yacht: 'yachtcharter-video', hotel: 'hotel-video', rental: 'vakantiehuis-video', aiVideo: 'ai-video-van-fotos', pricing: 'prijzen', faq: 'veelgestelde-vragen' },
  en: { home: '', library: 'library', how: 'how-it-works', contact: 'contact', privacy: 'privacy', terms: 'terms', cookies: 'cookies', yacht: 'yacht-charter-video', hotel: 'hotel-video', rental: 'vacation-rental-video', aiVideo: 'ai-video-from-photos', pricing: 'pricing', faq: 'faq' },
  de: { home: '', library: 'bibliothek', how: 'so-funktionierts', contact: 'kontakt', privacy: 'datenschutz', terms: 'agb', cookies: 'cookies', yacht: 'yachtcharter-video', hotel: 'hotel-video', rental: 'ferienwohnung-video', aiVideo: 'ki-video-aus-fotos', pricing: 'preise', faq: 'faq' },
  fr: { home: '', library: 'bibliotheque', how: 'comment-ca-marche', contact: 'contact', privacy: 'confidentialite', terms: 'conditions', cookies: 'cookies', yacht: 'video-location-yacht', hotel: 'video-hotel', rental: 'video-location-vacances', aiVideo: 'video-ia-a-partir-de-photos', pricing: 'tarifs', faq: 'faq' },
  es: { home: '', library: 'biblioteca', how: 'como-funciona', contact: 'contacto', privacy: 'privacidad', terms: 'condiciones', cookies: 'cookies', yacht: 'video-charter-yates', hotel: 'video-hotel', rental: 'video-alquiler-vacacional', aiVideo: 'video-ia-desde-fotos', pricing: 'precios', faq: 'preguntas-frecuentes' },
  hr: { home: '', library: 'galerija', how: 'kako-funkcionira', contact: 'kontakt', privacy: 'privatnost', terms: 'uvjeti', cookies: 'kolacici', yacht: 'video-charter-jahti', hotel: 'video-za-hotel', rental: 'video-za-apartmane', aiVideo: 'ai-video-od-fotografija', pricing: 'cijene', faq: 'cesta-pitanja' },
  pt: { home: '', library: 'galeria', how: 'como-funciona', contact: 'contacto', privacy: 'privacidade', terms: 'termos', cookies: 'cookies', yacht: 'video-charter-iates', hotel: 'video-hotel', rental: 'video-alojamento-local', aiVideo: 'video-ia-a-partir-de-fotografias', pricing: 'precos', faq: 'perguntas-frequentes' },
};

/** Address of a page in a language, always with a trailing slash. */
export function pagePath(locale: Locale, page: PageId, hash = ''): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const slug = slugs[locale][page];
  return `${prefix}/${slug ? `${slug}/` : ''}${hash}`;
}
