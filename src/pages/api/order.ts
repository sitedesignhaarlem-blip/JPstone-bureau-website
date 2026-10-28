// The order form posts here. The price is always computed here from the ladder, never taken from the form.
import type { APIRoute } from 'astro';
import { adminClient, portalReady } from '../../lib/supabase';
import { MAX_ONLINE_VIDEOS, orderTotalCents, paymentSchedule, type Order, type Payment } from '../../lib/orders';
import { sendNewOrderNotice, sendOrderConfirmation } from '../../lib/emails';
import { earlyBirdActive, earlyBirdDiscount, earlyBirdNote } from '../../data/promo';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect, url }) => {
  if (!portalReady) return new Response('Not configured', { status: 503 });
  const f = await request.formData();
  const lang = f.get('lang') === 'nl' ? 'nl' : 'en';
  const str = (k: string, max: number) => String(f.get(k) ?? '').trim().slice(0, max);
  // Honeypot: bots fill in the hidden field. Pretend it worked, store nothing.
  if (str('website', 200)) return redirect(`/order/done/?lang=${lang}`, 303);

  const email = str('email', 200).toLowerCase();
  const name = str('name', 120);
  const count = Number(f.get('videos_count'));
  const listing = str('listing_url', 500);
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && name
    && Number.isInteger(count) && count >= 1 && count <= MAX_ONLINE_VIDEOS
    && f.get('terms') === 'yes' && (!listing || /^https?:\/\//i.test(listing));
  if (!valid) return redirect(`/order/?error=1&lang=${lang}&videos=${Number.isInteger(count) ? count : 1}`, 303);

  // The early-bird discount is applied here too, so the date check happens on the server, not in the browser.
  const base = orderTotalCents(count);
  const discount = earlyBirdActive() ? earlyBirdDiscount(base) : 0;
  const total = base - discount;
  const note = [discount ? earlyBirdNote(lang, discount, base) : '', str('note', 2000)].filter(Boolean).join('\n');
  const db = adminClient();
  const { data: order, error } = await db.from('orders').insert({
    customer_email: email,
    customer_name: name,
    company: str('company', 120) || null,
    title: str('title', 160) || (lang === 'nl' ? `${count} video${count === 1 ? '' : "'s"}` : `${count} video${count === 1 ? '' : 's'}`),
    videos_count: count,
    total_cents: total,
    lang,
    listing_url: listing || null,
    note: note || null,
  }).select('*').single<Order>();
  if (error || !order) return redirect(`/order/?error=1&lang=${lang}&videos=${count}`, 303);
  const { data: payments } = await db.from('payments').insert(paymentSchedule(total).map((p) => ({ ...p, order_id: order.id }))).select('*');
  // Confirmation to the customer and a notice to you. Never blocks the order if mail fails.
  await Promise.all([
    sendOrderConfirmation(order, (payments ?? []) as Payment[], url.origin),
    sendNewOrderNotice(order, url.origin),
  ]);
  return redirect(`/order/done/?order=${order.id}&lang=${lang}`, 303);
};
