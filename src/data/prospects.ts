// Personal sample pages for prospects, at /p/<slug>/. Not indexed and not in the sitemap,
// so only people with the link see them.
//
// To add one:
// 1. Encode their clip:   scripts/encode-media.sh pad/naar/clip.mp4 <slug>
// 2. Save the listing photo the clip starts from as public/media/<slug>-photo.jpg (same size as the clip)
// 3. Add an entry below and send them https://<domein>/p/<slug>/
import type { Locale } from '../i18n/config';

export interface Prospect {
  slug: string; // part of the address; use something not easy to guess, e.g. 'sunsail-7k2'
  company: string; // shown as "Made for …"
  listing: string; // the yacht or room in the video
  lang: Locale; // language of the page
  video: string; // file name in public/media without extension
  photo: string; // the listing photo the video starts from
}

export const prospects: Prospect[] = [
  // Example page, so you can see how it looks. Remove it once you have real prospects.
  {
    slug: 'voorbeeld',
    company: 'Voorbeeld Charters',
    listing: 'Southern Cross',
    lang: 'nl',
    video: 'southern-cross-varen-zij',
    photo: '/media/photo-varen-zij.jpg',
  },
  {
    slug: 'example',
    company: 'Example Charters',
    listing: 'Southern Cross',
    lang: 'en',
    video: 'southern-cross-drone-anker',
    photo: '/media/photo-drone-anker.jpg',
  },
];
