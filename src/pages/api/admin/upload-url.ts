// Admin only: a one-time link to upload a video file straight from the browser to Supabase
// (large files do not go through the site's server).
import type { APIRoute } from 'astro';
import { adminClient, currentEmail, isAdmin, portalReady } from '../../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!portalReady) return new Response('Not configured', { status: 503 });
  if (!isAdmin(await currentEmail(request, cookies))) return new Response('Forbidden', { status: 403 });
  const { orderId, name } = await request.json() as { orderId: string; name: string };
  const safe = String(name).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '').slice(-80) || 'video.mp4';
  const path = `${orderId}/${Date.now()}-${safe}`;
  const { data, error } = await adminClient().storage.from('videos').createSignedUploadUrl(path);
  if (error || !data) return new Response(error?.message ?? 'Upload link failed', { status: 500 });
  return Response.json({ url: data.signedUrl, path });
};
