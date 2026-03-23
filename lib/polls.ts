import { cache } from 'react';

import { getSql } from '@/lib/db';
import type { PollRecord, PollWithResults } from '@/types';

export const getPollsWithResults = cache(async (userId?: string | null) => {
  const sql = getSql();

  const polls = await sql<PollRecord[]>`
    select id, slug, day_slug as "daySlug", position, question, options,
      explanation_per_option as "explanationPerOption",
      after_vote_summary as "afterVoteSummary"
    from polls
    order by day_slug asc, position asc
  `;

  const counts = await sql<{ pollId: string; selectedOption: number; count: number }[]>`
    select poll_id as "pollId", selected_option as "selectedOption", count(*)::int as count
    from poll_responses
    group by poll_id, selected_option
  `;

  let responses: { pollId: string; selectedOption: number }[] = [];
  if (userId) {
    responses = await sql<{ pollId: string; selectedOption: number }[]>`
      select poll_id as "pollId", selected_option as "selectedOption"
      from poll_responses
      where user_id = ${userId}
    `;
  }

  const countsMap = new Map<string, number[]>();
  for (const poll of polls) countsMap.set(poll.id, Array(poll.options.length).fill(0));
  for (const row of counts) {
    const existing = countsMap.get(row.pollId);
    if (existing) existing[row.selectedOption] = row.count;
  }

  const responseMap = new Map(responses.map((r) => [r.pollId, r.selectedOption]));

  return polls.map<PollWithResults>((poll) => {
    const pollCounts = countsMap.get(poll.id) ?? Array(poll.options.length).fill(0);
    const userSelectedOption = responseMap.get(poll.id);
    return {
      ...poll,
      counts: pollCounts,
      totalVotes: pollCounts.reduce((sum, count) => sum + count, 0),
      userSelectedOption: userSelectedOption ?? null,
      hasVoted: userSelectedOption !== undefined
    };
  });
});

export const getProfileStats = cache(async (userId: string) => {
  const sql = getSql();
  const [responseStats] = await sql<{ totalVotes: number }[]>`
    select count(*)::int as "totalVotes" from poll_responses where user_id = ${userId}
  `;
  const [latestVote] = await sql<{ createdAt: string }[]>`
    select created_at as "createdAt" from poll_responses where user_id = ${userId} order by created_at desc limit 1
  `;
  const [totalPolls] = await sql<{ total: number }[]>`
    select count(*)::int as total from polls
  `;

  return {
    totalVotes: responseStats?.totalVotes ?? 0,
    totalPolls: totalPolls?.total ?? 0,
    latestVoteAt: latestVote?.createdAt ?? null
  };
});

export async function getPollByIdWithResults(pollId: string, userId?: string | null) {
  const sql = getSql();
  const polls = await sql<PollRecord[]>`
    select id, slug, day_slug as "daySlug", position, question, options,
      explanation_per_option as "explanationPerOption",
      after_vote_summary as "afterVoteSummary"
    from polls where id = ${pollId} limit 1
  `;
  const poll = polls[0];
  if (!poll) return null;

  const rows = await sql<{ selectedOption: number; count: number }[]>`
    select selected_option as "selectedOption", count(*)::int as count
    from poll_responses
    where poll_id = ${pollId}
    group by selected_option
  `;
  const counts = Array(poll.options.length).fill(0);
  for (const row of rows) counts[row.selectedOption] = row.count;

  let userSelectedOption: number | null = null;
  if (userId) {
    const [response] = await sql<{ selectedOption: number }[]>`
      select selected_option as "selectedOption"
      from poll_responses
      where poll_id = ${pollId} and user_id = ${userId}
      limit 1
    `;
    userSelectedOption = response?.selectedOption ?? null;
  }

  return {
    ...poll,
    counts,
    totalVotes: counts.reduce((sum, count) => sum + count, 0),
    userSelectedOption,
    hasVoted: userSelectedOption !== null
  };
}
