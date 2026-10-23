// Customer feedback on a video: a note, a revision request, or approval.
import type { APIRoute } from 'astro';
import { adminClient, currentEmail, portalReady } from '../../lib/supabase';
import type { Order, Video } from '../../lib/orders';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!portalReady) return new Response('Not configured', { status: 503 });
  const email = await currentEmail(request, cookies);
  if (!email) return redirect('/account/login/', 303);

  const form = await request.formData();
  const action = String(form.get('action') ?? '');
  const message = String(form.get('message') ?? '').trim().slice(0, 5000);
  const db = adminClient();
  const { data: video } = await db.from('videos').select('*').eq('id', String(form.get('video_id') ?? '')).maybeSingle<Video>();
  if (!video) return new Response('Not found', { status: 404 });
  const { data: order } = await db.from('orders').select('*').eq('id', video.order_id).single<Order>();
  if (!order || order.customer_email.toLowerCase() !== email) return new Response('Not found', { status: 404 });
  const back = `/account/orders/${order.id}/`;
  if (video.status === 'approved') return redirect(back, 303);

  if (message) await db.from('feedback').insert({ video_id: video.id, author_email: email, message });
  if (action === 'revision') {
    await db.from('videos').update({ status: 'revision_requested', updated_at: new Date().toISOString() }).eq('id', video.id);
  } else if (action === 'approve') {
    await db.from('videos').update({ status: 'approved', updated_at: new Date().toISOString() }).eq('id', video.id);
  } else if (!message) {
    return redirect(back, 303);
  }
  return redirect(`${back}?saved=1`, 303);
};
