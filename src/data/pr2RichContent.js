/** Auto-synced rich single-page content for PR2 */

function richService({ slug, title, shortDescription, order, imageUrl, intro, who, includes, process, outcomes, image1, image2, image3, close }) {
  return {
    id: order,
    slug,
    title,
    shortDescription,
    order,
    imageUrl,
    content: `
      <p>${intro}</p>
      <p><img src="${image1}" alt="" /></p>
      <h2>Who it is for</h2>
      <p>${who}</p>
      <h2>What is included</h2>
      <ul>${includes.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p><img src="${image2}" alt="" /></p>
      <h2>How the work usually runs</h2>
      <p>${process}</p>
      <h2>What you should expect</h2>
      <ul>${outcomes.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p><img src="${image3}" alt="" /></p>
      <p>${close}</p>
    `,
  }
}

export const richPosts = [
  {
    slug: 'how-sponsored-features-support-market-entry',
    title: 'How sponsored features support market entry',
    excerpt: 'A practical look at using editorial placements when launching in a new country.',
    postType: 'pr-marketing',
    featured: true,
    coverUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Sponsored features work best when they educate buyers and introduce proof points, not just slogans. When you enter a new market, local readers need context: who you are, why you matter here, and what evidence supports the claim.</p>
      <p>Too many launch campaigns lead with a global brand line that sounds identical in every country. Local editors and buyers notice. They want a reason the story belongs in their market this quarter, not a recycled headquarters announcement.</p>
      <img src="${'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Why editorial placements help launches</h2>
      <p>A well-built feature gives partners something durable to forward. Paid ads may create a burst of awareness, but a permanent company story keeps working after the launch window closes. Sales teams, distributors and investors all benefit from one clear page.</p>
      <p>Sponsored placements also let you control timing. You can publish alongside a trade show, a warehouse opening or a first customer win, then keep the URL live for months.</p>
      <ul>
        <li>Explain the local problem you solve</li>
        <li>Show proof from early customers or pilots</li>
        <li>Introduce leadership with a short interview</li>
        <li>Localise tone without rewriting your whole brand</li>
        <li>Add one image that feels local, not generic HQ stock</li>
      </ul>
      <h2>A launch sequence that holds up</h2>
      <p>Start with a market brief: who the buyer is, which objections appear most often, and which proof you can share publicly. Draft the sponsored feature around that brief. Pair it with a company profile so curious readers can dig deeper without booking a call first.</p>
      <img src="${'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>What to prepare before you publish</h2>
      <p>Translated boilerplate, regional photos, approved quotes and one clear metric or customer outcome. If a figure only applies in one country, say so. Credibility travels further than inflated reach numbers.</p>
      <p>At PR2, we pair market-entry angles with permanent company features so your story stays discoverable. Use the campaign to drive attention, then let the feature page carry the detail long after the ads stop.</p>
      <img src="${'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <p>If you are planning a cross-border launch in the next quarter, treat editorial assets as part of the launch checklist, not an optional extra after the booth is booked.</p>
    `,
    seoTitle: 'Sponsored features for market entry | PR2',
    seoDescription: 'PR insight on sponsored content for international launches.',
  },
  {
    slug: 'interview-export-director-on-trade-press',
    title: 'Interview: an export director on trade-press timing',
    excerpt: 'When to pitch, what editors want, and how to keep claims verifiable across markets.',
    postType: 'interview',
    featured: true,
    coverUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>We spoke with an export director who has opened routes across Europe and the Middle East about when trade press actually helps, and when it wastes time. The conversation kept returning to one idea: relevance beats volume.</p>
      <p>"Editors care about relevance in their region," the export director said. "Local proof beats global slogans. If I cannot show why this market should care this month, I wait."</p>
      <img src="${'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Timing the pitch</h2>
      <p>Pitch before a trade show if you have a concrete announcement. Pitch after a successful pilot if you have numbers. Avoid pitching during holidays or when you only have a vague expansion plan and a logo refresh.</p>
      <p>The director's team keeps a simple calendar: product milestones, exhibition dates, partner signings and local hiring. Publicity sits on that calendar, not in a separate "comms wishlist".</p>
      <h2>What editors ask for</h2>
      <ul>
        <li>A clear regional angle</li>
        <li>Named proof or a customer story you can stand behind</li>
        <li>High-quality images of people or operations</li>
        <li>Contact details that reply quickly</li>
        <li>Claims that survive a second market's scrutiny</li>
      </ul>
      <img src="${'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Keeping claims honest across borders</h2>
      <p>Keep claims verifiable across markets. If a figure only applies in one country, say so. If a customer cannot be named, describe the sector and outcome without inventing logos. Credibility compounds; exaggeration does the opposite.</p>
      <p>For exporters building a newsroom presence on PR2, the lesson is practical: publish fewer, clearer stories timed to real moments, then keep those pages live for partners to share.</p>
      <img src="${'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'}" alt="" />
    `,
    seoTitle: 'Export director interview | PR2',
    seoDescription: 'Interview on trade-press timing for exporters.',
  },
  {
    slug: 'five-signals-buyers-trust-in-new-markets',
    title: 'Five trust signals buyers look for in new markets',
    excerpt: 'Case studies, leadership visibility, local partners, compliance clarity and consistent URLs.',
    postType: 'industry-insight',
    featured: true,
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>International buyers research quietly. Before they reply to an email or take a meeting, they look for signals that your company is real, stable and worth the risk of a new supplier relationship.</p>
      <p>That research rarely looks dramatic. It is a handful of tabs: your website, a company feature, a leadership interview, a partner mention, and whatever a colleague forwarded last week.</p>
      <img src="${'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>The five signals</h2>
      <ul>
        <li>Case studies with outcomes, not just logos</li>
        <li>Leadership visibility through interviews or profiles</li>
        <li>Named local partners or distributors</li>
        <li>Clear compliance and delivery language</li>
        <li>Consistent, permanent URLs for company stories</li>
      </ul>
      <h2>Why permanent pages matter</h2>
      <p>Permanent company features and news posts give buyers something credible to share internally. A PDF in someone's inbox ages badly. A live page can be updated, linked and trusted by the next person in the chain.</p>
      <p>Buyers also notice inconsistency. If your LinkedIn story, website copy and published feature disagree on what you sell, trust drops even if every claim is partly true.</p>
      <img src="${'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>How to build the signals without a huge team</h2>
      <p>Start with one strong company feature, one leadership interview and one proof-led news update. Add partner mentions as relationships mature. Keep language plain enough for a non-specialist colleague to forward.</p>
      <img src="${'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <p>If you are expanding abroad, treat trust content as part of market entry, not an afterthought. The brands that win quiet research cycles usually look organised long before the first sales call.</p>
    `,
    seoTitle: 'Trust signals in new markets | PR2',
    seoDescription: 'What buyers look for when evaluating overseas suppliers.',
  },
]

export const richArticles = [
  {
    slug: 'aurora-tech-enters-european-markets',
    title: 'Aurora Tech enters European B2B markets',
    excerpt: 'A SaaS firm using founder-led storytelling to win partners across the EU.',
    companyName: 'Aurora Tech',
    companyDescription: 'Cloud workflow software for mid-market operations teams that need clearer handovers across tools, teams and countries.',
    location: 'Dublin & London',
    featured: true,
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    background: `
      <p>Founded in 2018, Aurora began as a UK operations toolkit before opening EU sales. Early customers were mid-market teams drowning in manual handovers between tools, with SLAs that lived in spreadsheets nobody trusted.</p>
      <p>The company kept engineering in Dublin and London while building local partner relationships that could explain the product in regional language and context. That dual structure let Aurora move carefully rather than announcing "Europe" as a single market.</p>
      <p>By the time the first continental partners signed, Aurora already had customer outcomes and founder interviews ready to share, which shortened diligence conversations.</p>
    `,
    productsServices: `
      <ul>
        <li>Workflow automation for operations teams</li>
        <li>Analytics dashboards and reporting</li>
        <li>Partner integrations across common business tools</li>
        <li>Onboarding support for multi-country rollouts</li>
        <li>Training packs for local implementation partners</li>
      </ul>
    `,
    content: `
      <p>Aurora Tech expanded into Europe with localised messaging and trade-press features that explained outcomes, not just features. Buyers in new markets needed proof that the product worked for teams like theirs, in languages and operating contexts they recognised.</p>
      <img src="${'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Story before features</h2>
      <p>Founder-led interviews introduced the problem first: slow handovers, missed SLAs and fragile spreadsheets. Only then did Aurora show product screens and integrations. Partners said this sequence made demos easier because prospects arrived already agreeing on the pain.</p>
      <p>That approach also helped Aurora avoid sounding like every other SaaS launch. The story was operational and specific, which travelled better across trade press than a list of modules.</p>
      <h2>What changed in the first markets</h2>
      <p>Local partners used the published company feature as a leave-behind. Instead of rebuilding slides for every introduction, they shared one permanent URL and followed up with a short call. Aurora tracked branded search and partner-referred demos as leading indicators.</p>
      <img src="${'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Lessons for other exporters</h2>
      <p>Prepare proof early. Localise tone without inventing a new brand. Keep a living company page that partners can trust. Aurora continues to publish market-entry updates on PR2 so prospects in each country have somewhere solid to land before meetings.</p>
      <img src="${'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'}" alt="" />
    `,
    seoTitle: 'Aurora Tech European expansion | PR2',
    seoDescription: 'Company feature on Aurora Tech international growth.',
  },
  {
    slug: 'summit-trade-cross-border-logistics',
    title: 'Summit Trade strengthens cross-border logistics',
    excerpt: 'How a freight forwarder built trust with exporters through clear service stories.',
    companyName: 'Summit Trade',
    companyDescription: 'International freight and customs brokerage helping exporters move goods between the UK and European routes with fewer surprises.',
    location: 'Rotterdam / UK',
    featured: true,
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    background: `
      <p>Summit Trade grew from a UK-facing brokerage into a cross-border partner with a strong Rotterdam presence. Exporters wanted fewer surprises at customs and clearer timelines on European routes after years of shifting paperwork rules.</p>
      <p>The team documented processes carefully so new clients could understand lane choices without needing a logistics degree. That documentation later became the backbone of Summit's public feature content.</p>
    `,
    productsServices: `
      <ul>
        <li>International freight forwarding</li>
        <li>Customs brokerage and documentation</li>
        <li>UK to EU and EU to UK lanes</li>
        <li>Exporter advisory for first-time market entry</li>
        <li>Exception handling and proactive status updates</li>
      </ul>
    `,
    content: `
      <p>Summit Trade combined operational detail with customer case studies to attract exporters seeking reliable European routes. Trust came from explaining the hard parts, not hiding them behind vague promises of "seamless" delivery.</p>
      <img src="${'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Proof exporters can share</h2>
      <p>Published features outline how Summit handles documentation, peak congestion and exception management. That content now sits in partner decks and onboarding packs. New clients arrive with fewer basic questions and clearer expectations.</p>
      <p>Operations managers also use the public pages internally. When a stakeholder asks why a lane costs more in peak season, the team can point to plain-language explanations rather than improvising.</p>
      <img src="${'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Building a calm public presence</h2>
      <p>Summit avoided hype. The feature tone matches the service: precise, practical and honest about constraints. For companies entering new markets, Summit's PR2 profile is a practical reference for what dependable cross-border logistics looks like when explained well.</p>
      <img src="${'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80'}" alt="" />
    `,
    seoTitle: 'Summit Trade company feature | PR2',
    seoDescription: 'Business promotion article for Summit Trade.',
  },
  {
    slug: 'lumen-health-clinic-network',
    title: 'Lumen Health scales a multi-country clinic network',
    excerpt: 'A healthcare group promoting services with interviews and careful, compliant messaging.',
    companyName: 'Lumen Health',
    companyDescription: 'Private clinic network focused on diagnostics and outpatient care, expanding carefully across cities with clear patient information.',
    location: 'International',
    featured: true,
    coverUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    background: `
      <p>Lumen Health operates private clinics focused on diagnostics and outpatient care. Expansion into new cities required careful messaging: clear enough for patients, precise enough for clinical partners, and cautious enough for compliance review.</p>
      <p>Leadership interviews became a core part of how the group introduced itself without overstating outcomes. Every public claim is reviewed before it appears on a permanent page.</p>
    `,
    productsServices: `
      <ul>
        <li>Diagnostics and outpatient care</li>
        <li>Multi-country clinic operations</li>
        <li>Patient information and service explainers</li>
        <li>Partnership pathways for local clinicians</li>
        <li>City launch communications packs</li>
      </ul>
    `,
    content: `
      <p>Lumen Health used leadership interviews and service explainers to build recognition in new cities. The tone stays calm and factual, which matters in healthcare promotion where trust is fragile and exaggeration is costly.</p>
      <img src="${'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>Visibility without hype</h2>
      <p>Each market launch includes a company feature, a clinician interview and clear service pages. Claims are reviewed before publication so local teams can share them confidently with patients and partners.</p>
      <p>The group also keeps imagery consistent: real clinics, real teams, restrained colour. The visual language reinforces the same message as the copy.</p>
      <img src="${'https://images.unsplash.com/photo-1631217868264-e5b90bb7e629?auto=format&fit=crop&w=1400&q=80'}" alt="" />
      <h2>A reusable launch pattern</h2>
      <p>Once the first city launch pack worked, Lumen reused the structure elsewhere: background, services, leadership voice, then local detail. The permanent profile on PR2 gives patients and partners a consistent place to learn what Lumen offers as the network grows.</p>
      <img src="${'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80'}" alt="" />
    `,
    seoTitle: 'Lumen Health profile | PR2',
    seoDescription: 'Company profile for Lumen Health.',
  },
]

const richServicesRaw = [
  richService({
    slug: 'public-relations',
    title: 'Public relations & publicity',
    shortDescription: 'Media relationships and coverage that introduce your company to new markets.',
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    intro: 'We pitch relevant outlets and manage relationships that keep your brand in the conversation internationally. Each market needs a local reason to care, so we build angles around proof, timing and regional relevance rather than a single global slogan.',
    who: 'Exporters and global brands entering or deepening presence in new countries, especially teams that need introductions without guessing which outlets matter.',
    includes: ['Market-specific story angles', 'Outlet mapping by region', 'Spokesperson support', 'Coverage reuse into lasting features', 'Follow-up recommendations after pickup'],
    process: 'We start with your commercial goal and the markets that matter this quarter. From there we shape a shortlist of angles, gather proof, prepare spokespeople and pitch with clear local relevance. When coverage lands, we turn it into durable assets on PR2.',
    outcomes: ['Stronger introductions in target markets', 'Reusable coverage assets', 'Clearer public narrative for partners', 'A calendar of publicity tied to real milestones'],
    image1: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    close: 'International PR succeeds when proof is local and the story is easy for partners to forward. That is the standard we work to.',
  }),
  richService({
    slug: 'market-entry-pr',
    title: 'Market entry & localisation',
    shortDescription: 'Messaging, proof points and local press when you expand into a new country.',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    intro: 'Position your offer for local buyers and editors, with language, compliance tone and regional angles included. Market entry fails when the story still sounds imported.',
    who: 'Companies launching in a new country and needing messaging that travels without losing accuracy or trust.',
    includes: ['Localised messaging and boilerplate', 'Proof-point selection by market', 'Local press and partner introductions', 'Permanent feature for the new market', 'Launch timing advice'],
    process: 'We review what already exists, identify what needs localising, and rebuild the public narrative around the buyer in that market. Then we publish a durable feature and support short-term launch publicity around it.',
    outcomes: ['Messaging that sounds local', 'A shareable market-entry page', 'Fewer awkward first meetings', 'Press and partner materials that match'],
    image1: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    close: 'We help you sound native without rewriting your whole brand from scratch.',
  }),
  richService({
    slug: 'business-promotion',
    title: 'Business promotion features',
    shortDescription: 'Long-form company profiles with permanent, shareable URLs.',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    intro: 'Editorial features covering background, products, contacts and SEO for discovery across borders. One strong page beats a folder of ageing PDFs.',
    who: 'International teams that need a durable company story for buyers, partners and internal stakeholders.',
    includes: ['Company profile drafting', 'Imagery and contact details', 'Cross-border SEO basics', 'Shareable permanent URL', 'Updates when the story changes'],
    process: 'We collect your background, offers, proof and images, then shape a feature that reads clearly to a first-time visitor. After publication, the page becomes the default link in outreach and partner packs.',
    outcomes: ['A permanent company URL', 'Cleaner partner introductions', 'Stronger first impression online', 'Less time rebuilding slides'],
    image1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1542744173-8e2bd585f281?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    close: 'Your feature becomes the default link when someone asks who you are.',
  }),
  richService({
    slug: 'press-releases',
    title: 'Press releases',
    shortDescription: 'Newsworthy releases written for editors and international distribution.',
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    intro: 'Launches, funding, partnerships and milestones drafted for pickup in trade and regional press. Clarity travels better than hype across borders.',
    who: 'Teams announcing news that must land cleanly in more than one market.',
    includes: ['Release drafting for trade and regional press', 'Quote coordination', 'Distribution planning by market', 'Conversion into newsroom posts', 'Asset checklist for editors'],
    process: 'We isolate the newsworthy point, gather quotes and facts, draft for editors, and plan where the release should travel. Afterwards we convert the announcement into a lasting newsroom page.',
    outcomes: ['Cleaner announcements', 'Faster editor responses', 'A public record you can reuse', 'Less rework between markets'],
    image1: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=80',
    close: 'We keep language precise so editors in different regions can trust the facts.',
  }),
  richService({
    slug: 'sponsored-articles',
    title: 'Sponsored articles',
    shortDescription: 'Paid placements that still read like useful journalism.',
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    intro: 'Sponsored content that educates buyers while promoting your offer responsibly. Useful first, commercial second.',
    who: 'Brands funding placements in new markets without sounding like an advert dressed as news.',
    includes: ['Angle and brief development', 'Editorial-style writing', 'Local proof where available', 'Clear sponsorship labelling', 'Visual recommendations'],
    process: 'We open with the reader problem, teach something practical, then introduce your offer with honest labelling. The finished piece should still make sense if someone shares it months later.',
    outcomes: ['Higher completion rates', 'Stronger trust than brochure copy', 'A reusable educational asset', 'Clear commercial framing without hard sell'],
    image1: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80',
    close: 'Readers finish pieces that teach them something, even when the placement is paid.',
  }),
  richService({
    slug: 'company-profiles',
    title: 'Profiles & leadership interviews',
    shortDescription: 'Founder and executive interviews that humanise your brand abroad.',
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    intro: 'Interview-led features that highlight expertise, culture and customer outcomes. Leadership visibility builds trust faster than logos alone.',
    who: 'Founders and executives introducing themselves to new markets or refreshing a public leadership story.',
    includes: ['Interview planning', 'Editing and approvals', 'Portrait guidance', 'Publication alongside company features', 'Quote packs for partners'],
    process: 'We prepare questions around buyer concerns, run the interview, edit for clarity, and publish with strong imagery. Approved quotes can then travel into decks and releases.',
    outcomes: ['A human public face for the brand', 'Reusable leadership quotes', 'Better partner confidence', 'A natural companion to the company feature'],
    image1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    close: 'A good interview gives buyers a person to trust before the first call.',
  }),
  richService({
    slug: 'trade-event-publicity',
    title: 'Trade shows & event publicity',
    shortDescription: 'Pre-event buzz, on-site stories and follow-up coverage for exhibitions.',
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    intro: 'Plan announcements, media invites and post-show features around your exhibition calendar. Events create moments; publicity makes them last.',
    who: 'Exhibitors who want more from a stand than a stack of business cards and a quiet follow-up week.',
    includes: ['Pre-event announcement planning', 'On-site story capture guidance', 'Follow-up features and releases', 'Asset reuse after the show', 'Meeting-invite messaging support'],
    process: 'Before the show we shape the announcement and invite list. During the event we help you capture usable stories. Afterwards we publish follow-up content so conversations continue.',
    outcomes: ['More purposeful meetings', 'Content that outlives the booth', 'Clearer post-show outreach', 'A public record of the appearance'],
    image1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    close: 'We help you arrive with a story and leave with content that keeps working.',
  }),
  richService({
    slug: 'digital-pr',
    title: 'Digital PR & brand awareness',
    shortDescription: 'Online campaigns that grow mentions, backlinks and branded search.',
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    intro: 'Combine content, outreach and digital distribution for lasting international awareness. Digital PR connects editorial work to discoverability.',
    who: 'Teams that need visibility beyond a single market homepage or one-off campaign burst.',
    includes: ['Discovery-led content planning', 'Outreach for mentions', 'Asset packaging', 'Visibility review', 'Recommendations for the next cycle'],
    process: 'We identify the stories most likely to earn attention, package them for outreach, and make sure durable pages exist for people to land on. Then we review what moved and what to amplify.',
    outcomes: ['Stronger branded discovery', 'More useful mentions', 'Assets that compound over time', 'Less reliance on one-off bursts'],
    image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80',
    close: 'Durable pages and smart outreach beat short-lived bursts of noise.',
  }),
  richService({
    slug: 'media-monitoring',
    title: 'Media monitoring & reporting',
    shortDescription: 'Track coverage, sentiment and competitor mentions across target markets.',
    order: 9,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    intro: 'Regular reporting so teams see what landed, where, and what to amplify next. Monitoring turns publicity into a learning loop instead of a guessing game.',
    who: 'Marketing and leadership teams managing reputation across multiple markets.',
    includes: ['Coverage tracking by market', 'Competitor mention summaries', 'Sentiment snapshots', 'Recommendations for follow-up', 'Shareable leadership summaries'],
    process: 'We define the markets and topics that matter, track what appears, and report in plain language. Each cycle ends with practical next steps, not just a spreadsheet dump.',
    outcomes: ['Clearer view of what works', 'Faster response to opportunities', 'Better planning for the next quarter', 'Less surprise around competitor noise'],
    image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    close: 'You cannot improve what you cannot see across borders.',
  }),
  richService({
    slug: 'campaigns',
    title: 'Advertising & promotional campaigns',
    shortDescription: 'Integrated programmes blending PR, content and paid reach.',
    order: 10,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    intro: 'Multi-channel campaigns planned around commercial goals and measurable visibility. Paid reach works harder when editorial assets are ready first.',
    who: 'International brands coordinating launches or market pushes across PR, content and paid channels.',
    includes: ['Goal and audience definition', 'Core narrative and assets', 'Channel mix planning', 'Visibility reporting', 'Post-campaign asset handover'],
    process: 'We lock the commercial goal, build the core story and creative assets, then plan which channels carry which part of the message. Reporting focuses on visibility and usefulness, not vanity alone.',
    outcomes: ['A coherent multi-channel push', 'Stronger assets after the spend', 'Clearer learning for the next campaign', 'Less fragmented messaging'],
    image1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    image2: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    image3: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    close: 'Campaigns should leave you with stronger company stories, not only spend reports.',
  }),
]

export const richServices = richServicesRaw
