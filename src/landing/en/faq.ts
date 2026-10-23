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
  referral: {
    q: "Do you have a referral reward?",
    a: "Yes. If you refer another company and they place an order, you get one free video on your next order. There is no limit: one free video for every company you refer.",
  },
  vat: {
    q: 'Are prices including VAT?',
    a: 'Yes. All prices include VAT, and the quote always says so.',
  },
  payment: {
    q: 'When do I pay?',
    a: "Orders under €1,000 are paid in full when you order. From €1,000 you pay 50% when you order and 50% after delivery. You pay online in your client account with iDEAL, card or Bancontact, or by bank transfer, and you get an invoice for every payment.",
  },
  volume: {
    q: 'How does the volume price work?',
    a: 'A single video costs €100. From 5 videos the price per video is €95, and it drops by €5 for every 5 videos, down to €50 per video. More than 100 videos: we make a quote.',
  },
  platforms: {
    q: "Can I use the video on Airbnb or Booking.com?",
    a: "Platforms differ in whether and where they accept a video upload, and their rules change, so check what your own listing allows. You can always use the video on your own website and on social media, and on any platform that allows video. You get MP4 files in 16:9 and 9:16.",
  },
  units: {
    q: "I have several apartments in one building. How is that priced?",
    a: "Each video is priced as one video, and the volume price applies to the whole order. Six apartments with a video each are 6 × €95 = €570, including VAT. If several apartments look the same, one video for that type of apartment can be enough.",
  },
  listingLink: {
    q: "Can you work from my Airbnb or Booking.com listing?",
    a: "Yes. Send the link to your listing and we work from the photos on it. Original files from your photographer give a sharper result than images saved from a platform, so send those too if you have them.",
  },
} satisfies Record<string, FaqItem>;

export const groups: { title: string; items: FaqItem[] }[] = [
  { title: 'Ownership and rights', items: [q.owns] },
  { title: 'Delivery', items: [q.fast, q.revisions, q.fleet, q.update] },
  { title: 'Formats', items: [q.formats, q.roomTypes, q.platforms] },
  { title: 'Photos you need', items: [q.photos, q.access, q.skills, q.listingLink] },
  { title: 'AI and quality', items: [q.ai, q.limits] },
  { title: 'Pricing and payment', items: [q.volume, q.units, q.vat, q.payment, q.referral, q.sample] },
];
