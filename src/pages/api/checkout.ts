// Pay button → Stripe Checkout. The amount always comes from the database, never from the form.
import type { APIRoute } from 'astro';
import { adminClient, currentEmail, portalReady } from '../../lib/supabase';
import { paymentsReady, stripe } from '../../lib/stripe';
import { canPay, type Order, type Payment } from '../../lib/orders';

export const prerender = false;

const kindName = {
  en: { full: 'full amount', deposit: 'deposit 50%', balance: 'balance 50%' },
  nl: { full: 'volledig bedrag', deposit: 'aanbetaling 50%', balance: 'restbedrag 50%' },
};

export const POST: APIRoute = async ({ request, cookies, url, redirect }) => {
  if (!portalReady || !paymentsReady) return new Response('Payments are not set up yet.', { status: 503 });
  const email = await currentEmail(request, cookies);
  if (!email) return redirect('/account/login/', 303);

  const form = await request.formData();
  const lang = form.get('lang') === 'nl' ? 'nl' : 'en';
  const db = adminClient();
  const { data: payment } = await db.from('payments').select('*').eq('id', String(form.get('payment_id') ?? '')).maybeSingle<Payment>();
  if (!payment) return new Response('Not found', { status: 404 });
  const { data: order } = await db.from('orders').select('*').eq('id', payment.order_id).single<Order>();
  // Only the customer of the order may pay it.
  if (!order || order.customer_email.toLowerCase() !== email) return new Response('Not found', { status: 404 });
  const { data: all } = await db.from('payments').select('*').eq('order_id', order.id);
  if (!canPay(order, payment, (all ?? []) as Payment[])) return redirect(`/account/orders/${order.id}/`, 303);

  const back = new URL(`/account/orders/${order.id}/`, url);
  const session = await stripe().checkout.sessions.create({
    mode: 'payment',
    customer_email: order.customer_email,
    locale: lang,
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'eur',
        unit_amount: payment.amount_cents,
        product_data: { name: `Still to Film · ${order.title} (#${order.number}, ${kindName[lang][payment.kind]})` },
      },
    }],
    // Stripe makes an invoice and e-mails it with the receipt.
    invoice_creation: { enabled: true, invoice_data: { description: `${order.videos_count} × video · order #${order.number}`, metadata: { order_id: order.id } } },
    metadata: { order_id: order.id, payment_id: payment.id },
    payment_intent_data: { metadata: { order_id: order.id, payment_id: payment.id } },
    success_url: `${back.href}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${back.href}?pay=cancelled`,
  });

  await db.from('payments').update({ stripe_session_id: session.id }).eq('id', payment.id);
  return redirect(session.url!, 303);
};
