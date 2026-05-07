'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const collections = [
  { href: '/portraits', label: 'Portraits' },
  { href: '/animals', label: 'Animals' },
  { href: '/florals', label: 'Florals' },
  { href: '/mixed-media', label: 'Mixed Media' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e6dfd7]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-18">
          {/* Logo / name */}
          <Link
            href="/"
            className="font-serif italic text-xl sm:text-2xl text-[#1a1a17] tracking-wide hover:text-[#c4956a] transition-colors duration-300"
          >
            Sally Langdown
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {collections.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-[11px] uppercase tracking-[0.18em] font-sans transition-colors duration-200 ${
                    pathname === href
                      ? 'text-[#c4956a]'
                      : 'text-[#4a4540] hover:text-[#1a1a17]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="w-px h-4 bg-[#e6dfd7]" />

            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className={`text-[11px] uppercase tracking-[0.18em] font-sans transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'text-[#c4956a]'
                    : 'text-[#4a4540] hover:text-[#1a1a17]'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-[11px] uppercase tracking-[0.18em] font-sans transition-colors duration-200 ${
                  pathname === '/contact'
                    ? 'text-[#c4956a]'
                    : 'text-[#4a4540] hover:text-[#1a1a17]'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-px bg-[#1a1a17] transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#1a1a17] transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#1a1a17] transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#faf9f6] flex flex-col transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pb-20">
          {/* Collection links */}
          <div className="mb-10">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#9a9490] mb-6 font-sans">
              Collections
            </p>
            <div className="flex flex-col gap-2">
              {collections.map(({ href, label }, i) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-serif italic text-4xl sm:text-5xl leading-tight transition-colors duration-200 ${
                    pathname === href ? 'text-[#c4956a]' : 'text-[#1a1a17] hover:text-[#c4956a]'
                  } animate-fade-up`}
                  style={{ animationDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary links */}
          <div className="border-t border-[#e6dfd7] pt-8 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-[12px] uppercase tracking-[0.25em] text-[#4a4540] hover:text-[#c4956a] transition-colors font-sans"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[12px] uppercase tracking-[0.25em] text-[#4a4540] hover:text-[#c4956a] transition-colors font-sans"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
