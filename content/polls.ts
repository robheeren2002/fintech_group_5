import type { PollSeed } from '@/types';

export const pollSeeds: PollSeed[] = [
  {
  slug: 'd1-platform-power-2035',
  daySlug: 'day-1',
  position: 1,
  question: 'Who will ultimately control the customer relationship in European payments by 2035?',
  options: [
    'Traditional banks: KBC, ING, BNP Paribas Fortis',
    'European payment infrastructure: Wero or EPI',
    'BigTech platforms: Apple, Google, Amazon',
    'A hybrid ecosystem: no single player dominates'
  ],
  explanationPerOption: [
    'This assumes incumbents can defend their customer relationships even if infrastructure and interfaces continue to fragment.',
    'This view bets on European infrastructure becoming strategically important enough to shape the relationship layer as well.',
    'This aligns with the platform power thesis: the player that owns devices and interfaces can capture the relationship even without owning the rails.',
    'This is the most balanced answer, although even hybrid systems often still concentrate power within certain layers.'
  ],
  afterVoteSummary:
    'Monday pushed us to distinguish clearly between infrastructure, interface, and relationship. Even if multiple players remain active, the deepest strategic question is which layer ends up capturing the strongest customer lock-in.'
},
{
  slug: 'd1-wero-five-years',
  daySlug: 'day-1',
  position: 2,
  question: 'In five years, what do you think Wero will be?',
  options: [
    'A dominant independent payment infrastructure controlling 30% or more of European transactions',
    'White-labeled inside BigTech platforms and mostly invisible to end users',
    'A specialist player strong in core markets but not Europe-wide',
    'Acquired or merged into a larger player',
    'Significantly weakened or discontinued'
  ],
  explanationPerOption: [
    'This assumes Wero can pair infrastructure strength with enough distribution and visibility to stay independent at scale.',
    'This is strategically coherent if Wero becomes the preferred rails while BigTech continues to own the customer interface.',
    'This reflects a middle path where Wero matters regionally without becoming the defining European standard.',
    'This sees payments as a consolidation story, where scale and coordination eventually force larger combinations.',
    'This assumes Wero loses momentum either in execution, adoption, or strategic support.'
  ],
  afterVoteSummary:
    'A core tension from Monday is that infrastructure success does not necessarily mean brand visibility or customer ownership. Wero could become highly important and still remain mostly invisible to the end user.'
},
{
  slug: 'd1-regulate-bigtech-payments',
  daySlug: 'day-1',
  position: 3,
  question: 'Should European regulators actively limit Apple, Google, and Amazon in payment interfaces?',
  options: [
    'Yes: they pose a strategic threat to European autonomy',
    'Yes: but only if they abuse market power',
    'No: consumer convenience and competition matter more',
    'No clear position: the trade-offs are too complex'
  ],
  explanationPerOption: [
    'This prioritizes sovereignty, control over data flows, and long-term strategic independence in payments.',
    'This reflects a more conditional approach where regulators intervene only when dominance becomes abusive.',
    'This prioritizes consumer outcomes and innovation speed over industrial policy concerns.',
    'This recognizes that the issue involves trade-offs between efficiency, innovation, regulation, and sovereignty.'
  ],
  afterVoteSummary:
    'Monday made clear that payments are not only a technology issue. They are also about governance, dependency, and who gets to shape the rules of the ecosystem over time.'
},
  {
  slug: 'd2-embedded-finance-winner',
  daySlug: 'day-2',
  position: 1,
  question: 'Who is best positioned to win the embedded finance shift?',
  options: ['Traditional banks', 'Fintech startups', 'BigTech (Apple, Google, Amazon)', 'API infrastructure players (Plaid, Tink)'],
  explanationPerOption: [
    'Banks still hold licences, trust, and balance sheets, but often struggle to move fast enough in platform markets.',
    'Fintechs have speed and UX advantages, but they still need capital, infrastructure, and often regulatory partners.',
    'BigTech has unmatched distribution and data, though regulators are increasingly alert to their expansion into finance.',
    'Infrastructure players are invisible to consumers but indispensable to everyone else, which is often where durable power forms.'
  ],
  afterVoteSummary:
    'There is no clean winner because each layer has a different advantage. BigTech has distribution and data, fintechs have speed and UX, banks have licences and trust, and infrastructure players like Plaid and Tink may be the most strategically powerful because they sit in the middle of the ecosystem.'
},
{
  slug: 'd2-psd2-lock-in',
  daySlug: 'day-2',
  position: 2,
  question: 'Did PSD2 actually break bank lock-in, or just move it to a new layer?',
  options: ['Yes: consumers genuinely have more choice now', 'No: lock-in just moved from banks to API middlewares like Plaid/Tink', 'Partially: more choice for consumers, but new dependencies emerged'],
  explanationPerOption: [
    'Consumer choice did increase meaningfully through account aggregation, payment initiation, and multi-banking experiences.',
    'A strong platform-economics critique is that banks lost their monopoly, but middleware platforms became the new chokepoint.',
    'This is the most balanced view: PSD2 expanded access and choice, but it also created new forms of dependency at the infrastructure layer.'
  ],
  afterVoteSummary:
    'The most honest answer is probably "partially." PSD2 succeeded in opening bank data and enabling new services, but the middleware layer that emerged created a new form of lock-in upstream. The chokepoint did not disappear; it shifted.'
},
{
  slug: 'd2-revolut-identity',
  daySlug: 'day-2',
  position: 3,
  question: 'Is Revolut a bank, a platform, or something else?',
  options: ['It\'s a bank', 'It\'s a platform that does banking', 'It\'s a super-app', 'I honestly have no idea anymore'],
  explanationPerOption: [
    'Legally, Revolut increasingly is a bank because it now holds banking licences and offers more traditional banking products.',
    'Strategically, Revolut behaves like a platform with a subsidized consumer side and monetization across multiple services.',
    'From a product perspective, the super-app label fits well because the offering has expanded far beyond a single financial tool.',
    'That confusion is understandable because Revolut no longer fits neatly into one traditional category.'
  ],
  afterVoteSummary:
    'Revolut is one of the hardest firms in fintech to classify cleanly. It began as a narrow product, now operates structurally like a platform, looks increasingly like a super-app, and is legally moving deeper into banking. The ambiguity is the point.'
},
{
  slug: 'd3-blockchain-transformative',
  daySlug: 'day-3',
  position: 1,
  question: 'Is blockchain in finance genuinely transformative, or is it mostly hype?',
  options: [
    'Genuinely transformative: it changes the cost structure of finance fundamentally',
    'Mostly hype: databases already do what blockchain claims to do',
    'Transformative in specific niches (lending, settlement) but overhyped elsewhere',
    'Too early to tell'
  ],
  explanationPerOption: [
    'This view sees blockchain as infrastructure that can materially reduce cost, delay, and opacity in finance.',
    'Sceptics argue that many claimed blockchain benefits can already be achieved with conventional databases and better coordination.',
    'This is the most balanced answer for many cases: the value may be very real in some domains, but exaggerated in others.',
    'Some people still see the market as too immature to draw a strong conclusion.'
  ],
  afterVoteSummary:
    'The strongest takeaway is that the answer depends on the use case. Blockchain does not automatically improve everything, but in areas like settlement, auditability, and tokenised lending, it can change the economics in ways that traditional systems struggle to match.'
},
{
  slug: 'd3-consumer-blockchain-mortgage',
  daySlug: 'day-3',
  position: 2,
  question: 'Should ordinary consumers care about whether their mortgage is on a blockchain?',
  options: [
    'Yes: they should demand transparency and lower fees that blockchain enables',
    'No: they care about the rate, not the underlying technology',
    'Only tech-savvy consumers will care; mass market adoption will be invisible',
    'It depends on whether regulators mandate disclosure'
  ],
  explanationPerOption: [
    'This view emphasizes transparency, auditability, and the possibility of lower costs being passed to borrowers.',
    'Most consumers evaluate outcomes, especially price and speed, rather than the infrastructure underneath.',
    'This suggests the technology may matter operationally without ever becoming consumer-facing.',
    'Regulatory rules could shape whether infrastructure choices become visible or remain abstract to users.'
  ],
  afterVoteSummary:
    'For most consumers, the technology itself will probably remain invisible. What matters is whether it leads to lower rates, faster processing, and fewer frictions. That may be the best sign of successful infrastructure — users benefit without needing to think about it.'
},
{
  slug: 'd3-stablecoin-infrastructure',
  daySlug: 'day-3',
  position: 3,
  question: 'Stablecoins: legitimate financial infrastructure or regulatory time bomb?',
  options: [
    'Legitimate infrastructure: regulated stablecoins are safer than traditional settlement',
    'Regulatory time bomb: they could destabilise banking if adopted at scale',
    'Useful in limited contexts (B2B settlement) but too risky for retail use',
    'The debate is moot: central bank digital currencies (CBDCs) will replace them'
  ],
  explanationPerOption: [
    'Regulated stablecoins can reduce settlement delays and counterparty risk in ways that traditional rails often cannot.',
    'At scale, stablecoins could affect deposit flows and create broader systemic questions for the banking sector.',
    'A limited-use view sees real utility in settlement while remaining cautious about mass retail adoption.',
    'Some think CBDCs will eventually absorb the use cases that stablecoins are currently trying to occupy.'
  ],
  afterVoteSummary:
    'Both the promise and the risk are real. Stablecoins can improve settlement efficiency dramatically, but their broader impact depends on how they are regulated and where they are allowed to scale. This looks as much like a regulatory design question as a technology question.'
},
{
  slug: 'd4-license-or-partner',
  daySlug: 'day-4',
  position: 1,
  question: 'For most fintechs, what is the smarter growth path early on?',
  options: [
    'Build your own license strategy from day one',
    'Partner first through licensed institutions',
    'Use BaaS at first and pursue licenses later if needed',
    'Avoid regulated activities entirely'
  ],
  explanationPerOption: [
    'Owning licenses can create long term control, but it is costly, slow, and difficult for early stage firms.',
    'Partnerships can unlock faster entry, but they also create dependence on infrastructure owned by others.',
    'This is often the most pragmatic path: move quickly through existing infrastructure, then internalize more control over time if the model proves itself.',
    'Some firms can avoid regulation by narrowing scope, but that also limits how much value they can offer.'
  ],
  afterVoteSummary:
    'The strategic choice is rarely binary. For many fintechs, the best route is to use partnerships or BaaS to enter the market quickly, while keeping open the option of deeper licensing later. Thursday made clear that regulation shapes sequencing as much as it shapes strategy.'
},
{
  slug: 'd4-inclusion-or-efficiency',
  daySlug: 'day-4',
  position: 2,
  question: 'What should fintech prioritize more strongly in the next wave of growth?',
  options: [
    'Efficiency: lower cost and faster service',
    'Inclusion: broader access for underserved users',
    'Both equally',
    'Neither: infrastructure matters more than end users'
  ],
  explanationPerOption: [
    'Efficiency remains central because lower cost and speed often determine whether a service scales.',
    'Inclusion matters because financial innovation is incomplete if it only improves life for already well served users.',
    'This is the most balanced answer: the strongest models often improve efficiency while widening access at the same time.',
    'Infrastructure is essential, but its value is ultimately measured by how it improves real financial outcomes for people and businesses.'
  ],
  afterVoteSummary:
    'Cases like Nickel suggest that inclusion and efficiency do not have to be opposites. Some of the most compelling fintech models succeed precisely because they make financial services both simpler and more accessible.'
},
{
  slug: 'd4-modular-future',
  daySlug: 'day-4',
  position: 3,
  question: 'In a more modular financial ecosystem, where will the most value sit?',
  options: [
    'With the licensed institution',
    'With the customer facing brand',
    'With the infrastructure layer connecting everyone',
    'Value will be shared more evenly across the stack'
  ],
  explanationPerOption: [
    'Licensed institutions still control permissions, compliance, and trust, which remain hard to replicate.',
    'Customer facing brands often capture loyalty, distribution, and most of the visible relationship with the user.',
    'Infrastructure layers can become extremely powerful because many participants depend on them without end users even noticing.',
    'A modular market may distribute value across several layers rather than concentrating it in one type of player.'
  ],
  afterVoteSummary:
    'One of Thursday’s biggest insights is that modularity changes where value can accumulate. The future may not belong entirely to banks, fintechs, or infrastructure providers alone, but to whichever layer becomes hardest to replace within the ecosystem.'
},{
  slug: 'd5-biggest-barrier-agri-finance',
  daySlug: 'day-5',
  position: 1,
  question: 'What is the biggest barrier to agricultural finance?',
  options: [
    'Lack of collateral',
    'Lack of data',
    'High risk: weather and price volatility',
    'Informality'
  ],
  explanationPerOption: [
    'Without usable collateral, many farmers struggle to fit standard lending requirements.',
    'Weak or fragmented data makes it difficult for lenders to assess borrowers confidently.',
    'Agriculture is exposed to major external shocks, which makes credit risk harder to manage.',
    'Informality reduces documentation, traceability, and the fit with conventional financial products.'
  ],
  afterVoteSummary:
    'These barriers are deeply connected rather than separate. Fintech can help by generating new data, improving transparency, and enabling alternative forms of credit assessment, but no single tool removes the full complexity of agricultural finance.'
},
{
  slug: 'd5-who-should-lead-agri-finance',
  daySlug: 'day-5',
  position: 2,
  question: 'Who should play the biggest role in improving agricultural finance?',
  options: [
    'Banks',
    'Fintech companies',
    'Governments',
    'Partnerships between all actors'
  ],
  explanationPerOption: [
    'Banks bring scale, capital, and experience in regulated financial intermediation.',
    'Fintech companies often provide the flexibility, data tools, and new operating models needed in underserved markets.',
    'Governments can shape incentives, de-risk markets, and support public infrastructure that private actors may not build alone.',
    'Collaboration is often the strongest answer because agricultural finance cuts across infrastructure, policy, technology, and local trust.'
  ],
  afterVoteSummary:
    'The most effective solutions are likely to come from partnerships. Friday made clear that agricultural finance is too complex for any one actor to solve alone, so scale depends on combining public support, financial expertise, and technological innovation.'
},
{
  slug: 'd5-fintech-limitation-agriculture',
  daySlug: 'day-5',
  position: 3,
  question: 'What is the biggest limitation of fintech in agricultural finance today?',
  options: [
    'Lack of technology',
    'Lack of data',
    'Lack of trust and adoption',
    'Regulatory constraints'
  ],
  explanationPerOption: [
    'Technology itself is improving quickly, but technology alone does not guarantee use or impact.',
    'Data gaps remain a serious challenge, especially in fragmented and informal environments.',
    'Trust and adoption often determine whether a technically strong solution actually works in practice.',
    'Regulatory design matters, especially when firms need to scale products across complex local contexts.'
  ],
  afterVoteSummary:
    'The hardest problem is often not building the tool, but getting people to trust and use it. Adoption depends on education, accessibility, local realities, and whether the solution fits how farmers and value chain actors actually operate.'
}
];
