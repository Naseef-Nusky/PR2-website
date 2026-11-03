import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import DetailHero from '../components/DetailHero'
import DetailShell from '../components/DetailShell'
import { fetchService, withFallback } from '../api/sanity'
import { fallbackServices } from '../data/fallback'

function localService(slug) {
  return fallbackServices.find((s) => s.slug === slug) || null
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const [service, setService] = useState(() => localService(slug))
  const [loading, setLoading] = useState(() => !localService(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localService(slug)
    setService(fallback)
    setLoading(!fallback)

    withFallback(() => fetchService(slug), fallback).then((data) => {
      if (cancelled) return
      setService(data || fallback)
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

  if (!service) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p>Service not found.</p>
        <Link to="/services" className="mt-4 inline-block underline">
          All services
        </Link>
      </div>
    )
  }

  const image = service.coverUrl || service.imageUrl || service.iconUrl || null
  const excerpt = service.excerpt || service.shortDescription || ''

  return (
    <>
      <Seo title={service.seoTitle || service.title} description={service.seoDescription || excerpt} />
      <article className="bg-[var(--color-paper)] pb-16">
        <DetailHero image={image} label="Service" title={service.title} excerpt={excerpt} />
        <DetailShell
          primaryTo="/contact"
          primaryLabel="Enquire about this service"
          secondaryTo="/services"
          secondaryLabel="All services"
        >
          <RichText html={service.content} />
        </DetailShell>
      </article>
    </>
  )
}
