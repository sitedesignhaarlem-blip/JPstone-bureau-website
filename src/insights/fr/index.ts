// French Insights articles. Each entry's id matches the body file src/insights/fr/<id>.astro.
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
    slug: 'meilleures-photos-annonce-pour-video-ia',
    title: 'Quelles photos pour une vidéo IA ? · Still to Film',
    description: 'Une liste de contrôle pour des photos d’annonce qui font une bonne vidéo IA : résolution, netteté, lumière, lignes droites, plans, ordre, ce qu’il faut éviter.',
    h1: 'Quelles photos d’annonce conviennent le mieux à une vidéo de visite IA ?',
    summary: 'Des photos nettes, bien éclairées et en haute résolution, avec des lignes droites, un mélange de plans larges et de détails, sans personnes, filigranes ni filtres prononcés, donnent le meilleur résultat, idéalement les fichiers originaux de votre photographe. Une vidéo IA ne peut montrer que ce qui est sur les photos : plus les photos sont nettes, plus le film est net et calme.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'que-montrer-dans-une-video-de-location-de-yacht',
    title: 'Que montrer dans une vidéo de location de yacht · Still to Film',
    description: 'Le déroulé d’une vidéo de location de yacht de 60 à 90 secondes : extérieur, mouillage, pont, salon, cuisine, cabines, salle de bain, détails, et 16:9 ou 9:16.',
    h1: 'Que montrer dans une vidéo de location de yacht, et dans quel ordre',
    summary: 'Une vidéo de location de yacht fonctionne le mieux quand elle suit la journée d’un client : le yacht en navigation et au mouillage, puis le pont, le salon, la cuisine, les cabines, la salle de bain et quelques détails, pour finir de nouveau à l’extérieur. En 60 à 90 secondes, cela fait environ 10 à 25 secondes par zone, avec des mouvements de caméra calmes, en 16:9 pour les sites web et en 9:16 pour les Reels et les Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'video-ia-a-partir-de-photos-ou-tournage',
    title: 'Vidéo IA à partir de photos ou tournage ? · Still to Film',
    description: 'Vidéo IA à partir de photos et journée de tournage comparées : organisation, équipe, délai, ce que chacune montre, révisions, coût, et quand filmer vaut mieux.',
    h1: 'Vidéo IA à partir de photos ou journée de tournage : temps, coût et limites comparés',
    summary: 'La vidéo IA à partir de photos ne demande ni date, ni équipe, ni beau temps, et coûte un prix fixe de 50 € à 100 € par vidéo, TVA incluse, mais elle ne peut montrer que ce qui est sur les photos, sans personnes ni son enregistré. Une journée de tournage est le meilleur choix quand il vous faut des personnes, du vrai son, des interviews, des images aériennes ou des espaces qui n’ont jamais été photographiés.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'une-video-de-visite-utilisee-partout',
    title: 'Une vidéo de visite, utilisée partout · Still to Film',
    description: 'Où utiliser les versions 16:9 et 9:16 d’une vidéo de visite : site web, plateformes d’annonces, YouTube, Reels, TikTok, Stories, WhatsApp, et conseils fichiers.',
    h1: 'Comment utiliser une seule vidéo de visite sur votre site, vos annonces et les réseaux sociaux',
    summary: 'Utilisez la version 16:9 sur votre site, sur les plateformes d’annonces qui acceptent la vidéo et sur YouTube, et la version 9:16 pour les Reels Instagram, TikTok, les Stories et le statut WhatsApp. Publiez les fichiers MP4, lancez la vidéo automatiquement sans le son sur votre site, ouvrez sur le plan le plus fort et vérifiez les règles actuelles de chaque plateforme, car elles diffèrent.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'video-hotel-par-type-de-chambre-ou-etablissement',
    title: 'Vidéo d’hôtel : par chambre ou établissement ? · Still to Film',
    description: 'Quand un hôtel a besoin d’une vidéo de l’établissement, d’une par type de chambre ou des deux, où chacune sert, le prix selon le volume, et après rénovation.',
    h1: 'Vidéos d’hôtel : une par type de chambre ou une pour tout l’établissement ?',
    summary: 'Une vidéo de l’établissement convient à votre page d’accueil et aux réseaux sociaux, tandis qu’une vidéo par type de chambre convient aux pages de réservation où les clients comparent les chambres, et vous pouvez combiner les deux. Chacune compte comme une vidéo : cinq types de chambre et une vidéo de l’établissement font 6 × 95 € = 570 €, TVA incluse, et une chambre rénovée demande une nouvelle vidéo à partir de nouvelles photos.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
