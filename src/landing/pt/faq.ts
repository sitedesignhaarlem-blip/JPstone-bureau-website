// All European Portuguese questions and answers in one place. The home page FAQ, the landing pages, the FAQ
// page and the FAQPage structured data all read from here, so an answer is never written twice.
import pt from '../../i18n/pt';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = pt.faq.items;

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
    q: 'Precisam de acesso ao iate ou ao hotel?',
    a: 'Não. Trabalhamos apenas com as fotografias que já tem. Ninguém precisa de subir a bordo nem de visitar o estabelecimento.',
  },
  fleet: {
    q: 'Podem fazer vídeos para uma frota inteira?',
    a: 'Sim. Cada iate recebe o seu próprio vídeo, com o mesmo estilo calmo, para que a frota pareça coerente no seu site. Fazemos até 2 vídeos por dia, e a data de entrega é acordada no orçamento.',
  },
  roomTypes: {
    q: 'Um vídeo do hotel inteiro ou um por tipo de quarto?',
    a: 'As duas opções funcionam. Alguns hotéis querem um vídeo de todo o estabelecimento; outros, um por tipo de quarto, para que cada página de reserva tenha o seu. Cada vídeo é cobrado como um vídeo.',
  },
  update: {
    q: 'Podem fazer um vídeo novo se remodelarmos ou mudarmos os quartos?',
    a: 'Sim. Envie-nos as fotografias novas e fazemos um vídeo novo. Fotografias novas contam como um vídeo novo, não como uma revisão.',
  },
  limits: {
    q: 'O vídeo pode mostrar divisões ou vistas que não estão nas fotografias?',
    a: 'Não. O vídeo só pode mostrar o que está nas suas fotografias. Se uma cabine, um quarto ou uma vista nunca foi fotografado, não aparecerá no filme. Não acrescentamos pessoas, mobiliário nem vistas.',
  },
  referral: {
    q: 'Têm uma recompensa por recomendação?',
    a: 'Sim. Se recomendar outra empresa e ela fizer uma encomenda, recebe um vídeo grátis na sua próxima encomenda. Não há limite: um vídeo grátis por cada empresa recomendada que encomende.',
  },
  vat: {
    q: 'Os preços incluem IVA?',
    a: 'Sim. Todos os preços incluem IVA, e o orçamento indica-o sempre.',
  },
  payment: {
    q: 'Quando é que pago?',
    a: "As encomendas abaixo de 1000 € são pagas na totalidade no momento da encomenda. A partir de 1000 € paga 50 % na encomenda e 50 % após a entrega. Paga online na sua área de cliente com iDEAL, cartão ou Bancontact, ou por transferência bancária, e recebe uma fatura por cada pagamento.",
  },
  volume: {
    q: 'Como funciona o preço por volume?',
    a: 'Um único vídeo custa 100 €. A partir de 5 vídeos, o preço por vídeo é de 95 € e desce 5 € a cada 5 vídeos, até um mínimo de 50 € por vídeo. Mais de 100 vídeos: preparamos um orçamento.',
  },
  platforms: {
    q: 'Posso usar o vídeo no Airbnb ou no Booking.com?',
    a: 'Cada plataforma decide se é possível carregar um vídeo e onde, e as regras mudam, por isso confirme o que o seu próprio anúncio permite. Pode sempre usar o vídeo no seu site, nas redes sociais e em qualquer plataforma que aceite vídeo. Recebe ficheiros MP4 em 16:9 e 9:16.',
  },
  units: {
    q: 'Tenho vários apartamentos no mesmo edifício. Como é cobrado?',
    a: 'Cada vídeo é cobrado como um vídeo, e o preço por volume aplica-se à encomenda inteira. Seis apartamentos com um vídeo cada são 6 × 95 € = 570 €, IVA incluído. Se vários apartamentos forem iguais, pode bastar um vídeo para esse tipo de apartamento.',
  },
  listingLink: {
    q: 'Podem trabalhar a partir do meu anúncio no Airbnb ou no Booking.com?',
    a: 'Sim. Envie-nos a ligação para o seu anúncio e trabalhamos com as fotografias que lá estão. Os ficheiros originais do seu fotógrafo dão um resultado mais nítido do que imagens guardadas a partir de uma plataforma, por isso envie-os também se os tiver.',
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Propriedade e direitos', items: [q.owns] },
  { title: 'Entrega', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formatos', items: [q.formats, q.roomTypes, q.platforms] },
  { title: 'As fotografias necessárias', items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'IA e qualidade', items: [q.ai, q.limits] },
  { title: 'Preços e pagamento', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
