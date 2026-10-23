// Stripe for the portal payments. Without STRIPE_SECRET_KEY the pay buttons are hidden.
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from 'astro:env/server';

export const paymentsReady = Boolean(STRIPE_SECRET_KEY);

let client: Stripe | undefined;
export function stripe(): Stripe {
  client ??= new Stripe(STRIPE_SECRET_KEY!);
  return client;
}
