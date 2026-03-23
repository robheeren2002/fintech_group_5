import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { readSession } from '@/lib/auth';
import { getSql } from '@/lib/db';
import { getPollByIdWithResults } from '@/lib/polls';

const schema = z.object({ selectedOption: z.number().int().nonnegative() });

export async function POST(request: Request, { params }: { params: { pollId: string } }) {
  try {
    const sql = getSql();
    const session = await readSession();
    if (!session) return NextResponse.json({ error: 'You must be logged in to vote.' }, { status: 401 });

    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: 'Please select a valid option.' }, { status: 400 });

    const poll = await getPollByIdWithResults(params.pollId, session.userId);
    if (!poll) return NextResponse.json({ error: 'Poll not found.' }, { status: 404 });
    if (poll.hasVoted) return NextResponse.json({ error: 'You have already voted in this poll.' }, { status: 409 });
    if (parsed.data.selectedOption >= poll.options.length) return NextResponse.json({ error: 'That option does not exist for this poll.' }, { status: 400 });

    await sql`insert into poll_responses (user_id, poll_id, selected_option) values (${session.userId}, ${params.pollId}, ${parsed.data.selectedOption})`;
    revalidatePath('/topics');
    revalidatePath('/profile');
    const updatedPoll = await getPollByIdWithResults(params.pollId, session.userId);
    return NextResponse.json({ poll: updatedPoll });
  } catch (error) {
    console.error('Vote failed', error);
    return NextResponse.json({ error: 'Unable to save your vote right now.' }, { status: 500 });
  }
}
