import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ServiceCard from '../components/ServiceCard'
import { fetchServices, withFallback } from '../api/sanity'
import { fallbackServices } from '../data/fallback'
import { images } from '../config/images'

export default function Services() {
  const [services, setServices] = useState(fallbackServices)

  useEffect(() => {
    withFallback(fetchServices, fallbackServices).then(setServices)
  }, [])

  return (
    <>
      <Seo
        title="Services"
        description="International PR, market entry, trade publicity, company features and campaign programmes."
      />
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-deep)]">Catalogue</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">International promotion services</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink)]/70">
            A broader suite than a standard features platform — including market entry, localisation, trade events and media monitoring.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.id || service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 img-cover" style={{ backgroundImage: `url(${images.cta})` }} aria-hidden />
        <div className="absolute inset-0 bg-[var(--color-ink)]/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">Need a multi-market programme?</h2>
          <p className="mt-3 max-w-xl text-sm text-white/75">
            Tell us your target countries, company background and goals. We review every enquiry before publication.
          </p>
          <Link to="/contact" className="btn btn-primary btn-block-sm mt-6">
            Start an enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
