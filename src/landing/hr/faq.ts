// Sva hrvatska pitanja i odgovori na jednom mjestu. FAQ na početnoj stranici, odredišne stranice,
// FAQ stranica i strukturirani podaci FAQPage čitaju odavde, tako da se nijedan odgovor ne piše dvaput.
import hr from '../../i18n/hr';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = hr.faq.items;

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
    q: 'Trebate li pristup jahti ili hotelu?',
    a: 'Ne. Radimo samo s fotografijama koje već imate. Nitko ne mora dolaziti na brod niti u vaš objekt.',
  },
  fleet: {
    q: 'Možete li izraditi videe za cijelu flotu?',
    a: 'Da. Svaka jahta dobiva vlastiti video u istom mirnom stilu, tako da flota na vašoj web-stranici izgleda ujednačeno. Izrađujemo do 2 videa dnevno, a datum isporuke dogovaramo u ponudi.',
  },
  roomTypes: {
    q: 'Jedan video za cijeli hotel ili jedan po tipu sobe?',
    a: 'Moguće je oboje. Neki hoteli žele jedan video cijelog objekta, drugi jedan po tipu sobe, tako da svaka stranica za rezervaciju ima svoj. Svaki video naplaćuje se kao jedan video.',
  },
  update: {
    q: 'Možete li izraditi novi video kad renoviramo ili promijenimo sobe?',
    a: 'Da. Pošaljite nam nove fotografije i izradit ćemo novi video. Nove fotografije računaju se kao novi video, a ne kao izmjena.',
  },
  limits: {
    q: 'Može li video prikazati prostorije ili poglede kojih nema na fotografijama?',
    a: 'Ne. Video može prikazati samo ono što je na vašim fotografijama. Ako kabina, soba ili pogled nikad nisu fotografirani, neće biti ni u filmu. Ne dodajemo ljude, namještaj ni poglede.',
  },
  vat: {
    q: 'Jesu li cijene s PDV-om?',
    a: 'Ne. Sve cijene su bez PDV-a, i to uvijek piše u ponudi.',
  },
  payment: {
    q: 'Kada plaćam?',
    a: 'Račun izdajemo nakon isporuke, s rokom plaćanja od 14 dana. Za veće narudžbe možemo zatražiti predujam; to će pisati u ponudi.',
  },
  volume: {
    q: 'Kako funkcionira cijena prema količini?',
    a: 'Jedan video stoji 100 €. Od 5 videa cijena po videu je 95 €, a svakih 5 videa pada za 5 €, sve do 50 € po videu. Za više od 100 videa izrađujemo ponudu.',
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Vlasništvo i prava korištenja', items: [q.owns] },
  { title: 'Isporuka', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formati', items: [q.formats, q.roomTypes] },
  { title: 'Koje fotografije trebate', items: [q.photos, q.access, q.skills] },
  { title: 'AI i kvaliteta', items: [q.ai, q.limits] },
  { title: 'Cijene i plaćanje', items: [q.volume, q.vat, q.payment, q.sample] },
];
