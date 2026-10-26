// Limits on login, sign-up, code and password-reset attempts, per e-mail address and per IP address.
// Stored in the auth_attempts table (only the server can read it). Keys are hashed, so the table holds
// no e-mail or IP addresses. Supabase has its own limits on top of these.
import { createHash } from 'node:crypto';
import { adminClient } from './supabase';

export interface Limit { key: string; max: number; minutes: number }

const hash = (key: string) => createHash('sha256').update(key).digest('hex');

export const limits = {
  loginEmail: (email: string): Limit => ({ key: `login:email:${email}`, max: 5, minutes: 15 }),
  loginIp: (ip: string): Limit => ({ key: `login:ip:${ip}`, max: 30, minutes: 15 }),
  codeEmail: (email: string): Limit => ({ key: `code:email:${email}`, max: 3, minutes: 15 }),
  codeIp: (ip: string): Limit => ({ key: `code:ip:${ip}`, max: 10, minutes: 15 }),
  verifyEmail: (email: string): Limit => ({ key: `verify:email:${email}`, max: 5, minutes: 15 }),
  signupIp: (ip: string): Limit => ({ key: `signup:ip:${ip}`, max: 5, minutes: 60 }),
  resetEmail: (email: string): Limit => ({ key: `reset:email:${email}`, max: 3, minutes: 60 }),
  resetIp: (ip: string): Limit => ({ key: `reset:ip:${ip}`, max: 10, minutes: 60 }),
};

/** True when any of the limits has been reached. */
export async function isLimited(list: Limit[]): Promise<boolean> {
  const db = adminClient();
  const counts = await Promise.all(list.map(async (l) => {
    const since = new Date(Date.now() - l.minutes * 60_000).toISOString();
    const { count } = await db.from('auth_attempts').select('*', { count: 'exact', head: true }).eq('key', hash(l.key)).gte('created_at', since);
    return (count ?? 0) >= l.max;
  }));
  return counts.some(Boolean);
}

/** Counts an attempt against each limit. */
export async function recordAttempt(list: Limit[]): Promise<void> {
  const db = adminClient();
  await db.from('auth_attempts').insert(list.map((l) => ({ key: hash(l.key) })));
  // Now and then, remove attempts older than a day so the table stays small.
  if (Math.random() < 0.05) await db.from('auth_attempts').delete().lt('created_at', new Date(Date.now() - 86_400_000).toISOString());
}

/** Clears a limit, e.g. the failed logins of an e-mail address after a successful login. */
export async function clearAttempts(limit: Limit): Promise<void> {
  await adminClient().from('auth_attempts').delete().eq('key', hash(limit.key));
}
