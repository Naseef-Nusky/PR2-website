import { siteConfig } from '../config/site'

const brand = siteConfig.name

export const fallbackHomepage = {
  heroTitle: siteConfig.headline,
  heroSubtitle:
    'Market-entry PR, trade stories, company features and multi-channel campaigns for brands growing beyond one country.',
  intro: `${brand} is built for international promotion. Alongside company features and news, we offer a wider service set — localisation, trade-event publicity, media monitoring and campaign programmes — so exporters and global brands can earn visibility where it matters.`,
  servicesIntro:
    'A fuller international toolkit: classic PR plus market entry, localisation, events, monitoring and paid amplification.',
  ctaTitle: 'Ready for cross-border promotion?',
  ctaText:
    'Tell us your markets, company background and the services you need. Submissions are reviewed before any publication.',
  ctaButtonLabel: 'Start an enquiry',
}

export const fallbackArticles = [
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
    content:
      '<p>Aurora Tech expanded into Europe with localised messaging and trade-press features that explained outcomes, not just features.</p>',
    background: '<p>Founded in 2018, Aurora began as a UK operations toolkit before opening EU sales.</p>',
    productsServices: '<p>Workflow automation, analytics dashboards and partner integrations.</p>',
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
    content:
      '<p>Summit Trade combined operational detail with customer case studies to attract exporters seeking reliable European routes.</p>',
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
    content: '<p>Lumen Health used leadership interviews and service explainers to build recognition in new cities.</p>',
    seoTitle: `Lumen Health profile | ${brand}`,
    seoDescription: 'Company profile for Lumen Health.',
  },
]

export const fallbackPosts = [
  {
    id: 1,
    slug: 'how-sponsored-features-support-market-entry',
    title: 'How sponsored features support market entry',
    excerpt: 'A practical look at using editorial placements when launching in a new country.',
    postType: 'pr-marketing',
    featured: true,
    category: { name: 'Insights', slug: 'insights' },
    coverUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Sponsored features work best when they educate buyers and introduce proof points, not just slogans.</p>
      <p>At ${brand}, we pair market-entry angles with permanent company features so your story keeps working after the launch window.</p>
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
    coverUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>“Editors care about relevance in their region,” the export director said. “Local proof beats global slogans.”</p>
      <p>This is a temporary sample for ${brand} while live CMS content is prepared.</p>
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
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>International buyers research quietly. Permanent company features and news posts give them something credible to share internally.</p>
    `,
    seoTitle: `Trust signals in new markets | ${brand}`,
    seoDescription: 'What buyers look for when evaluating overseas suppliers.',
  },
]

/** PR2 offers a wider service suite than PR1 */
export const fallbackServices = [
  {
    id: 1,
    slug: 'public-relations',
    title: 'Public relations & publicity',
    shortDescription: 'Media relationships and coverage that introduce your company to new markets.',
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    content: '<p>We pitch relevant outlets and manage relationships that keep your brand in the conversation internationally.</p>',
  },
  {
    id: 2,
    slug: 'market-entry-pr',
    title: 'Market entry & localisation',
    shortDescription: 'Messaging, proof points and local press when you expand into a new country.',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Position your offer for local buyers and editors — language, compliance tone and regional angles included.</p>',
  },
  {
    id: 3,
    slug: 'business-promotion',
    title: 'Business promotion features',
    shortDescription: 'Long-form company profiles with permanent, shareable URLs.',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Editorial features covering background, products, contacts and SEO for discovery across borders.</p>',
  },
  {
    id: 4,
    slug: 'press-releases',
    title: 'Press releases',
    shortDescription: 'Newsworthy releases written for editors and international distribution.',
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Launches, funding, partnerships and milestones drafted for pickup in trade and regional press.</p>',
  },
  {
    id: 5,
    slug: 'sponsored-articles',
    title: 'Sponsored articles',
    shortDescription: 'Paid placements that still read like useful journalism.',
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Sponsored content that educates buyers while promoting your offer responsibly.</p>',
  },
  {
    id: 6,
    slug: 'company-profiles',
    title: 'Profiles & leadership interviews',
    shortDescription: 'Founder and executive interviews that humanise your brand abroad.',
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Interview-led features that highlight expertise, culture and customer outcomes.</p>',
  },
  {
    id: 7,
    slug: 'trade-event-publicity',
    title: 'Trade shows & event publicity',
    shortDescription: 'Pre-event buzz, on-site stories and follow-up coverage for exhibitions.',
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Plan announcements, media invites and post-show features around your exhibition calendar.</p>',
  },
  {
    id: 8,
    slug: 'digital-pr',
    title: 'Digital PR & brand awareness',
    shortDescription: 'Online campaigns that grow mentions, backlinks and branded search.',
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Combine content, outreach and digital distribution for lasting international awareness.</p>',
  },
  {
    id: 9,
    slug: 'media-monitoring',
    title: 'Media monitoring & reporting',
    shortDescription: 'Track coverage, sentiment and competitor mentions across target markets.',
    order: 9,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Regular reporting so teams see what landed, where, and what to amplify next.</p>',
  },
  {
    id: 10,
    slug: 'campaigns',
    title: 'Advertising & promotional campaigns',
    shortDescription: 'Integrated programmes blending PR, content and paid reach.',
    order: 10,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Multi-channel campaigns planned around commercial goals and measurable visibility.</p>',
  },
]

export const fallbackPrivacy = {
  title: 'Privacy policy',
  slug: 'privacy',
  content: `<p>We collect enquiry details solely to respond to promotion requests. Submissions are reviewed by our team and are not published without approval. ${brand} does not operate public member accounts. Contact us to request deletion of personal data held in enquiries.</p><p>We use essential cookies to run the site and remember cookie preferences. For questions email ${siteConfig.contactEmail}.</p>`,
}
