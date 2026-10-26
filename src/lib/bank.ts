// Bank details for payments by bank transfer. Set BANK_HOLDER, BANK_IBAN and BANK_BIC in Vercel to
// change them without touching the code (then Redeploy); otherwise the values in src/data/site.ts are used.
import { BANK_BIC, BANK_HOLDER, BANK_IBAN } from 'astro:env/server';
import { site } from '../data/site';

/** NL91ABNA0417164300 → NL91 ABNA 0417 1643 00, easier to type over. */
const groupIban = (iban: string) => iban.replace(/\s+/g, '').toUpperCase().replace(/(.{4})(?=.)/g, '$1 ');

export function bank() {
  return {
    holder: BANK_HOLDER?.trim() || site.bank.holder,
    iban: BANK_IBAN?.trim() ? groupIban(BANK_IBAN) : site.bank.iban,
    bic: BANK_BIC?.trim().toUpperCase() || site.bank.bic,
  };
}
