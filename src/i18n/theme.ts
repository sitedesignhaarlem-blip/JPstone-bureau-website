// Small labels for controls without visible text: the light/dark switch and the scroll arrow.
import type { Locale } from './config';

export const themeUI: Record<Locale, { dark: string; more: string }> = {
  en: { dark: 'Dark mode', more: 'Scroll to the next section' },
  nl: { dark: 'Donkere modus', more: 'Scroll naar het volgende deel' },
  de: { dark: 'Dunkelmodus', more: 'Zum nächsten Abschnitt scrollen' },
  fr: { dark: 'Mode sombre', more: 'Faire défiler vers la section suivante' },
  es: { dark: 'Modo oscuro', more: 'Desplázate a la siguiente sección' },
  pt: { dark: 'Modo escuro', more: 'Deslocar para a secção seguinte' },
  hr: { dark: 'Tamni način', more: 'Pomaknite se na sljedeći dio' },
};
