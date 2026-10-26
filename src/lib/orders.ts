// Order rules shared by the order form, the portal and the admin pages. Payment is by bank transfer.
import { pricePerVideo } from '../data/pricing';

/** Orders from this amount are paid 50% when ordering and 50% after delivery; below it, all before we start. */
export const SPLIT_FROM_CENTS = 100_000;
/** More videos than this: we make a quote instead of an online order. */
export const MAX_ONLINE_VIDEOS = 100;

export type OrderStatus = 'awaiting_payment' | 'in_production' | 'in_review' | 'delivered' | 'completed' | 'cancelled';
export type PaymentKind = 'full' | 'deposit' | 'balance';

export interface Order {
  id: string; number: number; customer_email: string; customer_name: string | null; company: string | null;
  title: string; videos_count: number; total_cents: number; status: OrderStatus; lang: string;
  listing_url: string | null; note: string | null; created_at: string;
}
export interface Payment {
  id: string; order_id: string; kind: PaymentKind; amount_cents: number; status: 'open' | 'paid';
  reported_at: string | null; invoice_url: string | null; paid_at: string | null;
}
export interface Video {
  id: string; order_id: string; title: string; file_landscape: string | null; file_portrait: string | null;
  version: number; status: 'in_review' | 'revision_requested' | 'approved'; updated_at: string;
}
export interface Feedback { id: string; video_id: string; author_email: string; from_studio: boolean; message: string; created_at: string }

/** Total for a number of videos on the price ladder, in cents, including VAT. */
export const orderTotalCents = (count: number) => count * pricePerVideo(count) * 100;

/** The payments for an order total: one, or a deposit and a balance (the balance gets the odd cent). */
export function paymentSchedule(totalCents: number): { kind: PaymentKind; amount_cents: number }[] {
  if (totalCents < SPLIT_FROM_CENTS) return [{ kind: 'full', amount_cents: totalCents }];
  const deposit = Math.floor(totalCents / 2);
  return [{ kind: 'deposit', amount_cents: deposit }, { kind: 'balance', amount_cents: totalCents - deposit }];
}

/** Whether a payment is due now. The balance only once the videos are delivered. */
export function canPay(order: Order, payment: Payment, all: Payment[]): boolean {
  if (payment.status === 'paid' || order.status === 'cancelled') return false;
  if (payment.kind !== 'balance') return true;
  const depositPaid = all.some((p) => p.kind === 'deposit' && p.status === 'paid');
  return depositPaid && (order.status === 'delivered' || order.status === 'completed');
}

export const fullyPaid = (payments: Payment[]) => payments.length > 0 && payments.every((p) => p.status === 'paid');

/** What the customer writes with the bank transfer, so we can match it to the order. */
export const paymentReference = (order: Pick<Order, 'number'>) => `Still to Film #${order.number}`;

export const euro = (cents: number, locale = 'en-GB') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', minimumFractionDigits: cents % 100 ? 2 : 0 }).format(cents / 100);
