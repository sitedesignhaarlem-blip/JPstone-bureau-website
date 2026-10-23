// Alle Nederlandse vragen en antwoorden op één plek. De FAQ op de homepage, de landingspagina's, de
// FAQ-pagina en de FAQPage structured data lezen allemaal hieruit, zodat een antwoord nooit twee keer wordt geschreven.
import nl from '../../i18n/nl';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = nl.faq.items;

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
    q: 'Moeten jullie aan boord of in het hotel komen?',
    a: "Nee. We werken alleen met de foto's die je al hebt. Niemand hoeft aan boord te komen of je hotel te bezoeken.",
  },
  fleet: {
    q: 'Kunnen jullie video\'s maken voor een hele vloot?',
    a: "Ja. Elk jacht krijgt een eigen video in één rustige stijl, zodat je vloot er op je website consistent uitziet. We maken tot 2 video's per dag, en de leverdatum spreken we af in de offerte.",
  },
  roomTypes: {
    q: 'Eén video voor het hele hotel, of één per kamertype?',
    a: 'Allebei kan. Sommige hotels willen één video van het hele hotel, andere één per kamertype, zodat elke boekingspagina een eigen video heeft. Elke video telt in de prijs als één video.',
  },
  update: {
    q: 'Kunnen jullie een nieuwe video maken als we verbouwen of de kamers veranderen?',
    a: "Ja. Stuur de nieuwe foto's, dan maken we een nieuwe video. Nieuwe foto's tellen als een nieuwe video, niet als een revisie.",
  },
  limits: {
    q: "Kan de video kamers of uitzichten laten zien die niet op de foto's staan?",
    a: "Nee. De video laat alleen zien wat op je foto's staat. Is een hut, een kamer of een uitzicht nooit gefotografeerd, dan zit het niet in de film. We voegen geen mensen, meubels of uitzichten toe.",
  },
  referral: {
    q: "Hebben jullie een beloning voor doorverwijzen?",
    a: "Ja. Verwijs je een ander bedrijf door en plaatst dat een bestelling, dan krijg je één gratis video bij je volgende bestelling. Er is geen maximum: één gratis video voor elk bedrijf dat je doorverwijst.",
  },
  vat: {
    q: 'Zijn de prijzen inclusief btw?',
    a: 'Ja. Alle prijzen zijn inclusief btw, en dat staat ook altijd in de offerte.',
  },
  payment: {
    q: 'Wanneer betaal ik?',
    a: "Opdrachten onder €1.000 betaal je volledig bij het bestellen. Vanaf €1.000 betaal je 50% bij het bestellen en 50% na oplevering. Je betaalt online in je klantaccount met iDEAL, creditcard of Bancontact, of per bankoverschrijving, en je krijgt voor elke betaling een factuur.",
  },
  volume: {
    q: 'Hoe werkt de staffelprijs?',
    a: "Eén losse video kost €100. Vanaf 5 video's is de prijs €95 per video, en per 5 video's gaat er €5 af, tot minimaal €50 per video. Meer dan 100 video's: dan maken we een offerte.",
  },
  platforms: {
    q: "Kan ik de video op Airbnb of Booking.com gebruiken?",
    a: "Platforms verschillen in of en waar je een video kunt uploaden, en hun regels veranderen, dus kijk wat jouw eigen listing toestaat. Op je eigen website en social media kun je de video altijd gebruiken, en op elk platform dat video toestaat. Je krijgt mp4-bestanden in 16:9 en 9:16.",
  },
  units: {
    q: "Ik heb meerdere appartementen in één gebouw. Hoe werkt de prijs?",
    a: "Elke video telt als één video, en de staffelprijs geldt voor de hele bestelling. Zes appartementen met elk een eigen video zijn 6 × €95 = €570, inclusief btw. Zien meerdere appartementen er hetzelfde uit, dan kan één video voor dat type appartement genoeg zijn.",
  },
  listingLink: {
    q: "Kunnen jullie werken vanaf mijn Airbnb- of Booking.com-listing?",
    a: "Ja. Stuur de link naar je listing, dan werken we met de foto's die erop staan. Originele bestanden van je fotograaf geven een scherper resultaat dan foto's die van een platform zijn opgeslagen, dus stuur die ook mee als je ze hebt.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Eigendom en gebruiksrecht', items: [q.owns] },
  { title: 'Levering', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formaten', items: [q.formats, q.roomTypes, q.platforms] },
  { title: "Welke foto's je nodig hebt", items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'AI en kwaliteit', items: [q.ai, q.limits] },
  { title: 'Prijzen en betaling', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
