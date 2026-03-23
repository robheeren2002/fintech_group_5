'use client';

import type { DayContent } from '@/types';

export function DayNav({ days }: { days: DayContent[] }) {
  return (
    <div className="sticky top-[89px] z-40 -mx-4 overflow-x-auto border-y border-white/60 bg-white/80 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-3">
        {days.map((day) => (
          <a key={day.slug} href={`#${day.slug}`} className="group inline-flex min-w-max items-center gap-3 rounded-full border border-plum-100 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-soft transition hover:-translate-y-0.5 hover:border-plum-300 hover:text-plum-700">
            <span className="font-semibold">Day {day.dayNumber}</span>
            <span className="text-slate-400 transition group-hover:text-plum-500">{day.title.replace(`Day ${day.dayNumber} — `, '')}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
