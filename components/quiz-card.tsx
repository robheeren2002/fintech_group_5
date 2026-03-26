'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import type { QuizLevel } from '@/types';

export function QuizCard({ quizLevel }: { quizLevel: QuizLevel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = quizLevel.questions[currentIndex];
  const complete = currentIndex >= quizLevel.questions.length;
  const score = useMemo(() => answers.reduce((sum, answer, index) => sum + (answer === quizLevel.questions[index].correctIndex ? 1 : 0), 0), [answers, quizLevel.questions]);

  function handleAnswer(index: number) {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
  }

  function nextQuestion() {
    if (selectedIndex === null) return;
    setAnswers([...answers, selectedIndex]);
    setSelectedIndex(null);
    setCurrentIndex((value) => value + 1);
  }

  function resetQuiz() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
  }

  const progress = complete ? 100 : (currentIndex / quizLevel.questions.length) * 100;

  return (
    <div className="rounded-4xl border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur md:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-700">{quizLevel.level}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{quizLevel.title}</h3>
        </div>
        <div className="rounded-2xl bg-plum-50 px-3 py-2 text-sm font-medium text-plum-800">{complete ? `${score}/${quizLevel.questions.length} correct` : `${currentIndex + 1}/${quizLevel.questions.length}`}</div>
      </div>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-plum-100"><div className="h-full rounded-full bg-accent-gradient transition-all duration-500" style={{ width: `${progress}%` }} /></div>

      {complete ? (
        <div className="space-y-4 rounded-3xl border border-plum-100 bg-panel-gradient p-5">
          <h4 className="text-lg font-semibold text-ink">Quiz complete</h4>
          <p className="text-sm leading-7 text-slate-600">You finished the {quizLevel.level} track with <span className="font-semibold text-plum-800">{score}</span> out of <span className="font-semibold text-plum-800">{quizLevel.questions.length}</span>.</p>
          <button type="button" onClick={resetQuiz} className="rounded-full border border-plum-200 px-4 py-2 text-sm font-semibold text-plum-800 transition hover:border-plum-400 hover:bg-plum-50">Retry level</button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-ink">{question.question}</h4>
            <p className="text-sm text-slate-500">Choose one answer to reveal instant feedback and the explanation.</p>
          </div>
          <div className="grid gap-3">
            {question.options.map((option, optionIndex) => {
              const reveal = selectedIndex !== null;
              const isSelected = selectedIndex === optionIndex;
              const isCorrect = optionIndex === question.correctIndex;
              return (
                <button key={option} type="button" onClick={() => handleAnswer(optionIndex)} disabled={reveal} className={cn('rounded-3xl border px-4 py-4 text-left text-sm leading-7 transition', !reveal && 'border-plum-100 bg-mist hover:-translate-y-0.5 hover:border-plum-300 hover:bg-white', reveal && isCorrect && 'border-emerald-200 bg-emerald-50 text-emerald-900', reveal && isSelected && !isCorrect && 'border-rose-200 bg-rose-50 text-rose-900', reveal && !isSelected && !isCorrect && 'border-slate-200 bg-slate-50 text-slate-600')}>
                  <div className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-semibold">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span></div>
                </button>
              );
            })}
          </div>
          {selectedIndex !== null ? (
            <div className="space-y-4 rounded-3xl border border-plum-100 bg-panel-gradient p-5">
              <p className={cn('text-sm font-semibold', selectedIndex === question.correctIndex ? 'text-emerald-700' : 'text-rose-700')}>{selectedIndex === question.correctIndex ? 'Correct, nice catch.' : 'Not quite, here is the reasoning.'}</p>
              <p className="text-sm leading-7 text-slate-700">{question.explanation}</p>
              <button type="button" onClick={nextQuestion} className="rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">{currentIndex === quizLevel.questions.length - 1 ? 'See score summary' : 'Next question'}</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
