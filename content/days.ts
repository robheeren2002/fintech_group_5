import type { DayContent, QuizQuestion } from '@/types';

const q = (
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizQuestion => ({ id, question, options, correctIndex, explanation });

export const days: DayContent[] = [
  {
    slug: 'day-1',
    dayNumber: 1,
    title: 'Day 1 — What Fintech Actually Changes',
    tag: 'Foundations',
    intro:
      'Our first reset was simple but important: fintech is not just better-looking banking. It changes distribution, trust, and the infrastructure people rarely notice.',
    takeaway:
      'The shift was from “nicer interface” to “different market logic”.',
    levels: [
      {
        level: 'easy',
        title: 'Easy — spotting the basics',
        questions: [
          q('d1-e1', 'Which statement best captures a common fintech promise?', ['Make services more convenient and accessible', 'Remove all regulation', 'Replace every bank branch instantly', 'Guarantee higher returns'], 0, 'Fintech often wins first on convenience and accessibility. The other options overstate what it can realistically do.'),
          q('d1-e2', 'Why does trust matter so much in finance?', ['Because finance is mainly entertainment', 'Because money decisions involve risk, privacy, and consequence', 'Because customers never compare providers', 'Because design is irrelevant'], 1, 'Finance involves sensitive data and high-stakes outcomes, so trust becomes a foundational layer rather than a nice extra.'),
          q('d1-e3', 'A digital wallet is mainly used to:', ['Store physical cash', 'Hold payment credentials for digital transactions', 'Issue mortgages automatically', 'Replace central banks'], 1, 'Digital wallets hold credentials or connect to accounts so users can pay digitally with less friction.'),
          q('d1-e4', 'Why do many users adopt fintech products quickly?', ['Because all fintech is free forever', 'Because onboarding and everyday use often feel simpler', 'Because regulation forces switching', 'Because branches are banned'], 1, 'A smoother experience, clearer flows, and faster signup often explain adoption better than grand structural claims.'),
          q('d1-e5', 'Which is part of the fintech ecosystem?', ['Payment processors', 'Only commercial banks', 'Only crypto miners', 'Only telecom firms'], 0, 'Fintech ecosystems are broad, and payment processors are one of the key infrastructure layers inside them.')
        ]
      },
      {
        level: 'medium',
        title: 'Medium — following the dynamics',
        questions: [
          q('d1-m1', 'Why is fintech often described as changing distribution more than the existence of finance itself?', ['Because people stop needing finance', 'Because the needs stay, but channels and intermediaries shift', 'Because regulation bans new products', 'Because only crypto counts as innovation'], 1, 'Payments, credit, and savings still exist. What changes is how they are delivered and who controls the customer relationship.'),
          q('d1-m2', 'A neobank often gains traction by:', ['Owning the central bank balance sheet', 'Offering sharper UX and focused propositions', 'Avoiding any compliance need', 'Eliminating all costs'], 1, 'Neobanks tend to win on focus and experience, not by escaping the realities of finance.'),
          q('d1-m3', 'Why can a beautiful fintech product still fail?', ['Because design never matters', 'Because only old brands win', 'Because weak economics, trust, or infrastructure can break the model', 'Because users dislike convenience'], 2, 'Finance products need durable economics and resilient operations as much as they need great UX.'),
          q('d1-m4', 'What does “the plumbing of finance” usually mean?', ['Marketing campaigns', 'Hidden infrastructure such as settlement and identity rails', 'Office furniture', 'Social media sentiment'], 1, 'The phrase points to the infrastructure underneath visible products, such as settlement, KYC, and connectivity.'),
          q('d1-m5', 'Why do incumbents still matter in fintech stories?', ['They hold licenses, balance sheets, and trusted relationships', 'They are the only firms that can build software', 'They never collaborate', 'They cannot transform'], 0, 'Incumbents remain powerful because they control important assets that are difficult to reproduce quickly.')
        ]
      },
      {
        level: 'hard',
        title: 'Hard — beyond the app layer',
        questions: [
          q('d1-h1', 'Which strategic question reflects a deeper fintech analysis?', ['Is the app trendy?', 'Who owns the customer relationship and who carries the risk?', 'Can every product become a meme?', 'How fast can branches vanish?'], 1, 'This question surfaces the structural split between distribution, compliance, and value capture.'),
          q('d1-h2', 'A fintech scales rapidly but depends on a partner bank. What tension appears?', ['Growth and control can sit in different firms', 'There is no tension', 'The fintech becomes a central bank', 'Trust stops mattering'], 0, 'When distribution and regulated activity live in different places, strategic dependence becomes a real issue.'),
          q('d1-h3', 'Why is convenience not the whole story?', ['Because convenience is always harmful', 'Because it can hide lock-in, opacity, or nudges', 'Because customers prefer friction', 'Because it is illegal'], 1, 'A smoother experience can coexist with poor incentives or weak transparency.'),
          q('d1-h4', 'Why does ecosystem thinking matter in fintech?', ['Because no single player usually controls licenses, data, infrastructure, and distribution at once', 'Because ecosystems are just marketing', 'Because partnerships never matter', 'Because regulators ignore ecosystems'], 0, 'Fintech value is often created through layered partnerships rather than one firm owning every part of the stack.'),
          q('d1-h5', 'What changed most in our understanding on Day 1?', ['We concluded fintech is mainly branding', 'We stopped caring about trust', 'We began seeing fintech as a shift in structure and responsibility', 'We assumed every bank would vanish'], 2, 'The first day moved the conversation from interface polish to incentives, market structure, and trust architecture.')
        ]
      }
    ]
  },
  {
    slug: 'day-2',
    dayNumber: 2,
    title: 'Day 2 — Regulation, Risk, and Why Compliance Is Not a Footnote',
    tag: 'Rules of the game',
    intro:
      'Day 2 made one thing clear: in finance, innovation does not happen outside regulation. It happens inside a system designed to manage trust, risk, and public harm.',
    takeaway:
      'Regulation became part of the product story, not a legal footnote.',
    levels: [
      {
        level: 'easy',
        title: 'Easy — regulatory basics',
        questions: [
          q('d2-e1', 'What is KYC mainly about?', ['Knowing your competitor', 'Knowing your customer for identity and risk checks', 'Keeping yearly coupons', 'Kicking yield curves'], 1, 'KYC helps verify identity and assess risk, especially around fraud and financial crime obligations.'),
          q('d2-e2', 'Why do fintech firms need compliance functions?', ['Because finance has legal obligations around safety and consumer protection', 'Because investors dislike product launches', 'Because compliance replaces strategy', 'Because software cannot be audited'], 0, 'Compliance is central in finance because financial products can harm users or systems if risk controls are weak.'),
          q('d2-e3', 'AML rules help prevent:', ['Product design sprints', 'Money laundering and related crime', 'Customer support chats', 'Interest rate changes'], 1, 'AML stands for anti-money laundering and is aimed at detecting and preventing illicit flows.'),
          q('d2-e4', 'Open banking is commonly associated with:', ['Customer-permissioned data access for regulated third parties', 'Making all accounts public', 'Removing consent requirements', 'Serving only corporations'], 0, 'Open banking relies on consent-based sharing of financial data or initiation rights under structured rules.'),
          q('d2-e5', 'Why is consumer protection important in finance?', ['Because financial decisions can be complex and harmful when incentives misalign', 'Because every product has the same risk', 'Because regulation is only symbolic', 'Because customers never read anything'], 0, 'Consumer protection matters because finance is full of complexity, asymmetry, and potentially serious long-term effects.')
        ]
      },
      {
        level: 'medium',
        title: 'Medium — regulation as market design',
        questions: [
          q('d2-m1', 'Why can regulation create opportunity as well as constraint?', ['Because clear rules can increase trust and lower uncertainty', 'Because regulation removes competition', 'Because regulators build products', 'Because rules only matter late'], 0, 'Good regulatory design can standardize access, increase legitimacy, and make markets more contestable.'),
          q('d2-m2', 'A startup says compliance kills innovation. What is the more balanced view?', ['Compliance is irrelevant', 'Compliance adds friction but can help innovation scale responsibly', 'Innovation only matters if firms ignore rules', 'All regulation is identical'], 1, 'Compliance can slow teams down, but in finance it also helps create the trust conditions required for scale.'),
          q('d2-m3', 'Why do regulators care about operational resilience?', ['Because outages and cyber incidents can disrupt critical services', 'Because downtime only affects marketing', 'Because resilience only matters for cash firms', 'Because vendors cannot create systemic risk'], 0, 'Operational resilience matters because financial failures can cascade across users and institutions.'),
          q('d2-m4', 'What is one challenge in open banking implementation?', ['APIs remove the need for security', 'Standardization and customer consent design', 'No one wants bank data', 'Banks are not involved'], 1, 'In practice, open banking success depends on technical standards and smooth, trustworthy consent experiences.'),
          q('d2-m5', 'Why might a licensed bank still hold an advantage?', ['Licenses, capital frameworks, and regulatory relationships take time to build', 'Regulators ban all new entrants', 'Customers never switch', 'Fintechs cannot hire compliance talent'], 0, 'A license is not just paperwork; it represents a bundle of capabilities, obligations, and trust signals.')
        ]
      },
      {
        level: 'hard',
        title: 'Hard — speed versus safety',
        questions: [
          q('d2-h1', 'What is the strongest critique of “move fast” in finance?', ['Harms may appear only after products scale or fail under stress', 'It guarantees no growth', 'It makes software impossible', 'It removes all competition'], 0, 'Finance is a domain where delayed harms and fragility matter, so speed cannot be the only metric.'),
          q('d2-h2', 'Why can embedded compliance become strategic?', ['It can shorten safe launch cycles and make trust operational', 'It replaces every PM', 'It removes audit needs', 'It only matters for paper firms'], 0, 'When compliance is built into workflows rather than bolted on later, firms can move more responsibly and predictably.'),
          q('d2-h3', 'A regulator opens data access but imposes strict consent rules. What trade-off is visible?', ['Innovation versus customer autonomy and data protection', 'Paper versus fonts', 'Interest rates versus rent', 'Loans versus insurance'], 0, 'Open ecosystems can support innovation, but only if customers retain meaningful control over access and use.'),
          q('d2-h4', 'Why is “regulation as architecture” a useful phrase?', ['Because rules shape entry, incentives, risk, and trust conditions', 'Because regulators design every app screen', 'Because architecture only means cloud hosting', 'Because rules apply only after maturity'], 0, 'It highlights that regulation structures markets; it does not just sit outside them.'),
          q('d2-h5', 'What did our team stop treating as a back-office topic?', ['User trust', 'Compliance and regulatory design', 'Brand colors', 'Conference catering'], 1, 'The week made compliance feel like strategy, product design, and market positioning all at once.')
        ]
      }
    ]
  },
  {
    slug: 'day-3',
    dayNumber: 3,
    title: 'Day 3 — Platforms, Embedded Finance, and the Battle for Distribution',
    tag: 'Power shifts',
    intro:
      'Day 3 focused on platforms, marketplaces, and software companies that can insert finance directly into existing customer journeys.',
    takeaway:
      'Distribution is power — and embedded finance can relocate that power quietly.',
    levels: [
      {
        level: 'easy',
        title: 'Easy — the vocabulary',
        questions: [
          q('d3-e1', 'What is embedded finance?', ['Financial services integrated into a non-financial journey', 'A physical vault', 'Only crypto trading', 'A government subsidy'], 0, 'Embedded finance means payments, lending, insurance, or similar services appearing inside another product experience.'),
          q('d3-e2', 'Why are platforms interested in finance?', ['It can deepen engagement and create new revenue streams', 'It removes all regulation', 'It has no effect on loyalty', 'Customers prefer fragmented journeys'], 0, 'Financial services can increase stickiness, monetization, and control over the broader user experience.'),
          q('d3-e3', 'A marketplace offering seller cash advances is an example of:', ['Embedded finance', 'Traditional branch banking', 'Only social commerce', 'Central bank policy'], 0, 'A non-bank platform is integrating a financial service into its own operating flow.'),
          q('d3-e4', 'Why might customers like embedded payments?', ['They reduce checkout friction', 'They remove all fraud risk', 'They require more manual steps', 'They lower regulation'], 0, 'Embedded payments often feel seamless because users stay inside the same journey.'),
          q('d3-e5', 'What is one concern about large platforms in finance?', ['They may gain too much control over access and data', 'They cannot build useful products', 'They always improve competition equally', 'They are never trusted'], 0, 'The more a platform controls discovery and defaults, the more it can shape competition.' )
        ]
      },
      {
        level: 'medium',
        title: 'Medium — the trade-offs',
        questions: [
          q('d3-m1', 'Why does embedded finance blur industry boundaries?', ['Non-financial firms can distribute finance without looking like banks', 'Banks stop existing legally', 'Customers can no longer use cards', 'Regulation disappears online'], 0, 'A software company or platform can shape financial behavior even if licensed activities sit with partners behind the scenes.'),
          q('d3-m2', 'What is a likely risk for a bank supplying a platform?', ['Losing direct customer visibility while becoming back-end utility', 'Never earning revenue again', 'Automatically becoming a startup', 'No longer needing compliance staff'], 0, 'The bank may keep regulated responsibilities while the platform owns the visible relationship.'),
          q('d3-m3', 'Why are data advantages important in platform finance?', ['Contextual data can improve timing, personalization, and underwriting', 'Data only matters for advertising', 'Platforms cannot analyze behavior', 'Data removes all bias automatically'], 0, 'Platforms often see user behavior in context, which can be strategically powerful in finance.'),
          q('d3-m4', 'Which statement captures a tension in embedded finance?', ['Convenience can coexist with greater dependence on gatekeepers', 'Convenience always increases sovereignty', 'Dependency is impossible online', 'Only banks create lock-in'], 0, 'A smoother experience for users can still increase dependency on the platform that controls the journey.'),
          q('d3-m5', 'Why do startups often partner instead of building everything alone?', ['Regulated operations and infrastructure are expensive to build from scratch', 'Partnerships are required for every feature', 'Startups dislike scaling', 'Software cannot connect to APIs'], 0, 'Partnerships let firms combine distribution strength with existing regulated capabilities.')
        ]
      },
      {
        level: 'hard',
        title: 'Hard — who wins when finance disappears into the flow?',
        questions: [
          q('d3-h1', 'Why is control of the interface strategically important?', ['It shapes data capture, framing, and loyalty', 'It matters less than printer settings', 'Interfaces are irrelevant once payments work', 'Only regulators care'], 0, 'The interface influences who customers notice, who they trust, and who can cross-sell effectively.'),
          q('d3-h2', 'A platform integrates lending into its merchant dashboard. What deeper dynamic is at work?', ['Credit appears where the platform already observes behavior and can nudge demand', 'Lending stops being regulated', 'Repayment discipline disappears', 'Banks become irrelevant in every way'], 0, 'The platform gains informational and behavioral power by embedding finance inside a workflow it already controls.'),
          q('d3-h3', 'Why can embedded finance intensify competition concerns?', ['Dominant platforms can bundle services and make switching harder', 'Products cannot be compared', 'Regulators ignore distribution', 'Consumers always multi-home equally'], 0, 'Defaults, bundling, and visibility control can make rivals less discoverable and users more dependent.'),
          q('d3-h4', 'What is the best response to “banks will just become pipes”?', ['It may happen in some segments, but trust and balance-sheet strength still matter', 'It is true everywhere', 'Banks no longer matter once an app launches', 'Infrastructure is always the least profitable layer'], 0, 'Banks may risk invisibility in some contexts, but the outcome depends on where differentiated value remains.'),
          q('d3-h5', 'What mindset shift defined Day 3 for our team?', ['We stopped caring about journeys', 'We realized distribution can be as strategic as the product itself', 'We concluded all platforms should run banks', 'We decided embedded finance is only checkout buttons'], 1, 'The day sharpened our focus on where finance appears and who controls that moment of access.')
        ]
      }
    ]
  },
  {
    slug: 'day-4',
    dayNumber: 4,
    title: 'Day 4 — AI, Data, and Decision-Making Under Pressure',
    tag: 'Intelligence layer',
    intro:
      'By Day 4 the focus shifted toward the intelligence layer: fraud tools, recommendation systems, scoring models, and the real governance questions underneath them.',
    takeaway:
      'Efficiency is attractive, but accountability still matters when decisions shape people’s money and opportunities.',
    levels: [
      {
        level: 'easy',
        title: 'Easy — AI basics in finance',
        questions: [
          q('d4-e1', 'Which is a common use of AI in finance?', ['Fraud detection', 'Replacing legal frameworks', 'Printing cash at home', 'Eliminating all complaints'], 0, 'AI is often used for fraud detection, service automation, and pattern recognition.'),
          q('d4-e2', 'Why can personalization be useful?', ['It can tailor information to user context', 'It removes consent needs', 'It always increases fairness', 'It makes products risk free'], 0, 'Personalization can improve relevance, but it still requires transparency and good incentives.'),
          q('d4-e3', 'What is a key concern with AI-based credit decisions?', ['Possible bias or opaque reasoning', 'Too much paper use', 'Lack of electricity', 'Too much cash'], 0, 'Automated credit decisions can create serious fairness and explainability challenges.'),
          q('d4-e4', 'A chatbot in a banking app is mainly an example of:', ['Digital customer support automation', 'A capital regime', 'A payment rail', 'A trading license'], 0, 'Chatbots are often support and service tools rather than core financial infrastructure.'),
          q('d4-e5', 'Why does data quality matter for AI?', ['Poor data can produce poor outcomes', 'Algorithms work best with random noise', 'High-quality data is only useful in marketing', 'Finance does not depend on data'], 0, 'AI systems inherit a lot from the data they are trained or tuned on.')
        ]
      },
      {
        level: 'medium',
        title: 'Medium — balancing efficiency and responsibility',
        questions: [
          q('d4-m1', 'Why is explainability especially important in finance?', ['Decisions can affect access to credit, price, or fraud intervention', 'Customers enjoy technical diagrams', 'Regulators ban all models', 'Only engineers use finance'], 0, 'If automated systems affect high-impact outcomes, people may need reasons and ways to challenge them.'),
          q('d4-m2', 'What is a realistic benefit of AI for fraud teams?', ['Faster detection of suspicious patterns', 'A guarantee that false positives disappear', 'Elimination of all cyber risk', 'No need for humans'], 0, 'AI can improve speed and pattern recognition, but it does not remove the need for oversight.'),
          q('d4-m3', 'Why might human review still matter even when models perform well on average?', ['Edge cases and appeals still require context and judgment', 'Humans are always faster', 'Models never work', 'Average performance is irrelevant'], 0, 'Average performance can hide individual harm or difficult cases where context matters.'),
          q('d4-m4', 'What is a concern with personalized financial nudges?', ['They may help users but also steer behavior toward provider incentives', 'They are impossible to build', 'They remove all need for trust', 'They only matter in gaming'], 0, 'Personalization can serve the user or serve the firm more than the user, depending on incentives.'),
          q('d4-m5', 'Which statement best fits responsible AI in finance?', ['Use models with governance, monitoring, and routes for challenge', 'Deploy any accurate model without documentation', 'Avoid all automation forever', 'Assume fairness follows from complexity'], 0, 'Responsible AI is about disciplined deployment, not blind enthusiasm or blanket rejection.')
        ]
      },
      {
        level: 'hard',
        title: 'Hard — deciding what should stay contestable',
        questions: [
          q('d4-h1', 'Why is “human in the loop” not enough on its own?', ['Humans can become rubber stamps if process and incentives are weak', 'Humans are illegal in finance', 'Models must always act alone', 'Oversight is only aesthetic'], 0, 'A human step matters only when that human can meaningfully review and challenge the system.'),
          q('d4-h2', 'A lender uses alternative data to expand access. What is the deepest caution?', ['It may help inclusion but also repackage surveillance or bias', 'Alternative data is always superior', 'Inclusion only matters for marketing', 'Governance is unnecessary'], 0, 'Alternative data can widen access while also raising fairness and privacy concerns.'),
          q('d4-h3', 'Why can model performance metrics be insufficient for governance?', ['Accuracy does not fully capture fairness, explainability, or social effects', 'Metrics are unrelated to models', 'Regulators only care about aesthetics', 'Financial decisions do not affect lives'], 0, 'Governance needs a broader lens than performance scores alone.'),
          q('d4-h4', 'What is the best interpretation of AI as an “intelligence layer”?', ['It sits on top of workflows to prioritize, predict, detect, or recommend', 'It is the same as a bank license', 'It replaces all infrastructure', 'It only means chatbots'], 0, 'AI often enhances existing products and operations rather than replacing the full stack.'),
          q('d4-h5', 'What was the core tension for our team on Day 4?', ['Whether efficiency gains justify opaque decisions when people need recourse', 'Whether customer service should exist', 'Whether banks should stop using data', 'Whether coding languages regulate finance'], 0, 'The day sharpened our sense that efficiency is not enough when decisions affect opportunity, trust, and rights.')
        ]
      }
    ]
  },
  {
    slug: 'day-5',
    dayNumber: 5,
    title: 'Day 5 — Inclusion, Strategy, and the Fintech Questions That Stay Open',
    tag: 'Where we landed',
    intro:
      'The final day was about synthesis: who benefits, what scales responsibly, and which fintech futures are worth building at all.',
    takeaway:
      'The week ended with fewer simplistic answers and better questions.',
    levels: [
      {
        level: 'easy',
        title: 'Easy — broad strategic themes',
        questions: [
          q('d5-e1', 'Financial inclusion is mainly about:', ['Expanding meaningful access to useful financial services', 'Giving everyone the same bundle', 'Removing all lending standards', 'Replacing public policy'], 0, 'Inclusion means access that is usable and relevant, not just technical availability.'),
          q('d5-e2', 'Why is a sustainable business model important in fintech?', ['Growth without durable economics can collapse', 'Losses are always good for trust', 'Users ignore reliability', 'Infrastructure never costs anything'], 0, 'Durable economics matter because subsidized growth can disappear quickly when market conditions change.'),
          q('d5-e3', 'What does customer-centric design ideally mean?', ['Designing around user needs and clarity', 'Asking customers to read more legal text', 'Hiding risks in fine print', 'Copying competitors exactly'], 0, 'Customer-centric design should reduce confusion and improve fit, not simply increase conversion.'),
          q('d5-e4', 'Why is financial literacy still relevant in a digital-first world?', ['Simple interfaces do not remove the need to understand consequences', 'Apps make all decisions automatically', 'Only experts use finance', 'Literacy only matters offline'], 0, 'A smooth interface helps, but users still need to grasp risk, obligations, and trade-offs.'),
          q('d5-e5', 'Which statement fits the final tone best?', ['Fintech has promise, but the real question is how it is governed and for whom it creates value', 'All fintech is either perfect or harmful', 'Only startups matter', 'Technology settles policy debates'], 0, 'The week ended with more nuance, not with simplistic hype or rejection.')
        ]
      },
      {
        level: 'medium',
        title: 'Medium — judging durable value',
        questions: [
          q('d5-m1', 'Why can “access” be an incomplete measure of inclusion?', ['A service may exist but still be too costly, confusing, or harmful', 'Access is always enough', 'Inclusion cannot be measured', 'Users never care about quality'], 0, 'Real inclusion depends on usability, fairness, and outcomes, not just technical availability.'),
          q('d5-m2', 'What is a warning sign in a fintech model?', ['Growth depends on hidden fees or unsustainable subsidy', 'Customers like the interface', 'The company invests in support', 'The app has mobile access'], 0, 'A model that grows through opacity or fragile subsidy may not create durable value.'),
          q('d5-m3', 'Why does ecosystem resilience matter?', ['Services depend on multiple partners and failure points', 'Ecosystems never change', 'Resilience only matters for banks', 'Cloud systems cannot fail'], 0, 'Fintech stacks are layered, so resilience depends on more than the front-end brand.'),
          q('d5-m4', 'Which outcome best reflects thoughtful innovation?', ['A product that improves outcomes while staying transparent and viable', 'A product that maximizes clicks regardless of harm', 'A product that ignores regulation', 'A product that only works ideally'], 0, 'Useful innovation in finance needs to improve real outcomes under trustworthy conditions.'),
          q('d5-m5', 'Why did the bootcamp leave us with more debate than certainty?', ['The best fintech questions involve trade-offs across innovation, trust, fairness, and power', 'No one understood the topic', 'Finance has no recurring dilemmas', 'Only one stakeholder matters'], 0, 'The week surfaced tensions, which is exactly why a reflection-led format makes sense.')
        ]
      },
      {
        level: 'hard',
        title: 'Hard — keeping the unresolved questions alive',
        questions: [
          q('d5-h1', 'What is a robust way to judge whether a fintech innovation is “good”?', ['Ask who benefits, who bears risk, whether users understand it, and whether it is fair and sustainable', 'Look only at downloads', 'Check whether it uses AI', 'Focus only on investor excitement'], 0, 'A richer evaluation looks at incentives, outcomes, power, trust, and long-term viability together.'),
          q('d5-h2', 'Why can inclusion rhetoric become misleading?', ['It can justify products that widen access superficially while creating new harms', 'Inclusion is never relevant', 'Underserved users do not want digital tools', 'Policy and private innovation never overlap'], 0, 'Inclusion claims should be tested against actual user outcomes, not just narrative appeal.'),
          q('d5-h3', 'What strategic lesson links trust, regulation, platforms, and AI?', ['Fintech is a system of interacting incentives and responsibilities, not isolated apps', 'Each topic can be solved independently by branding', 'Only data scientists should set strategy', 'The topics have little in common'], 0, 'The strongest synthesis is systems thinking: these topics reinforce and constrain each other.'),
          q('d5-h4', 'Why is humility a useful strategic stance in fintech?', ['Interventions can create second-order effects that are easy to miss at launch', 'Strategy should avoid ambition', 'Customers dislike confidence', 'No data is ever available'], 0, 'Financial systems are interconnected, so small design choices can trigger larger downstream effects.'),
          q('d5-h5', 'What is the best summary of “A Week That Changed Our Minds”?', ['We replaced easy techno-optimism with a more layered view of innovation, trust, power, and responsibility', 'We decided technology does not matter', 'We concluded every incumbent should disappear', 'We learned there is only one correct answer'], 0, 'The week did not make the team anti-innovation. It made the team more mature about trade-offs.')
        ]
      }
    ]
  }
];
