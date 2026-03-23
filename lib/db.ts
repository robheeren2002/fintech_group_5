import postgres from 'postgres';

function getConnectionString() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is not set. Add your Supabase Postgres connection string to .env.local.');
  }

  return connectionString;
}

declare global {
  var __ftsg_sql__: ReturnType<typeof postgres> | undefined;
}

export function getSql() {
  if (!global.__ftsg_sql__) {
    global.__ftsg_sql__ = postgres(getConnectionString(), {
      ssl: 'require',
      prepare: false
    });
  }

  return global.__ftsg_sql__;
}
