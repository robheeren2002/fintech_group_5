'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? 'Something went wrong. Please try again.');
        return;
      }
      router.push('/');
      router.refresh();
    } catch {
      setError('Unable to reach the server right now. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-plum-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">{mode === 'login' ? 'Login' : 'Sign up'}</span>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">{mode === 'login' ? 'Pick up where you left off and keep your poll history attached to your profile.' : 'Create a username and password to vote in debates, revisit the journey, and keep your session active.'}</p>
        </div>
      </div>

      <div className="rounded-4xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-semibold text-slate-700">Username</label>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" minLength={3} maxLength={24} required placeholder="e.g. fintech_explorer" className="w-full rounded-2xl border border-plum-100 bg-mist px-4 py-3 text-slate-900 outline-none transition focus:border-plum-400 focus:bg-white focus:ring-4 focus:ring-plum-100" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} minLength={8} required placeholder="At least 8 characters" className="w-full rounded-2xl border border-plum-100 bg-mist px-4 py-3 text-slate-900 outline-none transition focus:border-plum-400 focus:bg-white focus:ring-4 focus:ring-plum-100" />
          </div>
          {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div> : null}
          <button type="submit" disabled={loading} className="w-full rounded-2xl bg-accent-gradient px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">{loading ? (mode === 'login' ? 'Logging in...' : 'Creating account...') : mode === 'login' ? 'Login' : 'Create account'}</button>
        </form>
        <p className="mt-5 text-sm text-slate-500">{mode === 'login' ? 'New here?' : 'Already have an account?'} <Link href={mode === 'login' ? '/signup' : '/login'} className="font-semibold text-plum-700 hover:text-plum-800">{mode === 'login' ? 'Create one' : 'Log in'}</Link></p>
      </div>
    </div>
  );
}
