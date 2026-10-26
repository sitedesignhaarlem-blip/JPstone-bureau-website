// Business details. Everything in [brackets] is a placeholder: replace before launch.

// Production domain. stilltofilm.nl redirects here.
export const SITE_URL = 'https://stilltofilm.com';

export const site = {
  name: 'Still to Film',
  city: 'Haarlem',
  country: 'NL',
  // Left empty for now: an empty value is simply not shown. Fill in once registered with the KvK.
  kvk: '', // KvK number
  vat: '', // btw-identificatienummer (NL…B01)
  address: '', // street, postcode and city as registered with the KvK
  email: 'sitedesignhaarlem@gmail.com',
  phoneDisplay: '+31 6 57 24 96 07',
  phoneE164: '+31657249607',
  whatsapp: 'https://wa.me/31657249607',
  // TODO: e.g. https://formspree.io/f/xxxxxxx. Until set, the form opens the visitor's mail app instead.
  formEndpoint: '',
  // Bank account for payments by bank transfer, shown on the order confirmation and in the client
  // account. Easiest: set BANK_HOLDER, BANK_IBAN and BANK_BIC in Vercel (see src/lib/bank.ts); these
  // values are only the fallback. TODO(owner): fill in before people can order.
  bank: {
    holder: '[TODO: name of the account holder]',
    iban: '[TODO: IBAN]',
    bic: '[TODO: BIC]',
  },
};
