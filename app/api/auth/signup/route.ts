import { NextResponse } from 'next/server';
import { z } from 'zod';

import { createSessionToken, hashPassword, setSessionCookie } from '@/lib/auth';
import { getSql } from '@/lib/db';

const schema = z.object({
  username: z.string().trim().min(3).max(24).regex(/^[a-zA-Z0-9._-]+$/),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const sql = getSql();
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input.' }, { status: 400 });
    }

    const username = parsed.data.username.trim();
    const passwordHash = await hashPassword(parsed.data.password);

    const existing = await sql<{ id: string }[]>`select id from users where lower(username) = lower(${username}) limit 1`;
    if (existing[0]) return NextResponse.json({ error: 'That username is already taken.' }, { status: 409 });

    const rows = await sql<{ id: string; username: string }[]>`
      insert into users (username, password_hash)
      values (${username}, ${passwordHash})
      returning id, username
    `;

    const token = await createSessionToken(rows[0]);
    await setSessionCookie(token);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Signup failed', error);
    return NextResponse.json({ error: 'Unable to create your account right now.' }, { status: 500 });
  }
}
