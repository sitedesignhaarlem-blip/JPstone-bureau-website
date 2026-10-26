// Password rules for sign-up and password changes. Supabase stores only a hash of the password;
// the site never stores or logs it.
import { createHash } from 'node:crypto';

export const PASSWORD_MIN = 10;
export const PASSWORD_MAX = 72; // bcrypt, which Supabase uses, ignores anything longer

export type PasswordProblem = 'short' | 'long' | 'email' | 'pwned' | 'mismatch';

/**
 * Whether a password has appeared in a known data breach, via Have I Been Pwned. Only the first
 * 5 characters of its SHA-1 hash leave the server (k-anonymity), never the password itself.
 * If the service cannot be reached, the password is allowed.
 */
async function pwned(password: string): Promise<boolean> {
  const sha1 = createHash('sha1').update(password).digest('hex').toUpperCase();
  try {
    const res = await fetch(`https://api.pwnedpasswords.com/range/${sha1.slice(0, 5)}`, {
      headers: { 'Add-Padding': 'true' },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return false;
    const text = await res.text();
    return text.split('\n').some((line) => {
      const [suffix, count] = line.trim().split(':');
      return suffix === sha1.slice(5) && Number(count) > 0;
    });
  } catch {
    return false;
  }
}

export async function passwordProblem(password: string, repeat: string, email: string): Promise<PasswordProblem | null> {
  if (password !== repeat) return 'mismatch';
  if (password.length < PASSWORD_MIN) return 'short';
  if (new TextEncoder().encode(password).length > PASSWORD_MAX) return 'long';
  if (email && password.toLowerCase().includes(email.split('@')[0].toLowerCase()) && email.split('@')[0].length >= 4) return 'email';
  if (await pwned(password)) return 'pwned';
  return null;
}
