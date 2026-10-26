// Links in the e-mails land here (login link, address confirmation, password reset). Exchanges the
// link for a session. ?flow=confirm shows a welcome; ?flow=reset opens the new-password page.
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
  if (error) return redirect('/account/login/?error=link');
  const flow = url.searchParams.get('flow');
  if (flow === 'reset') {
    // Lets /account/password/ skip the current password, for 15 minutes.
    cookies.set('pw_reset', '1', { path: '/account/', maxAge: 900, httpOnly: true, secure: true, sameSite: 'lax' });
    return redirect('/account/password/');
  }
  return redirect(flow === 'confirm' ? '/account/?welcome=1' : '/account/');
};
