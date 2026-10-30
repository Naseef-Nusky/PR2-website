import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const image = article.coverUrl || article.logoUrl || null

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--color-ink)]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-ink)]/25">
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
        <Link
          to={`/businesses/${article.slug}`}
          className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent-deep)] underline-offset-4 hover:underline"
        >
          Read feature
        </Link>
      </div>
    </article>
  )
}
