// The e-mails the shop sends: order confirmation (customer), new order and payment reported (you).
// English and Dutch, like the portal. Plain layout that works in every mail app.
import { bank } from './bank';
import { esc, notifyAddress, sendMail } from './mail';
import { euro, paymentReference, type Order, type Payment } from './orders';
import { site } from '../data/site';
import { splitEarlyBirdNote } from '../data/promo';

const kindName = {
  en: { full: 'Full amount', deposit: 'Deposit (50%)', balance: 'Balance (50%), after delivery' },
  nl: { full: 'Volledig bedrag', deposit: 'Aanbetaling (50%)', balance: 'Restbedrag (50%), na oplevering' },
};

const layout = (title: string, body: string) => `<!doctype html><html><body style="margin:0;padding:24px;background:#f5f5f7;font-family:-apple-system,Helvetica,Arial,sans-serif;color:#1d1d1f">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:28px">
<p style="margin:0 0 20px;font-weight:600">${esc(site.name)}</p>
<h1 style="margin:0 0 16px;font-size:22px;line-height:1.25">${esc(title)}</h1>
${body}
<p style="margin:28px 0 0;color:#6e6e73;font-size:13px">${esc(site.name)} · ${esc(site.email)} · ${esc(site.phoneDisplay)}</p>
</div></body></html>`;

const rows = (list: [string, string][]) =>
  `<table style="width:100%;border-collapse:collapse;margin:12px 0">${list.map(([k, v]) => `<tr><td style="padding:6px 0;color:#6e6e73;border-bottom:1px solid #e5e5ea">${esc(k)}</td><td style="padding:6px 0;text-align:right;font-weight:600;border-bottom:1px solid #e5e5ea">${esc(v)}</td></tr>`).join('')}</table>`;
const button = (href: string, label: string) =>
  `<p style="margin:20px 0"><a href="${esc(href)}" style="display:inline-block;background:#0066cc;color:#fff;text-decoration:none;padding:12px 22px;border-radius:980px;font-weight:600">${esc(label)}</a></p>`;

/** Order confirmation to the customer, with the first amount to transfer and the bank details. */
export async function sendOrderConfirmation(order: Order, payments: Payment[], siteUrl: string) {
  const lang = order.lang === 'nl' ? 'nl' : 'en';
  const locale = lang === 'nl' ? 'nl' : 'en-GB';
  const nl = lang === 'nl';
  const first = payments.find((p) => p.kind !== 'balance') ?? payments[0];
  const b = bank();
  const ref = paymentReference(order);
  const doneUrl = new URL(`/order/done/?order=${order.id}&lang=${lang}`, siteUrl).href;
  const accountUrl = new URL(`/account/register/?lang=${lang}`, siteUrl).href;
  const title = nl ? `Bedankt voor je bestelling #${order.number}` : `Thank you for your order #${order.number}`;
  const { discount } = splitEarlyBirdNote(order.note);
  const amounts: [string, string][] = [
    ...(discount ? [discount.split(': ') as [string, string]] : []),
    ...payments.map((p) => [kindName[lang][p.kind], euro(p.amount_cents, locale)] as [string, string]),
    [nl ? 'Totaal, incl. btw' : 'Total, incl. VAT', euro(order.total_cents, locale)],
  ];
  const bankRows: [string, string][] = [
    [nl ? 'Ten name van' : 'Account holder', b.holder], ['IBAN', b.iban], ['BIC', b.bic],
    [nl ? 'Bedrag' : 'Amount', euro(first.amount_cents, locale)], [nl ? 'Omschrijving' : 'Reference', ref],
  ];
  const count = nl ? `${order.videos_count} video${order.videos_count === 1 ? '' : "'s"}` : `${order.videos_count} video${order.videos_count === 1 ? '' : 's'}`;
  // The title is the customer's own description, or just the count again when they left it empty.
  const what = order.title && order.title !== count ? `${count} (${order.title})` : count;
  const intro = nl
    ? `Hoi ${order.customer_name ?? ''}, we hebben je bestelling ontvangen: ${what}.`
    : `Hi ${order.customer_name ?? ''}, we have received your order: ${what}.`;
  const payText = nl
    ? 'Maak het bedrag hieronder over, met de omschrijving. We beginnen zodra de betaling binnen is, en je krijgt voor elke betaling een factuur.'
    : 'Please transfer the amount below, with the reference. We start as soon as the payment is in, and you get an invoice for every payment.';
  const accountText = nl
    ? `Maak een account aan met ${order.customer_email} om je bestelling te volgen en je video's te bekijken.`
    : `Create an account with ${order.customer_email} to follow your order and watch your videos.`;
  const referral = nl
    ? 'Tip: verwijs een ander bedrijf door. Bestelt het, dan krijg je een gratis video bij je volgende bestelling.'
    : 'Tip: refer another company. When they order, you get one free video on your next order.';
  const html = layout(title, `<p>${esc(intro)}</p>${rows(amounts)}<p>${esc(payText)}</p>${rows(bankRows)}<p>${esc(accountText)}</p>${button(accountUrl, nl ? 'Account aanmaken' : 'Create an account')}<p style="font-size:13px;color:#6e6e73">${esc(referral)}</p><p style="font-size:13px;color:#6e6e73">${nl ? 'Je bestelling bekijken' : 'View your order'}: <a href="${esc(doneUrl)}">${esc(doneUrl)}</a></p>`);
  const text = [title, '', intro, '', ...amounts.map(([k, v]) => `${k}: ${v}`), '', payText, '', ...bankRows.map(([k, v]) => `${k}: ${v}`), '', accountText, accountUrl, '', referral, '', `${site.name} · ${site.email}`].join('\n');
  return sendMail({ to: order.customer_email, subject: title, html, text });
}

/** "New order" to you. */
export async function sendNewOrderNotice(order: Order, siteUrl: string) {
  const adminUrl = new URL(`/admin/orders/${order.id}/`, siteUrl).href;
  const title = `Nieuwe bestelling #${order.number}: ${euro(order.total_cents, 'nl')}`;
  const list: [string, string][] = [
    ['Klant', `${order.customer_name ?? ''}${order.company ? ` (${order.company})` : ''}`], ['E-mail', order.customer_email],
    ["Video's", String(order.videos_count)], ['Omschrijving', order.title], ['Totaal', euro(order.total_cents, 'nl')], ['Taal', order.lang],
    ...(order.listing_url ? [['Listing', order.listing_url] as [string, string]] : []),
  ];
  const html = layout(title, `${rows(list)}${order.note ? `<p><strong>Notitie:</strong> ${esc(order.note)}</p>` : ''}${button(adminUrl, 'Open in admin')}`);
  const text = [title, '', ...list.map(([k, v]) => `${k}: ${v}`), order.note ? `Notitie: ${order.note}` : '', '', adminUrl].join('\n');
  return sendMail({ to: notifyAddress(), subject: title, html, text, replyTo: order.customer_email });
}

/** "Customer reports a payment" to you. */
export async function sendPaymentReportedNotice(order: Order, payment: Payment, siteUrl: string) {
  const adminUrl = new URL(`/admin/orders/${order.id}/`, siteUrl).href;
  const title = `Klant meldt betaling: #${order.number}, ${euro(payment.amount_cents, 'nl')}`;
  const list: [string, string][] = [['Klant', order.customer_email], ['Betaling', kindName.nl[payment.kind]], ['Bedrag', euro(payment.amount_cents, 'nl')], ['Omschrijving', paymentReference(order)]];
  const html = layout(title, `<p>Controleer of het geld op je rekening staat en klik dan op "Betaling ontvangen".</p>${rows(list)}${button(adminUrl, 'Open in admin')}`);
  const text = [title, '', ...list.map(([k, v]) => `${k}: ${v}`), '', adminUrl].join('\n');
  return sendMail({ to: notifyAddress(), subject: title, html, text, replyTo: order.customer_email });
}
