// Label of the light/dark switch in the menu, per language.
import type { Locale } from './config';

export const themeUI: Record<Locale, { dark: string }> = {
  en: { dark: 'Dark mode' },
  nl: { dark: 'Donkere modus' },
  de: { dark: 'Dunkelmodus' },
  fr: { dark: 'Mode sombre' },
  es: { dark: 'Modo oscuro' },
  hr: { dark: 'Tamni način' },
};
