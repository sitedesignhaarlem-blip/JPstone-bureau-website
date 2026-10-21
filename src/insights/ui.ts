// Texts around the articles (index page, dates, links), per language.
import type { Locale } from '../i18n';

export interface InsightsUI {
  name: string; // section name in the footer and breadcrumbs
  title: string; // index <title>
  description: string;
  h1: string;
  lead: string;
  minutes: string; // "{n} min read"
  published: string;
  all: string; // link back to all articles
  read: string; // link on a card
}

export const insightsUI: Record<Locale, InsightsUI> = {
  en: {
    name: 'Insights',
    title: 'Insights: video for yacht charters and hotels · Still to Film',
    description: 'Practical articles about walkthrough video for yacht charters, hotels and holiday homes: which photos work, what to show and where to use it.',
    h1: 'Insights',
    lead: 'Practical answers about walkthrough video made from listing photos: which photos work, what to show, and where to use the result.',
    minutes: '{n} min read',
    published: 'Published',
    all: 'All articles',
    read: 'Read the article',
  },
  nl: {
    name: 'Inzichten',
    title: "Inzichten: video voor jachtcharters en hotels · Still to Film",
    description: "Praktische artikelen over walkthrough-video voor jachtcharters, hotels en vakantiehuizen: welke foto's werken, wat je laat zien en waar je het gebruikt.",
    h1: 'Inzichten',
    lead: "Praktische antwoorden over walkthrough-video van listingfoto's: welke foto's werken, wat je laat zien en waar je het resultaat gebruikt.",
    minutes: '{n} min lezen',
    published: 'Gepubliceerd',
    all: 'Alle artikelen',
    read: 'Lees het artikel',
  },
  de: {
    name: 'Ratgeber',
    title: 'Ratgeber: Video für Yachtcharter und Hotels · Still to Film',
    description: 'Praxisartikel zu Walkthrough-Videos für Yachtcharter, Hotels und Ferienwohnungen: welche Fotos funktionieren, was man zeigt und wo man es einsetzt.',
    h1: 'Ratgeber',
    lead: 'Praktische Antworten zu Walkthrough-Videos aus Inseratsfotos: welche Fotos funktionieren, was man zeigt und wo man das Ergebnis einsetzt.',
    minutes: '{n} Min. Lesezeit',
    published: 'Veröffentlicht',
    all: 'Alle Artikel',
    read: 'Artikel lesen',
  },
  fr: {
    name: 'Conseils',
    title: 'Conseils : vidéo pour location de yachts et hôtels · Still to Film',
    description: 'Articles pratiques sur la vidéo de visite pour loueurs de yachts, hôtels et locations de vacances : quelles photos, quoi montrer et où l’utiliser.',
    h1: 'Conseils',
    lead: 'Des réponses pratiques sur la vidéo de visite réalisée à partir de photos d’annonce : quelles photos fonctionnent, quoi montrer et où l’utiliser.',
    minutes: '{n} min de lecture',
    published: 'Publié le',
    all: 'Tous les articles',
    read: 'Lire l’article',
  },
  es: {
    name: 'Guías',
    title: 'Guías: vídeo para chárter de yates y hoteles · Still to Film',
    description: 'Artículos prácticos sobre vídeo de recorrido para chárter de yates, hoteles y alquiler vacacional: qué fotos funcionan, qué mostrar y dónde usarlo.',
    h1: 'Guías',
    lead: 'Respuestas prácticas sobre vídeos de recorrido hechos con fotos de anuncio: qué fotos funcionan, qué mostrar y dónde usar el resultado.',
    minutes: '{n} min de lectura',
    published: 'Publicado',
    all: 'Todos los artículos',
    read: 'Leer el artículo',
  },
  hr: {
    name: 'Savjeti',
    title: 'Savjeti: video za charter jahti i hotele · Still to Film',
    description: 'Praktični članci o video obilascima za charter jahti, hotele i apartmane: koje fotografije funkcioniraju, što prikazati i gdje to koristiti.',
    h1: 'Savjeti',
    lead: 'Praktični odgovori o video obilascima izrađenima od fotografija iz oglasa: koje fotografije funkcioniraju, što prikazati i gdje koristiti rezultat.',
    minutes: '{n} min čitanja',
    published: 'Objavljeno',
    all: 'Svi članci',
    read: 'Pročitajte članak',
  },
};
