import { Link } from 'react-router-dom'
import { images } from '../config/images'

const labels = {
  news: 'News',
  interview: 'Interview',
  'success-story': 'Success story',
  'product-promotion': 'Product promotion',
  'industry-insight': 'Industry insight',
  'pr-marketing': 'PR & marketing',
  sponsored: 'Sponsored',
}

export default function NewsTicket({ post }) {
  const typeLabel = labels[post.postType] || post.category?.name || 'Article'
  const image = post.coverUrl || post.coverImageUrl || images.press

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-deep)]/35 hover:shadow-[0_16px_40px_rgb(10_26_20_/_0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 img-cover transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-deep)]">
          {typeLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl leading-snug tracking-tight transition group-hover:text-[var(--color-accent-deep)] md:text-2xl">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/65">
            {post.excerpt}
          </p>
        ) : null}
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-deep)]">
          Continue reading
          <span className="transition group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
