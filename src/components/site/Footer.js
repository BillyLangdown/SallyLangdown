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
    <footer className="bg-[#1a1a17] text-white pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 pb-12 border-b border-white/10">
          {/* Name */}
          <div>
            <p className="font-serif italic text-3xl sm:text-4xl text-white leading-tight">
              Sally Langdown
            </p>
            <p className="mt-2 text-white/40 text-sm font-sans">
              Original paintings and works on paper
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col sm:flex-row gap-x-8 gap-y-3">
            {collections.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-200 font-sans"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-200 font-sans"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-200 font-sans"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-sans">
            &copy; {year} Sally Langdown. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-sans italic font-serif">
            All works are original and remain the property of the artist.
          </p>
        </div>
      </div>
    </footer>
  )
}
