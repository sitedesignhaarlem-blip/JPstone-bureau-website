// All French questions and answers in one place. The home page FAQ, the landing pages, the FAQ
// page and the FAQPage structured data all read from here, so an answer is never written twice.
import fr from '../../i18n/fr';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = fr.faq.items;

export const q = {
  owns,
  fast,
  revisions,
  formats,
  photos,
  ai,
  skills,
  sample,
  access: {
    q: 'Devez-vous accéder au yacht ou à l’hôtel ?',
    a: 'Non. Nous travaillons uniquement à partir des photos que vous avez déjà. Personne ne doit monter à bord ni visiter les lieux.',
  },
  fleet: {
    q: 'Pouvez-vous réaliser des vidéos pour toute une flotte ?',
    a: 'Oui. Chaque yacht a sa propre vidéo, dans un même style calme, pour que la flotte paraisse cohérente sur votre site. Nous réalisons jusqu’à 2 vidéos par jour, et la date de livraison est convenue dans le devis.',
  },
  roomTypes: {
    q: 'Une vidéo pour tout l’hôtel, ou une par type de chambre ?',
    a: 'Les deux sont possibles. Certains hôtels veulent une vidéo de tout l’établissement, d’autres une par type de chambre pour que chaque page de réservation ait la sienne. Chaque vidéo est facturée comme une vidéo.',
  },
  update: {
    q: 'Pouvez-vous réaliser une nouvelle vidéo après une rénovation ou un changement de chambres ?',
    a: 'Oui. Envoyez les nouvelles photos et nous réalisons une nouvelle vidéo. De nouvelles photos comptent comme une nouvelle vidéo, pas comme une révision.',
  },
  limits: {
    q: 'La vidéo peut-elle montrer des pièces ou des vues absentes des photos ?',
    a: 'Non. La vidéo ne peut montrer que ce qui est sur vos photos. Si une cabine, une chambre ou une vue n’a jamais été photographiée, elle ne sera pas dans le film. Nous n’ajoutons ni personnes, ni meubles, ni vues.',
  },
  referral: {
    q: "Avez-vous une récompense de parrainage ?",
    a: "Oui. Si vous recommandez une autre entreprise et qu’elle passe commande, vous recevez une vidéo gratuite sur votre prochaine commande. Sans limite : une vidéo gratuite pour chaque entreprise recommandée.",
  },
  vat: {
    q: 'Les prix sont-ils TTC ?',
    a: 'Oui. Tous les prix incluent la TVA, et le devis le précise toujours.',
  },
  payment: {
    q: 'Quand dois-je payer ?',
    a: "Les commandes de moins de 1 000 € se paient en totalité par virement bancaire avant que nous commencions. À partir de 1 000 €, vous payez 50 % par virement à la commande et 50 % après la livraison. Vous recevez une facture pour chaque paiement.",
  },
  volume: {
    q: 'Comment fonctionne le prix dégressif ?',
    a: 'Une seule vidéo coûte 100 €. À partir de 5 vidéos, le prix est de 95 € par vidéo, puis il baisse de 5 € toutes les 5 vidéos, jusqu’à 50 € par vidéo. Plus de 100 vidéos : nous établissons un devis.',
  },
  platforms: {
    q: "Puis-je utiliser la vidéo sur Airbnb ou Booking.com ?",
    a: "Les plateformes diffèrent quant à la possibilité et à l’endroit où l’on peut mettre en ligne une vidéo, et leurs règles changent : vérifiez ce que votre propre annonce permet. Vous pouvez toujours utiliser la vidéo sur votre propre site et sur les réseaux sociaux, ainsi que sur toute plateforme qui accepte la vidéo. Vous recevez des fichiers MP4 en 16:9 et 9:16.",
  },
  units: {
    q: "J’ai plusieurs appartements dans un même immeuble. Comment est-ce facturé ?",
    a: "Chaque vidéo est facturée comme une vidéo, et le prix dégressif s’applique à toute la commande. Six appartements avec chacun sa vidéo font 6 × 95 € = 570 €, TVA incluse. Si plusieurs appartements sont identiques, une vidéo pour ce type d’appartement peut suffire.",
  },
  listingLink: {
    q: "Pouvez-vous travailler à partir de mon annonce Airbnb ou Booking.com ?",
    a: "Oui. Envoyez le lien de votre annonce et nous travaillons à partir des photos qui y figurent. Les fichiers originaux de votre photographe donnent un résultat plus net que des images enregistrées depuis une plateforme : envoyez-les aussi si vous les avez.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Propriété et droits', items: [q.owns] },
  { title: 'Livraison', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formats', items: [q.formats, q.roomTypes, q.platforms] },
  { title: 'Les photos nécessaires', items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'IA et qualité', items: [q.ai, q.limits] },
  { title: 'Prix et paiement', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
