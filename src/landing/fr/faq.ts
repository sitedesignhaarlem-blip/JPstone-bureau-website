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
  vat: {
    q: 'Les prix sont-ils TTC ?',
    a: 'Non. Tous les prix sont hors TVA, et le devis le précise toujours.',
  },
  payment: {
    q: 'Quand dois-je payer ?',
    a: 'Nous facturons après la livraison, avec un délai de paiement de 14 jours. Pour les commandes plus importantes, nous pouvons demander un acompte ; le devis le précisera.',
  },
  volume: {
    q: 'Comment fonctionne le prix dégressif ?',
    a: 'Une seule vidéo coûte 100 €. À partir de 5 vidéos, le prix est de 95 € par vidéo, puis il baisse de 5 € toutes les 5 vidéos, jusqu’à 50 € par vidéo. Plus de 100 vidéos : nous établissons un devis.',
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Propriété et droits', items: [q.owns] },
  { title: 'Livraison', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formats', items: [q.formats, q.roomTypes] },
  { title: 'Les photos nécessaires', items: [q.photos, q.access, q.skills] },
  { title: 'IA et qualité', items: [q.ai, q.limits] },
  { title: 'Prix et paiement', items: [q.volume, q.vat, q.payment, q.sample] },
];
