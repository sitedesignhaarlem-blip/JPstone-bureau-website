// All English questions and answers in one place. The home page FAQ, the landing pages, the FAQ
// page and the FAQPage structured data all read from here, so an answer is never written twice.
import en from '../../i18n/en';
import type { FaqItem } from '../../data/schema';

const [owns, fast, revisions, formats, photos, ai, skills, sample] = en.faq.items;

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
    q: 'Do you need access to the yacht or the hotel?',
    a: 'No. We work only from the photos you already have. Nobody needs to come on board or visit the property.',
  },
  fleet: {
    q: 'Can you make videos for a whole fleet?',
    a: 'Yes. Each yacht gets its own video in one calm style, so the fleet looks consistent on your website. We make up to 2 videos a day, and the delivery date is agreed in the quote.',
  },
  roomTypes: {
    q: 'One video for the whole hotel, or one per room type?',
    a: 'Both work. Some hotels want one video of the whole property, others one per room type so each booking page has its own. Each video is priced as one video.',
  },
  update: {
    q: 'Can you make a new video when we renovate or change the rooms?',
    a: 'Yes. Send the new photos and we make a new video. New photos count as a new video, not as a revision.',
  },
  limits: {
    q: 'Can the video show rooms or views that are not in the photos?',
    a: 'No. The video can only show what is in your photos. If a cabin, a room or a view was never photographed, it will not be in the film. We do not add people, furniture or views.',
  },
  vat: {
    q: 'Are prices including VAT?',
    a: 'Yes. All prices include VAT, and the quote always says so.',
  },
  payment: {
    q: 'When do I pay?',
    a: 'We invoice after delivery and you pay by bank transfer, with a payment term of 14 days. For larger orders we may ask for a deposit; the quote will say so.',
  },
  volume: {
    q: 'How does the volume price work?',
    a: 'A single video costs €100. From 5 videos the price per video is €95, and it drops by €5 for every 5 videos, down to €50 per video. More than 100 videos: we make a quote.',
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Ownership and rights', items: [q.owns] },
  { title: 'Delivery', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formats', items: [q.formats, q.roomTypes] },
  { title: 'Photos you need', items: [q.photos, q.access, q.skills] },
  { title: 'AI and quality', items: [q.ai, q.limits] },
  { title: 'Pricing and payment', items: [q.volume, q.vat, q.payment, q.sample] },
];
