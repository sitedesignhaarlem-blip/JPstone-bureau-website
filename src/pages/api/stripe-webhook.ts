// Stripe tells us here when a payment succeeded. In Stripe: Developers → Webhooks → add endpoint
// https://stilltofilm.com/api/stripe-webhook/ with the events checkout.session.completed and
// checkout.session.async_payment_succeeded, and put its signing secret in STRIPE_WEBHOOK_SECRET.
import type { APIRoute } from 'astro';
import { STRIPE_WEBHOOK_SECRET } from 'astro:env/server';
import { portalReady } from '../../lib/supabase';
import { paymentsReady, stripe } from '../../lib/stripe';
import { recordCheckout } from '../../lib/orders';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!portalReady || !paymentsReady || !STRIPE_WEBHOOK_SECRET) return new Response('Not configured', { status: 503 });
  const body = await request.text();
  let event;
  try {
    event = await stripe().webhooks.constructEventAsync(body, request.headers.get('stripe-signature') ?? '', STRIPE_WEBHOOK_SECRET);
  } catch {
    return new Response('Bad signature', { status: 400 });
  }
  if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
    await recordCheckout(event.data.object);
  }
  return new Response('ok');
};
