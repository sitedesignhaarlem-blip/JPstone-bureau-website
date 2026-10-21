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
  vat: {
    q: 'Zijn de prijzen inclusief btw?',
    a: 'Ja. Alle prijzen zijn inclusief btw, en dat staat ook altijd in de offerte.',
  },
  payment: {
    q: 'Wanneer betaal ik?',
    a: 'We factureren na oplevering en je betaalt per bankoverschrijving, met een betaaltermijn van 14 dagen. Bij grotere opdrachten kunnen we om een aanbetaling vragen; dat staat dan in de offerte.',
  },
  volume: {
    q: 'Hoe werkt de staffelprijs?',
    a: "Eén losse video kost €100. Vanaf 5 video's is de prijs €95 per video, en per 5 video's gaat er €5 af, tot minimaal €50 per video. Meer dan 100 video's: dan maken we een offerte.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Eigendom en gebruiksrecht', items: [q.owns] },
  { title: 'Levering', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formaten', items: [q.formats, q.roomTypes] },
  { title: "Welke foto's je nodig hebt", items: [q.photos, q.access, q.skills] },
  { title: 'AI en kwaliteit', items: [q.ai, q.limits] },
  { title: 'Prijzen en betaling', items: [q.volume, q.vat, q.payment, q.sample] },
];
