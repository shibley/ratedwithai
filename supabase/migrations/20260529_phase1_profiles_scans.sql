-- Phase 1: profiles + scans (no DB triggers; profile row created from auth callback)

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  stripe_customer_id text unique,
  plan text not null default 'free' check (plan in ('free', 'pro', 'business')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.scans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  url text not null,
  score int not null,
  grade text not null,
  violations_count int not null default 0,
  passes_count int not null default 0,
  incomplete_count int not null default 0,
  violations jsonb not null default '[]'::jsonb,
  plan text,
  created_at timestamptz not null default now()
);

create index if not exists scans_user_id_created_at_idx
  on public.scans (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.scans enable row level security;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

create policy "scans_select_own" on public.scans
  for select using (auth.uid() = user_id);

create policy "scans_insert_own" on public.scans
  for insert with check (auth.uid() = user_id);
