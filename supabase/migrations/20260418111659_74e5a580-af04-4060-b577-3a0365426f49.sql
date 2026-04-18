ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS toxicometer_level text,
  ADD COLUMN IF NOT EXISTS acquisition_source text;