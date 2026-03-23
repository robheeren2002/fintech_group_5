export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/lib/auth';
import { getProfileStats } from '@/lib/polls';
import { formatDate } from '@/lib/utils';

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  const stats = await getProfileStats(user.id);
  const completion = stats.totalPolls > 0 ? Math.round((stats.totalVotes / stats.totalPolls) * 100) : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">Profile & account</span>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Hi, {user.username}.</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">This is your checkpoint for the survival guide: account info, poll participation, and how far you have moved through the debate layer of the bootcamp.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-plum-100 bg-mist p-5 shadow-soft"><p className="text-sm text-slate-500">Member since</p><p className="mt-2 text-lg font-semibold text-ink">{formatDate(user.createdAt)}</p></div>
              <div className="rounded-3xl border border-plum-100 bg-mist p-5 shadow-soft"><p className="text-sm text-slate-500">Polls answered</p><p className="mt-2 text-lg font-semibold text-ink">{stats.totalVotes} / {stats.totalPolls}</p></div>
              <div className="rounded-3xl border border-plum-100 bg-mist p-5 shadow-soft"><p className="text-sm text-slate-500">Participation</p><p className="mt-2 text-lg font-semibold text-ink">{completion}%</p></div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-panel-gradient p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">Your debate snapshot</h2>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/70"><div className="h-full rounded-full bg-accent-gradient transition-all duration-700" style={{ width: `${completion}%` }} /></div>
            <p className="mt-4 text-sm leading-7 text-slate-700">{stats.latestVoteAt ? `Your latest vote was recorded on ${formatDate(stats.latestVoteAt)}. Head back to the Topics page to keep challenging your own assumptions.` : 'You have not voted in any polls yet. The debate layer unlocks once you pick a side on the Topics page.'}</p>
            <Link href="/topics" className="mt-6 inline-flex rounded-full bg-accent-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">Continue to Topics</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
