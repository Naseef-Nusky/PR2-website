import { Link } from 'react-router-dom'

export default function ServiceRailCard({ service, index = 0 }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/services/${service.slug}`}
      className="rail-row group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-[var(--color-ink)]/12 py-5 md:grid-cols-[4rem_1fr_auto] md:gap-6 md:py-6"
    >
      <span className="font-display text-lg text-[var(--color-accent-deep)] md:text-xl">{num}</span>
      <div className="min-w-0">
        <h3 className="font-display text-xl leading-snug tracking-tight transition group-hover:text-[var(--color-accent-deep)] md:text-2xl">
          {service.title}
        </h3>
        {service.shortDescription ? (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-ink)]/65">
            {service.shortDescription}
          </p>
        ) : null}
      </div>
      <span
        aria-hidden
        className="pt-1 text-sm font-semibold text-[var(--color-ink)]/35 transition group-hover:translate-x-1 group-hover:text-[var(--color-accent-deep)]"
      >
        →
      </span>
    </Link>
  )
}
