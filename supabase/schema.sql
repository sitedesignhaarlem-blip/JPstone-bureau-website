-- Database for the client portal. Run this once in Supabase: SQL Editor → New query → paste → Run.
-- Customers can only read their own orders (matched on the e-mail they log in with). Everything
-- that changes data goes through the site's server code with the service key, after a check.

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  number bigint generated always as identity (start with 1001),
  customer_email text not null,
  customer_name text,
  company text,
  title text not null,
  videos_count integer not null check (videos_count > 0),
  total_cents integer not null check (total_cents >= 0),
  -- awaiting_payment → in_production → in_review → delivered → completed (or cancelled)
  status text not null default 'awaiting_payment'
    check (status in ('awaiting_payment', 'in_production', 'in_review', 'delivered', 'completed', 'cancelled')),
  lang text not null default 'en',
  note text,
  created_at timestamptz not null default now()
);
create index if not exists orders_email_idx on public.orders (lower(customer_email));

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  -- full: the whole amount up front (orders under €1000). deposit + balance: 50% up front, 50% after delivery.
  kind text not null check (kind in ('full', 'deposit', 'balance')),
  amount_cents integer not null check (amount_cents > 0),
  status text not null default 'open' check (status in ('open', 'paid')),
  stripe_session_id text,
  invoice_url text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists payments_order_idx on public.payments (order_id);

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  title text not null,
  -- Paths in the private storage bucket "videos".
  file_landscape text,
  file_portrait text,
  version integer not null default 1,
  status text not null default 'in_review' check (status in ('in_review', 'revision_requested', 'approved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists videos_order_idx on public.videos (order_id);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  video_id uuid not null references public.videos (id) on delete cascade,
  author_email text not null,
  from_studio boolean not null default false,
  message text not null check (length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);
create index if not exists feedback_video_idx on public.feedback (video_id);

alter table public.orders enable row level security;
alter table public.payments enable row level security;
alter table public.videos enable row level security;
alter table public.feedback enable row level security;

-- Read access for the logged-in customer: only their own orders and what belongs to them.
drop policy if exists "own orders" on public.orders;
create policy "own orders" on public.orders for select to authenticated
  using (lower(customer_email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "own payments" on public.payments;
create policy "own payments" on public.payments for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id and lower(o.customer_email) = lower(auth.jwt() ->> 'email')));

drop policy if exists "own videos" on public.videos;
create policy "own videos" on public.videos for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id and lower(o.customer_email) = lower(auth.jwt() ->> 'email')));

drop policy if exists "own feedback" on public.feedback;
create policy "own feedback" on public.feedback for select to authenticated
  using (exists (
    select 1 from public.videos v join public.orders o on o.id = v.order_id
    where v.id = video_id and lower(o.customer_email) = lower(auth.jwt() ->> 'email')
  ));

-- Private bucket for the videos. Files are only reachable through short-lived signed links
-- that the server makes after checking the order belongs to the customer.
insert into storage.buckets (id, name, public)
values ('videos', 'videos', false)
on conflict (id) do nothing;
