# The FinTech Survival Guide

**Subtitle:** _A Week That Changed Our Minds_

A deployable full-stack web application built for a fintech bootcamp assignment. The site is designed as a polished interactive field report rather than a generic lecture summary. It combines team reflections, quiz-based learning, and database-backed debate polls inside a Vlerick-inspired purple-gradient interface.

## Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Postgres on Supabase
- Custom username/password auth with hashed passwords and signed session cookies
- Vercel-friendly deployment

## Features

- Custom sign up and login with username + password
- Persistent session cookie
- Users stored in a real database with hashed passwords
- Poll votes linked to the logged-in user
- One-vote-per-user-per-poll enforcement at database level
- Strong homepage with animated before/after reflection cards for 6 team members
- One large Topics page with 5 day sections and sticky internal navigation
- 75 hardcoded quiz questions (5 days × 3 levels × 5 questions)
- Immediate quiz feedback, explanations, progress bars, and retry flows
- Opinion-based polls with live distribution bars and nuanced explanations
- Centralized hardcoded content for easy future editing

## Project structure

```text
app/
  api/
  login/
  profile/
  signup/
  topics/
components/
content/
lib/
public/
scripts/
supabase/
```

## Environment variables

Create a `.env.local` file based on `.env.example`.

```env
DATABASE_URL=postgres://...
SESSION_SECRET=your-long-random-secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Local setup

1. `npm install`
2. Run `supabase/migrations/001_init.sql` in the Supabase SQL editor
3. Add the environment variables to `.env.local`
4. Run `npm run seed`
5. Start the dev server with `npm run dev`

## Authentication model

This project uses a simple custom auth flow instead of Supabase Auth because the assignment explicitly requires username + password.

- Passwords are hashed with `bcryptjs`
- Users are stored in the `users` table
- A signed session token is stored in an HTTP-only cookie
- The cookie is checked on server-rendered pages and API routes

## Database schema

### `users`
- `id`
- `username`
- `password_hash`
- `created_at`

### `polls`
- `id`
- `slug`
- `day_slug`
- `position`
- `question`
- `options` (JSONB)
- `explanation_per_option` (JSONB)
- `after_vote_summary`
- `created_at`

### `poll_responses`
- `id`
- `user_id`
- `poll_id`
- `selected_option`
- `created_at`

A unique constraint prevents duplicate votes for the same user and poll.

## Deploying to Vercel

1. Push the repo to GitHub
2. Import it into Vercel
3. Add `DATABASE_URL`, `SESSION_SECRET`, and `NEXT_PUBLIC_APP_URL`
4. Run the migration SQL in Supabase
5. Run `npm run seed` once against the production database

## Customizing content

- `content/team.ts` → team profiles and before/after reflections
- `content/days.ts` → day headers and quiz content
- `content/polls.ts` → poll definitions and nuanced explanations
- `content/site.ts` → hero copy and homepage guide cards
