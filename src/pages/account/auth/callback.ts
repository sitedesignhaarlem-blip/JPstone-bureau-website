// The link in the login e-mail lands here. Exchanges it for a session, then opens the account.
import type { APIRoute } from 'astro';
import type { EmailOtpType } from '@supabase/supabase-js';
import { portalReady, userClient } from '../../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ url, request, cookies, redirect }) => {
  if (!portalReady) return redirect('/account/login/');
  const supabase = userClient(request, cookies);
  const code = url.searchParams.get('code');
  const tokenHash = url.searchParams.get('token_hash');
  const type = url.searchParams.get('type') as EmailOtpType | null;
  const { error } = code
    ? await supabase.auth.exchangeCodeForSession(code)
    : tokenHash && type
      ? await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
      : { error: new Error('missing code') };
  return redirect(error ? '/account/login/?error=link' : '/account/');
};
