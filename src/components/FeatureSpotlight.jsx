import { Link } from 'react-router-dom'
import { images } from '../config/images'

function FeatureBand({ article, index }) {
  const image = article.coverUrl || article.logoUrl || images.meeting
  const flip = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/businesses/${article.slug}`}
      className={`group grid overflow-hidden border border-white/10 bg-[var(--color-ink)] transition duration-300 hover:border-[var(--color-accent)]/50 ${
        flip ? 'md:grid-cols-[1.05fr_0.95fr]' : 'md:grid-cols-[0.95fr_1.05fr]'
      }`}
    >
      <div
        className={`relative min-h-[220px] overflow-hidden md:min-h-[280px] ${
          flip ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <div
          className="absolute inset-0 img-cover transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/25 transition group-hover:bg-[var(--color-ink)]/10" />
        <span className="absolute left-4 top-4 font-display text-4xl text-white/25 md:text-5xl">
          {num}
        </span>
      </div>

      <div
        className={`flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 md:px-9 ${
          flip ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {article.industry?.name || 'Company feature'}
          </span>
          {article.location ? (
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              {article.location}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight text-white transition group-hover:text-[var(--color-accent)] sm:text-3xl md:text-4xl">
          {article.title}
        </h3>
        {article.excerpt ? (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            {article.excerpt}
          </p>
        ) : null}
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          Read feature
          <span className="transition group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}

export default function FeatureSpotlight({ articles = [] }) {
  if (!articles.length) return null

  const list = articles.slice(0, 3)

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {list.map((article, index) => (
        <FeatureBand key={article.id || article.slug} article={article} index={index} />
      ))}
    </div>
  )
}
