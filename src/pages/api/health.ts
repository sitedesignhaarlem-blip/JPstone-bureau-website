// Quick check whether the portal is connected: open /api/health/ after a deploy. Shows only the names
// of the variables it found and whether the database answers, never any keys or customer data.
import type { APIRoute } from 'astro';
import { adminClient, envSource, portalReady } from '../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async () => {
  let database: string = 'not checked (keys missing)';
  if (portalReady) {
    const { error } = await adminClient().from('orders').select('id', { count: 'exact', head: true });
    database = error ? `error: ${error.message}` : 'ok (tables found)';
  }
  return Response.json({ portalReady, database, ...envSource() }, { headers: { 'Cache-Control': 'no-store' } });
};
