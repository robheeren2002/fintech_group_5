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
  title: 'Day 1: Platform Power Game',
  tag: 'Payments, Platforms, Infrastructure, Ecosystems',
  intro:
    '**Monday changed how we think about power in payments.**\n' +
    'The biggest shift for us was realizing that the real battle in fintech is not only about building the best infrastructure. It is about who controls the interface, the customer relationship, and the data generated through that relationship. That makes platform power just as important, and often more important, than the rails underneath.\n\n' +
    'This also changed how we see firms like Apple Pay, Google Pay, and PayPal. They are not just convenient layers sitting on top of payments infrastructure. They can become the most powerful actors in the system because they own the customer touchpoint while others compete to provide the invisible plumbing behind them.\n\n' +
    'Another key idea for us was that fintech no longer fits a simple disruption story. The assumption that startups would replace banks turned out to be too narrow. In practice, many fintechs and banks became complementary because banks still control licenses, capital, trust, and distribution, while fintechs often specialize in speed, focus, and user experience.\n\n' +
    'Overall, Monday made us see the payments battlefield as a struggle over ecosystem control. The central question is not only which infrastructure wins, but who captures the relationship around it.\n\n',
  takeaway:
    'In payments, controlling the interface and the customer relationship can matter more than owning the rails underneath.',
  levels: [
    {
      level: 'easy',
      title: 'Easy',
      questions: [
        q('d1-e1', 'In the payments ecosystem, what does "platform power" refer to?', ['The ability to process transactions faster than competitors', 'The ability to own the customer interface and relationship, regardless of underlying infrastructure', 'The total transaction volume a company can handle', 'The number of employees a fintech company employs'], 1, 'Platform power means controlling the customer touchpoint and relationship, even if another party provides the infrastructure underneath.'),
        q('d1-e2', 'Which of the following is NOT an example of a platform in payments?', ['Apple Pay', 'Google Pay', 'Wero', 'PayPal'], 2, 'In this framing, Wero is primarily infrastructure-oriented, while Apple Pay, Google Pay, and PayPal are customer-facing platforms.'),
        q('d1-e3', 'In the Payments Battlefield context, why does BigTech matter?', ['They have more money than banks', 'They own billions of devices and the customer interface for payments', 'They have better engineers', 'They don\'t face regulation'], 1, 'BigTech matters because control over devices and customer interfaces gives it strategic leverage in payments.'),
        q('d1-e4', 'What is the role of SEPA Instant in the Wero story?', ['A European law that restricts payments', 'The infrastructure or rails that Wero is built on for instant settlement', 'A competing payment app', 'A blockchain network'], 1, 'SEPA Instant provides the underlying settlement infrastructure that enables Wero\'s payment model.'),
        q('d1-e5', 'Which statement best describes the difference between Visa or Mastercard and Apple Pay?', ['They do the same thing', 'Visa or Mastercard own the infrastructure; Apple Pay owns the customer interface', 'Apple Pay is cheaper', 'Visa or Mastercard own the interface; Apple Pay owns the infrastructure'], 1, 'Visa and Mastercard are infrastructure and network players, while Apple Pay is primarily an interface and relationship layer.')
      ]
    },
    {
      level: 'medium',
      title: 'Medium',
      questions: [
        q('d1-m1', 'According to the FinTech landscape presentation, what shift happened from Wave 2 to Wave 3 in fintech?', ['Banks disappeared', 'The industry moved from disruption narratives to partnership and ecosystem models', 'Blockchain replaced all traditional banking', 'Regulations made fintech illegal'], 1, 'The shift was from a pure disruption narrative toward partnerships, ecosystems, and layered collaboration.'),
        q('d1-m2', 'In the ecosystem model presented, what defines an "Orchestrator"?', ['Someone who regulates financial services', 'A player who owns the customer relationship and assembles a best-of-breed ecosystem around it', 'Someone who builds payment infrastructure', 'A bank'], 1, 'An orchestrator controls the relationship and coordinates multiple specialized providers around the customer.'),
        q('d1-m3', 'Why is platform power potentially a threat to Wero according to the analysis?', ['Wero does not have enough money', 'Even if Wero builds better infrastructure, if Apple, Google, or PayPal sits between Wero and the customer, those platforms capture the primary relationship', 'Regulations prevent Wero from operating', 'Visa and Mastercard are too big'], 1, 'The risk is that superior infrastructure still becomes invisible if another player owns the customer touchpoint.'),
        q('d1-m4', 'What is the "consent model" that Wero introduced?', ['Permission from regulators to operate in Europe', 'A framework where payments are understood as agreements between merchants and consumers, enabling loyalty, identity, and flexible payment options', 'A way to get customer consent to share data with banks', 'A model only used in Germany'], 1, 'The consent model broadens payments beyond simple transaction execution toward richer interaction between merchant and customer.'),
        q('d1-m5', 'According to the FinTech landscape, what drives the shift from specialization to rebundling?', ['App fatigue and the demand for simplicity and integration', 'Banks getting stronger', 'Regulations forcing mergers', 'Bitcoin becoming mainstream'], 0, 'As users tire of fragmented apps, firms gain an incentive to rebundle services into broader ecosystems.')
      ]
    },
    {
      level: 'hard',
      title: 'Hard',
      questions: [
        q('d1-h1', 'What is the strategic tension between Wero and BigTech platforms, and what is it fundamentally about?', ['Technology superiority', 'Who owns the customer relationship and controls the margin pool: infrastructure providers like Wero versus interface owners like Apple or Google', 'Regulatory compliance', 'Transaction speed'], 1, 'The core issue is not only technology, but who captures the customer relationship and economic value.'),
        q('d1-h2', 'Based on the ecosystem architecture framework, if Wero becomes white-labeled inside Apple Pay, what role would Wero play?', ['Orchestrator', 'Specialist', 'Infrastructure Enabler', 'Incumbent as Platform'], 2, 'If Wero becomes invisible underneath another interface, it functions as an infrastructure enabler rather than the primary orchestrator.'),
        q('d1-h3', 'The presentation suggests that the "disruption narrative" of 2010 to 2017 cracked. Which explanation best fits why?', ['Fintechs failed technically', 'Customer acquisition costs exploded, trust gaps persisted for serious money, and banks held licenses, capital, and distribution that fintechs needed, so partnership became the rational model', 'Banks were too fast at adapting', 'Governments banned fintech'], 1, 'The economics of scale, trust, regulation, and customer acquisition made partnership more rational than simple replacement.'),
        q('d1-h4', 'In Wero\'s consumer research, what was the key finding about willingness to use Wero in Belgium?', ['Only 5% of Belgians were willing', '65% of Belgians were willing to use Wero', 'Belgians preferred existing payment methods', 'Young people rejected Wero'], 1, 'The research highlighted a relatively high willingness to use Wero in Belgium.'),
        q('d1-h5', 'Which scenario represents the highest strategic risk for Wero\'s long-term independence?', ['Visa and Mastercard remain dominant', 'Fintechs continue to innovate at rapid pace', 'BigTech platforms like Apple, Google, or PayPal embed Wero as a white-labeled backend while controlling the customer interface', 'European regulation becomes stricter'], 2, 'The greatest risk is becoming dependent, invisible infrastructure beneath stronger customer-facing platforms.')
      ]
    }
  ]
},
{
  slug: 'day-2',
  dayNumber: 2,
  title: 'Day 2: Open Banking, Banking as a Service (BaaS) & Platform Economics',
  tag: 'Open Banking, BaaS, Platform Economics',
  intro:
  '**Open Banking, BaaS, and platform economics changed how we think about competition in finance.**\n' +
  'This session made us realize that regulation is not just a constraint in fintech, it actively shapes the market.' +
      ' Before this class, we mostly saw rules like PSD2 as compliance obligations. Now we see them as mechanisms' +
      ' that' +
      ' can redistribute power, create new business models, and open the door for entirely new players to compete with banks.\n\n' +
  'The distinction between Open Banking and BaaS also became much clearer to us. Open Banking gives third parties' +
      ' access to bank data and payment initiation, while BaaS goes further by turning actual banking functionality into modular infrastructure. That difference matters because it shows how finance is becoming something that can be embedded into almost any digital platform, often without the user even noticing a bank is involved.\n\n' +
  'At the same time, embedded finance is really a platform story. The biggest advantage does not necessarily go to the institution with the banking licence, but to the player that controls distribution, customer interaction, or infrastructure. That helps explain why companies like Shopify, Uber, Apple, Plaid, and Tink are so important in this space. Finance is no longer only about owning the product. It is increasingly about owning the interface or the pipes underneath it.\n\n' +
  'What stayed with us most was the irony behind Open Banking. PSD2 was meant to reduce bank lock-in and increase' +
      ' consumer choice, and it did. But at the same time, it helped create a new layer of dependency around API infrastructure providers like Plaid and Tink. So the lock-in did not disappear, it just moved.\n\n' +
  'The platform simulation made the economics behind all of this much more intuitive. In markets with network' +
      ' effects, early scale matters enormously, and late entry is structurally difficult even for strong incumbents. That made it easier to understand why traditional banks, despite having customers, capital, and licences, can still be at a disadvantage compared with fintech platforms that moved earlier and built ecosystems faster.\n\n',
  takeaway:
    'Regulation became part of the product story, not a legal footnote.',
  levels: [
    {
      level: 'easy',
      title: 'Easy',
      questions: [
        q('d2-e1', 'What does PSD2 stand for?', ['Payment Services Directive 2', 'Platform Security Directive 2', 'Personal Security Data 2', 'Payment Standards Division 2'], 0, 'PSD2 is the EU\'s second Payment Services Directive, which came into force in September 2019. It mandates banks to open their data and payment infrastructure to licensed third parties via APIs.'),
        q('d2-e2', 'What does AISP stand for?', ['Automated Investment Service Provider', 'Account Information Service Provider', 'Asset Integration and Settlement Platform', 'API Infrastructure Security Protocol'], 1, 'AISPs are authorized to access a customer\'s payment and settlement accounts and provide consolidated account information. Think budgeting apps like Bankin\' or Tink.'),
        q('d2-e3', 'Open Banking allows third parties to access bank data. What does BaaS additionally provide?', ['Only account balance information', 'Access to the full spectrum of banking products via APIs', 'A banking licence to third parties', 'Free infrastructure for startups'], 1, 'Open Banking gives access to data. BaaS goes further, as it provides complete banking processes (loans, payments, deposit accounts) through a licensed bank\'s regulated infrastructure.'),
        q('d2-e4', 'Which regulation is the main driver of Open Banking in Europe?', ['GDPR', 'MiFID II', 'PSD2', 'Basel III'], 2, 'PSD2 required all banks in the EEA to open access to customer account data and payment initiation to licensed third-party providers, creating the legal foundation for Open Banking in Europe.'),
        q('d2-e5', 'Plaid operates as which type of infrastructure?', ['A neobank for consumers', 'A central bank payment processor', 'An API layer connecting financial apps to banks', 'A credit rating agency'], 2, 'Plaid sits between fintech apps and banks, providing a single integration point. Without Plaid, every app would need to connect individually to every bank (8,000 apps × 12,000 banks = 96 million integrations).')
      ]
    },
    {
      level: 'medium',
      title: 'Medium',
      questions: [
        q('d2-m1', 'What is the key difference between a PISP and an AISP?', ['PISPs are regulated, AISPs are not', 'PISPs initiate payments; AISPs aggregate account information', 'AISPs are for businesses, PISPs are for consumers', 'There is no meaningful difference under PSD2'], 1, 'A PISP (Payment Initiation Service Provider) can trigger payments on your behalf directly from your bank account. An AISP (Account Information Service Provider) can read your financial data across multiple banks to provide consolidated views or insights.'),
        q('d2-m2', 'Why did Klarna\'s valuation drop from $46B to $6.7B?', ['They were banned from operating in the EU', 'They lost their banking licence', 'They over-subsidized the consumer side without managing credit risk', 'A major data breach destroyed consumer trust'], 2, 'Klarna offered free Buy Now, Pay Later (BNPL) to consumers (the subsidized side) while charging merchants (the money side). This is classic platform economics, but they mispriced the credit risk embedded in "free." Rising rates exposed this structural imbalance.'),
        q('d2-m3', 'What is "embedded finance"?', ['A bank offering its own mobile app', 'A fintech acquiring a banking licence', 'Financial services integrated directly into non-financial platforms at the point of need', 'Open Banking APIs made available to regulators'], 2, 'Embedded finance means a user never leaves their context (a retailer, a ride-hailing app, a marketplace) to access financial services. Shopify offering merchant loans, Uber offering driver insurance, Amazon offering checkout financing. These are all embedded finance.'),
        q('d2-m4', 'Visa attempted to acquire Plaid for $5.3B. What happened?', ['The deal closed successfully', 'Plaid rejected the offer', 'Regulators blocked it on antitrust grounds', 'Plaid was acquired by Mastercard instead'], 2, 'The DOJ blocked the acquisition in 2021, arguing Visa was trying to eliminate a competitive threat to its payments dominance. Visa subsequently acquired Tink (the European equivalent) for $2.2B instead.'),
        q('d2-m5', 'What does the Open Banking global map show about regulatory approaches?', ['All countries use the same regulatory model', 'Only developed countries have adopted Open Banking', 'Approaches range from fully regulator-driven (UK, EU, Australia) to market-driven (USA), with significant variation in standardization', 'Open Banking is illegal in Asia'], 2, 'The UK and EU are regulator-driven with high standardization. The US is largely market-driven with institution-dependent scope. Countries like Brazil, India, Nigeria, and the UAE have all launched their own frameworks. Open Banking is genuinely global, but far from uniform.')
      ]
    },
    {
      level: 'hard',
      title: 'Harder',
      questions: [
        q('d2-h1', 'From a platform economics perspective, why do Plaid and Tink create "new lock-in" even though PSD2 was designed to break it?', ['They charge prohibitively high fees that prevent switching', 'They lobbied governments to restrict competition', 'Once developers integrate their APIs, switching costs are high', 'They encrypt data in proprietary formats incompatible with competitors'], 2, 'PSD2 broke the bank\'s monopoly on data access. But Plaid/Tink filled that gap and became the new chokepoint. The lock-in moved from the bank relationship to the API middleware layer. Switching costs are now borne by developers, not consumers.'),
        q('d2-h2', 'In the BaaS operating model, what is the core strategic question a bank must answer?', ['Whether to build a consumer app', 'How much to charge for transactions', 'How far along the spectrum from "providing technology" to "full collaboration and co-creation with brands" they want to go', 'Whether to apply for a fintech licence'], 2, 'Banks can participate in embedded finance at different depths. From simply licensing their infrastructure, to full BaaS (technology AND licence), to active B2B2C or B2B2BC collaboration where they co-design products with third-party brands. The deeper the commitment, the higher the business model impact.'),
        q('d2-h3', 'What does the fintech unicorn data reveal about the relationship between speed-to-unicorn and capital efficiency?', ['Faster unicorns always raise more capital', 'All unicorns take 7+ years to reach $1B valuation', 'Some companies achieve unicorn status quickly with relatively little capital (e.g. Transferwise at $90M, Coinbase at $107M), while others burn significantly more, suggesting business model and unit economics matter more than time', 'B2B fintechs are always faster than B2C fintechs'], 2, 'The median time to unicorn was 5.33 years at $246M raised. But the spread is enormous. Brex reached it in 19 months; Pine Labs took over 20 years. Transferwise got there on $90M while Affirm needed ~$750M. Capital efficiency is a function of unit economics, not sector.'),
        q('d2-h4', 'Why are traditional banks structurally disadvantaged in the "late entry" platform game, despite having customers, capital, and licences?', ['Banks are legally prohibited from building digital products', 'Banks lack any technology competence', 'Network effects, scale advantages, and lock-in already favor incumbents (fintech platforms) who moved early', 'Banks cannot obtain the necessary API licences'], 2, 'This is the "Game 4: Late Entry" lesson from the MIT simulation directly mapped to banking. KBC and BNP Paribas have real assets, but Revolut, Plaid, and others built the installed base, the developer ecosystem, and the network effects first. Catching up requires subsidizing aggressively and accepting losses, which is politically and structurally difficult for regulated public institutions.'),
        q('d2-h5', 'Open Finance extends Open Banking to a broader data universe. What is the core strategic tension this creates?', ['It makes regulation impossible to enforce', 'It forces banks to share data they don\'t legally own', 'It risks giving data-rich BigTech platforms (Google, Apple, Amazon) access to the most intimate financial data, potentially turbocharging their existing platform advantages', 'It eliminates the need for banking licences'], 2, 'Open Finance expands data portability to insurance, wealth management, pensions, mortgages, utilities, and healthcare. The intended beneficiary is the consumer. But the practical winner may be whoever has the best data infrastructure and consumer touchpoints already, which points toward BigTech, not traditional banks or even fintechs.')
      ]
    }
  ]
},
    {
  slug: 'day-3',
  dayNumber: 3,
  title: 'Day 3: Blockchain, Bitcoin/Crypto & Stablecoins',
  tag: 'Blockchain, Crypto, Stablecoins',
  intro:
    '**This session changed how we think about blockchain in finance.**\n' +
    'Before, we mostly associated blockchain with crypto markets and speculation. After this session, we see it much' +
      ' more as infrastructure. What mattered most to us was understanding how it can reduce friction in areas where' +
      ' traditional finance is still slow, expensive, and opaque, especially in settlement, securitisation, and lending.\n\n' +
    'Figure was probably the clearest example of that shift. The company did not use blockchain as a buzzword. It' +
      ' used it to make lending faster, cheaper, and more transparent, and that made the technology feel practical' +
      ' rather than ideological. That was an important distinction for us, because it showed that the real value of blockchain is not novelty, but a different cost structure and a better audit trail.\n\n' +
    'We also came away with a more nuanced view of Bitcoin and stablecoins. Bitcoin makes most sense to us not as a' +
      ' competitor to Visa, but as a scarce digital asset with very different properties from traditional money. Stablecoins, on the other hand, feel much closer to everyday financial infrastructure because they combine price stability with instant settlement and programmability.\n\n' +
    'Overall, this session made us think less in terms of “crypto versus traditional finance” and more in terms of' +
      ' which parts of the financial system are vulnerable to being rebuilt with better infrastructure. The biggest shift is not just new products, but the replacement of slow, layered processes with systems that are more transparent, automated, and easier to scale.\n\n',
  takeaway:
    'The real disruption is not crypto hype, but infrastructure that makes finance faster, cheaper, and more transparent.',
  levels: [
    {
      level: 'easy',
      title: 'Easy',
      questions: [
        q('d3-e1', 'What is a blockchain?', ['A type of bank account that uses AI', 'A shared, tamper-proof digital ledger that records transactions', 'A government-issued digital currency', 'A payment app like PayPal'], 1, 'A blockchain is a distributed ledger: a record of transactions shared across many computers, where entries cannot be altered once confirmed.'),
        q('d3-e2', 'What does "immutable" mean in the context of blockchain?', ['The data can be edited by the bank at any time', 'The data is encrypted but can be decoded', 'Once recorded, the data cannot be changed or deleted', 'The data is stored in the cloud'], 2, 'Immutability means blockchain records are permanently sealed using cryptography. No party can go back and alter historical entries without the whole network detecting it.'),
        q('d3-e3', 'What is Bitcoin?', ['A stablecoin pegged to the US dollar', 'A decentralised digital currency with a fixed supply of 21 million coins', 'A blockchain network for home loans', 'A payment system owned by a central bank'], 1, 'Bitcoin is a decentralised cryptocurrency created in 2009. Its supply is capped at 21 million coins, making it resistant to inflation by design.'),
        q('d3-e4', 'What is a stablecoin?', ['A cryptocurrency that fluctuates wildly in value', 'A government savings bond', 'A digital currency designed to maintain a stable value, usually pegged to the US dollar', 'A bank account that earns a fixed interest rate'], 2, 'Stablecoins combine the speed and programmability of crypto with price stability. USDC, for example, is designed to stay worth $1, making it useful for payments and settlement.'),
        q('d3-e5', 'What does "decentralised" mean in finance?', ['Operated by many governments together', 'Controlled by one very large bank', 'Run without a central authority — no single party controls the system', 'Managed exclusively by AI'], 2, 'Decentralised systems remove the need for a trusted central intermediary like a bank or clearinghouse. Rules are enforced by code and consensus instead.')
      ]
    },
    {
      level: 'medium',
      title: 'Medium',
      questions: [
        q('d3-m1', 'What is a smart contract?', ['A legally binding PDF agreement signed digitally', 'Self-executing code on a blockchain that automatically performs actions when conditions are met', 'A contract between two banks managed by a regulator', 'An AI that reviews loan applications'], 1, 'Smart contracts are programs stored on a blockchain that run automatically when predefined conditions are met.'),
        q('d3-m2', 'Why do stablecoins improve financial settlement compared to traditional bank wires?', ['They earn higher interest rates', 'They are regulated by the Federal Reserve', 'They settle instantly, 24/7, including weekends versus 1–3 business days for bank wires', 'They are insured by the FDIC'], 2, 'Traditional bank settlement involves intermediaries and cut-off times. Stablecoin transactions on blockchain can settle in seconds at any time, reducing settlement delay and risk.'),
        q('d3-m3', 'What problem did the 2008 financial crisis reveal about mortgage-backed securities?', ['Banks were charging too little interest', 'Nobody could easily verify what loans were actually inside the bundled products', 'Blockchain was not available to secure the loans', 'Regulators banned all securitisation after 2008'], 1, 'Complex mortgage securities in 2008 were opaque. Investors could not clearly see what was inside them, and toxic loans were hidden in bundles.'),
        q('d3-m4', 'What does "tokenising an asset" mean?', ['Converting physical gold into paper certificates', 'Creating a digital crypto coin to sell to retail investors', 'Creating a blockchain-based digital representation of a real-world asset, like a mortgage or property', 'Printing money using a blockchain'], 2, 'Tokenisation converts real-world assets into digital tokens on a blockchain, making them easier to track, transfer, and program.'),
        q('d3-m5', 'Why did Figure start with HELOCs rather than first mortgages?', ['HELOCs are larger and more profitable than first mortgages', 'Regulators required it', 'HELOCs were underserved, simpler to originate on blockchain, and allowed Figure to prove the model before tackling first mortgages', 'Bitcoin can only be used for second-lien products'], 2, 'HELOCs were a strategic entry point: a less entrenched and simpler market where Figure could prove its blockchain lending model before expanding.')
      ]
    },
    {
      level: 'hard',
      title: 'Harder',
      questions: [
        q('d3-h1', 'A pension fund wants to invest in a pool of mortgages but cannot verify the quality of individual loans. How does blockchain tokenisation solve this problem and what 2008 lesson does this echo?', ['Blockchain encrypts the data so hackers cannot steal it', 'Tokenisation creates an immutable, auditable record of each loan\'s terms, payment history, and ownership, making the pool fully transparent unlike the opaque mortgage-backed securities that contributed to the 2008 crisis', 'Blockchain replaces the need for regulatory oversight', 'The pension fund can use DeFi to avoid the secondary market entirely'], 1, '2008 showed that opacity in securitisation is dangerous. Blockchain creates an immutable audit trail so every loan in a pool can be independently verified.'),
        q('d3-h2', 'Figure uses a "permissioned" blockchain rather than a fully public one like Bitcoin. What is the trade-off, and why is this appropriate for regulated financial products?', ['Permissioned blockchains are faster but have no immutability guarantees', 'Permissioned blockchains sacrifice some decentralisation in exchange for the ability to enforce KYC/AML compliance and regulatory requirements, which are mandatory for lending products', 'Permissioned blockchains are only suitable for cryptocurrency, not real-world assets', 'There is no trade-off — permissioned blockchains are strictly superior to public ones'], 1, 'Financial services cannot operate on a fully anonymous network. A permissioned blockchain keeps transparency and shared records while allowing regulated participation and compliance controls.'),
        q('d3-h3', 'How does the flywheel effect apply to Figure\'s Provenance Blockchain network and what does this mean for competitors trying to enter the same space?', ['More loans on the network create lower rates for Figure itself, not for competitors', 'Each new loan adds liquidity, attracting more investors, lowering rates for borrowers, attracting more partners and creating a self-reinforcing moat that becomes harder for new entrants to replicate as it grows', 'The flywheel only applies to crypto exchanges, not lending platforms', 'The flywheel effect is irrelevant because blockchain networks are interoperable'], 1, 'Network effects in financial infrastructure are powerful. Each added participant makes the platform more valuable, which makes late entry much harder.'),
        q('d3-h4', 'If DeFi protocols were able to directly purchase tokenised mortgages from Figure\'s platform, what would be the impact on mortgage rates for consumers and through what mechanism?', ['Rates would rise because DeFi is riskier than traditional securitisation', 'Rates would fall because global liquidity from DeFi investors competing for yield would compress spreads, and eliminating investment bank intermediaries would reduce issuance costs', 'Rates would be unchanged — DeFi does not affect primary market rates', 'Only wealthy investors would benefit, not ordinary borrowers'], 1, 'When more capital competes for the same assets, yields compress and rates can fall. Removing intermediaries also lowers issuance costs.'),
        q('d3-h5', 'A critic argues that stablecoins are just "crypto in disguise" and introduce regulatory and counterparty risk into financial infrastructure. What is the strongest counter-argument for their use in mortgage settlement?', ['Stablecoins are backed by gold and therefore risk-free', 'Stablecoins are not regulated and therefore cheaper to use', 'Regulated stablecoins backed by US dollar reserves eliminate settlement delay and counterparty risk that exist during the 1–3 day window of traditional bank wires, while operating within regulatory frameworks — the risk they introduce is lower than the risk they remove', 'Stablecoins can be issued by anyone, making them inherently more democratic'], 2, 'Traditional settlement has a real risk window. A regulated stablecoin that settles in seconds can remove that delay and reduce counterparty exposure.')
      ]
    }
  ]
},
{
  slug: 'day-4',
  dayNumber: 4,
  title: 'Day 4: Regulation, Partnerships & the Modular Future of FinTech',
  tag: 'Regulation, Partnerships, Inclusion, BaaS',
  intro:
    '**Thursday made us rethink regulation as part of the business model rather than an external constraint.**\n' +
    'The biggest shift for us was understanding that regulation does not simply slow fintech down. It shapes the routes firms take into the market, the partnerships they form, and the services they are able to offer. That changes how we think about innovation: not as something happening despite regulation, but often through it.\n\n' +
    'This also made partnerships feel much more central. Many fintechs do not win by becoming fully licensed banks themselves, but by combining their technology with the infrastructure and permissions of existing licensed institutions. BaaS made that especially clear because it turns finance into a more modular system, where different players can provide the license, the rails, or the customer interface.\n\n' +
    'Another strong takeaway was that innovation in finance is not only about efficiency. Cases like Nickel showed that fintech can also widen access and reduce exclusion. That gave the session a broader meaning for us: the most valuable models may be the ones that combine usability, regulatory fit, and social relevance.\n\n' +
    'Overall, Thursday made us see the future of financial services as more embedded, more collaborative, and more modular. The firms that succeed will probably not be the ones trying to do everything alone, but the ones that know how to position themselves inside the ecosystem.\n\n',
  takeaway:
    'In fintech, regulation and partnerships do not sit outside innovation. They structure it.',
  levels: [
    {
      level: 'easy',
      title: 'Easy',
      questions: [
        q('d4-e1', 'What makes regulation so influential in FinTech?', ['It determines how financial apps are marketed', 'It shapes what services companies can legally offer', 'It decides which colour a FinTech’s logo must be', 'It applies only to traditional banks'], 1, 'Regulation shapes market entry, permitted activities, and how firms structure their business models.'),
        q('d4-e2', 'Why do many FinTechs avoid applying for a full banking license?', ['It requires little documentation', 'It takes several years and is highly complex', 'It is cheaper than other licenses', 'Startups are legally forbidden to apply'], 1, 'A full banking license can take years to obtain and involves major complexity, cost, and supervisory scrutiny.'),
        q('d4-e3', 'What does Nickel’s model primarily demonstrate?', ['High frequency trading strategies', 'Financial inclusion through simple, accessible services', 'Advanced investment algorithms', 'Luxury banking features for wealthy clients'], 1, 'Nickel shows how fintech can improve access to basic financial services for users who are often underserved.'),
        q('d4-e4', 'What do clients generally expect from modern financial services?', ['Complex regulatory explanations', 'Ease, transparency, and reliability', 'Long processing times', 'Manual paperwork'], 1, 'From the user perspective, financial services are expected to be simple, trustworthy, and easy to use.')
      ]
    },
    {
      level: 'medium',
      title: 'Medium',
      questions: [
        q('d4-m1', 'Why is financial inclusion becoming a strategic priority in FinTech?', ['It reduces app development costs', 'It helps reach underserved users who can benefit significantly from accessible financial services', 'It increases hardware sales', 'It eliminates regulatory reporting'], 1, 'Inclusion is not only socially valuable, it can also open large underserved markets and build long term trust.'),
        q('d4-m2', 'What is a key strategic difference between applying for a banking license and using a BaaS model?', ['Banking licenses are faster and cheaper than BaaS', 'BaaS offers rapid market entry by leveraging an existing institution’s license', 'BaaS requires more capital than a banking license', 'Banking licenses are typically required for simple payment functions'], 1, 'BaaS lets firms move faster by relying on regulated infrastructure that already exists, rather than building it all themselves.'),
        q('d4-m3', 'How does regulation shape innovation in FinTech?', ['By restricting the creation of any new technology', 'By defining the boundaries within which FinTechs must design models, often pushing them to partner or specialize', 'By eliminating all competition in the market', 'By making financial services identical across companies'], 1, 'Regulation channels innovation by shaping which models are viable and which partnerships are necessary.'),
        q('d4-m4', 'Why do BaaS and partnership models contribute to modular financial services?', ['They allow companies to combine licenses, technology, and distribution into tailored service stacks', 'They eliminate the need for digital infrastructure', 'They require companies to become fully regulated banks', 'They restrict FinTechs from integrating with other platforms'], 0, 'Modularity comes from separating the regulated core, the technology layer, and the customer facing experience.')
      ]
    },
    {
      level: 'hard',
      title: 'Hard',
      questions: [
        q('d4-h1', 'In the future, how are financial services expected to evolve?', ['They will become offline only', 'They will become more embedded into everyday, non financial platforms', 'They will only be available through physical branches', 'They will stop using technology'], 1, 'A major direction in fintech is embedded finance, where services appear inside broader digital experiences rather than as standalone products.'),
        q('d4-h2', 'What overall theme ties together licensing, partnerships, regulation, and inclusion in FinTech?', ['FinTech is mainly about designing mobile apps', 'FinTech is an interconnected system where business models depend on collaboration and regulatory frameworks', 'FinTech operates independently from legal requirements', 'FinTech removes the need for banks entirely'], 1, 'The session points toward fintech as an ecosystem shaped by rules, infrastructure, cooperation, and access.')
      ]
    }
  ]
},
  {
  slug: 'day-5',
  dayNumber: 5,
  title: 'Day 5: Agricultural Finance, Inclusion & Sector-Specific FinTech',
  tag: 'Agricultural Finance, Inclusion, Data, Risk',
  intro:
    '**Friday made us look at fintech through a much broader lens than consumer apps and digital payments.**\n' +
    'What stayed with us most is that fintech becomes especially powerful when it is applied to sectors where traditional finance struggles to operate well. Agricultural finance is a clear example of that. The problem is not a lack of importance, but a lack of fit between conventional banking models and the realities of seasonality, informality, fragmented value chains, and limited collateral.\n\n' +
    'This shifted our view of innovation. Fintech is not only about making finance faster or more convenient for already well-served users. It can also make finance possible in places where it has historically been too costly, too risky, or too rigid. Using alternative data, digital platforms, and stronger information flows across value chains changes how risk can be understood and priced.\n\n' +
    'Another important idea for us was that technology alone is not enough. Better tools help, but scalable progress depends on trust, local adoption, and collaboration between banks, fintechs, governments, and other actors in the ecosystem. That makes agricultural finance a useful reminder that the hardest financial problems are often not purely technical.\n\n' +
    'Overall, Friday reinforced the idea that the real promise of fintech lies in expanding access and improving resilience, not just digitising existing products. The strongest solutions are likely to be the ones that combine innovation with inclusion, sector knowledge, and partnerships strong enough to work in practice.\n\n',
  takeaway:
    'Fintech matters most when it makes finance workable in places where traditional models struggle.',
  levels: [
    {
      level: 'easy',
      title: 'Easy',
      questions: [
        q('d5-e1', 'What is financial inclusion?', ['Limiting financial services to large companies', 'Providing access to financial services for everyone', 'Increasing interest rates', 'Reducing bank branches'], 1, 'Financial inclusion means making useful and affordable financial services accessible to a broader population.'),
        q('d5-e2', 'What is a key characteristic of Rabobank as a financial institution?', ['It is owned by private shareholders', 'It is a government-owned bank', 'It is a cooperative owned by its members', 'It only operates in developing countries'], 2, 'Rabobank is known for its cooperative structure, which shapes its governance and long-term orientation.'),
        q('d5-e3', 'Which global challenges directly impact agricultural systems?', ['Financial inclusion for farmers, food security, geopolitical developments, and climate change', 'Digital marketing, e-commerce growth, and urbanization', 'Industrial automation and manufacturing efficiency', 'Tourism development and infrastructure'], 0, 'Agriculture is directly affected by systemic pressures such as climate change, food security demands, and geopolitical instability.'),
        q('d5-e4', 'What percentage of global food supply is produced by smallholder farmers?', ['10%', '20%', '30%', '50%'], 3, 'Smallholder farmers produce a very large share of the global food supply, which makes their access to finance strategically important.'),
        q('d5-e5', 'What is expected to happen to global food demand by 2050?', ['It will decrease', 'It will remain stable', 'It will increase by 70%', 'It will double completely'], 2, 'The expected rise in food demand makes agricultural productivity and financing even more important.')
      ]
    },
    {
      level: 'medium',
      title: 'Medium',
      questions: [
        q('d5-m1', 'What is the expected global population to feed by 2050?', ['7 billion', '8 billion', '9 billion', '10 billion'], 3, 'The scale of future food demand is closely tied to population growth expectations around 10 billion people.'),
        q('d5-m2', 'What is a typical characteristic of smallholder farms?', ['High income', 'Highly mechanized', 'Low income', 'Export-focused'], 2, 'Smallholder farms often operate with lower incomes, fewer formal records, and more limited access to formal finance.'),
        q('d5-m3', 'Which type of farms typically has secured access to finance?', ['Smallholder farms', 'Large farms', 'Informal farms', 'Subsistence farms'], 1, 'Large farms tend to have more formal structures, collateral, and documented cash flows, making them easier for banks to finance.'),
        q('d5-m4', 'What is a key limitation of traditional financial systems in agriculture?', ['Too much flexibility', 'Inability to serve informal and small-scale farmers effectively', 'Too much data availability', 'Too many tailored products'], 1, 'Traditional finance often struggles with agricultural clients because their realities do not fit standard lending models well.'),
        q('d5-m5', 'What do banks typically prefer when giving loans?', ['Unpredictability', 'Stability', 'Informality', 'Variability'], 1, 'Banks prefer stable and predictable borrowers because that makes credit assessment and risk pricing easier.')
      ]
    },
    {
      level: 'hard',
      title: 'Hard',
      questions: [
        q('d5-h1', 'How can fintech help address the issue of lack of collateral?', ['By increasing collateral requirements', 'By using alternative data for credit assessment', 'By eliminating loans', 'By reducing transparency'], 1, 'Alternative data can help lenders assess repayment capacity even when formal collateral is weak or absent.'),
        q('d5-h2', 'Why are agricultural clients often less attractive to traditional banks?', ['They are too stable', 'They combine multiple risk factors such as seasonality, informality, and lack of collateral', 'They have too much data', 'They are highly predictable'], 1, 'Agricultural clients often face overlapping risks that make them harder to serve through conventional banking models.'),
        q('d5-h3', 'What is meant by diversification in agricultural finance?', ['Focusing on one sector only', 'Spreading risk across different sectors and value chain players', 'Eliminating risk', 'Reducing investment'], 1, 'Diversification helps reduce concentration risk by spreading exposure across different activities and participants.'),
        q('d5-h4', 'Why is fintech particularly useful in agricultural value chains?', ['Because agriculture is fully predictable', 'Because fintech can connect different actors and improve data flow across the chain', 'Because it eliminates the need for markets', 'Because it reduces production'], 1, 'Fintech can strengthen coordination and visibility across value chains, which improves financing decisions and risk assessment.')
      ]
    }
  ]
}
];
