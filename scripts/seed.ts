import { pollSeeds } from '../content/polls';
import path from 'node:path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
console.log('Loaded DATABASE_URL?', Boolean(process.env.DATABASE_URL));
import { getSql } from '../lib/db';

async function seed() {
  const sql = getSql();

  await sql`delete from poll_responses`;
  await sql`delete from polls`;

  for (const poll of pollSeeds) {
    await sql`
      insert into polls (
        slug,
        day_slug,
        position,
        question,
        options,
        explanation_per_option,
        after_vote_summary
      )
      values (
        ${poll.slug},
        ${poll.daySlug},
        ${poll.position},
        ${poll.question},
        ${sql.json(poll.options)},
        ${sql.json(poll.explanationPerOption)},
        ${poll.afterVoteSummary}
      )
    `;
  }

  console.log(`Seeded ${pollSeeds.length} polls.`);
  await sql.end();
}

seed().catch(async (error) => {
  const sql = getSql();
  console.error('Failed to seed polls:', error);
  await sql.end({ timeout: 1 });
  process.exit(1);
});
