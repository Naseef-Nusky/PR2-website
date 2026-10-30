import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
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
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-[var(--color-ink)]/60">
        <p>Loading…</p>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
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
      <article className="bg-[var(--color-mist)]">
        {image && (
          <div className="relative h-[42vh] min-h-[260px] w-full overflow-hidden md:h-[52vh]">
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 to-transparent" />
          </div>
        )}
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">Service</p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{service.title}</h1>
          <p className="mt-5 text-lg text-[var(--color-ink)]/75">{excerpt}</p>
          <RichText html={service.content} className="mt-10" />
          <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-ink)]/10 pt-8 sm:flex-row">
            <Link to="/contact" className="btn btn-ink btn-block-sm">
              Enquire about this service
            </Link>
            <Link to="/services" className="btn btn-outline btn-block-sm">
              All services
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
