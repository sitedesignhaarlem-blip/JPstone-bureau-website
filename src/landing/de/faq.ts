// Alle deutschen Fragen und Antworten an einem Ort. Die Startseiten-FAQ, die Landingpages, die
// FAQ-Seite und die FAQPage-Strukturdaten lesen von hier, damit keine Antwort doppelt geschrieben wird.
import de from '../../i18n/de';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = de.faq.items;

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
    q: 'Brauchen Sie Zugang zur Yacht oder zum Hotel?',
    a: 'Nein. Wir arbeiten nur mit den Fotos, die Sie schon haben. Niemand muss an Bord kommen oder das Haus besuchen.',
  },
  fleet: {
    q: 'Können Sie Videos für eine ganze Flotte machen?',
    a: 'Ja. Jede Yacht bekommt ihr eigenes Video im selben ruhigen Stil, damit Ihre Flotte auf der Website einheitlich wirkt. Wir erstellen bis zu 2 Videos pro Tag, und den Liefertermin vereinbaren wir im Angebot.',
  },
  roomTypes: {
    q: 'Ein Video für das ganze Hotel oder eins pro Zimmertyp?',
    a: 'Beides ist möglich. Manche Hotels möchten ein Video vom ganzen Haus, andere eins pro Zimmertyp, damit jede Buchungsseite ihr eigenes hat. Jedes Video wird als ein Video berechnet.',
  },
  update: {
    q: 'Können Sie ein neues Video machen, wenn wir renovieren oder die Zimmer verändern?',
    a: 'Ja. Senden Sie uns die neuen Fotos, und wir machen ein neues Video. Neue Fotos gelten als neues Video, nicht als Korrektur.',
  },
  limits: {
    q: 'Kann das Video Räume oder Ausblicke zeigen, die nicht auf den Fotos sind?',
    a: 'Nein. Das Video kann nur zeigen, was auf Ihren Fotos ist. Wurde eine Kabine, ein Zimmer oder ein Ausblick nie fotografiert, ist er auch nicht im Film. Wir fügen keine Menschen, Möbel oder Ausblicke hinzu.',
  },
  referral: {
    q: "Gibt es eine Prämie für Empfehlungen?",
    a: "Ja. Wenn Sie ein anderes Unternehmen empfehlen und es bestellt, erhalten Sie bei Ihrer nächsten Bestellung ein kostenloses Video. Es gibt keine Obergrenze: ein kostenloses Video für jedes Unternehmen, das Sie empfehlen.",
  },
  vat: {
    q: 'Sind die Preise inklusive Umsatzsteuer?',
    a: 'Ja. Alle Preise verstehen sich inkl. USt., und das steht auch immer im Angebot.',
  },
  payment: {
    q: 'Wann bezahle ich?',
    a: "Aufträge unter 1.000 € zahlen Sie vollständig per Banküberweisung, bevor wir beginnen. Ab 1.000 € zahlen Sie 50 % per Banküberweisung bei der Bestellung und 50 % nach der Lieferung. Für jede Zahlung erhalten Sie eine Rechnung.",
  },
  volume: {
    q: 'Wie funktioniert der Mengenpreis?',
    a: 'Ein einzelnes Video kostet 100 €. Ab 5 Videos kostet ein Video 95 €, und alle 5 Videos sinkt der Preis pro Video um 5 €, bis auf 50 € pro Video. Mehr als 100 Videos: Wir erstellen ein Angebot.',
  },
  platforms: {
    q: "Kann ich das Video auf Airbnb oder Booking.com verwenden?",
    a: "Plattformen unterscheiden sich darin, ob und wo sie den Upload eines Videos erlauben, und ihre Regeln ändern sich. Prüfen Sie daher, was Ihr eigenes Inserat zulässt. Auf Ihrer eigenen Website und in Social Media können Sie das Video immer verwenden, ebenso auf jeder Plattform, die Videos erlaubt. Sie erhalten MP4-Dateien in 16:9 und 9:16.",
  },
  units: {
    q: "Ich habe mehrere Wohnungen in einem Haus. Wie wird das berechnet?",
    a: "Jedes Video wird als ein Video berechnet, und der Mengenpreis gilt für die ganze Bestellung. Sechs Wohnungen mit je einem eigenen Video kosten 6 × 95 € = 570 €, inkl. USt. Wenn mehrere Wohnungen gleich aussehen, kann ein Video für diesen Wohnungstyp genügen.",
  },
  listingLink: {
    q: "Können Sie mit meinem Inserat auf Airbnb oder Booking.com arbeiten?",
    a: "Ja. Senden Sie uns den Link zu Ihrem Inserat, und wir arbeiten mit den Fotos darauf. Originaldateien von Ihrem Fotografen ergeben ein schärferes Ergebnis als Bilder, die von einer Plattform gespeichert wurden. Senden Sie diese also mit, wenn Sie sie haben.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Eigentum und Nutzungsrechte', items: [q.owns] },
  { title: 'Lieferung', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formate', items: [q.formats, q.roomTypes, q.platforms] },
  { title: 'Welche Fotos Sie brauchen', items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'KI und Qualität', items: [q.ai, q.limits] },
  { title: 'Preise und Zahlung', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
