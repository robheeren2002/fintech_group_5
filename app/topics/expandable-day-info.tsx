'use client';
import { formatRichText } from '@/lib/format-rich-text';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const COLLAPSED_MAX_HEIGHT = 96;

export function ExpandableDayIntro({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setCanExpand(el.scrollHeight > COLLAPSED_MAX_HEIGHT + 1);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [text]);

  return (
    <div className="mt-4">
      <div className="relative rounded-[1.75rem] border border-plum-100 bg-mist/70 px-5 py-4 shadow-soft">
        <div
          ref={textRef}
          className={clsx(
            'whitespace-pre-line text-base leading-8 text-slate-600 transition-all duration-300',
            !expanded && 'overflow-hidden'
          )}
          style={!expanded ? { maxHeight: `${COLLAPSED_MAX_HEIGHT}px` } : undefined}
        >
          {formatRichText(text)}
        </div>

        {!expanded && canExpand && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-[1.75rem] bg-gradient-to-t from-[#f3efff] via-[#f3efffcc] to-transparent" />
        )}
      </div>

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 inline-flex items-center rounded-full border border-plum-200 bg-white/80 px-4 py-2 text-sm font-semibold text-plum-700 transition hover:border-plum-300 hover:bg-plum-50"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}