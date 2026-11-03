import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index }) {
  const image = service.imageUrl || service.iconUrl || null
  const num = String((index ?? 0) + 1).padStart(2, '0')

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-deep)]/40 sm:grid-cols-[7.5rem_1fr]"
    >
      <div className="relative min-h-[140px] overflow-hidden rounded-t-2xl bg-[var(--color-mist)] sm:min-h-full sm:rounded-l-2xl sm:rounded-tr-none">
        {image ? (
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-[var(--color-ink)]/35" />
        <span className="relative z-10 flex h-full items-end p-4 font-display text-3xl text-white/90">{num}</span>
      </div>
      <div className="flex flex-col justify-center p-5 md:p-6">
        <h3 className="font-display text-xl leading-snug md:text-2xl">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{service.shortDescription}</p>
        <span className="mt-4 text-sm font-semibold text-[var(--color-accent-deep)] transition group-hover:translate-x-1">
          View service →
        </span>
      </div>
    </Link>
  )
}
