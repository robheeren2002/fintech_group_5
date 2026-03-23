import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'maya',
    name: 'Maya De Smet',
    role: 'Curious strategist',
    image: '/avatars/maya.svg',
    beforeReflection:
      'I walked in assuming fintech was mostly slicker banking apps. My mental model was interface-first: make payments faster, make onboarding easier, and the rest follows.',
    afterReflection:
      'I left seeing fintech as a power shift in distribution, trust, and infrastructure. The interface still matters, but the bigger game is who owns the customer relationship and who absorbs the regulatory burden.'
  },
  {
    id: 'liam',
    name: 'Liam Verhoeven',
    role: 'Operations realist',
    image: '/avatars/liam.svg',
    beforeReflection:
      'Before the week, I thought banks were simply too slow to compete with startups. I underestimated how much operational resilience, compliance, and capital shape what is possible.',
    afterReflection:
      'Now I see incumbents and startups as solving different optimization problems. Startups move faster, but banks carry the weight of systemic trust, risk management, and legacy obligations.'
  },
  {
    id: 'zoe',
    name: 'Zoë Lambert',
    role: 'Customer lens keeper',
    image: '/avatars/zoe.svg',
    beforeReflection:
      'I mostly associated innovation with more features. If an app added budgeting, investing, and rewards in one place, I assumed that automatically meant more customer value.',
    afterReflection:
      'The bootcamp pushed me to ask a tougher question: value for whom, and under which conditions? Convenience can help clients, but it can also nudge, lock in, or confuse them if incentives are misaligned.'
  },
  {
    id: 'aaron',
    name: 'Aaron Peeters',
    role: 'Platform skeptic',
    image: '/avatars/aaron.svg',
    beforeReflection:
      'I used to frame BigTech in finance as a natural next step: strong UX, large reach, and lots of data. It seemed almost inevitable that they would dominate everything financial.',
    afterReflection:
      'I still think platform power is real, but I am much more alert to trade-offs. When a platform controls access, data, and attention, competition and customer choice can narrow quickly.'
  },
  {
    id: 'nina',
    name: 'Nina Jacobs',
    role: 'Regulation translator',
    image: '/avatars/nina.svg',
    beforeReflection:
      'Regulation felt like the boring backdrop to innovation. I treated it as a box to tick after the product story had already been decided.',
    afterReflection:
      'By the end, regulation looked less like friction and more like architecture. It decides who can enter, who can scale safely, and what kind of trust a market can sustain over time.'
  },
  {
    id: 'samir',
    name: 'Samir Rahman',
    role: 'Systems thinker',
    image: '/avatars/samir.svg',
    beforeReflection:
      'My starting point was simple: AI plus finance equals better decisions. I was drawn to the efficiency story and did not spend enough time on opacity, bias, and accountability.',
    afterReflection:
      'Now I think the interesting question is not whether AI belongs in finance, but where human judgment, transparency, and contestability still need to stay firmly in the loop.'
  }
];
