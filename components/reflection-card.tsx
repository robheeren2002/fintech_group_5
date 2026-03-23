'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import type { TeamMember } from '@/types';

type ReflectionMode = 'before' | 'after';

export function ReflectionCard({ member }: { member: TeamMember }) {
  const [mode, setMode] = useState<ReflectionMode>('before');
  const [direction, setDirection] = useState(1);

  const content = useMemo(
    () => ({
      before: { eyebrow: 'Before the bootcamp', text: member.beforeReflection },
      after: { eyebrow: 'After the bootcamp', text: member.afterReflection }
    }),
    [member]
  );

  function switchMode(nextMode: ReflectionMode) {
    if (nextMode === mode) return;
    setDirection(nextMode === 'after' ? 1 : -1);
    setMode(nextMode);
  }

  return (
    <div className="grid gap-4 rounded-4xl border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur md:grid-cols-[220px_1fr] md:p-6">
      <div className="relative overflow-hidden rounded-3xl bg-panel-gradient p-5">
        <div className="relative flex h-full flex-col justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-soft">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          </div>
          <div className="inline-flex rounded-full border border-white/70 bg-white/70 p-1 shadow-soft">
            {(['before', 'after'] as ReflectionMode[]).map((option) => (
              <button key={option} type="button" onClick={() => switchMode(option)} className={cn('rounded-full px-4 py-2 text-sm font-semibold capitalize transition', mode === option ? 'bg-accent-gradient text-white shadow-glow' : 'text-slate-600 hover:text-plum-700')}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-plum-100 bg-mist p-5 md:p-6">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div key={mode} custom={direction} initial={{ opacity: 0, x: direction > 0 ? -28 : 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction > 0 ? 28 : -28 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[170px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">{content[mode].eyebrow}</p>
            <p className="max-w-2xl text-base leading-8 text-slate-700">{content[mode].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
