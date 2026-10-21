// English Insights articles. Each entry's id matches the body file src/insights/en/<id>.astro.
export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  date: string;
  readMinutes: number;
}

export const articles: ArticleMeta[] = [
  {
    id: 'PhotosForVideo',
    slug: 'best-listing-photos-for-ai-video',
    title: 'Which photos work best for AI video? · Still to Film',
    description: 'A practical checklist for listing photos that make a good AI walkthrough video: resolution, sharpness, light, straight lines, shot mix, order and what to avoid.',
    h1: 'Which listing photos work best for an AI walkthrough video?',
    summary: 'Sharp, well-lit, high-resolution photos with straight lines, a mix of wide and detail shots, and no people, watermarks or heavy filters work best, ideally the original files from your photographer. An AI video can only show what is in the photos, so the sharper the photos, the sharper and calmer the film.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'what-to-show-in-a-yacht-charter-video',
    title: 'What to show in a yacht charter video · Still to Film',
    description: 'The running order for a 60–90 second yacht charter video: exterior, at anchor, deck, saloon, galley, cabins, bathroom and details, plus 16:9 versus 9:16.',
    h1: 'What to show in a yacht charter video, and in what order',
    summary: 'A yacht charter video works best when it follows a guest\'s day: the yacht underway and at anchor, then the deck, saloon, galley, cabins, bathroom and a few details, ending outside again. In 60 to 90 seconds that means roughly 10 to 25 seconds per area, with calm camera moves, in 16:9 for websites and 9:16 for Reels and Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'ai-video-from-photos-vs-filming-day',
    title: 'AI video from photos or a filming day? · Still to Film',
    description: 'AI video from photos and a filming day compared on planning, crew, turnaround, what each can show, revisions and cost, and when filming is the better choice.',
    h1: 'AI video from photos or a filming day: time, cost and limits compared',
    summary: 'AI video from photos needs no date, crew or weather and costs a fixed €50 to €100 per video including VAT, but it can only show what is in the photos, with no people and no recorded sound. A filming day is the better choice when you need people, real sound, interviews, aerial footage or spaces that were never photographed.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'use-one-walkthrough-video-everywhere',
    title: 'One walkthrough video, used everywhere · Still to Film',
    description: 'Where to use the 16:9 and 9:16 versions of a walkthrough video: website, listing platforms, YouTube, Reels, TikTok, Stories and WhatsApp, plus file tips.',
    h1: 'How to use one walkthrough video on your website, listings and social media',
    summary: 'Use the 16:9 version on your website, on listing platforms that accept video and on YouTube, and the 9:16 version for Instagram Reels, TikTok, Stories and WhatsApp status. Upload the MP4 files, autoplay muted on your website, open with the strongest shot, and check each platform\'s current rules because they differ.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'hotel-video-per-room-type-or-property',
    title: 'Hotel video: per room type or whole property? · Still to Film',
    description: 'When a hotel needs one property video, one per room type or both, where each works best, what it costs by volume, and what to do after a renovation.',
    h1: 'Hotel videos: one per room type or one for the whole property?',
    summary: 'One property video suits your home page and social media, while a video per room type suits booking pages where guests compare rooms, and you can combine both. Each counts as one video, so five room types plus one property video is 6 × €95 = €570 including VAT, and a renovated room needs a new video from new photos.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
