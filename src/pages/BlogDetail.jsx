import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import DetailHero from '../components/DetailHero'
import DetailShell from '../components/DetailShell'
import { siteConfig } from '../config/site'
import { fetchBlogPost, withFallback } from '../api/sanity'
import { fallbackPosts } from '../data/fallback'

function localPost(slug) {
  return fallbackPosts.find((p) => p.slug === slug) || null
}

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(() => localPost(slug))
  const [loading, setLoading] = useState(() => !localPost(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localPost(slug)
    setPost(fallback)
    setLoading(!fallback)

    withFallback(() => fetchBlogPost(slug), fallback).then((data) => {
      if (cancelled) return
      setPost(data || fallback)
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

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block underline">
          {siteConfig.blog.backLabel}
        </Link>
      </div>
    )
  }

  const image = post.coverUrl || post.coverImageUrl || null
  const label = post.category?.name || post.postType?.replace(/-/g, ' ') || siteConfig.blog.sectionLabel

  return (
    <>
      <Seo title={post.seoTitle || post.title} description={post.seoDescription || post.excerpt} />
      <article className="bg-[var(--color-paper)] pb-16">
        <DetailHero image={image} label={label} title={post.title} excerpt={post.excerpt} />
        <DetailShell
          primaryTo="/contact"
          primaryLabel="Start an enquiry"
          secondaryTo="/blog"
          secondaryLabel={siteConfig.blog.browseLabel}
        >
          <RichText html={post.content} />
        </DetailShell>
      </article>
    </>
  )
}
