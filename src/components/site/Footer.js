import Link from 'next/link'

const collections = [
  { href: '/portraits', label: 'Portraits' },
  { href: '/animals', label: 'Animals' },
  { href: '/florals', label: 'Florals' },
  { href: '/mixed-media', label: 'Mixed Media' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[var(--color-canvas)] text-[var(--color-ink)]">

      {/* soft atmosphere (matches nav) */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#7aa7a3]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#d9b49b]/10 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-14">

        {/* Top section */}
        <div className="grid sm:grid-cols-[1fr_auto] gap-14 items-end pb-14 border-b border-black/5">

          {/* Name + statement */}
          <div>
            <p className="font-logo text-[2.2rem] sm:text-[2.6rem] leading-none tracking-[-0.03em]">
              Sally Langdown
            </p>

           
          </div>

          {/* Navigation (mirrors header style, not a different system) */}
          <nav className="flex flex-col gap-3 sm:items-end">

            {collections.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--color-ink-soft)]
                  hover:text-[var(--color-ink)]
                  transition-colors duration-300
                "
              >
                {label}
              </Link>
            ))}

            <Link
              href="/about"
              className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-[var(--color-ink-soft)]
                hover:text-[var(--color-ink)]
                transition-colors duration-300
                mt-2
              "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
                mt-3
                px-5 py-2
                rounded-full
                text-[11px]
                uppercase
                tracking-[0.18em]
                bg-[var(--color-ink)]
                text-white
                hover:opacity-85
                transition-all duration-300
              "
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

          <p className="text-[var(--color-ink-soft)] text-xs">
            &copy; {year} Sally Langdown
          </p>

          <p className="text-[var(--color-ink-soft)]/70 text-xs  font-serif">
            Original works. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}