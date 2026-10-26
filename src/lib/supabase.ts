// Supabase clients for the portal. `userClient` acts as the logged-in customer (the database only
// shows them their own orders); `adminClient` uses the service key and is only used on the server
// after the code has checked who is asking.
import type { AstroCookies } from 'astro';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import * as env from 'astro:env/server';

// Set by hand or by the Supabase integration in Vercel. The integration uses other names depending on
// its version, and may add a prefix (e.g. STORAGE_SUPABASE_URL), so any variable ending in the usual
// name is accepted too. envSource() says which names were used, never the values.
const runtime: Record<string, string | undefined> = typeof process !== 'undefined' ? process.env : {};
function pick(direct: [string, string | undefined][], suffixes: string[]): [string, string] | null {
  for (const [name, value] of direct) if (value) return [name, value];
  for (const suffix of suffixes) {
    const name = Object.keys(runtime).sort().find((k) => k.endsWith(suffix) && runtime[k]);
    if (name) return [name, runtime[name]!];
  }
  return null;
}
const url = pick([['SUPABASE_URL', env.SUPABASE_URL], ['NEXT_PUBLIC_SUPABASE_URL', env.NEXT_PUBLIC_SUPABASE_URL]], ['SUPABASE_URL']);
const anon = pick([
  ['SUPABASE_ANON_KEY', env.SUPABASE_ANON_KEY], ['SUPABASE_PUBLISHABLE_KEY', env.SUPABASE_PUBLISHABLE_KEY],
  ['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY', env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY], ['NEXT_PUBLIC_SUPABASE_ANON_KEY', env.NEXT_PUBLIC_SUPABASE_ANON_KEY],
], ['SUPABASE_ANON_KEY', 'SUPABASE_PUBLISHABLE_KEY']);
const service = pick([['SUPABASE_SERVICE_ROLE_KEY', env.SUPABASE_SERVICE_ROLE_KEY], ['SUPABASE_SECRET_KEY', env.SUPABASE_SECRET_KEY]], ['SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_SECRET_KEY']);
// Forgive common copy-paste slips: spaces, quotes, a trailing slash or /rest/v1 after the URL.
const clean = (v?: string) => v?.trim().replace(/^["']|["']$/g, '').trim();
const SUPABASE_URL = clean(url?.[1])?.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const SUPABASE_ANON_KEY = clean(anon?.[1]);
const SUPABASE_SERVICE_ROLE_KEY = clean(service?.[1]);

/** What is wrong with the settings, in plain words, or null. Never includes the values themselves. */
function findProblem(): string | null {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) return null; // reported as missing
  const local = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(SUPABASE_URL); // for testing with a local Supabase
  if (!local && !/^https:\/\/[a-z0-9-]+\.supabase\.(co|in)$/i.test(SUPABASE_URL)) {
    if (/^(sb_|eyJ)/.test(SUPABASE_URL)) return `${url![0]} contains a key, not the Project URL (https://<project>.supabase.co).`;
    return `${url![0]} is not a Project URL like https://<project>.supabase.co.`;
  }
  if (/\s/.test(SUPABASE_ANON_KEY) || /\s/.test(SUPABASE_SERVICE_ROLE_KEY)) return 'One of the keys contains a space or line break.';
  if (SUPABASE_ANON_KEY.startsWith('sb_secret_')) return `${anon![0]} holds the secret key; it should hold the publishable (anon) key.`;
  if (SUPABASE_SERVICE_ROLE_KEY.startsWith('sb_publishable_')) return `${service![0]} holds the publishable key; it should hold the secret (service_role) key.`;
  if (SUPABASE_ANON_KEY === SUPABASE_SERVICE_ROLE_KEY) return 'The anon key and the service key are the same; the service key should be the secret one.';
  return null;
}
export const configProblem = findProblem();
const ADMIN_EMAILS = env.ADMIN_EMAILS;

/** Which variable names the portal found (names only), for /api/health/. */
export const envSource = () => ({
  url: url?.[0] ?? null,
  anonKey: anon?.[0] ?? null,
  serviceKey: service?.[0] ?? null,
  adminEmails: Boolean(ADMIN_EMAILS),
  // Names of all variables that mention Supabase, so a missing one is easy to spot. No values.
  supabaseVariables: Object.keys(runtime).filter((k) => /SUPABASE/i.test(k)).sort(),
});

export const portalReady = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_SERVICE_ROLE_KEY) && !configProblem;

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
  let user;
  try {
    ({ data: { user } } = await userClient(request, cookies).auth.getUser());
  } catch {
    return null; // Supabase unreachable: treat as logged out rather than crashing the page
  }
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
