// Dutch Insights articles. Each entry's id matches the body file src/insights/nl/<id>.astro.
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

export const articles: ArticleMeta[] = [
  {
    id: 'PhotosForVideo',
    slug: 'beste-listingfotos-voor-ai-video',
    title: "Welke foto's werken het best voor AI-video? · Still to Film",
    description: "Een praktische checklist voor listingfoto's die een goede AI-walkthrough opleveren: resolutie, scherpte, licht, rechte lijnen, mix, volgorde en wat je vermijdt.",
    h1: "Welke listingfoto's werken het best voor een AI-walkthrough-video?",
    summary: "Scherpe, goed belichte foto's in hoge resolutie met rechte lijnen, een mix van brede shots en details, en zonder mensen, watermerken of zware filters werken het best, het liefst de originele bestanden van je fotograaf. Een AI-video kan alleen laten zien wat op de foto's staat, dus hoe scherper de foto's, hoe scherper en rustiger de film.",
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'wat-laat-je-zien-in-een-jachtchartervideo',
    title: 'Wat laat je zien in een jachtchartervideo? · Still to Film',
    description: 'De volgorde voor een jachtchartervideo van 60–90 seconden: buitenkant, voor anker, dek, salon, kombuis, hutten, badkamer en details, plus 16:9 tegenover 9:16.',
    h1: 'Wat laat je zien in een jachtchartervideo, en in welke volgorde?',
    summary: 'Een jachtchartervideo werkt het best als hij de dag van een gast volgt: het jacht onderweg en voor anker, dan het dek, de salon, de kombuis, de hutten, de badkamer en een paar details, en aan het eind weer buiten. In 60 tot 90 seconden is dat ongeveer 10 tot 25 seconden per deel, met rustige camerabewegingen, in 16:9 voor websites en 9:16 voor Reels en Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'ai-video-van-fotos-of-draaidag',
    title: "AI-video van foto's of een draaidag? · Still to Film",
    description: "AI-video van foto's en een draaidag vergeleken op planning, crew, levertijd, wat je kunt laten zien, revisies en kosten, en wanneer filmen de betere keuze is.",
    h1: "AI-video van foto's of een draaidag: tijd, kosten en grenzen vergeleken",
    summary: "AI-video van foto's vraagt geen datum, crew of goed weer en kost een vaste €50 tot €100 per video, inclusief btw, maar laat alleen zien wat op de foto's staat, zonder mensen en zonder opgenomen geluid. Een draaidag is de betere keuze als je mensen, echt geluid, interviews, luchtbeelden of ruimtes nodig hebt die nooit zijn gefotografeerd.",
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'een-walkthrough-video-overal-gebruiken',
    title: 'Eén walkthrough-video, overal gebruikt · Still to Film',
    description: 'Waar je de 16:9- en 9:16-versie van een walkthrough-video gebruikt: website, listingplatforms, YouTube, Reels, TikTok, Stories en WhatsApp, plus bestandstips.',
    h1: 'Zo gebruik je één walkthrough-video op je website, je listings en social media',
    summary: "Gebruik de 16:9-versie op je website, op listingplatforms die video accepteren en op YouTube, en de 9:16-versie voor Instagram Reels, TikTok, Stories en je WhatsApp-status. Upload de mp4-bestanden, laat de video op je website zonder geluid automatisch afspelen, begin met je sterkste shot en check de actuele regels van elk platform, want die verschillen.",
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'hotelvideo-per-kamertype-of-hele-hotel',
    title: 'Hotelvideo: per kamertype of het hele hotel? · Still to Film',
    description: 'Eén video van het hele hotel, één per kamertype of allebei: waar elk het best werkt, wat het kost per aantal en wat je doet na een verbouwing.',
    h1: "Hotelvideo's: één per kamertype of één van het hele hotel?",
    summary: "Eén video van het hele hotel past bij je homepage en social media, en een video per kamertype past bij boekingspagina's waar gasten kamers vergelijken. Je kunt ze ook combineren. Elke video telt als één video, dus vijf kamertypes en één video van het hele hotel zijn 6 × €95 = €570, inclusief btw, en een verbouwde kamer vraagt om een nieuwe video van nieuwe foto's.",
    date: '2026-10-21',
    readMinutes: 5,
  },
];
