'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import type { SessionUser } from '@/types';

const links: Array<{ href: Route; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/topics', label: 'Topics' },
  { href: '/profile', label: 'Profile' }
];

export function Navbar({ user }: { user: SessionUser | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
      router.refresh();
    } finally {
      setLoggingOut(false);
      setMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient text-sm font-semibold text-white shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">FG</div>
          <div>
            <p className="text-sm font-semibold text-ink">The FinTech Survival Guide</p>
            <p className="text-xs text-slate-500">A Week That Changed Our Minds</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn('rounded-full px-4 py-2 text-sm font-medium transition', pathname === link.href ? 'bg-plum-100 text-plum-800' : 'text-slate-600 hover:bg-plum-50 hover:text-plum-700')}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <div className="rounded-full border border-plum-100 bg-plum-50 px-3 py-2 text-sm text-plum-800">Signed in as <span className="font-semibold">{user.username}</span></div>
              <button onClick={handleLogout} disabled={loggingOut} className="rounded-full border border-plum-200 px-4 py-2 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50 disabled:opacity-60">{loggingOut ? 'Logging out...' : 'Logout'}</button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full border border-plum-200 px-4 py-2 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">Login</Link>
              <Link href="/signup" className="rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">Sign up</Link>
            </>
          )}
        </div>

        <button type="button" aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-plum-100 text-plum-800 md:hidden" onClick={() => setMenuOpen((open) => !open)}>
          <span className="text-lg">≡</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-plum-100 bg-white/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={cn('rounded-2xl px-4 py-3 text-sm font-medium transition', pathname === link.href ? 'bg-plum-100 text-plum-800' : 'text-slate-600 hover:bg-plum-50 hover:text-plum-700')}>
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <div className="rounded-2xl bg-plum-50 px-4 py-3 text-sm text-plum-800">Signed in as <span className="font-semibold">{user.username}</span></div>
                <button onClick={handleLogout} disabled={loggingOut} className="rounded-2xl border border-plum-200 px-4 py-3 text-left text-sm font-semibold text-plum-800">{loggingOut ? 'Logging out...' : 'Logout'}</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-plum-200 px-4 py-3 text-sm font-semibold text-plum-800">Login</Link>
                <Link href="/signup" onClick={() => setMenuOpen(false)} className="rounded-2xl bg-accent-gradient px-4 py-3 text-sm font-semibold text-white shadow-glow">Sign up</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
