import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import ArticleCard from '../components/ArticleCard'
import BlogCard from '../components/BlogCard'
import ServiceCard from '../components/ServiceCard'
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

      // Defaults first; Sanity-only items always kept (not cut off by slice)
      setHome({ ...fallbackHomepage, ...(h && typeof h === 'object' ? h : {}) })
      setArticles(defaultsPlusCms(articles, fallbackArticles, 6))
      setPosts(defaultsPlusCms(posts, fallbackPosts, 3))
      setServices(defaultsPlusCms(services, fallbackServices, 6))
    })()
  }, [])

  return (
    <>
      <Seo title="Home" description={home.heroSubtitle || siteConfig.description} />

      {/* Full-bleed background hero */}
      <section className="relative min-h-[calc(100svh-5.5rem)] overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover"
          style={{ backgroundImage: `url(${images.hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/72" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/80 via-[var(--color-ink)]/45 to-transparent" aria-hidden />
        <div className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl flex-col justify-end px-4 pb-14 pt-20 sm:px-8 sm:pb-20 md:justify-center md:pb-24">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-xs">
            {siteConfig.tagline}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {home.heroSubtitle}
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/services" className="btn btn-primary btn-block-sm">
              Explore services
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-block-sm">
              Enquire about promotion
            </Link>
          </div>
        </div>
      </section>

      {/* Services first — PR2 differentiator */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">Service suite</p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                More ways to promote internationally
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/70 sm:text-base">
                {home.servicesIntro}
              </p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-[var(--color-accent-deep)] underline-offset-4 hover:underline">
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

      {/* How we work / pillars */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 img-cover" style={{ backgroundImage: `url(${images.trade})` }} aria-hidden />
        <div className="absolute inset-0 bg-[var(--color-ink)]/88" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">How we work</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">Built for cross-border growth</h2>
          <div className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            {home.intro?.includes?.('<') ? <RichText html={home.intro} /> : <p>{home.intro}</p>}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pillars.map((pillar) => (
              <div key={pillar.name} className="border-t border-white/20 pt-5">
                <h3 className="font-display text-xl leading-snug">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company features */}
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink)]/50">Company features</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Businesses we promote</h2>
            </div>
            <Link to="/businesses" className="text-sm font-semibold underline-offset-4 hover:underline">
              View all features
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink)]/50">Newsroom</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Insights & company news</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>
          <Link to="/blog" className="mt-10 inline-block text-sm font-semibold underline underline-offset-4">
            Browse newsroom
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 img-cover" style={{ backgroundImage: `url(${images.cta})` }} aria-hidden />
        <div className="absolute inset-0 bg-[var(--color-ink)]/82" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-8">
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">{home.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-sm text-white/75 sm:text-base">{home.ctaText}</p>
          <p className="mt-3 break-words text-sm text-white/55">
            {siteConfig.contactEmail} · {siteConfig.contactPhone}
          </p>
          <Link to="/contact" className="btn btn-primary btn-block-sm mt-8">
            {home.ctaButtonLabel}
          </Link>
        </div>
      </section>
    </>
  )
}
