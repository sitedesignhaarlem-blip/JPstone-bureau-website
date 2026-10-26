// "I have transferred it": the customer reports a bank transfer. You still confirm it on /admin/.
import type { APIRoute } from 'astro';
import { adminClient, currentEmail, portalReady } from '../../lib/supabase';
import { canPay, type Order, type Payment } from '../../lib/orders';
import { sendPaymentReportedNotice } from '../../lib/emails';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
  if (!portalReady) return new Response('Not configured', { status: 503 });
  const email = await currentEmail(request, cookies);
  if (!email) return redirect('/account/login/', 303);
  const form = await request.formData();
  const db = adminClient();
  const { data: payment } = await db.from('payments').select('*').eq('id', String(form.get('payment_id') ?? '')).maybeSingle<Payment>();
  if (!payment) return new Response('Not found', { status: 404 });
  const { data: order } = await db.from('orders').select('*').eq('id', payment.order_id).single<Order>();
  if (!order || order.customer_email.toLowerCase() !== email) return new Response('Not found', { status: 404 });
  const { data: all } = await db.from('payments').select('*').eq('order_id', order.id);
  if (!payment.reported_at && canPay(order, payment, (all ?? []) as Payment[])) {
    await db.from('payments').update({ reported_at: new Date().toISOString() }).eq('id', payment.id);
    await sendPaymentReportedNotice(order, payment, url.origin);
  }
  return redirect(`/account/orders/${order.id}/?reported=1`, 303);
};
