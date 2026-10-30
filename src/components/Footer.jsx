import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 md:py-20">
        <div>
          <p className="font-display text-3xl sm:text-4xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-white/55">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
          <SocialIcons links={siteConfig.social} className="mt-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/services" className="transition hover:text-white">Services</Link></li>
            <li><Link to="/businesses" className="transition hover:text-white">Company features</Link></li>
            <li><Link to="/blog" className="transition hover:text-white">Newsroom</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Enquiry</Link></li>
            <li><Link to="/privacy" className="transition hover:text-white">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Contact</p>
          <ul className="mt-4 space-y-2 break-words text-sm text-white/80">
            <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
            <li>{siteConfig.contactPhone}</li>
            <li className="max-w-xs leading-relaxed">{siteConfig.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45 md:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
