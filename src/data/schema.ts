// Structured data (JSON-LD, schema.org) for every page. Base.astro picks the blocks a page needs.
// Only facts from the site go in here: no ratings, reviews or numbers that are not on the page.
import { SITE_URL, site } from './site';
import { MIN_PRICE, BASE_PRICE } from './pricing';
import { hreflang, locales, pagePath, useTranslations, type Locale, type PageId } from '../i18n';

const abs = (path: string) => new URL(path, SITE_URL).href;

/** Length of each clip in seconds (from ffprobe), for VideoObject.duration. */
const clipSeconds: Record<string, number> = {
  'southern-cross-varen-zij': 5,
  'southern-cross-drone-anker': 3,
  'southern-cross-achterdek': 3,
  'southern-cross-kombuis': 3,
  'southern-cross-salon': 5,
  'southern-cross-hut': 3,
};
/** Date the clips were first published on this site. */
const CLIPS_PUBLISHED = '2026-10-17';

export const ids = {
  organization: abs('/#organization'),
  website: abs('/#website'),
  service: abs('/#service'),
};

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: site.name,
    url: abs('/'),
    logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
    image: abs('/og.jpg'),
    email: site.email,
    telephone: site.phoneE164,
    address: { '@type': 'PostalAddress', addressCountry: site.country },
    areaServed: 'Worldwide',
    // TODO(owner): add profile URLs (LinkedIn, YouTube, Google Business Profile) to sameAs once they exist.
    // TODO(owner): add vatID and the KvK number (identifier) once registered.
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: abs('/'),
    name: site.name,
    inLanguage: locales.map((l) => hreflang[l]),
    publisher: { '@id': ids.organization },
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Service, described with the page's own title and description when given. */
export function service(lang: Locale, page?: { name: string; description: string; url: string }) {
  const t = useTranslations(lang);
  return {
    '@type': 'Service',
    '@id': page ? `${page.url}#service` : ids.service,
    serviceType: 'Photo-to-video walkthrough production',
    name: page?.name ?? t.meta.homeTitle,
    description: page?.description ?? t.meta.homeDesc,
    provider: { '@id': ids.organization },
    areaServed: 'Worldwide',
    audience: { '@type': 'BusinessAudience', audienceType: 'Yacht charter companies and boutique hotels' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: MIN_PRICE,
      highPrice: BASE_PRICE,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        minPrice: MIN_PRICE,
        maxPrice: BASE_PRICE,
        unitText: 'video',
        valueAddedTaxIncluded: true,
      },
    },
  };
}

/** FAQPage from the same items the page shows, so both always match. */
export function faqPage(lang: Locale, url: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: hreflang[lang],
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function videoObject(lang: Locale, file: string) {
  const t = useTranslations(lang);
  const shot = t.shots[file as keyof typeof t.shots];
  return {
    '@type': 'VideoObject',
    name: `${shot.title} · Southern Cross`,
    description: shot.alt,
    thumbnailUrl: abs(`/media/${file}.jpg`),
    contentUrl: abs(`/media/${file}.mp4`),
    uploadDate: CLIPS_PUBLISHED,
    duration: `PT${clipSeconds[file] ?? 5}S`,
    inLanguage: hreflang[lang],
    publisher: { '@id': ids.organization },
  };
}

/** Name of a page as shown in the menu or footer. */
export function pageName(lang: Locale, page: PageId): string {
  const t = useTranslations(lang);
  switch (page) {
    case 'home':
    case 'library':
    case 'how':
    case 'contact':
      return t.nav[page];
    case 'privacy':
    case 'terms':
    case 'cookies':
      return t.footer[page];
    default:
      return t.pages[page];
  }
}

export function breadcrumbs(lang: Locale, page: PageId) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: pageName(lang, 'home'), item: abs(pagePath(lang, 'home')) },
      { '@type': 'ListItem', position: 2, name: pageName(lang, page), item: abs(pagePath(lang, page)) },
    ],
  };
}
