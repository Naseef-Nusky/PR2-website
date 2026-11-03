import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import DetailHero from '../components/DetailHero'
import DetailShell from '../components/DetailShell'
import { fetchBusinessArticle, withFallback } from '../api/sanity'
import { fallbackArticles } from '../data/fallback'

function localArticle(slug) {
  return fallbackArticles.find((a) => a.slug === slug) || null
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const [article, setArticle] = useState(() => localArticle(slug))
  const [loading, setLoading] = useState(() => !localArticle(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localArticle(slug)
    setArticle(fallback)
    setLoading(!fallback)

    withFallback(() => fetchBusinessArticle(slug), fallback).then((data) => {
      if (cancelled) return
      setArticle(data || fallback)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [slug])

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-[var(--color-ink)]/60">
        <p>Loading…</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p>Article not found.</p>
        <Link to="/businesses" className="mt-4 inline-block underline">
          Back to features
        </Link>
      </div>
    )
  }

  const image = article.coverUrl || article.logoUrl || null
  const label = `${article.industry?.name || 'Feature'}${article.location ? ` · ${article.location}` : ''}`

  return (
    <>
      <Seo title={article.seoTitle || article.title} description={article.seoDescription || article.excerpt} />
      <article className="bg-[var(--color-paper)] pb-16">
        <DetailHero image={image} label={label} title={article.title} excerpt={article.excerpt} />
        <DetailShell
          primaryTo="/contact"
          primaryLabel="Promote your business"
          secondaryTo="/businesses"
          secondaryLabel="All features"
        >
          <div className="border-b border-[var(--color-ink)]/10 pb-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">Company</p>
            <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{article.companyName}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/75 md:text-base">
              {article.companyDescription}
            </p>
            {article.websiteUrl && (
              <a
                href={article.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent-deep)] underline underline-offset-4"
              >
                Visit website
              </a>
            )}
            {(article.contactEmail || article.contactPhone) && (
              <p className="mt-3 text-sm text-[var(--color-ink)]/70">
                {article.contactEmail}
                {article.contactEmail && article.contactPhone ? ' · ' : ''}
                {article.contactPhone}
              </p>
            )}
          </div>

          {article.background && (
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">Background</h2>
              <RichText html={article.background} className="mt-4" />
            </section>
          )}
          {article.productsServices && (
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">Products & services</h2>
              <RichText html={article.productsServices} className="mt-4" />
            </section>
          )}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">The story</h2>
            <RichText html={article.content} className="mt-4" />
          </section>
        </DetailShell>
      </article>
    </>
  )
}
