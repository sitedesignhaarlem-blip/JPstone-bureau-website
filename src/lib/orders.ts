// Order rules shared by the portal, the admin pages and the payment code.
import { adminClient } from './supabase';
import { stripe } from './stripe';
import type Stripe from 'stripe';

/** Orders from this amount are paid 50% up front and 50% after delivery; below it, all up front. */
export const SPLIT_FROM_CENTS = 100_000;

export type OrderStatus = 'awaiting_payment' | 'in_production' | 'in_review' | 'delivered' | 'completed' | 'cancelled';
export type PaymentKind = 'full' | 'deposit' | 'balance';

export interface Order {
  id: string; number: number; customer_email: string; customer_name: string | null; company: string | null;
  title: string; videos_count: number; total_cents: number; status: OrderStatus; lang: string; note: string | null; created_at: string;
}
export interface Payment {
  id: string; order_id: string; kind: PaymentKind; amount_cents: number; status: 'open' | 'paid';
  stripe_session_id: string | null; invoice_url: string | null; paid_at: string | null;
}
export interface Video {
  id: string; order_id: string; title: string; file_landscape: string | null; file_portrait: string | null;
  version: number; status: 'in_review' | 'revision_requested' | 'approved'; updated_at: string;
}
export interface Feedback { id: string; video_id: string; author_email: string; from_studio: boolean; message: string; created_at: string }

/** The payments for an order total: one, or a deposit and a balance (the balance gets the odd cent). */
export function paymentSchedule(totalCents: number): { kind: PaymentKind; amount_cents: number }[] {
  if (totalCents < SPLIT_FROM_CENTS) return [{ kind: 'full', amount_cents: totalCents }];
  const deposit = Math.floor(totalCents / 2);
  return [{ kind: 'deposit', amount_cents: deposit }, { kind: 'balance', amount_cents: totalCents - deposit }];
}

/** Whether a payment can be paid now. The balance only once the videos are delivered. */
export function canPay(order: Order, payment: Payment, all: Payment[]): boolean {
  if (payment.status === 'paid' || order.status === 'cancelled') return false;
  if (payment.kind !== 'balance') return true;
  const depositPaid = all.some((p) => p.kind === 'deposit' && p.status === 'paid');
  return depositPaid && (order.status === 'delivered' || order.status === 'completed');
}

export const fullyPaid = (payments: Payment[]) => payments.length > 0 && payments.every((p) => p.status === 'paid');

export const euro = (cents: number, locale = 'en-GB') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', minimumFractionDigits: cents % 100 ? 2 : 0 }).format(cents / 100);

/**
 * Records a finished Stripe Checkout session: marks the payment paid, stores the invoice link and
 * moves the order on. Safe to run twice (from the webhook and from the return page).
 */
export async function recordCheckout(session: Stripe.Checkout.Session): Promise<void> {
  if (session.payment_status !== 'paid') return;
  const paymentId = session.metadata?.payment_id;
  if (!paymentId) return;
  const db = adminClient();
  const { data: payment } = await db.from('payments').select('*').eq('id', paymentId).single<Payment>();
  if (!payment || payment.status === 'paid') return;
  // The amount must match what was asked, so a changed session can never mark more as paid.
  if (session.amount_total !== payment.amount_cents) return;

  let invoiceUrl: string | null = null;
  if (session.invoice) {
    try {
      const invoice = typeof session.invoice === 'string' ? await stripe().invoices.retrieve(session.invoice) : session.invoice;
      invoiceUrl = invoice.hosted_invoice_url ?? null;
    } catch { /* the invoice link is a convenience; the payment still counts */ }
  }
  await db.from('payments').update({ status: 'paid', paid_at: new Date().toISOString(), stripe_session_id: session.id, invoice_url: invoiceUrl }).eq('id', payment.id);

  const { data: order } = await db.from('orders').select('status').eq('id', payment.order_id).single<{ status: OrderStatus }>();
  if (!order) return;
  if (payment.kind !== 'balance' && order.status === 'awaiting_payment') {
    await db.from('orders').update({ status: 'in_production' }).eq('id', payment.order_id);
  }
  if (payment.kind === 'balance' && order.status === 'delivered') {
    await db.from('orders').update({ status: 'completed' }).eq('id', payment.order_id);
  }
}
