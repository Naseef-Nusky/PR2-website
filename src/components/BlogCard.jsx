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

export default function BlogCard({ post }) {
  const image = post.coverUrl || post.coverImageUrl || images.press
  const typeLabel = labels[post.postType] || post.category?.name || 'Article'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-deep)]/35 hover:shadow-[0_16px_40px_rgb(10_26_20_/_0.08)]">
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-deep)]">
          {typeLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl leading-snug md:text-2xl">
          <Link to={`/blog/${post.slug}`} className="hover:opacity-70">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/70">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-end border-t border-[var(--color-ink)]/8 pt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
          >
            Continue reading
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
