// All Spanish questions and answers in one place. The home page FAQ, the landing pages, the FAQ
// page and the FAQPage structured data all read from here, so an answer is never written twice.
import es from '../../i18n/es';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = es.faq.items;

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
    q: '¿Necesitáis acceso al yate o al hotel?',
    a: 'No. Trabajamos solo con las fotos que ya tienes. Nadie tiene que subir a bordo ni visitar el establecimiento.',
  },
  fleet: {
    q: '¿Podéis hacer vídeos para toda una flota?',
    a: 'Sí. Cada yate recibe su propio vídeo, con un mismo estilo tranquilo, para que la flota se vea coherente en tu web. Hacemos hasta 2 vídeos al día, y la fecha de entrega se acuerda en el presupuesto.',
  },
  roomTypes: {
    q: '¿Un vídeo de todo el hotel o uno por tipo de habitación?',
    a: 'Las dos opciones funcionan. Algunos hoteles quieren un vídeo de todo el establecimiento; otros, uno por tipo de habitación, para que cada página de reserva tenga el suyo. Cada vídeo se cobra como un vídeo.',
  },
  update: {
    q: '¿Podéis hacer un vídeo nuevo si reformamos o cambiamos las habitaciones?',
    a: 'Sí. Envíanos las fotos nuevas y hacemos un vídeo nuevo. Las fotos nuevas cuentan como un vídeo nuevo, no como una revisión.',
  },
  limits: {
    q: '¿Puede el vídeo mostrar habitaciones o vistas que no están en las fotos?',
    a: 'No. El vídeo solo puede mostrar lo que hay en tus fotos. Si un camarote, una habitación o una vista nunca se fotografió, no aparecerá en la película. No añadimos personas, muebles ni vistas.',
  },
  vat: {
    q: '¿Los precios incluyen IVA?',
    a: 'Sí. Todos los precios incluyen IVA, y el presupuesto siempre lo indica.',
  },
  payment: {
    q: '¿Cuándo pago?',
    a: 'Facturamos después de la entrega y pagas por transferencia bancaria, con un plazo de pago de 14 días. En encargos grandes podemos pedir un anticipo; el presupuesto lo indicará.',
  },
  volume: {
    q: '¿Cómo funciona el precio por volumen?',
    a: 'Un solo vídeo cuesta 100 €. A partir de 5 vídeos, el precio por vídeo es de 95 €, y baja 5 € cada 5 vídeos, hasta un mínimo de 50 € por vídeo. Más de 100 vídeos: te preparamos un presupuesto.',
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Propiedad y derechos', items: [q.owns] },
  { title: 'Entrega', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formatos', items: [q.formats, q.roomTypes] },
  { title: 'Las fotos que necesitas', items: [q.photos, q.access, q.skills] },
  { title: 'IA y calidad', items: [q.ai, q.limits] },
  { title: 'Precios y pago', items: [q.volume, q.vat, q.payment, q.sample] },
];
