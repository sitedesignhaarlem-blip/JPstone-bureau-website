// Texts for the price calculator extras on the home page: early-bird discount, savings, the next
// price step, the recommended package and the reassurance list. {p} = percentage, {date} = end date.
import type { Locale } from './config';

export interface PromoUI {
  badge: string;
  early: string;
  withDiscount: string;
  savings: string; // {amount}
  nudge: string; // {count} {price}
  reassure: [string, string, string];
  terms: string; // {date}
  banner: string; // season message during the early-bird period, {p} {date}
}

export const promoUI: Record<Locale, PromoUI> = {
  en: {
    badge: 'Recommended',
    early: 'Early-bird discount {p}%',
    withDiscount: 'Total with discount',
    savings: 'You save {amount} compared with single videos.',
    nudge: 'At {count} videos you pay {price} per video.',
    reassure: ['Free sample first', '2 revision rounds included', 'Not as quoted? Money back'],
    terms: 'Early-bird discount for orders placed on this site before {date}.',
    banner: 'Early-bird discount: order before {date} and get {p}% off. Your videos are ready well before the season.',
  },
  nl: {
    badge: 'Aanbevolen',
    early: 'Vroegboekkorting {p}%',
    withDiscount: 'Totaal met korting',
    savings: "Je bespaart {amount} ten opzichte van losse video's.",
    nudge: "Bij {count} video's betaal je {price} per video.",
    reassure: ['Eerst een gratis proefvideo', '2 revisierondes inbegrepen', 'Klopt het niet met de offerte? Geld terug'],
    terms: 'Vroegboekkorting voor bestellingen die vóór {date} via de site zijn geplaatst.',
    banner: "Vroegboekkorting: bestel vóór {date} en krijg {p}% korting. Je video's staan ruim voor het seizoen klaar.",
  },
  de: {
    badge: 'Empfohlen',
    early: 'Frühbucherrabatt {p} %',
    withDiscount: 'Gesamt mit Rabatt',
    savings: 'Sie sparen {amount} gegenüber Einzelvideos.',
    nudge: 'Ab {count} Videos zahlen Sie {price} pro Video.',
    reassure: ['Zuerst ein kostenloses Probevideo', '2 Korrekturrunden inklusive', 'Nicht wie angeboten? Geld zurück'],
    terms: 'Frühbucherrabatt für Bestellungen, die vor dem {date} über diese Website aufgegeben werden.',
    banner: 'Frühbucherrabatt: Bestellen Sie vor dem {date} und erhalten Sie {p} % Rabatt. Ihre Videos sind lange vor der Saison fertig.',
  },
  fr: {
    badge: 'Recommandé',
    early: 'Remise early bird {p} %',
    withDiscount: 'Total après remise',
    savings: 'Vous économisez {amount} par rapport à des vidéos à l’unité.',
    nudge: 'À partir de {count} vidéos, vous payez {price} par vidéo.',
    reassure: ['D’abord un extrait gratuit', '2 séries de retouches incluses', 'Pas conforme au devis ? Remboursé'],
    terms: 'Remise early bird pour les commandes passées sur ce site avant le {date}.',
    banner: 'Remise early bird : commandez avant le {date} et obtenez {p} % de réduction. Vos vidéos sont prêtes bien avant la saison.',
  },
  es: {
    badge: 'Recomendado',
    early: 'Descuento anticipado {p} %',
    withDiscount: 'Total con descuento',
    savings: 'Ahorras {amount} frente a vídeos sueltos.',
    nudge: 'Con {count} vídeos pagas {price} por vídeo.',
    reassure: ['Primero un vídeo de muestra gratis', '2 rondas de revisión incluidas', '¿No es lo presupuestado? Te devolvemos el dinero'],
    terms: 'Descuento anticipado para pedidos hechos en esta web antes del {date}.',
    banner: 'Descuento anticipado: pide antes del {date} y obtén un {p} % de descuento. Tus vídeos estarán listos mucho antes de la temporada.',
  },
  hr: {
    badge: 'Preporučeno',
    early: 'Popust za ranu narudžbu {p} %',
    withDiscount: 'Ukupno s popustom',
    savings: 'Štedite {amount} u odnosu na pojedinačne videe.',
    nudge: 'Uz {count} videa plaćate {price} po videu.',
    reassure: ['Najprije besplatni ogledni video', '2 kruga izmjena uključena', 'Nije kao u ponudi? Novac natrag'],
    terms: 'Popust za narudžbe putem ove stranice prije {date}.',
    banner: 'Popust za ranu narudžbu: naručite prije {date} i ostvarite {p} % popusta. Vaši videi bit će gotovi puno prije sezone.',
  },
  pt: {
    badge: 'Recomendado',
    early: 'Desconto antecipado {p} %',
    withDiscount: 'Total com desconto',
    savings: 'Poupa {amount} face a vídeos avulso.',
    nudge: 'Com {count} vídeos paga {price} por vídeo.',
    reassure: ['Primeiro um vídeo de amostra grátis', '2 rondas de revisão incluídas', 'Não corresponde ao orçamento? Devolvemos o dinheiro'],
    terms: 'Desconto antecipado para encomendas feitas neste site antes de {date}.',
    banner: 'Desconto antecipado: encomende antes de {date} e obtenha {p} % de desconto. Os seus vídeos ficam prontos muito antes da época.',
  },
};
