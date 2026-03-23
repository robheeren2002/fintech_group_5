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
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">Interactive bootcamp field report</span>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">{siteContent.title}</h1>
              <p className="text-xl font-medium text-plum-700">{siteContent.subtitle}</p>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">{siteContent.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/topics" className="rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">Explore the survival guide</Link>
              {user ? <Link href="/profile" className="rounded-full border border-plum-200 px-5 py-3 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">View your account</Link> : <Link href="/signup" className="rounded-full border border-plum-200 px-5 py-3 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">Sign up to vote in polls</Link>}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-panel-gradient p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {siteContent.heroBullets.map((bullet, index) => (
                <div key={bullet} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-soft">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-plum-100 text-sm font-semibold text-plum-800">0{index + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
        <div className="space-y-6 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-plum-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">Why this exists</span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Not a lecture recap — a story of changing assumptions.</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">We built this site as a survival guide for someone who missed the bootcamp but still wants the real substance: the big ideas, the disagreements, the moments where our first instinct stopped being enough, and the questions we left with at the end.</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-ink p-6 text-white shadow-soft md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-200">Field note</p>
          <p className="mt-4 text-lg leading-8 text-white/85">The week did not make us more certain. It made us better at spotting trade-offs between speed and trust, convenience and power, access and responsibility.</p>
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="space-y-3">
          <span className="inline-flex rounded-full border border-plum-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">Team reflections</span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Six people, six shifts in perspective.</h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600">Tap between <span className="font-semibold text-plum-800">Before</span> and <span className="font-semibold text-plum-800">After</span> to see how the week changed the way each teammate thinks about fintech.</p>
        </div>
        <div className="grid gap-6">
          {teamMembers.map((member) => <ReflectionCard key={member.id} member={member} />)}
        </div>
      </section>

      <section className="mt-14 rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">Survival guide map</span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Three ways to explore the week.</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">Use the site like a learning path: start with the reflections, test your understanding with the quizzes, then step into the debates through the polls.</p>
          </div>
          <Link href="/topics" className="inline-flex rounded-full border border-plum-200 px-4 py-2.5 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">Jump to topics</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {siteContent.guideCards.map((card, index) => (
            <div key={card.title} className="rounded-[1.75rem] border border-plum-100 bg-mist p-5 shadow-soft">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-plum-800 shadow-soft">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
