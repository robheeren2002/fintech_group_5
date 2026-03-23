export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';

import { AuthForm } from '@/components/auth-form';
import { getCurrentUser } from '@/lib/auth';

export default async function SignupPage() {
  const user = await getCurrentUser();
  if (user) redirect('/');
  return <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><section className="rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-10"><AuthForm mode="signup" /></section></div>;
}
