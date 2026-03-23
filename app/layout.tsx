import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getCurrentUser } from '@/lib/auth';

import './globals.css';

export const metadata: Metadata = {
  title: 'The FinTech Survival Guide',
  description: 'A polished interactive field report on a fintech bootcamp journey: reflections, quizzes, and debate-style polls.'
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar user={user} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
