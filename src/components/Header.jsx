import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/businesses', label: 'Features' },
  { to: '/blog', label: siteConfig.blog.navLabel },
  { to: '/contact', label: 'Enquire' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink)]/10 bg-[var(--color-paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)]/50 sm:text-[11px]">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition ${
                  isActive
                    ? 'font-semibold text-[var(--color-ink)]'
                    : 'text-[var(--color-ink)]/65 hover:text-[var(--color-ink)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-ink rounded-full !px-5 !py-2.5">
            Talk to us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)] transition hover:bg-[var(--color-ink)]/5 active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span key={open ? 'close' : 'open'} className="animate-icon-swap inline-flex">
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {open && (
        <div className="animate-menu-in border-t border-[var(--color-ink)]/10 bg-[var(--color-paper)] px-4 pb-6 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-base transition hover:bg-[var(--color-mist)] ${
                    isActive ? 'bg-[var(--color-mist)] font-semibold' : 'text-[var(--color-ink)]/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-ink btn-block-sm mt-3 rounded-full"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
