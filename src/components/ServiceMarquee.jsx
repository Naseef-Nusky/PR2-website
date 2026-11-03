import { Link } from 'react-router-dom'

export default function ServiceMarquee({ services = [] }) {
  if (!services.length) return null

  const items = [...services, ...services]

  return (
    <section
      className="service-marquee border-y border-[var(--color-ink)]/10 bg-[var(--color-ink)] text-white"
      aria-label="Services"
    >
      <div className="service-marquee-track">
        {items.map((service, i) => (
          <Link
            key={`${service.slug || service.id || 's'}-${i}`}
            to={`/services/${service.slug}`}
            className="service-marquee-item group"
          >
            <span className="font-display text-lg tracking-tight transition group-hover:text-[var(--color-accent)] sm:text-xl md:text-2xl">
              {service.title}
            </span>
            <span className="service-marquee-dot" aria-hidden>
              ●
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
