import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const image = article.coverUrl || article.logoUrl || null

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-deep)]/35 hover:shadow-[0_16px_40px_rgb(10_26_20_/_0.08)]">
      {image && (
        <Link to={`/businesses/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/45">
          {article.industry?.name || 'Business feature'}
          {article.location ? ` · ${article.location}` : ''}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-snug">
          <Link to={`/businesses/${article.slug}`} className="hover:opacity-70">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/70">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-end border-t border-[var(--color-ink)]/8 pt-4">
          <Link
            to={`/businesses/${article.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
          >
            Read feature
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
