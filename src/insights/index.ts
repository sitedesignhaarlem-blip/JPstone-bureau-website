// Articles under /insights/ (and /<lang>/insights/). Each language has its own folder with an
// index.ts (titles, slugs, dates) and one .astro file per article body, named after its id.
// An article exists in a language once both are there; the language versions link to each other.
import { defaultLocale, locales, type Locale } from '../i18n';

export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  date: string;
  readMinutes: number;
}

const metas = import.meta.glob<{ articles: ArticleMeta[] }>('./*/index.ts', { eager: true });
const bodies = import.meta.glob<{ default: any }>('./*/*.astro', { eager: true });

export interface Article extends ArticleMeta {
  lang: Locale;
  Body: any;
}

/** All articles in one language, newest first. */
export function articlesFor(lang: Locale): Article[] {
  const list = metas[`./${lang}/index.ts`]?.articles ?? [];
  return list
    .filter((a) => bodies[`./${lang}/${a.id}.astro`])
    .map((a) => ({ ...a, lang, Body: bodies[`./${lang}/${a.id}.astro`].default }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const insightsBase = (lang: Locale) => `${lang === defaultLocale ? '' : `/${lang}`}/insights/`;
export const articlePath = (a: Pick<Article, 'lang' | 'slug'>) => `${insightsBase(a.lang)}${a.slug}/`;

/** Languages that have at least one article. */
export const insightLocales = (): Locale[] => locales.filter((l) => articlesFor(l).length > 0);

/** The same article in every language it exists in: language → address. */
export function articleAlternates(id: string): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of locales) {
    const a = articlesFor(l).find((x) => x.id === id);
    if (a) out[l] = articlePath(a);
  }
  return out;
}

/** The index page in every language that has articles. */
export function indexAlternates(): Partial<Record<Locale, string>> {
  return Object.fromEntries(insightLocales().map((l) => [l, insightsBase(l)]));
}
