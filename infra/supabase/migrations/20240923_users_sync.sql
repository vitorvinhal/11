-- =============================================================================
-- Sync auth.users -> users pública.
-- SEM trigger, usuários novos ficavam sem linha em users e o FK de sessions
-- (23503) bloqueava silenciosamente a persistência do chat.
-- (Não adiciona FK users.id -> auth.users: os seeds vitor/giovana/renata
--  usam ids não presentes em auth.users.)
-- =============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'name', split_part(coalesce(new.email, ''), '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();