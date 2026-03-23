import { pollSeeds } from '../content/polls';
import { getSql } from '../lib/db';

async function seed() {
  const sql = getSql();
  for (const poll of pollSeeds) {
    await sql`
      insert into polls (slug, day_slug, position, question, options, explanation_per_option, after_vote_summary)
      values (${poll.slug}, ${poll.daySlug}, ${poll.position}, ${poll.question}, ${sql.json(poll.options)}, ${sql.json(poll.explanationPerOption)}, ${poll.afterVoteSummary})
      on conflict (slug) do update set
        day_slug = excluded.day_slug,
        position = excluded.position,
        question = excluded.question,
        options = excluded.options,
        explanation_per_option = excluded.explanation_per_option,
        after_vote_summary = excluded.after_vote_summary
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
