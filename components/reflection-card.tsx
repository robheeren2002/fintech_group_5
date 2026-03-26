'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  beforeReflection: string;
  afterReflection: string;
};

type Props = {
  member: TeamMember;
};

const COLLAPSED_MAX_HEIGHT = 170;

export function ReflectionCard({ member }: Props) {
  const [mode, setMode] = useState<'before' | 'after'>('before');
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  const textRef = useRef<HTMLDivElement | null>(null);

  const activeText = useMemo(() => {
    return mode === 'before'
      ? member.beforeReflection
      : member.afterReflection;
  }, [mode, member.beforeReflection, member.afterReflection]);

  useEffect(() => {
    setExpanded(false);
  }, [mode]);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      const fullHeight = el.scrollHeight;
      setCanExpand(fullHeight > COLLAPSED_MAX_HEIGHT + 1);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [activeText]);

  const switchMode = (nextMode: 'before' | 'after') => {
    if (nextMode !== mode) {
      setMode(nextMode);
    }
  };

  return (
    <div className="rounded-[36px] bg-white p-7 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-[28px] bg-violet-50 p-6 shadow-sm">
          <img
            src={member.image}
            alt={member.name}
            className="mb-4 h-20 w-20 rounded-2xl object-cover"
          />

          <h3 className="text-2xl font-semibold text-slate-900">{member.name}</h3>
          <p className="mt-1 text-slate-500">{member.role}</p>

          <div className="mt-6 inline-flex rounded-full bg-white/80 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => switchMode('before')}
              className={clsx(
                'rounded-full px-5 py-2 text-sm font-semibold transition',
                mode === 'before'
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              Before
            </button>

            <button
              type="button"
              onClick={() => switchMode('after')}
              className={clsx(
                'rounded-full px-5 py-2 text-sm font-semibold transition',
                mode === 'after'
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              After
            </button>
          </div>
        </aside>

        <section className="rounded-[28px] bg-violet-50/70 p-7 shadow-sm min-h-[240px]">
          <div className="mb-4 flex items-start justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-700">
              {mode === 'before' ? 'Before the bootcamp' : 'After the bootcamp'}
            </p>

            {expanded && canExpand && (
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="inline-flex items-center rounded-full border border-violet-200 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
              >
                Show less
              </button>
            )}
          </div>

          <div className="relative">
            <div
              ref={textRef}
              className={clsx(
                'whitespace-pre-line text-lg leading-9 text-slate-600 transition-all duration-300',
                !expanded && 'overflow-hidden'
              )}
              style={!expanded ? { maxHeight: `${COLLAPSED_MAX_HEIGHT}px` } : undefined}
            >
              {activeText}
            </div>

            {!expanded && canExpand && (
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-violet-50/95 via-violet-50/80 to-transparent"/>
            )}
          </div>

          {!expanded && canExpand && (
              <button
                  type="button"
                  onClick={() => setExpanded(true)}
              className="mt-5 inline-flex items-center rounded-full border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
            >
              Read more
            </button>
          )}
        </section>
      </div>
    </div>
  );
}