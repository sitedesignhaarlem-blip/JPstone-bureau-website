// Texts for the Stillpost block at the bottom of the home page. Stillpost (stillpost.nl) is the
// sister business for still posts and Meta ads; its site is in Dutch and English.
import type { Locale } from './config';

export const stillpostUI: Record<Locale, { title: string; text: string; cta: string }> = {
  en: {
    title: 'Still posts for social media too?',
    text: 'Stillpost turns your product photos into posts and Meta ads for social media. Made by the team behind Still to Film.',
    cta: 'Take a look at Stillpost',
  },
  nl: {
    title: 'Ook stilstaande posts voor social media?',
    text: "Stillpost maakt van je productfoto's posts en Meta-ads voor social media. Van hetzelfde team als Still to Film.",
    cta: 'Neem een kijkje bij Stillpost',
  },
  de: {
    title: 'Auch Standbild-Posts für Social Media?',
    text: 'Stillpost macht aus Ihren Produktfotos Posts und Meta-Anzeigen für Social Media. Vom Team hinter Still to Film.',
    cta: 'Schauen Sie bei Stillpost vorbei',
  },
  fr: {
    title: 'Des posts fixes pour les réseaux sociaux ?',
    text: 'Stillpost transforme vos photos produit en posts et publicités Meta pour les réseaux sociaux. Par l’équipe de Still to Film.',
    cta: 'Découvrir Stillpost',
  },
  es: {
    title: '¿También publicaciones fijas para redes sociales?',
    text: 'Stillpost convierte tus fotos de producto en publicaciones y anuncios de Meta para redes sociales. Del mismo equipo que Still to Film.',
    cta: 'Echa un vistazo a Stillpost',
  },
  hr: {
    title: 'Trebate i statične objave za društvene mreže?',
    text: 'Stillpost od vaših fotografija proizvoda izrađuje objave i Meta oglase za društvene mreže. Od istog tima kao Still to Film.',
    cta: 'Pogledajte Stillpost',
  },
  pt: {
    title: 'Também publicações fixas para redes sociais?',
    text: 'A Stillpost transforma as suas fotografias de produto em publicações e anúncios Meta para redes sociais. Da mesma equipa da Still to Film.',
    cta: 'Conheça a Stillpost',
  },
};

/** Stillpost's site: Dutch for Dutch visitors, English for everyone else. */
export const stillpostUrl = (lang: Locale) => (lang === 'nl' ? 'https://stillpost.nl/' : 'https://stillpost.nl/en');
