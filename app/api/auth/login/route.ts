import { NextResponse } from 'next/server';
import { z } from 'zod';

import { createSessionToken, setSessionCookie, verifyPassword } from '@/lib/auth';
import { getSql } from '@/lib/db';

const schema = z.object({ username: z.string().trim().min(3), password: z.string().min(8) });

export async function POST(request: Request) {
  try {
    const sql = getSql();
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: 'Enter a valid username and password.' }, { status: 400 });

    const username = parsed.data.username.trim();
    const rows = await sql<{ id: string; username: string; passwordHash: string }[]>`
      select id, username, password_hash as "passwordHash"
      from users
      where lower(username) = lower(${username})
      limit 1
    `;
    const user = rows[0];
    if (!user) return NextResponse.json({ error: 'No account found for that username.' }, { status: 404 });

    const isValid = await verifyPassword(parsed.data.password, user.passwordHash);
    if (!isValid) return NextResponse.json({ error: 'Incorrect password. Please try again.' }, { status: 401 });

    const token = await createSessionToken({ id: user.id, username: user.username });
    await setSessionCookie(token);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login failed', error);
    return NextResponse.json({ error: 'Unable to log you in right now.' }, { status: 500 });
  }
}
