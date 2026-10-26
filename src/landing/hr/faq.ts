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
  referral: {
    q: "Imate li nagradu za preporuku?",
    a: "Da. Ako preporučite drugu tvrtku i ona naruči, dobivate jedan besplatan video uz sljedeću narudžbu. Nema ograničenja: jedan besplatan video za svaku tvrtku koju preporučite.",
  },
  vat: {
    q: 'Jesu li cijene s PDV-om?',
    a: 'Da. Sve cijene su s PDV-om, i to uvijek piše u ponudi.',
  },
  payment: {
    q: 'Kada plaćam?',
    a: "Narudžbe ispod 1.000 € plaćate u cijelosti bankovnom doznakom prije početka rada. Od 1.000 € plaćate 50 % bankovnom doznakom pri narudžbi i 50 % nakon isporuke. Za svaku uplatu dobivate račun.",
  },
  volume: {
    q: 'Kako funkcionira cijena prema količini?',
    a: 'Jedan video stoji 100 €. Od 5 videa cijena po videu je 95 €, a svakih 5 videa pada za 5 €, sve do 50 € po videu. Za više od 100 videa izrađujemo ponudu.',
  },
  platforms: {
    q: "Mogu li video koristiti na Airbnbu ili Booking.comu?",
    a: "Platforme se razlikuju po tome dopuštaju li prijenos videa i gdje, a njihova se pravila mijenjaju, pa provjerite što dopušta vaš oglas. Video uvijek možete koristiti na vlastitoj web-stranici i društvenim mrežama te na svakoj platformi koja dopušta video. Dobivate MP4 datoteke u formatima 16:9 i 9:16.",
  },
  units: {
    q: "Imam nekoliko apartmana u istoj zgradi. Kako se to naplaćuje?",
    a: "Svaki video naplaćuje se kao jedan video, a cijena prema količini vrijedi za cijelu narudžbu. Šest apartmana s vlastitim videom stoji 6 × 95 € = 570 €, s PDV-om. Ako nekoliko apartmana izgleda jednako, može biti dovoljan jedan video za taj tip apartmana.",
  },
  listingLink: {
    q: "Možete li raditi s mojim oglasom na Airbnbu ili Booking.comu?",
    a: "Da. Pošaljite nam poveznicu na svoj oglas i radit ćemo s fotografijama koje su na njemu. Originalne datoteke vašeg fotografa daju oštriji rezultat od slika spremljenih s platforme, pa pošaljite i njih ako ih imate.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Vlasništvo i prava korištenja', items: [q.owns] },
  { title: 'Isporuka', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formati', items: [q.formats, q.roomTypes, q.platforms] },
  { title: 'Koje fotografije trebate', items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'AI i kvaliteta', items: [q.ai, q.limits] },
  { title: 'Cijene i plaćanje', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
