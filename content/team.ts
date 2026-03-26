import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'Duraiz',
    name: 'Duraiz Bhatti',
    role: 'MFM',
    image: '/avatars/duraiz.jpg',
    beforeReflection:
      'I walked in assuming fintech was mostly slicker banking apps. My mental model was interface-first: make payments faster, make onboarding easier, and the rest follows.',
    afterReflection:
      'I left seeing fintech as a power shift in distribution, trust, and infrastructure. The interface still matters, but the bigger game is who owns the customer relationship and who absorbs the regulatory burden.'
  },
{
  id: 'Vyom',
  name: 'Vyom Chhabra',
  role: 'MIMS',
  image: '/avatars/vyom.jpg',
  beforeReflection:
    'Before this bootcamp, I thought fintech was mostly about digital banking and faster payments. My mental model was pretty simple: apps like PayPal or Revolut made money move more easily, and that was basically the story. I did not really understand how much of the industry is shaped by infrastructure, licensing, and the competition for control over the customer relationship.\n\n' +
    'I also underestimated how much friction still exists underneath the surface. A payment can feel instant to the user while the actual settlement still takes days. I had not fully appreciated how much that delay creates cost, risk, and opportunity for new players. I also mostly associated blockchain with crypto speculation, not with lending infrastructure, settlement, or asset ownership.\n\n' +
    'So my starting point was not completely wrong, but it was much narrower than the reality.',
  afterReflection:
    'Now I see fintech as a deeper structural shift in financial infrastructure. What changed most for me is the realization that blockchain, stablecoins, and tokenisation are not just side stories around crypto, they can fundamentally change how settlement, lending, and ownership work. I also came away with a much stronger sense that the firms with the best infrastructure, regulatory positioning, and customer control will shape the next phase of finance.'
},
  {
    id: 'Gonzalo',
    name: 'Gonzalo De La Garza Rodríguez',
    role: 'MFM',
    image: '/avatars/gonzalo.jpg',
    beforeReflection:
      'Coming into this bootcamp with a finance background, I thought I had a pretty decent grasp of what fintech was. Digital payments were replacing cash, neobanks were slowly taking market share from traditional banks, and crypto was either the future of money or an elaborate Ponzi scheme depending on who you asked at a dinner table. I knew the main players well enough. Revolut started as a travel card that somehow became a bank. Klarna made checkout feel effortless. Stripe was what developers used when they needed to handle payments and Plaid was vaguely "the thing that connects your bank account to other apps."\n\n' +
        'My understanding of competition in the space was pretty standard too. Fintech startups were faster, leaner, more focused than banks. They picked specific pain points and executed on them relentlessly, rather than trying to own the entire value chain like traditional institutions. Regulation was something fintechs navigated around and something banks hid behind. The story I had internalized was one of disruption: agile startups coming for the lunch of slow moving legacy institutions.\n\n' +
        'That framing was not completely wrong. But looking back, it was missing almost everything that actually matters.',
    afterReflection:
      'The bootcamp fundamentally changed how I think about this space. The biggest shift was realizing that the most important battles in financial services are not really about who builds the best app or has the lowest fees. They are about who controls the data layer, who holds the licence, and who sits at the center of the network. Fintech, at its core, is increasingly an infrastructure and regulatory story.\n\n' +
        'I also came to appreciate something I had intellectually understood but never really felt before: regulation is not just a constraint on innovation. It is often the source of it. PSD2 did not happen because banks wanted to open up. It happened because regulators forced them to. And that single directive restructured the competitive architecture of an entire industry. That is a fundamentally different way of thinking about what drives change in financial services.\n\n'
  },
  {
    id: 'Rob',
    name: 'Rob Heeren',
    role: 'MAI',
    image: '/avatars/rob.jpg',
    beforeReflection:
    'Before the bootcamp, I did not really know what fintech exactly meant. Coming from a tech background, I had not taken many finance-related courses, even though the intersection between finance and technology had always interested me.\n\n' +
    'I had of course already heard of companies like Revolut and Klarna, and I roughly knew what they did. But my understanding stayed quite superficial. I saw them mostly as modern financial apps with a better user experience, without really understanding how they interacted, competed, or collaborated with more traditional financial institutions like banks.\n\n' +
    'So before the bootcamp, fintech felt to me like an interesting but still vague space: clearly important, but not something I understood in a deeper strategic or structural way.',
    afterReflection:
    'After the bootcamp, I now have a much more complete understanding of what fintech is. I see that it is about much more than only the user interface or the technology behind new financial products. It is an interwoven web of innovations, collaborations, regulations, power dynamics, and control over data and infrastructure.\n\n' +
    'One of the most interesting patterns for me was the cycle between incumbents and challengers. At first, large institutions like banks offer a very broad range of financial services. Then smaller players enter the market and focus intensely on one specific part of that value chain, often delivering a much better and more user-friendly experience. But once they become successful and build a strong user base, they start expanding again into adjacent services, gradually moving toward a broader financial ecosystem of their own.\n\n' +
    'Revolut is probably the clearest example of that dynamic. It began with a focused product, but over time expanded into something much broader, increasingly resembling the kind of full-service financial institution it originally challenged. That made me realize that fintech is not simply about startups replacing banks. It is often about new players entering narrowly, scaling quickly, and then evolving into something that looks surprisingly similar to a bank again, but built through a different path.'
},
  {
    id: 'Jolien',
    name: 'Jolien Logghe',
    role: 'MGM',
    image: '/avatars/jolien.png',
    beforeReflection:
    'Before attending the fintech bootcamp, I perceived fintech mainly as digital banking innovations such as mobile payments and online banking apps. My understanding was rather narrow and primarily focused on consumer-facing technologies that make financial services faster, more convenient, and more user-friendly. I associated fintech mostly with startups disrupting traditional banks and offering alternative financial services.\n\n' +
    'That view captured part of fintech, but it stayed close to the visible front-end layer and did not yet include the broader systems behind it.',
    afterReflection:
    'After the bootcamp, my understanding of fintech has significantly broadened. I now see fintech as a much wider ecosystem that goes beyond payments and digital banking. It includes technologies such as data analytics, artificial intelligence, blockchain, and embedded finance, all of which are transforming how financial services are designed, delivered, and accessed.\n\n' +
    'I also learned that fintech is not only about improving efficiency. It can reshape entire financial systems, support financial inclusion, enable new business models, and improve access to capital for both individuals and businesses. It also supports better risk management, personalization of services, and more transparent financial processes.\n\n' +
    'What changed most in my perspective is that I no longer see fintech as purely technological. I now understand it as a combination of technology, finance, regulation, and collaboration between different stakeholders such as banks, startups, governments, and international organizations. Overall, I now see fintech as a strategic driver of innovation and transformation in the financial sector, with the potential to create both economic and societal value, rather than just a set of digital tools improving existing services.'
},
  {
    id: 'Eline',
    name: 'Eline Nijs',
    role: 'MFM',
    image: '/avatars/eline.jpg',
    beforeReflection:
    'Before participating in the Strategic Innovation: Fintech Bootcamp, I had a rather simple view of FinTech. I mainly associated it with user-friendly apps, faster payments, and digital banks modernising traditional services. It felt more like a surface-level improvement than a structural transformation.\n\n' +
    'I also tended to think of regulation as something separate from innovation. In my mind, FinTech was mostly about better technology and smoother user experience, while regulation sat in the background as an obstacle firms simply had to deal with.\n\n' +
    'That view was not completely wrong, but it was much narrower than what I understand now.',
    afterReflection:
    'After Thursday, I see FinTech as a complex ecosystem shaped not only by technology, but also by regulation, infrastructure, partnerships, and market dynamics. I now understand that visible apps are only the tip of the iceberg, while APIs, licensing frameworks, and institutional collaboration are what really make many business models possible.\n\n' +
    'My perspective on regulation changed the most. I no longer see it only as a barrier. I see it as something that actively structures the market, influences strategy, and can even become part of a company’s competitive advantage. I also came away with a broader view of innovation itself: not only as speed or convenience, but also as inclusion, adaptability, and the ability to reshape financial services more fundamentally.\n\n' +
    'Overall, I now see FinTech as an interconnected system where banks, startups, and BigTechs each play different roles, and where long-term success depends on how technology, regulation, and partnerships fit together.'
}
];
