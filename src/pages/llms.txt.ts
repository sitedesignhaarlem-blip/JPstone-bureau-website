// /llms.txt: a plain-text summary of the business for AI assistants. Prices, plan sizes and dates
// come from src/data/pricing.config.ts, so they always match the rest of the site.
import type { APIRoute } from 'astro';
import { PRICING as P } from '../data/pricing.config';

const eur = (n: number) => n.toLocaleString('en-GB');
const std = P.tiers.standard;
const prem = P.tiers.premium;
const o = P.oneOff;
const plans = (tier: 'standard' | 'premium') =>
  P.monthly.sizes.map((n) => `EUR ${eur(P.monthly.perVideo[tier][n] * n)} for ${n}`).join(', ');
const earlyDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Amsterdam' }).format(new Date(P.earlyBird.until));
const priceLines = [
  `- Standard, one-off: EUR ${o.standard.base} per video. From ${o.standard.discountFrom} videos the price per video drops by EUR ${o.standard.step} for every ${o.standard.block} videos, down to a minimum of EUR ${o.standard.floor}.`,
  `- Premium, one-off: EUR ${o.premium.base} per video, with the same volume discount, down to a minimum of EUR ${o.premium.floor}.`,
  `- Monthly plans, billed monthly, cancel any time with ${P.monthly.noticeMonths} month's notice, unused videos do not roll over: Standard ${plans('standard')} videos a month; Premium ${plans('premium')} videos a month. Extra videos cost the plan's price per video.`,
].join('\n');

const body = `# Still to Film

> Still to Film turns the photos already on a yacht charter or boutique hotel listing into a calm AI walkthrough video of about ${std.seconds} seconds (Standard) or ${prem.seconds} seconds (Premium). There is no filming day and no crew on board. Standard is delivered in 16:9, Premium in 16:9 and 9:16 (MP4).

Still to Film is a small studio based in the Netherlands. We work for yacht charter companies, boutique hotels and vacation rental hosts worldwide, in English, Dutch, German, French, Spanish, Croatian and Portuguese.

## What we do

- Done for you: the customer needs no skills, software, prompts or account. They send a link to the listing (or the photos) and we do the rest.
- A person checks every video in full before delivery. This is what separates the service from self-serve AI video tools.
- We take the existing listing photos (or a link to the listing) and turn them into a walkthrough video with AI-generated camera movement.
- Two packages: Standard (about ${std.seconds} seconds, 16:9 landscape, ${std.revisions} revision rounds) and Premium (about ${prem.seconds} seconds, 16:9 landscape and 9:16 vertical for Reels, TikTok and Shorts, ${prem.revisions} revision rounds, priority in the production queue). Files are MP4.
- Revisions: a revision is a change with the same photos and the same concept; new photos or a new concept count as a new video.
- Turnaround: roughly ${P.turnaroundWeeks} weeks from order to delivery.
- Free sample: a short preview of 15 to 25 seconds with a few shots, made from the customer's own listing photos, with no obligation. A full video is about ${std.seconds} seconds (Standard) or ${prem.seconds} seconds (Premium).

## What it can and cannot do

- The AI creates camera movement and in-between frames from the photos. It can only show what is in the photos; it cannot show rooms, views or details that were never photographed.
- A person checks every video before delivery so it shows only what is in the photos. If something does not match, it is fixed or cut.
- Sharper, well-lit, high-resolution photos give a better film. Original files from the photographer work best.

## Pricing (including VAT)

${priceLines}
- Coming soon: an interactive 3D walkthrough (waitlist only, not available yet).
- Price calculator: https://stilltofilm.com/pricing/
- Early-bird discount: ${P.earlyBird.percent}% off one-off orders placed before ${earlyDate}.
- More than ${P.oneOff.maxVideos} videos: custom quote.
- Payment: by bank transfer. Orders under EUR ${eur(P.splitPaymentFrom)} (incl. VAT) are paid in full before work starts; from EUR ${eur(P.splitPaymentFrom)}, 50% when ordering and 50% after delivery. An invoice for every payment.
- Ordering: online at https://stilltofilm.com/order/ (Standard videos: choose the number of videos; the price follows the ladder) or by quote.
- Client account: customers log in with a password or a one-time e-mail code to see their order, watch and download their videos, and give feedback or request revisions.
- Referral: one free video on the next order for every company a customer refers that places an order.
- Usage: unlimited use for the customer's own marketing (website, listings, social media, advertising). No resale as a standalone video.

## Key pages

The full text of every English page is in one file: [llms-full.txt](https://stilltofilm.com/llms-full.txt)


- [Home](https://stilltofilm.com/): what we do, before/after examples, packages, price calculator and FAQ
- [Video for yacht charters](https://stilltofilm.com/yacht-charter-video/): walkthrough videos from yacht listing photos, no filming day
- [Video for boutique hotels](https://stilltofilm.com/hotel-video/): videos per room type or for the whole property, from existing photos
- [Video for vacation rentals](https://stilltofilm.com/vacation-rental-video/): videos per holiday home or per apartment, from the listing photos (Airbnb, Booking.com, Vrbo or own website)
- [AI video from photos](https://stilltofilm.com/ai-video-from-photos/): how it works, limits, the human quality check, done-for-you vs self-serve tools
- [AI video tools vs. done for you](https://stilltofilm.com/ai-video-tools-vs-done-for-you/): honest comparison of self-serve AI video tools and a done-for-you service: cost, time, quality check, and when each is the better choice
- [Pricing](https://stilltofilm.com/pricing/): the full price ladder, what is included, revisions vs new videos, example totals
- [FAQ](https://stilltofilm.com/faq/): all questions, grouped by topic
- [How it works](https://stilltofilm.com/how-it-works/): the four steps from photos to delivered video
- [Library](https://stilltofilm.com/library/): example clips made from the listing photos of a motor catamaran
- [Contact](https://stilltofilm.com/contact/): request a free sample video
- [Terms](https://stilltofilm.com/terms/): quote, revisions, payment, usage rights, cancellation
- [Privacy](https://stilltofilm.com/privacy/)

## Insights (articles)

- [All articles](https://stilltofilm.com/insights/)
- [Which photos work best for AI video?](https://stilltofilm.com/insights/best-listing-photos-for-ai-video/)
- [What to show in a yacht charter video](https://stilltofilm.com/insights/what-to-show-in-a-yacht-charter-video/)
- [AI video from photos or a filming day?](https://stilltofilm.com/insights/ai-video-from-photos-vs-filming-day/)
- [One walkthrough video, used everywhere](https://stilltofilm.com/insights/use-one-walkthrough-video-everywhere/)
- [Hotel video: per room type or whole property?](https://stilltofilm.com/insights/hotel-video-per-room-type-or-property/)

Other languages: [Nederlands](https://stilltofilm.com/nl/), [Deutsch](https://stilltofilm.com/de/), [Français](https://stilltofilm.com/fr/), [Español](https://stilltofilm.com/es/), [Hrvatski](https://stilltofilm.com/hr/), [Português](https://stilltofilm.com/pt/)

## Contact

- Email: sitedesignhaarlem@gmail.com
- Phone and WhatsApp: +31 6 57 24 96 07
`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
