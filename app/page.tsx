export const dynamic = 'force-dynamic';

import Link from 'next/link';

import { ReflectionCard } from '@/components/reflection-card';
import { siteContent } from '@/content/site';
import { teamMembers } from '@/content/team';
import { getCurrentUser } from '@/lib/auth';

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section
            className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <span
                  className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">Interactive bootcamp field report</span>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">{siteContent.title}</h1>
                <p className="text-xl font-medium text-plum-700">{siteContent.subtitle}</p>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">{siteContent.intro}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/topics"
                      className="rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">Explore
                  the survival guide</Link>
                {user ? <Link href="/profile"
                              className="rounded-full border border-plum-200 px-5 py-3 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">View
                  your account</Link> : <Link href="/signup"
                                              className="rounded-full border border-plum-200 px-5 py-3 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">Sign
                  up to vote in polls</Link>}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-panel-gradient p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {siteContent.heroBullets.map((bullet, index) => (
                    <div key={bullet} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-soft">
                      <div
                          className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-plum-100 text-sm font-semibold text-plum-800">0{index + 1}</div>
                      <p className="text-sm leading-7 text-slate-700">{bullet}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className="mt-14 space-y-6">
          <div className="space-y-3">
            <span
                className="inline-flex rounded-full border border-plum-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">Team reflections</span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Six people, six shifts in perspective.</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">Tap between <span
                className="font-semibold text-plum-800">Before</span> and <span
                className="font-semibold text-plum-800">After</span> to see how the week changed the way each teammate
              thinks about fintech.</p>
          </div>
          <div className="grid gap-6">
            {teamMembers.map((member) => <ReflectionCard key={member.id} member={member}/>)}
          </div>
        </section>
      </div>
  );
}
