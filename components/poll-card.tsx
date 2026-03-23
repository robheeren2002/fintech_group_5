'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import type { PollWithResults } from '@/types';

export function PollCard({ poll, canVote }: { poll: PollWithResults; canVote: boolean }) {
  const router = useRouter();
  const [state, setState] = useState(poll);
  const [selectedOption, setSelectedOption] = useState<number | null>(poll.userSelectedOption);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submitVote() {
    if (selectedOption === null || state.hasVoted || !canVote) return;
    try {
      setSubmitting(true);
      setError(null);
      const response = await fetch(`/api/polls/${state.id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedOption })
      });
      const payload = (await response.json()) as { error?: string; poll?: PollWithResults };
      if (!response.ok || !payload.poll) {
        setError(payload.error ?? 'Unable to save your vote.');
        return;
      }
      setState(payload.poll);
      setSelectedOption(payload.poll.userSelectedOption);
      router.refresh();
    } catch {
      setError('Unable to save your vote right now.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-4xl border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur md:p-6">
      <div className="space-y-3">
        <span className="inline-flex rounded-full border border-plum-200 bg-plum-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-plum-700">Debate poll</span>
        <h3 className="text-xl font-semibold text-ink">{state.question}</h3>
        <p className="text-sm leading-7 text-slate-500">Vote once, then compare the distribution and read why different stakeholders might land in different places.</p>
      </div>
      <div className="mt-5 space-y-3">
        {state.options.map((option, index) => {
          const count = state.counts[index] ?? 0;
          const percent = state.totalVotes > 0 ? Math.round((count / state.totalVotes) * 100) : 0;
          const reveal = state.hasVoted;
          const isChosen = selectedOption === index;
          return (
            <div key={option} className="space-y-2 rounded-3xl border border-plum-100 bg-mist p-4">
              <button type="button" disabled={reveal || !canVote} onClick={() => setSelectedOption(index)} className={cn('flex w-full items-center justify-between gap-4 text-left transition', !reveal && canVote && 'hover:text-plum-700', isChosen && !reveal && 'text-plum-800', !canVote && 'cursor-not-allowed opacity-75')}>
                <span className="text-sm font-medium text-slate-700">{option}</span>
                {!reveal ? <span className={cn('inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold', isChosen ? 'border-plum-400 bg-plum-100 text-plum-800' : 'border-slate-300 text-slate-500')}>{String.fromCharCode(65 + index)}</span> : <span className="text-sm font-semibold text-plum-800">{percent}%</span>}
              </button>
              {reveal ? (
                <>
                  <div className="h-2 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-accent-gradient transition-all duration-700" style={{ width: `${percent}%` }} /></div>
                  <p className="text-sm leading-7 text-slate-600">{state.explanationPerOption[index]}</p>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
      {!state.hasVoted ? (
        <div className="mt-5 space-y-3">
          {canVote ? (
            <button type="button" disabled={selectedOption === null || submitting} onClick={submitVote} className="rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">{submitting ? 'Saving vote...' : 'Submit vote'}</button>
          ) : (
            <div className="rounded-3xl border border-plum-100 bg-panel-gradient p-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-ink">Want to join the debate?</p>
              <p><Link href="/login" className="font-semibold text-plum-700">Log in</Link> or <Link href="/signup" className="font-semibold text-plum-700">create an account</Link> to vote once and reveal the live distribution.</p>
            </div>
          )}
          {error ? <p className="text-sm text-rose-700">{error}</p> : null}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl border border-plum-100 bg-panel-gradient p-5">
          <p className="text-sm font-semibold text-plum-800">You voted for: {state.options[state.userSelectedOption ?? 0]}</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{state.afterVoteSummary}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{state.totalVotes} total vote{state.totalVotes === 1 ? '' : 's'}</p>
        </div>
      )}
    </div>
  );
}
