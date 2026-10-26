// Supabase clients for the portal. `userClient` acts as the logged-in customer (the database only
// shows them their own orders); `adminClient` uses the service key and is only used on the server
// after the code has checked who is asking.
import type { AstroCookies } from 'astro';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import * as env from 'astro:env/server';

// Set by hand or by the Supabase integration in Vercel, which uses other names depending on its version.
const SUPABASE_URL = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY || env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY;
const ADMIN_EMAILS = env.ADMIN_EMAILS;

export const portalReady = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_SERVICE_ROLE_KEY);

export function userClient(request: Request, cookies: AstroCookies): SupabaseClient {
  return createServerClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => parseCookieHeader(request.headers.get('Cookie') ?? '').map((c) => ({ name: c.name, value: c.value ?? '' })),
      setAll: (list) => list.forEach(({ name, value, options }) => cookies.set(name, value, { ...options, path: '/', httpOnly: true, secure: true, sameSite: 'lax' })),
    },
  });
}

let admin: SupabaseClient | undefined;
export function adminClient(): SupabaseClient {
  admin ??= createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false, autoRefreshToken: false } });
  return admin;
}

/** The logged-in user's e-mail, checked with Supabase (not just read from the cookie). Only once the address is confirmed. */
export async function currentEmail(request: Request, cookies: AstroCookies): Promise<string | null> {
  return (await currentUser(request, cookies))?.email ?? null;
}

export async function currentUser(request: Request, cookies: AstroCookies): Promise<{ email: string; name: string } | null> {
  if (!portalReady) return null;
  const { data } = await userClient(request, cookies).auth.getUser();
  const user = data.user;
  if (!user?.email || !user.email_confirmed_at) return null;
  return { email: user.email.toLowerCase(), name: String(user.user_metadata?.name ?? '') };
}

/**
 * Checks an e-mail and password without logging in (no cookies are set), e.g. to confirm the current
 * password before changing it.
 */
export async function passwordIsCorrect(email: string, password: string): Promise<boolean> {
  const client = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, { auth: { persistSession: false, autoRefreshToken: false } });
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (!error) await client.auth.signOut({ scope: 'local' });
  return !error;
}

/** Only paths inside the account may be used to send someone on after logging in. */
export const safeNext = (next: string | null) => (next && /^\/account\/[\w/-]*$/.test(next) ? next : '/account/');

export function isAdmin(email: string | null): boolean {
  if (!email) return false;
  return (ADMIN_EMAILS ?? '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean).includes(email);
}

/** A link to a video file that works for one hour. With `download`, the browser saves the file. */
export async function signedVideoUrl(path: string, download?: string): Promise<string | null> {
  const { data } = await adminClient().storage.from('videos').createSignedUrl(path, 3600, download ? { download } : undefined);
  return data?.signedUrl ?? null;
}
