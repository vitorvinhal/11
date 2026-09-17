'use client';

import { useState, FormEvent } from 'react';
import { Eye, EyeOff, Loader2, Sparkles } from 'lucide-react';
import { useAuth } from '../lib/auth';

type Tab = 'login' | 'signup';

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading, signUp, signIn, signInWithGoogle } = useAuth();
  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [oauthBusy, setOauthBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'err'; msg: string } | null>(null);

  const pwLenOk = password.length >= 6;
  const pwMatchOk = confirm.length > 0 && password === confirm;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setBusy(true);
    if (tab === 'signup') {
      if (!pwLenOk) { setFeedback({ kind: 'err', msg: 'Mínimo 6 caracteres.' }); setBusy(false); return; }
      if (!pwMatchOk) { setFeedback({ kind: 'err', msg: 'Senhas diferentes.' }); setBusy(false); return; }
    }
    const { error } = tab === 'signup' ? await signUp(email, password) : await signIn(email, password);
    setBusy(false);
    if (error) {
      if (/already|exists/i.test(error)) { setTab('login'); setFeedback({ kind: 'ok', msg: 'Conta já existe — entre com sua senha.' }); return; }
      setFeedback({ kind: 'err', msg: error }); return;
    }
    if (tab === 'signup') setFeedback({ kind: 'ok', msg: 'Conta criada!' });
  };

  const withGoogle = async () => {
    setFeedback(null);
    setOauthBusy(true);
    const { error } = await signInWithGoogle();
    if (error) {
      if (/operation_not_allowed|not enabled|disabled/i.test(error)) {
        setFeedback({ kind: 'err', msg: 'Google ainda sem credenciais OAuth configuradas (Client ID/Secret no Supabase).' });
      } else {
        setFeedback({ kind: 'err', msg: `Google: ${error}` });
      }
    }
    setOauthBusy(false);
  };

  if (loading) return <div className="relative z-10 flex min-h-screen items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (user) return <>{children}</>;

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center bg-[#05060a] px-4">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06]">
            <Sparkles className="h-6 w-6 text-[#7dd3fc]" />
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] text-white/90">ELEVEN</span>
        </div>

        <h1 className="mb-1 text-center text-2xl font-semibold text-white">
          {tab === 'login' ? 'Bem-vindo de volta' : 'Crie sua conta'}
        </h1>
        <p className="mb-6 text-center text-sm text-white/40">
          {tab === 'login' ? 'Entre para continuar' : 'Comece grátis em segundos'}
        </p>

        <button type="button" onClick={() => void withGoogle()} disabled={oauthBusy}
          className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white transition hover:bg-white/[0.07] disabled:opacity-50">
          <GoogleLogo />
          {oauthBusy ? 'Redirecionando…' : 'Continuar com Google'}
        </button>

        <div className="my-4 flex items-center gap-3 text-[11px] text-white/30">
          <span className="h-px flex-1 bg-white/10" /> ou <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mb-6 flex rounded-lg bg-white/[0.04] p-1">
          {(['login', 'signup'] as Tab[]).map((t) => (
            <button key={t} onClick={() => { setTab(t); setFeedback(null); }}
              className={`flex-1 rounded-md py-2 text-sm font-medium transition ${tab === t ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}>
              {t === 'login' ? 'Entrar' : 'Criar conta'}
            </button>
          ))}
        </div>

        <form onSubmit={(e) => submit(e)} className="space-y-3">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg bg-white/[0.05] px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:bg-white/[0.07]" />

          <div className="relative">
            <input type={showPw ? 'text' : 'password'} required minLength={6} value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Senha"
              className="w-full rounded-lg bg-white/[0.05] px-3.5 py-3 pr-10 text-sm text-white placeholder:text-white/30 outline-none transition focus:bg-white/[0.07]" />
            <button type="button" onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {tab === 'signup' && (
            <input type={showPw ? 'text' : 'password'} required minLength={6} value={confirm}
              onChange={(e) => setConfirm(e.target.value)} placeholder="Confirmar senha"
              className="w-full rounded-lg bg-white/[0.05] px-3.5 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:bg-white/[0.07]" />
          )}
          {tab === 'signup' && (
            <div className="flex justify-between text-[11px] text-white/40">
              <span className={pwLenOk ? 'text-emerald-400/80' : ''}>Mín. 6 caracteres</span>
              <span className={pwMatchOk ? 'text-emerald-400/80' : ''}>Senhas coincidem</span>
            </div>
          )}

          {feedback && <p className={`text-xs ${feedback.kind === 'ok' ? 'text-emerald-300' : 'text-rose-400'}`}>{feedback.msg}</p>}

          <button type="submit" disabled={busy || !email || !password}
            className="w-full rounded-lg bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-40">
            {busy ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : tab === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-white/25">
          Multi-tenant · dados isolados · Supabase Auth
        </p>
      </div>
    </div>
  );
}