create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  password_hash text not null,
  created_at timestamptz not null default now(),
  constraint users_username_length check (char_length(username) between 3 and 24)
);

create unique index if not exists users_username_unique_idx on users ((lower(username)));

create table if not exists polls (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  day_slug text not null,
  position integer not null,
  question text not null,
  options jsonb not null,
  explanation_per_option jsonb not null,
  after_vote_summary text not null,
  created_at timestamptz not null default now()
);

create index if not exists polls_day_slug_idx on polls (day_slug, position);

create table if not exists poll_responses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  poll_id uuid not null references polls(id) on delete cascade,
  selected_option integer not null,
  created_at timestamptz not null default now(),
  constraint unique_user_poll_vote unique (user_id, poll_id)
);

create index if not exists poll_responses_poll_idx on poll_responses (poll_id);
create index if not exists poll_responses_user_idx on poll_responses (user_id);
