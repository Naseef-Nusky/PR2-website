import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import FeatureSpotlight from '../components/FeatureSpotlight'
import ServiceCard from '../components/ServiceCard'
import ServiceMarquee from '../components/ServiceMarquee'
import NewsTicket from '../components/NewsTicket'
import { siteConfig } from '../config/site'
import { images } from '../config/images'
import {
  fetchHomepage,
  fetchBusinessArticles,
  fetchBlogPosts,
  fetchServices,
  withFallback,
  defaultsPlusCms,
} from '../api/sanity'
import {
  fallbackHomepage,
  fallbackArticles,
  fallbackPosts,
  fallbackServices,
} from '../data/fallback'

export default function Home() {
  const [home, setHome] = useState(fallbackHomepage)
  const [articles, setArticles] = useState(fallbackArticles.filter((a) => a.featured))
  const [posts, setPosts] = useState(fallbackPosts.slice(0, 3))
  const [services, setServices] = useState(fallbackServices.slice(0, 6))

  useEffect(() => {
    ;(async () => {
      const [h, articles, posts, services] = await Promise.all([
        withFallback(fetchHomepage, fallbackHomepage),
        withFallback(fetchBusinessArticles, fallbackArticles),
        withFallback(fetchBlogPosts, fallbackPosts),
        withFallback(fetchServices, fallbackServices),
      ])

      setHome({ ...fallbackHomepage, ...(h && typeof h === 'object' ? h : {}) })
      setArticles(defaultsPlusCms(articles, fallbackArticles, 6))
      setPosts(defaultsPlusCms(posts, fallbackPosts, 3))
      setServices(defaultsPlusCms(services, fallbackServices, 6))
    })()
  }, [])

  return (
    <>
      <Seo title="Home" description={home.heroSubtitle || siteConfig.description} />

      {/* Mobile: hero + marquee fill first screen. Desktop: half-height hero, marquee below */}
      <section className="flex min-h-[calc(100svh-5.25rem)] flex-col md:min-h-0">
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden text-white md:min-h-[50svh]">
          <div
            className="absolute inset-0 img-cover"
            style={{ backgroundImage: `url(${images.hero})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[var(--color-ink)]/70" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/85 via-[var(--color-ink)]/40 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-10 text-center sm:px-8 md:py-16">
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)] sm:text-xs">
              {siteConfig.tagline}
            </p>
            <h1 className="animate-fade-up-delay mt-3 max-w-3xl font-display text-4xl font-bold leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="animate-fade-up-delay mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {home.heroSubtitle}
            </p>
            <div className="hero-actions animate-fade-up-delay-2 mt-6 w-full max-w-sm sm:max-w-none">
              <Link to="/services" className="hero-btn-primary">
                <span>Explore services</span>
                <span className="hero-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              <Link to="/contact" className="hero-btn-secondary">
                <span className="sm:hidden">Enquire</span>
                <span className="hidden sm:inline">Enquire about promotion</span>
              </Link>
            </div>
          </div>
        </div>

        <ServiceMarquee services={services} />
      </section>

      {/* Pillar rail: horizontal corridor strip */}
      <section className="border-b border-[var(--color-ink)]/10 bg-[var(--color-sand)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">
                Corridor
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
                Built for cross-border growth
              </h2>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-[var(--color-ink)]/70">
              {home.intro?.includes?.('<') ? <RichText html={home.intro} /> : <p>{home.intro}</p>}
            </div>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pillars.map((pillar, i) => (
              <div
                key={pillar.name}
                className="animate-rail border-l-2 border-[var(--color-accent)] bg-transparent py-4 pl-4 pr-4 sm:py-5 sm:pl-5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <h3 className="font-display text-lg leading-snug tracking-tight md:text-xl">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/65">{pillar.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market board: businesses we promote */}
      <section className="bg-[var(--color-ink)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Company features
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Businesses we promote
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Editorial profiles that travel across markets, with permanent URLs buyers and partners can share.
              </p>
            </div>
            <Link
              to="/businesses"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View all features →
            </Link>
          </div>
          <FeatureSpotlight articles={articles.slice(0, 3)} />
        </div>
      </section>

      {/* Services: previous card grid */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
                Service suite
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                More ways to promote internationally
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/70 sm:text-base">
                {home.servicesIntro}
              </p>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-[var(--color-accent-deep)] underline-offset-4 hover:underline"
            >
              Full catalogue →
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.id || service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights & company news */}
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-ink)]/45">
                {siteConfig.blog.sectionLabel}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                {siteConfig.blog.homeTitle}
              </h2>
            </div>
            <Link
              to="/blog"
              className="rounded-full border border-[var(--color-ink)]/15 px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-deep)] transition hover:border-[var(--color-accent-deep)] hover:bg-white"
            >
              {siteConfig.blog.browseLabel}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <NewsTicket key={post.id || post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width background, content stays in container */}
      <section className="relative w-full overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover"
          style={{ backgroundImage: `url(${images.cta})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/78" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl md:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col justify-center px-4 py-16 sm:px-8 sm:py-20 md:py-24">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {home.ctaTitle}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">{home.ctaText}</p>
            </div>
          </div>
          <div className="flex items-center px-4 pb-14 sm:px-8 md:py-24">
            <div className="w-full rounded-3xl border border-white/15 bg-white/95 p-6 text-[var(--color-ink)] shadow-[0_24px_60px_rgb(0_0_0_/_0.25)] backdrop-blur-sm sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
                Start an enquiry
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
                Talk to the PR2 team
              </h3>
              <div className="mt-6 space-y-0 divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-start justify-between gap-3 py-4 transition hover:text-[var(--color-accent-deep)]"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)]/45">
                      Email
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold sm:text-base">
                      {siteConfig.contactEmail}
                    </span>
                  </span>
                  <span className="mt-1 text-[var(--color-accent-deep)]" aria-hidden>
                    →
                  </span>
                </a>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s+/g, '')}`}
                  className="flex items-start justify-between gap-3 py-4 transition hover:text-[var(--color-accent-deep)]"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)]/45">
                      Phone
                    </span>
                    <span className="mt-1 block text-sm font-semibold sm:text-base">
                      {siteConfig.contactPhone}
                    </span>
                  </span>
                  <span className="mt-1 text-[var(--color-accent-deep)]" aria-hidden>
                    →
                  </span>
                </a>
                <div className="py-4">
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)]/45">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-semibold sm:text-base">
                    {siteConfig.address}
                  </span>
                </div>
              </div>
              <Link
                to="/contact"
                className="btn btn-ink mt-6 w-full rounded-full !px-5 !py-3.5"
              >
                {home.ctaButtonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
