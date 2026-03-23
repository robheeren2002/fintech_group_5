import type { PollSeed } from '@/types';

export const pollSeeds: PollSeed[] = [
  {
    slug: 'd1-trust-advantage',
    daySlug: 'day-1',
    position: 1,
    question: 'What gives a fintech the strongest early advantage: better UX, lower fees, or stronger trust signals?',
    options: ['Better UX', 'Lower fees', 'Stronger trust signals', 'It depends on the segment'],
    explanationPerOption: [
      'From a startup lens, better UX can be the fastest wedge into a tired category.',
      'From a customer lens, price matters a lot when products feel similar on the surface.',
      'From a bank or regulator lens, trust signals may outweigh novelty because money is high-stakes.',
      'From a strategy lens, the right answer changes by segment, use case, and customer need.'
    ],
    afterVoteSummary:
      'This poll captures a core Day 1 lesson: fintech competition is not one-dimensional. Experience, trust, and economics matter in different ways depending on the problem being solved.'
  },
  {
    slug: 'd1-incumbents-vs-challengers',
    daySlug: 'day-1',
    position: 2,
    question: 'By 2030, who will own the most valuable customer relationship in everyday finance?',
    options: ['Traditional banks', 'Neobanks', 'BigTech platforms', 'A mixed ecosystem'],
    explanationPerOption: [
      'Banks still hold licenses, infrastructure, and a deep trust reserve in many markets.',
      'Neobanks may keep winning on experience and niche focus where daily engagement matters.',
      'BigTech has reach, data, and distribution if regulation leaves enough room.',
      'A mixed ecosystem may be most realistic because different players can dominate different moments.'
    ],
    afterVoteSummary:
      'The bigger question is not simply who wins, but whether the customer relationship fragments across contexts like salary, commerce, budgeting, and lending.'
  },
  {
    slug: 'd2-regulation-speed',
    daySlug: 'day-2',
    position: 1,
    question: 'Which statement best fits your view after Day 2?',
    options: ['Regulation mainly slows innovation', 'Regulation mainly enables safer innovation', 'It does both at once', 'Its impact depends mostly on company size'],
    explanationPerOption: [
      'Founders often feel the drag of compliance most sharply when time and money are tight.',
      'A public-interest perspective sees regulation as part of what makes innovation trustworthy enough to scale.',
      'This is often the most nuanced answer: rules can frustrate speed while also making markets safer and more durable.',
      'Company size matters, but product type and regulatory design matter too.'
    ],
    afterVoteSummary:
      'Regulation is not outside the fintech story. It shapes product design, user trust, and who can scale credibly.'
  },
  {
    slug: 'd2-open-banking-winner',
    daySlug: 'day-2',
    position: 2,
    question: 'Who stands to gain the most from mature open banking ecosystems?',
    options: ['Consumers', 'Startups and scaleups', 'Banks that adapt well', 'Data-rich platforms'],
    explanationPerOption: [
      'Consumers gain when portability and transparency improve real choice.',
      'Startups gain when access standards lower entry barriers and enable sharper products.',
      'Adaptive banks can turn compliance strength into ecosystem advantage instead of treating open banking as pure threat.',
      'Platforms may gain if financial data becomes another layer they can combine with broader behavioral insight.'
    ],
    afterVoteSummary:
      'Who benefits most depends on execution quality, consent design, and whether distribution power becomes more concentrated over time.'
  },
  {
    slug: 'd3-embedded-finance-impact',
    daySlug: 'day-3',
    position: 1,
    question: 'What is the biggest long-term effect of embedded finance?',
    options: ['More convenience', 'Less visibility for banks', 'More competition', 'More dependence on platforms'],
    explanationPerOption: [
      'From a customer experience view, embedded finance often removes friction at exactly the right moment.',
      'From a bank strategy view, embedded journeys can turn banks into background infrastructure.',
      'From an innovation view, embedding can unlock many new use cases in software and commerce.',
      'From a competition lens, the deepest risk is greater dependence on powerful gatekeeper platforms.'
    ],
    afterVoteSummary:
      'This debate shows how convenience and concentration can grow together. Better journeys do not automatically mean better market structure.'
  },
  {
    slug: 'd3-banks-pipes-debate',
    daySlug: 'day-3',
    position: 2,
    question: 'Do you think banks risk becoming “invisible pipes” in digital ecosystems?',
    options: ['Yes, in many segments', 'Only in payments', 'No, trust keeps them central', 'Maybe, but only if they ignore distribution'],
    explanationPerOption: [
      'This view emphasizes how platforms can own the interface while banks keep the regulated burden.',
      'Payments are especially exposed to utility-like dynamics, even if other products are less so.',
      'Trust, capital, and regulatory standing still matter and can remain visible sources of value.',
      'This answer highlights strategy rather than destiny: invisibility is a risk, not an automatic outcome.'
    ],
    afterVoteSummary:
      'The core issue is not whether banks disappear, but whether visibility, trust, and value capture separate across the stack.'
  },
  {
    slug: 'd4-ai-credit-decision',
    daySlug: 'day-4',
    position: 1,
    question: 'How comfortable are you with AI making high-impact credit decisions?',
    options: ['Comfortable if accuracy is high', 'Comfortable only with strong human oversight', 'Useful for support, not final decisions', 'Too risky for high-impact decisions'],
    explanationPerOption: [
      'A performance-first view focuses on measurable gains in consistency and speed.',
      'A governance-first view accepts AI value but insists on accountability and real review.',
      'This middle ground treats AI as decision support rather than final authority.',
      'A rights-focused perspective sees opacity and bias risks as too serious in high-impact cases.'
    ],
    afterVoteSummary:
      'This poll rarely has one universally correct answer. The deeper issue is where final accountability should sit when the stakes are high.'
  },
  {
    slug: 'd4-personalization-boundary',
    daySlug: 'day-4',
    position: 2,
    question: 'Where should fintech draw the line on personalized nudges?',
    options: ['Use them freely if they improve engagement', 'Use them for education, not persuasion', 'Allow them with transparency and opt-outs', 'Avoid them in finance altogether'],
    explanationPerOption: [
      'A growth lens values engagement and believes timely prompts can help users act.',
      'A consumer-protection lens prefers nudges that educate rather than steer toward provider-favored outcomes.',
      'A pragmatic governance lens accepts personalization but wants transparency and user control.',
      'A precautionary lens argues finance is too sensitive for persuasive behavioral design.'
    ],
    afterVoteSummary:
      'The interesting tension is how quickly “helpful guidance” can become manipulation when incentives are misaligned.'
  },
  {
    slug: 'd5-inclusion-metric',
    daySlug: 'day-5',
    position: 1,
    question: 'What is the best way to judge whether a fintech product improves inclusion?',
    options: ['Account access', 'Lower costs', 'Better real-world outcomes', 'Higher adoption rates'],
    explanationPerOption: [
      'Access matters, but it can be too shallow if the product is still confusing or harmful.',
      'Lower costs can help a lot, yet cheap is not automatically fair or useful.',
      'Outcome-based thinking asks whether users are actually better off over time.',
      'Adoption signals reach, but not necessarily value or trustworthiness.'
    ],
    afterVoteSummary:
      'Day 5 pushed us toward outcome-based judgment. Inclusion sounds inspiring, but it has to be tested against actual user experience and benefit.'
  },
  {
    slug: 'd5-future-of-fintech',
    daySlug: 'day-5',
    position: 2,
    question: 'What should fintech prioritize over the next five years?',
    options: ['Faster growth', 'Better governance', 'Deeper ecosystem partnerships', 'More personalized products'],
    explanationPerOption: [
      'A growth-first perspective argues scale is needed before bigger impact becomes possible.',
      'A governance-first perspective says the next phase must mature around trust and accountability.',
      'An ecosystem view sees the future in smarter coordination between banks, startups, and infrastructure providers.',
      'A product view suggests relevance and context will still define the best user-facing gains.'
    ],
    afterVoteSummary:
      'This final poll reflects the whole week: should fintech keep optimizing for expansion, or should it now mature around resilience, governance, and responsible value creation?'
  }
];
