// Supabase clients for the portal. `userClient` acts as the logged-in customer (the database only
// shows them their own orders); `adminClient` uses the service key and is only used on the server
// after the code has checked who is asking.
import type { AstroCookies } from 'astro';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL, ADMIN_EMAILS } from 'astro:env/server';

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

/** The logged-in user's e-mail, checked with Supabase (not just read from the cookie). */
export async function currentEmail(request: Request, cookies: AstroCookies): Promise<string | null> {
  if (!portalReady) return null;
  const { data } = await userClient(request, cookies).auth.getUser();
  return data.user?.email?.toLowerCase() ?? null;
}

export function isAdmin(email: string | null): boolean {
  if (!email) return false;
  return (ADMIN_EMAILS ?? '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean).includes(email);
}

/** A link to a video file that works for one hour. With `download`, the browser saves the file. */
export async function signedVideoUrl(path: string, download?: string): Promise<string | null> {
  const { data } = await adminClient().storage.from('videos').createSignedUrl(path, 3600, download ? { download } : undefined);
  return data?.signedUrl ?? null;
}
