// Texts for the review form (/review/) and the reviews block, per language.
import type { Locale } from './config';

export interface ReviewUI {
  title: string; // page <title>
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  rating: string; // legend of the stars
  star: string; // "{n} of 5 stars"
  ratingMissing: string;
  name: string;
  company: string;
  text: string;
  textHint: string;
  consent: string;
  submit: string;
  whatsapp: string;
  thanks: string;
  mailSubject: string;
  sectionEyebrow: string;
  sectionTitle: string;
}

export const reviewUI: Record<Locale, ReviewUI> = {
  en: {
    title: 'Leave a review · Still to Film',
    description: 'Tell us how your Still to Film video turned out. It takes a minute.',
    eyebrow: 'Review',
    h1: 'How did we do?',
    lead: 'Thank you for working with us. A short review helps other charter companies and hotels decide, and helps us get better.',
    rating: 'Your rating',
    star: '{n} of 5 stars',
    ratingMissing: 'Choose a number of stars first.',
    name: 'Name',
    company: 'Company (optional)',
    text: 'Your review',
    textHint: 'What did you like, and what could be better?',
    consent: 'Still to Film may show this review on its website and social media, with my name and company.',
    submit: 'Send review',
    whatsapp: 'Send via WhatsApp',
    thanks: 'Thank you! Your email app opens with the review filled in. Press send there.',
    mailSubject: 'Review for Still to Film',
    sectionEyebrow: 'Reviews',
    sectionTitle: 'What clients say.',
  },
  nl: {
    title: 'Laat een review achter · Still to Film',
    description: 'Vertel ons hoe je video van Still to Film is geworden. Het kost een minuut.',
    eyebrow: 'Review',
    h1: 'Hoe hebben we het gedaan?',
    lead: 'Bedankt voor de samenwerking. Een korte review helpt andere charterbedrijven en hotels kiezen, en helpt ons beter te worden.',
    rating: 'Je beoordeling',
    star: '{n} van 5 sterren',
    ratingMissing: 'Kies eerst een aantal sterren.',
    name: 'Naam',
    company: 'Bedrijf (optioneel)',
    text: 'Je review',
    textHint: 'Wat vond je goed, en wat kan beter?',
    consent: 'Still to Film mag deze review tonen op de website en social media, met mijn naam en bedrijf.',
    submit: 'Review versturen',
    whatsapp: 'Versturen via WhatsApp',
    thanks: 'Bedankt! Je mailprogramma opent met de review ingevuld. Druk daar op versturen.',
    mailSubject: 'Review voor Still to Film',
    sectionEyebrow: 'Reviews',
    sectionTitle: 'Wat klanten zeggen.',
  },
  de: {
    title: 'Bewertung abgeben · Still to Film',
    description: 'Sagen Sie uns, wie Ihr Video von Still to Film geworden ist. Es dauert eine Minute.',
    eyebrow: 'Bewertung',
    h1: 'Wie zufrieden sind Sie?',
    lead: 'Danke für die Zusammenarbeit. Eine kurze Bewertung hilft anderen Charterfirmen und Hotels bei der Entscheidung und hilft uns, besser zu werden.',
    rating: 'Ihre Bewertung',
    star: '{n} von 5 Sternen',
    ratingMissing: 'Wählen Sie zuerst eine Anzahl Sterne.',
    name: 'Name',
    company: 'Unternehmen (optional)',
    text: 'Ihre Bewertung',
    textHint: 'Was hat Ihnen gefallen, und was könnte besser sein?',
    consent: 'Still to Film darf diese Bewertung mit meinem Namen und Unternehmen auf der Website und in sozialen Medien zeigen.',
    submit: 'Bewertung senden',
    whatsapp: 'Per WhatsApp senden',
    thanks: 'Danke! Ihr E-Mail-Programm öffnet sich mit der ausgefüllten Bewertung. Klicken Sie dort auf Senden.',
    mailSubject: 'Bewertung für Still to Film',
    sectionEyebrow: 'Bewertungen',
    sectionTitle: 'Was Kunden sagen.',
  },
  fr: {
    title: 'Laisser un avis · Still to Film',
    description: 'Dites-nous ce que vous pensez de votre vidéo Still to Film. Cela prend une minute.',
    eyebrow: 'Avis',
    h1: 'Qu’en avez-vous pensé ?',
    lead: 'Merci pour votre confiance. Un court avis aide d’autres loueurs de yachts et hôtels à choisir, et nous aide à progresser.',
    rating: 'Votre note',
    star: '{n} étoiles sur 5',
    ratingMissing: 'Choisissez d’abord un nombre d’étoiles.',
    name: 'Nom',
    company: 'Entreprise (facultatif)',
    text: 'Votre avis',
    textHint: 'Qu’avez-vous apprécié, et que pourrions-nous améliorer ?',
    consent: 'Still to Film peut afficher cet avis sur son site et ses réseaux sociaux, avec mon nom et mon entreprise.',
    submit: 'Envoyer l’avis',
    whatsapp: 'Envoyer via WhatsApp',
    thanks: 'Merci ! Votre messagerie s’ouvre avec l’avis déjà rempli. Cliquez sur Envoyer.',
    mailSubject: 'Avis pour Still to Film',
    sectionEyebrow: 'Avis',
    sectionTitle: 'Ce que disent nos clients.',
  },
  es: {
    title: 'Deja una reseña · Still to Film',
    description: 'Cuéntanos qué tal salió tu vídeo de Still to Film. Te lleva un minuto.',
    eyebrow: 'Reseña',
    h1: '¿Qué tal lo hicimos?',
    lead: 'Gracias por trabajar con nosotros. Una reseña breve ayuda a otras empresas de chárter y hoteles a decidir, y nos ayuda a mejorar.',
    rating: 'Tu valoración',
    star: '{n} de 5 estrellas',
    ratingMissing: 'Elige primero un número de estrellas.',
    name: 'Nombre',
    company: 'Empresa (opcional)',
    text: 'Tu reseña',
    textHint: '¿Qué te gustó y qué podríamos mejorar?',
    consent: 'Still to Film puede mostrar esta reseña en su web y redes sociales, con mi nombre y empresa.',
    submit: 'Enviar reseña',
    whatsapp: 'Enviar por WhatsApp',
    thanks: '¡Gracias! Se abre tu correo con la reseña ya escrita. Pulsa enviar allí.',
    mailSubject: 'Reseña para Still to Film',
    sectionEyebrow: 'Reseñas',
    sectionTitle: 'Lo que dicen los clientes.',
  },
  pt: {
    title: 'Deixe uma avaliação · Still to Film',
    description: 'Diga-nos como ficou o seu vídeo da Still to Film. Demora apenas um minuto.',
    eyebrow: 'Avaliação',
    h1: 'Como correu?',
    lead: 'Obrigado por trabalhar connosco. Uma avaliação curta ajuda outras empresas de charter e hotéis a decidir, e ajuda-nos a melhorar.',
    rating: 'A sua classificação',
    star: '{n} de 5 estrelas',
    ratingMissing: 'Escolha primeiro um número de estrelas.',
    name: 'Nome',
    company: 'Empresa (opcional)',
    text: 'A sua avaliação',
    textHint: 'O que correu bem e o que poderia ser melhor?',
    consent: 'A Still to Film pode mostrar esta avaliação no seu site e nas redes sociais, com o meu nome e a minha empresa.',
    submit: 'Enviar avaliação',
    whatsapp: 'Enviar por WhatsApp',
    thanks: 'Obrigado! O seu programa de e-mail abre com a avaliação já preenchida. Carregue em enviar.',
    mailSubject: 'Avaliação para a Still to Film',
    sectionEyebrow: 'Avaliações',
    sectionTitle: 'O que dizem os clientes.',
  },
  hr: {
    title: 'Ostavite recenziju · Still to Film',
    description: 'Recite nam kako je ispao vaš video studija Still to Film. Traje samo minutu.',
    eyebrow: 'Recenzija',
    h1: 'Kako smo vam se svidjeli?',
    lead: 'Hvala na suradnji. Kratka recenzija pomaže drugim charter tvrtkama i hotelima da odluče, a nama da budemo bolji.',
    rating: 'Vaša ocjena',
    star: '{n} od 5 zvjezdica',
    ratingMissing: 'Najprije odaberite broj zvjezdica.',
    name: 'Ime',
    company: 'Tvrtka (neobavezno)',
    text: 'Vaša recenzija',
    textHint: 'Što vam se svidjelo, a što bi moglo biti bolje?',
    consent: 'Still to Film smije prikazati ovu recenziju na svojoj web-stranici i društvenim mrežama, s mojim imenom i tvrtkom.',
    submit: 'Pošalji recenziju',
    whatsapp: 'Pošalji putem WhatsAppa',
    thanks: 'Hvala! Otvara se vaš program za e-poštu s ispunjenom recenzijom. Ondje kliknite Pošalji.',
    mailSubject: 'Recenzija za Still to Film',
    sectionEyebrow: 'Recenzije',
    sectionTitle: 'Što kažu klijenti.',
  },
};
