// Quick check whether the portal is connected: open /api/health/ after a deploy. Shows only the names
// of the variables it found, what is wrong with them, and whether the database answers. Never keys or customer data.
import type { APIRoute } from 'astro';
import { adminClient, configProblem, envSource, portalReady } from '../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async () => {
  let database = configProblem ? 'not checked (fix the problem first)' : 'not checked (keys missing)';
  if (portalReady) {
    try {
      const { error } = await adminClient().from('orders').select('id', { count: 'exact', head: true });
      database = !error ? 'ok (tables found)'
        : /orders|relation|schema cache/i.test(error.message) ? `tables missing: run supabase/schema.sql in the SQL Editor (${error.message})`
        : /fetch failed|ENOTFOUND|getaddrinfo/i.test(error.message) ? 'could not reach Supabase: check that SUPABASE_URL is your Project URL (https://<project>.supabase.co)'
        : /api key|jwt|unauthor|invalid/i.test(error.message) ? `key rejected: check SUPABASE_SERVICE_ROLE_KEY (${error.message})`
        : `error: ${error.message || error.code || 'unknown'}`;
    } catch (e) {
      database = `could not reach Supabase: ${(e as Error).message}`;
    }
  }
  return Response.json({ portalReady, problem: configProblem, database, ...envSource() }, { headers: { 'Cache-Control': 'no-store' } });
};
