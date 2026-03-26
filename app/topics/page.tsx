export const dynamic = 'force-dynamic';
import { ExpandableDayIntro } from '@/app/topics/expandable-day-info';
import { DayNav } from '@/components/day-nav';
import { PollCard } from '@/components/poll-card';
import { QuizCard } from '@/components/quiz-card';
import { days } from '@/content/days';
import { getCurrentUser } from '@/lib/auth';
import { getPollsWithResults } from '@/lib/polls';

export default async function TopicsPage() {
  const user = await getCurrentUser();
  const polls = await getPollsWithResults(user?.id);
  const pollsByDay = new Map(days.map((day) => [day.slug, polls.filter((poll) => poll.daySlug === day.slug)]));

  return (
    <div className="pb-14">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">Topics journey</span>
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Five days. One page. Plenty to argue with.</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">Navigate the bootcamp day by day, move through quiz levels, and vote in debate-style polls that surface the trade-offs beneath the headlines.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {['Sticky day navigation for quick jumps', '15 questions per day across easy, medium, and hard tracks', 'Live poll distributions tied to your account'].map((item) => <div key={item} className="rounded-3xl border border-white/70 bg-panel-gradient p-5 shadow-soft"><p className="text-sm leading-7 text-slate-700">{item}</p></div>)}
            </div>
          </div>
        </section>
      </div>
      <DayNav days={days} />
      <div className="mx-auto mt-8 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {days.map((day) => (
            <section key={day.slug} id={day.slug}
                     className="scroll-mt-40 rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
                <div className="space-y-3">
  <span
      className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">
    {day.tag}
  </span>

                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-ink">
                            {day.title}
                        </h2>

                        <ExpandableDayIntro text={day.intro}/>
                    </div>
                </div>
                <div className="mt-8 grid gap-6 xl:grid-cols-3">
                    {day.levels.map((level) => <QuizCard key={level.level} quizLevel={level}/>)}
                </div>
                <div className="mt-10 space-y-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">Polls &
                            perspectives</p>
                        <h3 className="mt-2 text-2xl font-semibold text-ink">Where the debates start.</h3>
                    </div>
                    <div className="grid gap-6 xl:grid-cols-2">
                        {(pollsByDay.get(day.slug) ?? []).map((poll) => <PollCard key={poll.id} poll={poll}
                                                                                  canVote={Boolean(user)}/>)}
                    </div>
                </div>
            </section>
        ))}
      </div>
    </div>
  );
}
