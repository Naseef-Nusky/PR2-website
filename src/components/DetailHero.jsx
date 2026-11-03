export default function DetailHero({ image, label, title, excerpt, children }) {
  return (
    <header className="relative isolate min-h-[48vh] overflow-hidden md:min-h-[56vh]">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover pr2-hero-photo" />
      ) : (
        <div className="absolute inset-0 bg-[var(--color-ink)]" />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/88 via-[var(--color-ink)]/55 to-[var(--color-ink)]/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-[var(--color-ink)]/25"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[48vh] w-full max-w-6xl flex-col justify-end px-4 py-12 sm:px-8 md:min-h-[56vh] md:py-16">
        {label && (
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)] sm:text-xs">
            {label}
          </p>
        )}
        <h1 className="animate-fade-up-delay mt-4 max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {excerpt && (
          <p className="animate-fade-up-delay mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {excerpt}
          </p>
        )}
        {children}
        <div className="mt-7 h-1 w-16 bg-[var(--color-accent)]" aria-hidden />
      </div>
    </header>
  )
}
