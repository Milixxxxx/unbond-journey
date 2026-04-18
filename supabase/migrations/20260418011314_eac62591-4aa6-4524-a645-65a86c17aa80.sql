create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  locale text default 'de',
  relationship_status text check (relationship_status in ('after','still_in')),
  toxicometer_score integer,
  toxicometer_completed_at timestamptz,
  has_access boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create table public.module_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_slug text not null,
  exercise_state jsonb not null default '{}'::jsonb,
  checklist_state jsonb not null default '{}'::jsonb,
  badge_earned boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (user_id, module_slug)
);

alter table public.module_progress enable row level security;

create policy "Users can view own progress" on public.module_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.module_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.module_progress for update using (auth.uid() = user_id);
create policy "Users can delete own progress" on public.module_progress for delete using (auth.uid() = user_id);

create table public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_slug text not null,
  entry_type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.journal_entries enable row level security;

create policy "Users can view own journal" on public.journal_entries for select using (auth.uid() = user_id);
create policy "Users can insert own journal" on public.journal_entries for insert with check (auth.uid() = user_id);
create policy "Users can delete own journal" on public.journal_entries for delete using (auth.uid() = user_id);

create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.handle_updated_at();
create trigger module_progress_updated_at before update on public.module_progress
  for each row execute function public.handle_updated_at();

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();