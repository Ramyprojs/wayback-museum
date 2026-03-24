create extension if not exists "pgcrypto";

do $$
begin
  if not exists (select 1 from pg_type where typname = 'exhibit_category') then
    create type exhibit_category as enum (
      'Social',
      'Gaming',
      'News & Media',
      'Personal/GeoCities',
      'Shopping',
      'Search Engines',
      'Forums',
      'Entertainment'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'exhibit_status') then
    create type exhibit_status as enum ('gone', 'archived', 'reborn');
  end if;

  if not exists (select 1 from pg_type where typname = 'submission_status') then
    create type submission_status as enum ('pending', 'approved', 'rejected');
  end if;
end $$;

create table if not exists exhibits (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  url_original text not null,
  wayback_url text,
  successor_url text,
  years_active_start int not null,
  years_active_end int,
  category exhibit_category not null,
  status exhibit_status not null,
  short_description text not null,
  full_story text not null,
  peak_visitors text not null,
  peak_registered_users text,
  yoy_growth text,
  valuation_peak text,
  acquisition_price text,
  employees_peak text,
  bandwidth_peak text,
  country_origin text not null,
  countries_served text,
  founders jsonb not null default '[]'::jsonb,
  timeline_events jsonb not null default '[]'::jsonb,
  press_clippings jsonb not null default '[]'::jsonb,
  snapshot_links jsonb not null default '[]'::jsonb,
  legacy_influence text,
  death_cause text,
  competitors text[] not null default '{}',
  inspired_by text[] not null default '{}',
  acquired_by text,
  what_made_it_special text[] not null default '{}',
  thumbnail_url text not null,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists community_memories (
  id uuid primary key default gen_random_uuid(),
  exhibit_id uuid not null references exhibits(id) on delete cascade,
  handle text,
  memory text not null check (char_length(memory) <= 500),
  decade_tag text,
  upvotes int not null default 0,
  flagged boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists pending_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url_original text not null,
  years_active_start int not null,
  years_active_end int,
  category exhibit_category not null,
  short_description text not null,
  why_it_deserves text not null,
  submitter_handle text,
  wayback_url text,
  status submission_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists site_metrics (
  metric_key text primary key,
  metric_value bigint not null default 0,
  updated_at timestamptz not null default now()
);

create index if not exists idx_exhibits_slug on exhibits(slug);
create index if not exists idx_exhibits_featured on exhibits(featured);
create index if not exists idx_memories_exhibit on community_memories(exhibit_id);

insert into site_metrics (metric_key, metric_value)
values ('visitors_total', 0)
on conflict (metric_key) do nothing;
