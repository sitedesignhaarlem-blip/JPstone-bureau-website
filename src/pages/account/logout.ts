import type { APIRoute } from 'astro';
import { portalReady, userClient } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (portalReady) await userClient(request, cookies).auth.signOut();
  return redirect('/account/login/', 303);
};
