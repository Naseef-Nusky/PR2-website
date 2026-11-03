import { siteConfig } from '../config/site'
import { richPosts, richArticles, richServices } from './pr2RichContent'

const brand = siteConfig.name

function mergeBySlug(base, rich) {
  const map = Object.fromEntries(rich.map((item) => [item.slug, item]))
  return base.map((item, index) => {
    const extra = map[item.slug]
    if (!extra) return item
    return {
      ...item,
      ...extra,
      id: item.id ?? index + 1,
      industry: item.industry,
      category: item.category,
      seoTitle: extra.seoTitle || item.seoTitle,
      seoDescription: extra.seoDescription || item.seoDescription,
    }
  })
}

export const fallbackHomepage = {
  heroTitle: siteConfig.headline,
  heroSubtitle:
    'Market-entry PR, trade stories, company features and multi-channel campaigns for brands growing beyond one country.',
  intro: `${brand} is built for international promotion. Alongside company features and news, we offer a wider service set (localisation, trade-event publicity, media monitoring and campaign programmes) so exporters and global brands can earn visibility where it matters.`,
  servicesIntro:
    'A fuller international toolkit: classic PR plus market entry, localisation, events, monitoring and paid amplification.',
  ctaTitle: 'Ready for cross-border promotion?',
  ctaText:
    'Tell us your markets, company background and the services you need. Submissions are reviewed before any publication.',
  ctaButtonLabel: 'Start an enquiry',
}

const baseArticles = [
  {
    id: 1,
    slug: 'aurora-tech-enters-european-markets',
    title: 'Aurora Tech enters European B2B markets',
    excerpt: 'A SaaS firm using founder-led storytelling to win partners across the EU.',
    companyName: 'Aurora Tech',
    companyDescription: 'Cloud workflow software for mid-market operations teams.',
    location: 'Dublin & London',
    featured: true,
    industry: { name: 'Technology', slug: 'technology' },
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    content: `
      <p>Aurora Tech expanded into Europe with localised messaging and trade-press features that explained outcomes, not just features. Buyers in new markets needed proof that the product worked for teams like theirs.</p>
      <p><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Story before features</h2>
      <p>Founder-led interviews introduced the problem first: slow handovers, missed SLAs and fragile spreadsheets. Only then did Aurora show product screens and integrations.</p>
      <p>That sequence helped partners share a coherent narrative instead of a feature list that felt the same as every other SaaS pitch.</p>
      <p><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Aurora continues to publish market-entry updates on ${brand} so prospects in each country have a permanent page to review before meetings.</p>
    `,
    background: `
      <p>Founded in 2018, Aurora began as a UK operations toolkit before opening EU sales. Early customers were mid-market teams drowning in manual handovers between tools.</p>
      <p>The company kept engineering in Dublin and London while building local partner relationships that could explain the product in regional language and context.</p>
    `,
    productsServices: `
      <ul>
        <li>Workflow automation for operations teams</li>
        <li>Analytics dashboards and reporting</li>
        <li>Partner integrations across common business tools</li>
        <li>Onboarding support for multi-country rollouts</li>
      </ul>
    `,
    seoTitle: `Aurora Tech European expansion | ${brand}`,
    seoDescription: 'Company feature on Aurora Tech international growth.',
  },
  {
    id: 2,
    slug: 'summit-trade-cross-border-logistics',
    title: 'Summit Trade strengthens cross-border logistics',
    excerpt: 'How a freight forwarder built trust with exporters through clear service stories.',
    companyName: 'Summit Trade',
    companyDescription: 'International freight and customs brokerage.',
    location: 'Rotterdam / UK',
    featured: true,
    industry: { name: 'Logistics', slug: 'logistics' },
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    content: `
      <p>Summit Trade combined operational detail with customer case studies to attract exporters seeking reliable European routes. Trust came from explaining the hard parts, not hiding them.</p>
      <p><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Proof exporters can share</h2>
      <p>Published features outline how Summit handles documentation, peak congestion and exception management. That content now sits in partner decks and onboarding packs.</p>
      <p><img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>For companies entering new markets, Summit's ${brand} feature is a practical reference for what dependable cross-border logistics looks like in plain language.</p>
    `,
    background: `
      <p>Summit Trade grew from a UK-facing brokerage into a cross-border partner with a strong Rotterdam presence. Exporters wanted fewer surprises at customs and clearer timelines on European routes.</p>
      <p>The team documented processes carefully so new clients could understand lane choices without needing a logistics degree.</p>
    `,
    productsServices: `
      <ul>
        <li>International freight forwarding</li>
        <li>Customs brokerage and documentation</li>
        <li>UK to EU and EU to UK lanes</li>
        <li>Exporter advisory for first-time market entry</li>
      </ul>
    `,
    seoTitle: `Summit Trade company feature | ${brand}`,
    seoDescription: 'Business promotion article for Summit Trade.',
  },
  {
    id: 3,
    slug: 'lumen-health-clinic-network',
    title: 'Lumen Health scales a multi-country clinic network',
    excerpt: 'A healthcare group promoting services with interviews and careful, compliant messaging.',
    companyName: 'Lumen Health',
    companyDescription: 'Private clinic network focused on diagnostics and outpatient care.',
    location: 'International',
    featured: true,
    industry: { name: 'Healthcare', slug: 'healthcare' },
    coverUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    content: `
      <p>Lumen Health used leadership interviews and service explainers to build recognition in new cities. The tone stays calm and factual, which matters in healthcare promotion.</p>
      <p><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Visibility without hype</h2>
      <p>Each market launch includes a company feature, a clinician interview and clear service pages. Claims are reviewed before publication so local teams can share them confidently.</p>
      <p><img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e629?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>The permanent profile on ${brand} gives patients and partners a consistent place to learn what Lumen offers as the network grows.</p>
    `,
    background: `
      <p>Lumen Health operates private clinics focused on diagnostics and outpatient care. Expansion into new cities required careful messaging: clear enough for patients, precise enough for clinical partners.</p>
      <p>Leadership interviews became a core part of how the group introduced itself without overstating outcomes.</p>
    `,
    productsServices: `
      <ul>
        <li>Diagnostics and outpatient care</li>
        <li>Multi-country clinic operations</li>
        <li>Patient information and service explainers</li>
        <li>Partnership pathways for local clinicians</li>
      </ul>
    `,
    seoTitle: `Lumen Health profile | ${brand}`,
    seoDescription: 'Company profile for Lumen Health.',
  },
]

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

const basePosts = [
  {
    id: 1,
    slug: 'how-sponsored-features-support-market-entry',
    title: 'How sponsored features support market entry',
    excerpt: 'A practical look at using editorial placements when launching in a new country.',
    postType: 'pr-marketing',
    featured: true,
    category: { name: 'Insights', slug: 'insights' },
    coverUrl: u('photo-1521737604893-d14cc237f11d'),
    content: `
      <p>Sponsored features work best when they educate buyers and introduce proof points, not just slogans. When you enter a new market, local readers need context: who you are, why you matter here, and what evidence supports the claim.</p>
      <p><img src="${u('photo-1529333166437-7750a6dd5a70')}" alt="" /></p>
      <h2>Why editorial placements help launches</h2>
      <p>A well-built feature gives partners something durable to forward. Paid ads may create a burst of awareness, but a permanent company story keeps working after the launch window closes.</p>
      <ul>
        <li>Explain the local problem you solve</li>
        <li>Show proof from early customers or pilots</li>
        <li>Introduce leadership with a short interview</li>
        <li>Localise tone without rewriting your whole brand</li>
      </ul>
      <h2>Pair short campaigns with lasting pages</h2>
      <p>At ${brand}, we pair market-entry angles with permanent company features so your story stays discoverable. Use the campaign to drive attention, then let the feature page carry the detail.</p>
      <p><img src="${u('photo-1486406146926-c627a92ad1ab')}" alt="" /></p>
      <p>If you are planning a cross-border launch, prepare assets early: translated boilerplate, regional photos and one clear proof point editors in that market will trust.</p>
    `,
    seoTitle: `Sponsored features for market entry | ${brand}`,
    seoDescription: 'PR insight on sponsored content for international launches.',
  },
  {
    id: 2,
    slug: 'interview-export-director-on-trade-press',
    title: 'Interview: an export director on trade-press timing',
    excerpt: 'When to pitch, what editors want, and how to keep claims verifiable across markets.',
    postType: 'interview',
    featured: true,
    category: { name: 'Interviews', slug: 'interviews' },
    coverUrl: u('photo-1556761175-5973dc0f32e7'),
    content: `
      <p>We spoke with an export director who has opened routes across Europe and the Middle East about when trade press actually helps, and when it wastes time.</p>
      <p>"Editors care about relevance in their region," the export director said. "Local proof beats global slogans."</p>
      <p><img src="${u('photo-1540575467063-178a50c2df87')}" alt="" /></p>
      <h2>Timing the pitch</h2>
      <p>Pitch before a trade show if you have a concrete announcement. Pitch after a successful pilot if you have numbers. Avoid pitching during holidays or when you only have a vague expansion plan.</p>
      <h2>What editors ask for</h2>
      <ul>
        <li>A clear regional angle</li>
        <li>Named proof or a customer story you can stand behind</li>
        <li>High-quality images of people or operations</li>
        <li>Contact details that reply quickly</li>
      </ul>
      <p><img src="${u('photo-1551836022-d5d88e9218df')}" alt="" /></p>
      <p>Keep claims verifiable across markets. If a figure only applies in one country, say so. Credibility travels further than inflated reach numbers.</p>
    `,
    seoTitle: `Export director interview | ${brand}`,
    seoDescription: 'Interview on trade-press timing for exporters.',
  },
  {
    id: 3,
    slug: 'five-signals-buyers-trust-in-new-markets',
    title: 'Five trust signals buyers look for in new markets',
    excerpt: 'Case studies, leadership visibility, local partners, compliance clarity and consistent URLs.',
    postType: 'industry-insight',
    featured: true,
    category: { name: 'News', slug: 'news' },
    coverUrl: u('photo-1454165804606-c3d57bc86b40'),
    content: `
      <p>International buyers research quietly. Before they reply to an email or take a meeting, they look for signals that your company is real, stable and worth the risk of a new supplier relationship.</p>
      <p><img src="${u('photo-1551288049-bebda4e38f71')}" alt="" /></p>
      <h2>The five signals</h2>
      <ul>
        <li>Case studies with outcomes, not just logos</li>
        <li>Leadership visibility through interviews or profiles</li>
        <li>Named local partners or distributors</li>
        <li>Clear compliance and delivery language</li>
        <li>Consistent, permanent URLs for company stories</li>
      </ul>
      <h2>Why permanent pages matter</h2>
      <p>Permanent company features and news posts give buyers something credible to share internally. A PDF in someone's inbox ages badly. A live page can be updated, linked and trusted.</p>
      <p><img src="${u('photo-1507679799987-c73779587ccf')}" alt="" /></p>
      <p>If you are expanding abroad, treat trust content as part of market entry, not an afterthought. The brands that win quiet research cycles usually look organised long before the first sales call.</p>
    `,
    seoTitle: `Trust signals in new markets | ${brand}`,
    seoDescription: 'What buyers look for when evaluating overseas suppliers.',
  },
]

/** PR2 offers a wider service suite than PR1 */
const baseServices = [
  {
    id: 1,
    slug: 'public-relations',
    title: 'Public relations & publicity',
    shortDescription: 'Media relationships and coverage that introduce your company to new markets.',
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>We pitch relevant outlets and manage relationships that keep your brand in the conversation internationally. Each market needs a local reason to care.</p>
      <p><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Exporters and global brands entering or deepening presence in new countries.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Market-specific story angles</li>\n        <li>Outlet mapping by region</li>\n        <li>Spokesperson support</li>\n        <li>Coverage reuse into lasting features</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>International PR succeeds when proof is local and the story is easy for partners to forward.</p>
    `,
  },
  {
    id: 2,
    slug: 'market-entry-pr',
    title: 'Market entry & localisation',
    shortDescription: 'Messaging, proof points and local press when you expand into a new country.',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Position your offer for local buyers and editors, with language, compliance tone and regional angles included. Market entry fails when the story still sounds foreign.</p>
      <p><img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Companies launching in a new country and needing messaging that travels.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Localised messaging and boilerplate</li>\n        <li>Proof-point selection by market</li>\n        <li>Local press and partner introductions</li>\n        <li>Permanent feature for the new market</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We help you sound native without rewriting your whole brand.</p>
    `,
  },
  {
    id: 3,
    slug: 'business-promotion',
    title: 'Business promotion features',
    shortDescription: 'Long-form company profiles with permanent, shareable URLs.',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Editorial features covering background, products, contacts and SEO for discovery across borders. One strong page beats scattered PDFs.</p>
      <p><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>International teams that need a durable company story for buyers and partners.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Company profile drafting</li>\n        <li>Imagery and contact details</li>\n        <li>Cross-border SEO basics</li>\n        <li>Shareable permanent URL</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1542744173-8e2bd585f281?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Your feature becomes the default link when someone asks who you are.</p>
    `,
  },
  {
    id: 4,
    slug: 'press-releases',
    title: 'Press releases',
    shortDescription: 'Newsworthy releases written for editors and international distribution.',
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Launches, funding, partnerships and milestones drafted for pickup in trade and regional press. Clarity travels better than hype across borders.</p>
      <p><img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Teams announcing news that must land in more than one market.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Release drafting for trade and regional press</li>\n        <li>Quote coordination</li>\n        <li>Distribution planning by market</li>\n        <li>Conversion into newsroom posts</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We keep language precise so editors in different regions can trust the facts.</p>
    `,
  },
  {
    id: 5,
    slug: 'sponsored-articles',
    title: 'Sponsored articles',
    shortDescription: 'Paid placements that still read like useful journalism.',
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Sponsored content that educates buyers while promoting your offer responsibly. Useful first, commercial second.</p>
      <p><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Brands funding placements in new markets without sounding like an advert.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Angle and brief development</li>\n        <li>Editorial-style writing</li>\n        <li>Local proof where available</li>\n        <li>Clear sponsorship labelling</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Readers finish pieces that teach them something, even when the placement is paid.</p>
    `,
  },
  {
    id: 6,
    slug: 'company-profiles',
    title: 'Profiles & leadership interviews',
    shortDescription: 'Founder and executive interviews that humanise your brand abroad.',
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Interview-led features that highlight expertise, culture and customer outcomes. Leadership visibility builds trust faster than logos alone.</p>
      <p><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Founders and executives introducing themselves to new markets.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Interview planning</li>\n        <li>Editing and approvals</li>\n        <li>Portrait guidance</li>\n        <li>Publication alongside company features</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>A good interview gives buyers a person to trust before the first call.</p>
    `,
  },
  {
    id: 7,
    slug: 'trade-event-publicity',
    title: 'Trade shows & event publicity',
    shortDescription: 'Pre-event buzz, on-site stories and follow-up coverage for exhibitions.',
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Plan announcements, media invites and post-show features around your exhibition calendar. Events create moments; publicity makes them last.</p>
      <p><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Exhibitors who want more from a stand than a stack of business cards.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Pre-event announcement planning</li>\n        <li>On-site story capture guidance</li>\n        <li>Follow-up features and releases</li>\n        <li>Asset reuse after the show</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We help you arrive with a story and leave with content that keeps working.</p>
    `,
  },
  {
    id: 8,
    slug: 'digital-pr',
    title: 'Digital PR & brand awareness',
    shortDescription: 'Online campaigns that grow mentions, backlinks and branded search.',
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Combine content, outreach and digital distribution for lasting international awareness. Digital PR connects editorial work to discoverability.</p>
      <p><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Teams that need visibility beyond a single market homepage.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Discovery-led content planning</li>\n        <li>Outreach for mentions</li>\n        <li>Asset packaging</li>\n        <li>Visibility review</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Durable pages and smart outreach beat short-lived bursts of noise.</p>
    `,
  },
  {
    id: 9,
    slug: 'media-monitoring',
    title: 'Media monitoring & reporting',
    shortDescription: 'Track coverage, sentiment and competitor mentions across target markets.',
    order: 9,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Regular reporting so teams see what landed, where, and what to amplify next. Monitoring turns publicity into a learning loop.</p>
      <p><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Marketing and leadership teams managing reputation across multiple markets.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Coverage tracking by market</li>\n        <li>Competitor mention summaries</li>\n        <li>Sentiment snapshots</li>\n        <li>Recommendations for follow-up</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>You cannot improve what you cannot see across borders.</p>
    `,
  },
  {
    id: 10,
    slug: 'campaigns',
    title: 'Advertising & promotional campaigns',
    shortDescription: 'Integrated programmes blending PR, content and paid reach.',
    order: 10,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Multi-channel campaigns planned around commercial goals and measurable visibility. Paid reach works harder when editorial assets are ready first.</p>
      <p><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>International brands coordinating launches or market pushes across channels.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Goal and audience definition</li>\n        <li>Core narrative and assets</li>\n        <li>Channel mix planning</li>\n        <li>Visibility reporting</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Campaigns should leave you with stronger company stories, not only spend reports.</p>
    `,
  }
]


export const fallbackArticles = mergeBySlug(baseArticles, richArticles)
export const fallbackPosts = mergeBySlug(
  basePosts,
  richPosts.map((p, i) => ({
    ...p,
    id: i + 1,
    category: basePosts[i]?.category,
    seoTitle: p.seoTitle?.includes('|') ? p.seoTitle : `${p.title} | ${brand}`,
  })),
)
export const fallbackServices = mergeBySlug(
  baseServices,
  richServices.map((s, i) => ({ ...s, id: s.order || i + 1 })),
)

export const fallbackPrivacy = {
  title: 'Privacy policy',
  slug: 'privacy',
  content: `<p>We collect enquiry details solely to respond to promotion requests. Submissions are reviewed by our team and are not published without approval. ${brand} does not operate public member accounts. Contact us to request deletion of personal data held in enquiries.</p><p>We use essential cookies to run the site and remember cookie preferences. For questions email ${siteConfig.contactEmail}.</p>`,
}
