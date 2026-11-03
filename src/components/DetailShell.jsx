import { Link } from 'react-router-dom'

export default function DetailShell({
  children,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
}) {
  return (
    <div className="relative z-10 pb-4">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 md:py-20">
        {children}

        {(primaryTo || secondaryTo) && (
          <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-ink)]/10 pt-8 sm:flex-row">
            {primaryTo && (
              <Link to={primaryTo} className="btn btn-ink btn-block-sm">
                {primaryLabel}
              </Link>
            )}
            {secondaryTo && (
              <Link to={secondaryTo} className="btn btn-outline btn-block-sm">
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
