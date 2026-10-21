// German Insights articles. Each entry's id matches the body file src/insights/de/<id>.astro.
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
    slug: 'beste-inseratsfotos-fuer-ki-video',
    title: 'Welche Fotos eignen sich für KI-Video? · Still to Film',
    description: 'Checkliste für Inseratsfotos, die ein gutes KI-Walkthrough-Video ergeben: Auflösung, Schärfe, Licht, gerade Linien, Motivmix, Reihenfolge und Fehlerquellen.',
    h1: 'Welche Inseratsfotos eignen sich am besten für ein KI-Walkthrough-Video?',
    summary: 'Am besten funktionieren scharfe, gut belichtete Fotos in hoher Auflösung mit geraden Linien, einer Mischung aus Weitwinkel- und Detailaufnahmen und ohne Menschen, Wasserzeichen oder starke Filter, idealerweise die Originaldateien Ihres Fotografen. Ein KI-Video kann nur zeigen, was auf den Fotos ist: Je schärfer die Fotos, desto schärfer und ruhiger der Film.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'was-ein-yachtcharter-video-zeigen-sollte',
    title: 'Was ein Yachtcharter-Video zeigen sollte · Still to Film',
    description: 'Die Reihenfolge für ein Yachtcharter-Video von 60–90 Sekunden: außen, vor Anker, Deck, Salon, Pantry, Kabinen, Bad und Details, dazu 16:9 oder 9:16.',
    h1: 'Was ein Yachtcharter-Video zeigen sollte, und in welcher Reihenfolge',
    summary: 'Ein Yachtcharter-Video funktioniert am besten, wenn es dem Tag eines Gastes folgt: die Yacht in Fahrt und vor Anker, dann Deck, Salon, Pantry, Kabinen, Bad und einige Details, zum Schluss wieder draußen. In 60 bis 90 Sekunden heißt das ungefähr 10 bis 25 Sekunden pro Bereich, mit ruhigen Kamerabewegungen, in 16:9 für Websites und 9:16 für Reels und Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'ki-video-aus-fotos-oder-drehtag',
    title: 'KI-Video aus Fotos oder Drehtag? · Still to Film',
    description: 'KI-Video aus Fotos und Drehtag im Vergleich: Planung, Filmteam, Bearbeitungszeit, was jeder Weg zeigen kann, Korrekturen, Kosten und wann Drehen besser ist.',
    h1: 'KI-Video aus Fotos oder Drehtag: Zeit, Kosten und Grenzen im Vergleich',
    summary: 'Ein KI-Video aus Fotos braucht keinen Termin, kein Filmteam und kein gutes Wetter und kostet einen Festpreis von 50 bis 100 € pro Video inkl. USt., kann aber nur zeigen, was auf den Fotos ist, ohne Menschen und ohne aufgenommenen Ton. Ein Drehtag ist die bessere Wahl, wenn Sie Menschen, echten Ton, Interviews, Luftaufnahmen oder nie fotografierte Räume brauchen.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'ein-walkthrough-video-ueberall-nutzen',
    title: 'Ein Walkthrough-Video für alle Kanäle · Still to Film',
    description: 'Wo Sie die 16:9- und 9:16-Version eines Walkthrough-Videos nutzen: Website, Inseratsplattformen, YouTube, Reels, TikTok, Stories und WhatsApp, plus Dateitipps.',
    h1: 'So nutzen Sie ein Walkthrough-Video auf Ihrer Website, in Inseraten und auf Social Media',
    summary: 'Nutzen Sie die 16:9-Version auf Ihrer Website, auf Inseratsplattformen, die Video annehmen, und auf YouTube, und die 9:16-Version für Instagram Reels, TikTok, Stories und den WhatsApp-Status. Laden Sie die MP4-Dateien hoch, spielen Sie das Video auf Ihrer Website automatisch und stumm ab, beginnen Sie mit der stärksten Einstellung und prüfen Sie die aktuellen Regeln jeder Plattform, denn sie unterscheiden sich.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'hotelvideo-pro-zimmertyp-oder-ganzes-haus',
    title: 'Hotelvideo: pro Zimmertyp oder ganzes Haus? · Still to Film',
    description: 'Wann ein Hotel ein Video vom Haus, eines pro Zimmertyp oder beides braucht, wo jedes wirkt, was es je nach Menge kostet und was nach einer Renovierung gilt.',
    h1: 'Hotelvideos: eines pro Zimmertyp oder eines für das ganze Haus?',
    summary: 'Ein Video vom Haus passt zu Ihrer Startseite und zu Social Media, ein Video pro Zimmertyp passt zu Buchungsseiten, auf denen Gäste Zimmer vergleichen, und Sie können beides kombinieren. Jedes zählt als ein Video, fünf Zimmertypen und ein Video vom Haus sind also 6 × 95 € = 570 € inkl. USt., und ein renoviertes Zimmer braucht ein neues Video aus neuen Fotos.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
