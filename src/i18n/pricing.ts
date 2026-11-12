// Texts for the pricing page: Standard vs Premium, the price calculator, the 3D teaser and the
// pricing questions. Numbers are never written here: they come from src/data/pricing.config.ts
// through placeholders such as {price}, {s} (seconds), {r} (revision rounds) and {n}.
import type { Locale } from './config';

export interface PricingUI {
  page: { title: string; description: string; eyebrow: string; h1: string; summary: string; faqTitle: string };
  compare: {
    title: string;
    standardName: string;
    premiumName: string;
    standardTag: string;
    premiumTag: string;
    volume: string; // {price}
    perVideo: string;
    orMonthly: string; // {price} {n}
    everything: string;
    standard: string[];
    premium: string[];
  };
  calc: {
    title: string;
    tier: string;
    billing: string;
    oneOff: string;
    monthly: string;
    quantity: string;
    perMonth: string;
    perVideo: string;
    subtotal: string;
    early: string; // {p}
    total: string;
    totalMonth: string;
    inclVat: string;
    saved: string; // {amount}
    nudge: string; // {count} {price}
    custom: string;
    customText: string; // {max}
    earlyTerms: string; // {date}
    planTerms: string; // {n}
    noRollover: string;
    extra: string; // {price}
    payFull: string;
    paySplit: string;
    other: string; // {tier}
    cta: string;
    ctaNote: string; // {r}
    order: string;
    message: string; // {tier} {billing} {count} {total}
    videos1: string;
    videos: string; // {n}
    videosMonth: string; // {n}
  };
  soon: { badge: string; title: string; text: string; cta: string; subject: string };
  referral: { title: string; text: string };
  faq: { q: string; a: string }[]; // {weeks} {rs} {rp} {sizes} {price} {n}
}

export const pricingUI: Record<Locale, PricingUI> = {
  en: {
    page: {
      title: 'Pricing: Standard and Premium videos · Still to Film',
      description: 'Standard from {std} per video, Premium from {prem}, or a monthly plan from {month} a month. Made from your listing photos, VAT included, free sample first.',
      eyebrow: 'Pricing',
      h1: 'Pricing for Standard and Premium videos',
      summary: 'A Standard video costs {std} and a Premium video {prem}, both including VAT and cheaper per video the more you order. Prefer a fixed amount each month? Plans start at {month} for {size} videos.',
      faqTitle: 'Questions about pricing',
    },
    compare: {
      title: 'Standard or Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'A cinematic landscape film for your website and listings.',
      premiumTag: 'A longer cut in both formats, for your listings and social media.',
      volume: 'From {price} per video on larger orders',
      perVideo: 'per video',
      orMonthly: 'or {price} a month for {n} videos',
      everything: 'Everything in Standard, plus:',
      standard: ['About {s} seconds, 16:9 landscape', 'Made from your existing listing photos', '{r} revision rounds', 'Free sample first', 'Money back if not as quoted'],
      premium: ['An extended cut of about {s} seconds', 'Both formats: 16:9 landscape and 9:16 vertical for Reels, TikTok and Shorts', 'Priority in the production queue', '{r} revision rounds'],
    },
    calc: {
      title: 'Price calculator',
      tier: 'Video',
      billing: 'Billing',
      oneOff: 'One-off',
      monthly: 'Monthly plan',
      quantity: 'Number of videos',
      perMonth: 'Videos per month',
      perVideo: 'Price per video',
      subtotal: 'Subtotal',
      early: 'Early-bird discount {p}%',
      total: 'Total',
      totalMonth: 'Per month',
      inclVat: 'incl. VAT',
      saved: 'You save {amount} compared with the base price.',
      nudge: 'From {count} videos you pay {price} per video.',
      custom: 'Custom quote',
      customText: 'For more than {max} videos we make you a quote.',
      earlyTerms: 'For orders placed before {date}.',
      planTerms: "Billed monthly, VAT included. Cancel any time with {n} month's notice.",
      noRollover: "Videos you don't use in a month do not roll over.",
      extra: 'Extra videos on your plan: {price} each.',
      payFull: 'Paid in full by bank transfer before we start.',
      paySplit: 'Paid 50% when you order and 50% after delivery.',
      other: 'The same on {tier}',
      cta: 'Request your free sample',
      ctaNote: 'Free sample first · {r} revision rounds · money back if not as quoted',
      order: 'Or order online',
      message: 'Hi, I would like a free sample. I am looking at: {tier}, {billing}, {count}. Calculated price: {total}.',
      videos1: '1 video',
      videos: '{n} videos',
      videosMonth: '{n} videos a month',
    },
    soon: {
      badge: 'Coming soon',
      title: 'Interactive 3D walkthrough',
      text: 'Let guests move through a yacht or a room themselves, in 3D, made from your photos. It is not available yet. Join the waitlist and you hear from us first.',
      cta: 'Join the waitlist',
      subject: '3D walkthrough waitlist',
    },
    referral: {
      title: 'Refer someone, get a free video',
      text: 'If a company you refer places an order, you get one free video on your next order. There is no limit: they just mention your name when they get in touch.',
    },
    faq: [
      { q: 'What do I need to send?', a: 'A link to your listing, or the photos themselves. Wide, sharp, well-lit photos work best. Nobody needs to visit the yacht or the property.' },
      { q: 'How long does it take?', a: 'Roughly {weeks} weeks from your order to delivery. Premium videos get priority in the production queue.' },
      { q: 'What counts as a revision?', a: 'A change within the same photos and concept: a different order of shots, a slower move, a clip left out. Standard includes {rs} rounds, Premium {rp}. New photos or a new concept count as a new video.' },
      { q: "What if I'm not happy?", a: 'You see a free sample made from your own photos before you pay anything. If the finished video is not as quoted and we cannot fix it within the revisions, you get your money back for that video.' },
      { q: 'How do monthly plans work?', a: "You choose {sizes} videos a month and pay a fixed amount each month, from {price} for Standard. Videos you don't use in a month do not roll over. Need more one month? Extra videos cost your plan's price per video." },
      { q: 'Can I cancel?', a: "A monthly plan can be cancelled any time with {n} month's notice. A one-off order can be cancelled free of charge before we start; after that you pay only for the work already done." },
    ],
  },

  nl: {
    page: {
      title: 'Prijzen: Standard- en Premium-video · Still to Film',
      description: 'Standard vanaf {std} per video, Premium vanaf {prem}, of een maandplan vanaf {month} per maand. Gemaakt van je listingfoto\'s, inclusief btw, eerst een gratis proefvideo.',
      eyebrow: 'Prijzen',
      h1: 'Prijzen voor Standard- en Premium-video\'s',
      summary: 'Een Standard-video kost {std} en een Premium-video {prem}, allebei inclusief btw en goedkoper per video naarmate je meer bestelt. Liever elke maand een vast bedrag? Maandplannen beginnen bij {month} voor {size} video\'s.',
      faqTitle: 'Vragen over prijzen',
    },
    compare: {
      title: 'Standard of Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Een filmische liggende video voor je website en listings.',
      premiumTag: 'Een langere versie in beide formaten, voor je listings en social media.',
      volume: 'Vanaf {price} per video bij grotere bestellingen',
      perVideo: 'per video',
      orMonthly: 'of {price} per maand voor {n} video\'s',
      everything: 'Alles van Standard, plus:',
      standard: ['Ongeveer {s} seconden, liggend 16:9', 'Gemaakt van je bestaande listingfoto\'s', '{r} revisierondes', 'Eerst een gratis proefvideo', 'Geld terug als het niet klopt met de offerte'],
      premium: ['Een langere versie van ongeveer {s} seconden', 'Beide formaten: liggend 16:9 en staand 9:16 voor Reels, TikTok en Shorts', 'Voorrang in de productie', '{r} revisierondes'],
    },
    calc: {
      title: 'Prijscalculator',
      tier: 'Video',
      billing: 'Betalen',
      oneOff: 'Eenmalig',
      monthly: 'Maandplan',
      quantity: 'Aantal video\'s',
      perMonth: 'Video\'s per maand',
      perVideo: 'Prijs per video',
      subtotal: 'Subtotaal',
      early: 'Vroegboekkorting {p}%',
      total: 'Totaal',
      totalMonth: 'Per maand',
      inclVat: 'incl. btw',
      saved: 'Je bespaart {amount} ten opzichte van de basisprijs.',
      nudge: 'Vanaf {count} video\'s betaal je {price} per video.',
      custom: 'Offerte op maat',
      customText: 'Voor meer dan {max} video\'s maken we een offerte.',
      earlyTerms: 'Voor bestellingen die vóór {date} zijn geplaatst.',
      planTerms: 'Maandelijks betalen, inclusief btw. Altijd opzegbaar met {n} maand opzegtermijn.',
      noRollover: 'Video\'s die je in een maand niet gebruikt, schuiven niet door.',
      extra: 'Extra video\'s op je plan: {price} per stuk.',
      payFull: 'Het hele bedrag per bankoverschrijving, voordat we beginnen.',
      paySplit: '50% bij de bestelling, 50% na oplevering.',
      other: 'Hetzelfde met {tier}',
      cta: 'Vraag je gratis proefvideo aan',
      ctaNote: 'Eerst een gratis proefvideo · {r} revisierondes · geld terug als het niet klopt met de offerte',
      order: 'Of bestel direct online',
      message: 'Hoi, ik wil graag een gratis proefvideo. Ik kijk naar: {tier}, {billing}, {count}. Berekende prijs: {total}.',
      videos1: '1 video',
      videos: '{n} video\'s',
      videosMonth: '{n} video\'s per maand',
    },
    soon: {
      badge: 'Binnenkort',
      title: 'Interactieve 3D-rondleiding',
      text: 'Laat gasten zelf door een jacht of kamer lopen, in 3D, gemaakt van je foto\'s. Dit is er nog niet. Zet je op de wachtlijst, dan hoor je het als eerste.',
      cta: 'Op de wachtlijst',
      subject: 'Wachtlijst 3D-rondleiding',
    },
    referral: {
      title: 'Verwijs iemand door, krijg een gratis video',
      text: 'Bestelt een bedrijf dat jij hebt doorverwezen, dan krijg je een gratis video bij je volgende bestelling. Er zit geen limiet op: ze noemen gewoon jouw naam als ze contact opnemen.',
    },
    faq: [
      { q: 'Wat moet ik aanleveren?', a: 'Een link naar je listing, of de foto\'s zelf. Brede, scherpe en goed belichte foto\'s werken het best. Niemand hoeft langs te komen op het jacht of in het pand.' },
      { q: 'Hoe lang duurt het?', a: 'Ongeveer {weeks} weken van bestelling tot oplevering. Premium-video\'s krijgen voorrang in de productie.' },
      { q: 'Wat telt als een revisie?', a: 'Een aanpassing binnen dezelfde foto\'s en hetzelfde idee: een andere volgorde, een rustigere beweging, een shot eruit. Standard heeft {rs} rondes, Premium {rp}. Nieuwe foto\'s of een nieuw idee tellen als een nieuwe video.' },
      { q: 'Wat als ik niet tevreden ben?', a: 'Je ziet eerst een gratis proefvideo van je eigen foto\'s, voordat je iets betaalt. Klopt de video niet met de offerte en lossen we dat niet op binnen de revisies, dan krijg je je geld voor die video terug.' },
      { q: 'Hoe werkt een maandplan?', a: 'Je kiest {sizes} video\'s per maand en betaalt elke maand een vast bedrag, vanaf {price} voor Standard. Video\'s die je in een maand niet gebruikt, schuiven niet door. Een maand meer nodig? Extra video\'s kosten de prijs per video van je plan.' },
      { q: 'Kan ik opzeggen?', a: 'Een maandplan zeg je altijd op met {n} maand opzegtermijn. Een eenmalige bestelling annuleer je kosteloos zolang we nog niet begonnen zijn; daarna betaal je alleen voor het werk dat al gedaan is.' },
    ],
  },

  de: {
    page: {
      title: 'Preise: Standard- und Premium-Videos · Still to Film',
      description: 'Standard ab {std} pro Video, Premium ab {prem} oder ein Monatsplan ab {month} im Monat. Aus Ihren Inseratsfotos, inkl. MwSt., zuerst ein kostenloses Probevideo.',
      eyebrow: 'Preise',
      h1: 'Preise für Standard- und Premium-Videos',
      summary: 'Ein Standard-Video kostet {std} und ein Premium-Video {prem}, beide inklusive MwSt. und pro Video günstiger, je mehr Sie bestellen. Lieber ein fester Betrag pro Monat? Monatspläne beginnen bei {month} für {size} Videos.',
      faqTitle: 'Fragen zu den Preisen',
    },
    compare: {
      title: 'Standard oder Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Ein filmisches Querformat-Video für Ihre Website und Inserate.',
      premiumTag: 'Eine längere Fassung in beiden Formaten, für Inserate und Social Media.',
      volume: 'Bei größeren Bestellungen ab {price} pro Video',
      perVideo: 'pro Video',
      orMonthly: 'oder {price} im Monat für {n} Videos',
      everything: 'Alles aus Standard, dazu:',
      standard: ['Etwa {s} Sekunden, 16:9 Querformat', 'Aus Ihren vorhandenen Inseratsfotos', '{r} Korrekturrunden', 'Zuerst ein kostenloses Probevideo', 'Geld zurück, wenn es nicht dem Angebot entspricht'],
      premium: ['Eine längere Fassung von etwa {s} Sekunden', 'Beide Formate: 16:9 quer und 9:16 hoch für Reels, TikTok und Shorts', 'Vorrang in der Produktion', '{r} Korrekturrunden'],
    },
    calc: {
      title: 'Preisrechner',
      tier: 'Video',
      billing: 'Abrechnung',
      oneOff: 'Einmalig',
      monthly: 'Monatsplan',
      quantity: 'Anzahl Videos',
      perMonth: 'Videos pro Monat',
      perVideo: 'Preis pro Video',
      subtotal: 'Zwischensumme',
      early: 'Frühbucherrabatt {p} %',
      total: 'Gesamt',
      totalMonth: 'Pro Monat',
      inclVat: 'inkl. MwSt.',
      saved: 'Sie sparen {amount} gegenüber dem Grundpreis.',
      nudge: 'Ab {count} Videos zahlen Sie {price} pro Video.',
      custom: 'Individuelles Angebot',
      customText: 'Für mehr als {max} Videos erstellen wir ein Angebot.',
      earlyTerms: 'Für Bestellungen vor dem {date}.',
      planTerms: 'Monatliche Abrechnung, inkl. MwSt. Jederzeit mit {n} Monat Frist kündbar.',
      noRollover: 'Videos, die Sie in einem Monat nicht nutzen, verfallen.',
      extra: 'Zusätzliche Videos im Plan: je {price}.',
      payFull: 'Vollständig per Überweisung, bevor wir beginnen.',
      paySplit: '50 % bei der Bestellung, 50 % nach der Lieferung.',
      other: 'Dasselbe mit {tier}',
      cta: 'Kostenloses Probevideo anfragen',
      ctaNote: 'Zuerst ein kostenloses Probevideo · {r} Korrekturrunden · Geld zurück, wenn es nicht dem Angebot entspricht',
      order: 'Oder direkt online bestellen',
      message: 'Hallo, ich hätte gern ein kostenloses Probevideo. Ich interessiere mich für: {tier}, {billing}, {count}. Berechneter Preis: {total}.',
      videos1: '1 Video',
      videos: '{n} Videos',
      videosMonth: '{n} Videos pro Monat',
    },
    soon: {
      badge: 'Bald verfügbar',
      title: 'Interaktiver 3D-Rundgang',
      text: 'Gäste bewegen sich selbst durch eine Yacht oder ein Zimmer, in 3D, aus Ihren Fotos. Das gibt es noch nicht. Tragen Sie sich in die Warteliste ein, dann erfahren Sie es zuerst.',
      cta: 'Auf die Warteliste',
      subject: 'Warteliste 3D-Rundgang',
    },
    referral: {
      title: 'Empfehlen Sie uns weiter, erhalten Sie ein Video gratis',
      text: 'Bestellt ein Unternehmen, das Sie empfohlen haben, erhalten Sie bei Ihrer nächsten Bestellung ein Video gratis. Ohne Obergrenze: Es nennt einfach Ihren Namen, wenn es sich meldet.',
    },
    faq: [
      { q: 'Was muss ich schicken?', a: 'Einen Link zu Ihrem Inserat oder die Fotos selbst. Weite, scharfe und gut beleuchtete Fotos eignen sich am besten. Niemand muss die Yacht oder das Haus besuchen.' },
      { q: 'Wie lange dauert es?', a: 'Etwa {weeks} Wochen von der Bestellung bis zur Lieferung. Premium-Videos haben Vorrang in der Produktion.' },
      { q: 'Was zählt als Korrektur?', a: 'Eine Änderung mit denselben Fotos und demselben Konzept: eine andere Reihenfolge, eine ruhigere Bewegung, ein Clip weniger. Standard enthält {rs} Runden, Premium {rp}. Neue Fotos oder ein neues Konzept zählen als neues Video.' },
      { q: 'Was, wenn ich nicht zufrieden bin?', a: 'Sie sehen ein kostenloses Probevideo aus Ihren eigenen Fotos, bevor Sie etwas bezahlen. Entspricht das fertige Video nicht dem Angebot und können wir das nicht innerhalb der Korrekturen beheben, erhalten Sie Ihr Geld für dieses Video zurück.' },
      { q: 'Wie funktionieren Monatspläne?', a: 'Sie wählen {sizes} Videos pro Monat und zahlen jeden Monat einen festen Betrag, ab {price} für Standard. Videos, die Sie in einem Monat nicht nutzen, verfallen. Brauchen Sie einmal mehr? Zusätzliche Videos kosten den Preis pro Video Ihres Plans.' },
      { q: 'Kann ich kündigen?', a: 'Einen Monatsplan können Sie jederzeit mit {n} Monat Frist kündigen. Eine Einzelbestellung stornieren Sie kostenlos, solange wir noch nicht begonnen haben; danach zahlen Sie nur die bereits geleistete Arbeit.' },
    ],
  },

  fr: {
    page: {
      title: 'Tarifs : vidéos Standard et Premium · Still to Film',
      description: 'Standard dès {std} par vidéo, Premium dès {prem}, ou un forfait mensuel dès {month} par mois. À partir de vos photos d’annonce, TVA comprise, extrait gratuit d’abord.',
      eyebrow: 'Tarifs',
      h1: 'Tarifs des vidéos Standard et Premium',
      summary: 'Une vidéo Standard coûte {std} et une vidéo Premium {prem}, TVA comprise, avec un prix par vidéo qui baisse quand vous en commandez plus. Vous préférez un montant fixe chaque mois ? Les forfaits commencent à {month} pour {size} vidéos.',
      faqTitle: 'Questions sur les tarifs',
    },
    compare: {
      title: 'Standard ou Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Un film paysage cinématographique pour votre site et vos annonces.',
      premiumTag: 'Une version plus longue dans les deux formats, pour vos annonces et les réseaux sociaux.',
      volume: 'À partir de {price} par vidéo pour les grosses commandes',
      perVideo: 'par vidéo',
      orMonthly: 'ou {price} par mois pour {n} vidéos',
      everything: 'Tout le Standard, plus :',
      standard: ['Environ {s} secondes, format paysage 16:9', 'À partir de vos photos d’annonce existantes', '{r} séries de retouches', 'D’abord un extrait gratuit', 'Remboursé si ce n’est pas conforme au devis'],
      premium: ['Une version longue d’environ {s} secondes', 'Les deux formats : paysage 16:9 et vertical 9:16 pour Reels, TikTok et Shorts', 'Priorité dans la production', '{r} séries de retouches'],
    },
    calc: {
      title: 'Calculateur de prix',
      tier: 'Vidéo',
      billing: 'Facturation',
      oneOff: 'Ponctuelle',
      monthly: 'Forfait mensuel',
      quantity: 'Nombre de vidéos',
      perMonth: 'Vidéos par mois',
      perVideo: 'Prix par vidéo',
      subtotal: 'Sous-total',
      early: 'Remise early bird {p} %',
      total: 'Total',
      totalMonth: 'Par mois',
      inclVat: 'TTC',
      saved: 'Vous économisez {amount} par rapport au prix de base.',
      nudge: 'À partir de {count} vidéos, vous payez {price} par vidéo.',
      custom: 'Devis sur mesure',
      customText: 'Au-delà de {max} vidéos, nous vous faisons un devis.',
      earlyTerms: 'Pour les commandes passées avant le {date}.',
      planTerms: 'Facturé chaque mois, TVA comprise. Résiliable à tout moment avec {n} mois de préavis.',
      noRollover: 'Les vidéos non utilisées dans le mois ne sont pas reportées.',
      extra: 'Vidéos supplémentaires sur votre forfait : {price} chacune.',
      payFull: 'Payé en totalité par virement avant le début du travail.',
      paySplit: '50 % à la commande, 50 % après la livraison.',
      other: 'La même chose en {tier}',
      cta: 'Demander votre extrait gratuit',
      ctaNote: 'Extrait gratuit d’abord · {r} séries de retouches · remboursé si ce n’est pas conforme au devis',
      order: 'Ou commander en ligne',
      message: 'Bonjour, je souhaite un extrait gratuit. Je regarde : {tier}, {billing}, {count}. Prix calculé : {total}.',
      videos1: '1 vidéo',
      videos: '{n} vidéos',
      videosMonth: '{n} vidéos par mois',
    },
    soon: {
      badge: 'Bientôt',
      title: 'Visite 3D interactive',
      text: 'Laissez vos clients parcourir eux-mêmes un yacht ou une chambre, en 3D, à partir de vos photos. Ce n’est pas encore disponible. Inscrivez-vous sur la liste d’attente pour être prévenu en premier.',
      cta: 'Rejoindre la liste d’attente',
      subject: 'Liste d’attente visite 3D',
    },
    referral: {
      title: 'Recommandez-nous, recevez une vidéo offerte',
      text: 'Si une entreprise que vous avez recommandée passe commande, vous recevez une vidéo offerte sur votre prochaine commande. Sans limite : elle mentionne simplement votre nom en nous contactant.',
    },
    faq: [
      { q: 'Que dois-je envoyer ?', a: 'Un lien vers votre annonce, ou les photos elles-mêmes. Les photos larges, nettes et bien éclairées fonctionnent le mieux. Personne ne doit se rendre sur le yacht ou dans le logement.' },
      { q: 'Combien de temps faut-il ?', a: 'Environ {weeks} semaines entre la commande et la livraison. Les vidéos Premium sont prioritaires dans la production.' },
      { q: 'Qu’est-ce qu’une retouche ?', a: 'Une modification avec les mêmes photos et la même idée : un autre ordre des plans, un mouvement plus lent, un clip en moins. Le Standard comprend {rs} séries, le Premium {rp}. De nouvelles photos ou une nouvelle idée comptent comme une nouvelle vidéo.' },
      { q: 'Et si je ne suis pas satisfait ?', a: 'Vous voyez un extrait gratuit réalisé avec vos propres photos avant de payer quoi que ce soit. Si la vidéo finale n’est pas conforme au devis et que nous ne pouvons pas corriger cela dans les retouches, nous vous remboursons cette vidéo.' },
      { q: 'Comment fonctionnent les forfaits mensuels ?', a: 'Vous choisissez {sizes} vidéos par mois et payez un montant fixe chaque mois, dès {price} en Standard. Les vidéos non utilisées dans le mois ne sont pas reportées. Besoin de plus un mois ? Les vidéos supplémentaires coûtent le prix par vidéo de votre forfait.' },
      { q: 'Puis-je résilier ?', a: 'Un forfait mensuel se résilie à tout moment avec {n} mois de préavis. Une commande ponctuelle s’annule gratuitement avant que nous commencions ; ensuite, vous ne payez que le travail déjà réalisé.' },
    ],
  },

  es: {
    page: {
      title: 'Precios: vídeos Standard y Premium · Still to Film',
      description: 'Standard desde {std} por vídeo, Premium desde {prem}, o un plan mensual desde {month} al mes. Con las fotos de tu anuncio, IVA incluido, primero una muestra gratis.',
      eyebrow: 'Precios',
      h1: 'Precios de los vídeos Standard y Premium',
      summary: 'Un vídeo Standard cuesta {std} y un vídeo Premium {prem}, ambos con IVA incluido y más baratos por vídeo cuantos más pidas. ¿Prefieres un importe fijo cada mes? Los planes empiezan en {month} por {size} vídeos.',
      faqTitle: 'Preguntas sobre precios',
    },
    compare: {
      title: 'Standard o Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Un vídeo cinematográfico horizontal para tu web y tus anuncios.',
      premiumTag: 'Una versión más larga en los dos formatos, para tus anuncios y redes sociales.',
      volume: 'Desde {price} por vídeo en pedidos grandes',
      perVideo: 'por vídeo',
      orMonthly: 'o {price} al mes por {n} vídeos',
      everything: 'Todo lo del Standard, y además:',
      standard: ['Unos {s} segundos, horizontal 16:9', 'Hecho con las fotos que ya tienes de tu anuncio', '{r} rondas de revisión', 'Primero una muestra gratis', 'Te devolvemos el dinero si no es lo presupuestado'],
      premium: ['Una versión extendida de unos {s} segundos', 'Los dos formatos: horizontal 16:9 y vertical 9:16 para Reels, TikTok y Shorts', 'Prioridad en la producción', '{r} rondas de revisión'],
    },
    calc: {
      title: 'Calculadora de precios',
      tier: 'Vídeo',
      billing: 'Facturación',
      oneOff: 'Puntual',
      monthly: 'Plan mensual',
      quantity: 'Número de vídeos',
      perMonth: 'Vídeos al mes',
      perVideo: 'Precio por vídeo',
      subtotal: 'Subtotal',
      early: 'Descuento anticipado {p} %',
      total: 'Total',
      totalMonth: 'Al mes',
      inclVat: 'IVA incluido',
      saved: 'Ahorras {amount} frente al precio base.',
      nudge: 'Desde {count} vídeos pagas {price} por vídeo.',
      custom: 'Presupuesto a medida',
      customText: 'Para más de {max} vídeos te hacemos un presupuesto.',
      earlyTerms: 'Para pedidos hechos antes del {date}.',
      planTerms: 'Se factura cada mes, IVA incluido. Cancelable en cualquier momento con {n} mes de preaviso.',
      noRollover: 'Los vídeos que no uses en un mes no se acumulan.',
      extra: 'Vídeos extra en tu plan: {price} cada uno.',
      payFull: 'Se paga entero por transferencia antes de empezar.',
      paySplit: '50 % al hacer el pedido y 50 % tras la entrega.',
      other: 'Lo mismo en {tier}',
      cta: 'Pide tu muestra gratis',
      ctaNote: 'Primero una muestra gratis · {r} rondas de revisión · te devolvemos el dinero si no es lo presupuestado',
      order: 'O haz el pedido online',
      message: 'Hola, me gustaría una muestra gratis. Estoy mirando: {tier}, {billing}, {count}. Precio calculado: {total}.',
      videos1: '1 vídeo',
      videos: '{n} vídeos',
      videosMonth: '{n} vídeos al mes',
    },
    soon: {
      badge: 'Próximamente',
      title: 'Recorrido 3D interactivo',
      text: 'Deja que tus huéspedes recorran ellos mismos un yate o una habitación, en 3D, hecho con tus fotos. Todavía no está disponible. Apúntate a la lista de espera y serás el primero en saberlo.',
      cta: 'Apuntarme a la lista',
      subject: 'Lista de espera recorrido 3D',
    },
    referral: {
      title: 'Recomiéndanos y llévate un vídeo gratis',
      text: 'Si una empresa que has recomendado hace un pedido, te llevas un vídeo gratis en tu próximo pedido. Sin límite: solo tiene que mencionar tu nombre al contactarnos.',
    },
    faq: [
      { q: '¿Qué tengo que enviar?', a: 'Un enlace a tu anuncio, o las fotos. Las fotos amplias, nítidas y bien iluminadas funcionan mejor. Nadie tiene que visitar el yate ni el alojamiento.' },
      { q: '¿Cuánto tarda?', a: 'Unas {weeks} semanas desde el pedido hasta la entrega. Los vídeos Premium tienen prioridad en la producción.' },
      { q: '¿Qué cuenta como revisión?', a: 'Un cambio con las mismas fotos y la misma idea: otro orden de planos, un movimiento más lento, un clip menos. El Standard incluye {rs} rondas, el Premium {rp}. Fotos nuevas o una idea nueva cuentan como un vídeo nuevo.' },
      { q: '¿Y si no me gusta?', a: 'Ves una muestra gratis hecha con tus propias fotos antes de pagar nada. Si el vídeo final no es lo presupuestado y no podemos arreglarlo dentro de las revisiones, te devolvemos el dinero de ese vídeo.' },
      { q: '¿Cómo funcionan los planes mensuales?', a: 'Eliges {sizes} vídeos al mes y pagas un importe fijo cada mes, desde {price} en Standard. Los vídeos que no uses en un mes no se acumulan. ¿Un mes necesitas más? Los vídeos extra cuestan el precio por vídeo de tu plan.' },
      { q: '¿Puedo cancelar?', a: 'Un plan mensual se cancela en cualquier momento con {n} mes de preaviso. Un pedido puntual se cancela gratis antes de que empecemos; después solo pagas el trabajo ya hecho.' },
    ],
  },

  hr: {
    page: {
      title: 'Cijene: Standard i Premium video · Still to Film',
      description: 'Standard od {std} po videu, Premium od {prem} ili mjesečni plan od {month} mjesečno. Od fotografija vašeg oglasa, s PDV-om, najprije besplatni ogledni video.',
      eyebrow: 'Cijene',
      h1: 'Cijene Standard i Premium videa',
      summary: 'Standard video stoji {std}, a Premium video {prem}, oba s uključenim PDV-om i jeftinija po videu što više naručite. Radije fiksni iznos svaki mjesec? Mjesečni planovi počinju od {month} za {size} videa.',
      faqTitle: 'Pitanja o cijenama',
    },
    compare: {
      title: 'Standard ili Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Filmski vodoravni video za vašu web-stranicu i oglase.',
      premiumTag: 'Dulja verzija u oba formata, za oglase i društvene mreže.',
      volume: 'Od {price} po videu za veće narudžbe',
      perVideo: 'po videu',
      orMonthly: 'ili {price} mjesečno za {n} videa',
      everything: 'Sve iz Standarda, plus:',
      standard: ['Oko {s} sekundi, vodoravno 16:9', 'Od vaših postojećih fotografija oglasa', '{r} kruga izmjena', 'Najprije besplatni ogledni video', 'Novac natrag ako nije kao u ponudi'],
      premium: ['Dulja verzija od oko {s} sekundi', 'Oba formata: vodoravno 16:9 i okomito 9:16 za Reels, TikTok i Shorts', 'Prednost u izradi', '{r} kruga izmjena'],
    },
    calc: {
      title: 'Kalkulator cijene',
      tier: 'Video',
      billing: 'Plaćanje',
      oneOff: 'Jednokratno',
      monthly: 'Mjesečni plan',
      quantity: 'Broj videa',
      perMonth: 'Videa mjesečno',
      perVideo: 'Cijena po videu',
      subtotal: 'Međuzbroj',
      early: 'Popust za ranu narudžbu {p} %',
      total: 'Ukupno',
      totalMonth: 'Mjesečno',
      inclVat: 's PDV-om',
      saved: 'Štedite {amount} u odnosu na osnovnu cijenu.',
      nudge: 'Od {count} videa plaćate {price} po videu.',
      custom: 'Ponuda po mjeri',
      customText: 'Za više od {max} videa izrađujemo ponudu.',
      earlyTerms: 'Za narudžbe prije {date}.',
      planTerms: 'Plaća se mjesečno, s PDV-om. Otkaz u svakom trenutku uz {n} mjesec otkaznog roka.',
      noRollover: 'Videi koje u mjesecu ne iskoristite ne prenose se dalje.',
      extra: 'Dodatni videi u planu: {price} po komadu.',
      payFull: 'Plaća se u cijelosti bankovnom doznakom prije početka.',
      paySplit: '50 % pri narudžbi, 50 % nakon isporuke.',
      other: 'Isto u paketu {tier}',
      cta: 'Zatražite besplatni ogledni video',
      ctaNote: 'Najprije besplatni ogledni video · {r} kruga izmjena · novac natrag ako nije kao u ponudi',
      order: 'Ili naručite online',
      message: 'Pozdrav, molim besplatni ogledni video. Zanima me: {tier}, {billing}, {count}. Izračunata cijena: {total}.',
      videos1: '1 video',
      videos: '{n} videa',
      videosMonth: '{n} videa mjesečno',
    },
    soon: {
      badge: 'Uskoro',
      title: 'Interaktivna 3D šetnja',
      text: 'Neka gosti sami prođu kroz jahtu ili sobu, u 3D-u, izrađeno od vaših fotografija. Još nije dostupno. Prijavite se na listu čekanja i saznat ćete prvi.',
      cta: 'Na listu čekanja',
      subject: 'Lista čekanja 3D šetnja',
    },
    referral: {
      title: 'Preporučite nas i dobijte besplatni video',
      text: 'Ako tvrtka koju ste preporučili naruči, dobivate jedan besplatni video uz sljedeću narudžbu. Bez ograničenja: samo navedu vaše ime kad nam se jave.',
    },
    faq: [
      { q: 'Što trebam poslati?', a: 'Poveznicu na oglas ili same fotografije. Najbolje rade široke, oštre i dobro osvijetljene fotografije. Nitko ne mora doći na jahtu ili u objekt.' },
      { q: 'Koliko traje izrada?', a: 'Otprilike {weeks} tjedna od narudžbe do isporuke. Premium videi imaju prednost u izradi.' },
      { q: 'Što se smatra izmjenom?', a: 'Promjena s istim fotografijama i istom idejom: drukčiji redoslijed kadrova, sporiji pokret, isječak manje. Standard uključuje {rs} kruga, Premium {rp}. Nove fotografije ili nova ideja računaju se kao novi video.' },
      { q: 'Što ako nisam zadovoljan?', a: 'Prije bilo kakvog plaćanja vidite besplatni ogledni video od vlastitih fotografija. Ako gotovi video nije kao u ponudi i to ne možemo ispraviti u okviru izmjena, vraćamo vam novac za taj video.' },
      { q: 'Kako rade mjesečni planovi?', a: 'Birate {sizes} videa mjesečno i plaćate fiksni iznos svaki mjesec, od {price} za Standard. Videi koje u mjesecu ne iskoristite ne prenose se dalje. Trebate li jedan mjesec više? Dodatni videi stoje kao cijena po videu u vašem planu.' },
      { q: 'Mogu li otkazati?', a: 'Mjesečni plan otkazujete u svakom trenutku uz {n} mjesec otkaznog roka. Jednokratnu narudžbu otkazujete besplatno prije nego što počnemo; nakon toga plaćate samo već obavljeni posao.' },
    ],
  },

  pt: {
    page: {
      title: 'Preços: vídeos Standard e Premium · Still to Film',
      description: 'Standard desde {std} por vídeo, Premium desde {prem}, ou um plano mensal desde {month} por mês. Feito com as fotografias do seu anúncio, IVA incluído, primeiro uma amostra grátis.',
      eyebrow: 'Preços',
      h1: 'Preços dos vídeos Standard e Premium',
      summary: 'Um vídeo Standard custa {std} e um vídeo Premium {prem}, ambos com IVA incluído e mais baratos por vídeo quanto mais encomendar. Prefere um valor fixo todos os meses? Os planos começam em {month} por {size} vídeos.',
      faqTitle: 'Perguntas sobre preços',
    },
    compare: {
      title: 'Standard ou Premium',
      standardName: 'Standard',
      premiumName: 'Premium',
      standardTag: 'Um filme cinematográfico horizontal para o seu site e anúncios.',
      premiumTag: 'Uma versão mais longa nos dois formatos, para anúncios e redes sociais.',
      volume: 'Desde {price} por vídeo em encomendas maiores',
      perVideo: 'por vídeo',
      orMonthly: 'ou {price} por mês por {n} vídeos',
      everything: 'Tudo do Standard, e ainda:',
      standard: ['Cerca de {s} segundos, horizontal 16:9', 'Feito com as fotografias que já tem do anúncio', '{r} rondas de revisão', 'Primeiro uma amostra grátis', 'Devolvemos o dinheiro se não corresponder ao orçamento'],
      premium: ['Uma versão alargada de cerca de {s} segundos', 'Os dois formatos: horizontal 16:9 e vertical 9:16 para Reels, TikTok e Shorts', 'Prioridade na produção', '{r} rondas de revisão'],
    },
    calc: {
      title: 'Calculadora de preços',
      tier: 'Vídeo',
      billing: 'Faturação',
      oneOff: 'Pontual',
      monthly: 'Plano mensal',
      quantity: 'Número de vídeos',
      perMonth: 'Vídeos por mês',
      perVideo: 'Preço por vídeo',
      subtotal: 'Subtotal',
      early: 'Desconto antecipado {p} %',
      total: 'Total',
      totalMonth: 'Por mês',
      inclVat: 'IVA incluído',
      saved: 'Poupa {amount} face ao preço base.',
      nudge: 'A partir de {count} vídeos paga {price} por vídeo.',
      custom: 'Orçamento à medida',
      customText: 'Para mais de {max} vídeos fazemos-lhe um orçamento.',
      earlyTerms: 'Para encomendas feitas antes de {date}.',
      planTerms: 'Faturado mensalmente, IVA incluído. Pode cancelar a qualquer momento com {n} mês de pré-aviso.',
      noRollover: 'Os vídeos que não usar num mês não passam para o seguinte.',
      extra: 'Vídeos extra no seu plano: {price} cada.',
      payFull: 'Pago na totalidade por transferência antes de começarmos.',
      paySplit: '50 % na encomenda e 50 % após a entrega.',
      other: 'O mesmo em {tier}',
      cta: 'Peça a sua amostra grátis',
      ctaNote: 'Primeiro uma amostra grátis · {r} rondas de revisão · devolvemos o dinheiro se não corresponder ao orçamento',
      order: 'Ou encomende online',
      message: 'Olá, gostaria de uma amostra grátis. Estou a ver: {tier}, {billing}, {count}. Preço calculado: {total}.',
      videos1: '1 vídeo',
      videos: '{n} vídeos',
      videosMonth: '{n} vídeos por mês',
    },
    soon: {
      badge: 'Em breve',
      title: 'Visita 3D interativa',
      text: 'Deixe os hóspedes percorrerem sozinhos um iate ou um quarto, em 3D, feito com as suas fotografias. Ainda não está disponível. Inscreva-se na lista de espera e será o primeiro a saber.',
      cta: 'Entrar na lista de espera',
      subject: 'Lista de espera visita 3D',
    },
    referral: {
      title: 'Recomende-nos e receba um vídeo grátis',
      text: 'Se uma empresa que recomendou fizer uma encomenda, recebe um vídeo grátis na sua próxima encomenda. Sem limite: basta mencionarem o seu nome quando nos contactarem.',
    },
    faq: [
      { q: 'O que tenho de enviar?', a: 'Uma ligação para o seu anúncio, ou as próprias fotografias. Fotografias amplas, nítidas e bem iluminadas funcionam melhor. Ninguém precisa de visitar o iate ou o alojamento.' },
      { q: 'Quanto tempo demora?', a: 'Cerca de {weeks} semanas desde a encomenda até à entrega. Os vídeos Premium têm prioridade na produção.' },
      { q: 'O que conta como revisão?', a: 'Uma alteração com as mesmas fotografias e a mesma ideia: outra ordem dos planos, um movimento mais lento, um clipe a menos. O Standard inclui {rs} rondas, o Premium {rp}. Fotografias novas ou uma ideia nova contam como um vídeo novo.' },
      { q: 'E se eu não ficar satisfeito?', a: 'Vê uma amostra grátis feita com as suas próprias fotografias antes de pagar o que quer que seja. Se o vídeo final não corresponder ao orçamento e não o conseguirmos corrigir nas revisões, devolvemos o dinheiro desse vídeo.' },
      { q: 'Como funcionam os planos mensais?', a: 'Escolhe {sizes} vídeos por mês e paga um valor fixo todos os meses, desde {price} no Standard. Os vídeos que não usar num mês não passam para o seguinte. Precisa de mais num mês? Os vídeos extra custam o preço por vídeo do seu plano.' },
      { q: 'Posso cancelar?', a: 'Um plano mensal cancela-se a qualquer momento com {n} mês de pré-aviso. Uma encomenda pontual cancela-se gratuitamente antes de começarmos; depois disso paga apenas o trabalho já feito.' },
    ],
  },
};

/** Fills {name} placeholders. */
export const fillIn = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));
