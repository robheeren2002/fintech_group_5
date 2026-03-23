export type Difficulty = 'easy' | 'medium' | 'hard';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  beforeReflection: string;
  afterReflection: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type QuizLevel = {
  level: Difficulty;
  title: string;
  questions: QuizQuestion[];
};

export type DayContent = {
  slug: string;
  dayNumber: number;
  title: string;
  tag: string;
  intro: string;
  takeaway: string;
  levels: QuizLevel[];
};

export type PollSeed = {
  slug: string;
  daySlug: string;
  position: number;
  question: string;
  options: string[];
  explanationPerOption: string[];
  afterVoteSummary: string;
};

export type PollRecord = PollSeed & {
  id: string;
};

export type PollWithResults = PollRecord & {
  totalVotes: number;
  userSelectedOption: number | null;
  hasVoted: boolean;
  counts: number[];
};

export type SessionUser = {
  id: string;
  username: string;
  createdAt: string;
};
