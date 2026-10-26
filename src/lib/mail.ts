// E-mail through Resend (resend.com). Without RESEND_API_KEY nothing is sent and the site works as
// before. Sending never fails an order: errors are logged and ignored.
import { MAIL_FROM, ORDER_NOTIFY_EMAIL, RESEND_API_KEY } from 'astro:env/server';
import { adminEmails } from './supabase';
import { site } from '../data/site';

export const mailReady = Boolean(RESEND_API_KEY);
/**
 * Sender. Sent from the subdomain mail.stilltofilm.com (verified in Resend → Domains), so the sending
 * reputation stays apart from the main domain. Replies go to site.email.
 */
const from = () => MAIL_FROM?.trim() || `${site.name} <bestellingen@mail.stilltofilm.com>`;
/** Who gets the "new order" and "payment reported" e-mails. */
export const notifyAddress = () => ORDER_NOTIFY_EMAIL?.trim() || adminEmails()[0] || site.email;

export async function sendMail(m: { to: string; subject: string; html: string; text: string; replyTo?: string }): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: from(), to: [m.to], subject: m.subject, html: m.html, text: m.text, reply_to: m.replyTo ?? site.email }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error('mail not sent:', res.status, (await res.text()).slice(0, 300));
    return res.ok;
  } catch (error) {
    console.error('mail not sent:', (error as Error).message);
    return false;
  }
}

/** Plain HTML-safe text, for anything the customer typed. */
export const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
