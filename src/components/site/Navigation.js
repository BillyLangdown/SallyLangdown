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

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? 'bg-[rgba(245,240,232,0.92)] backdrop-blur-xl border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]'
              : 'bg-[rgba(245,240,232,0.72)] backdrop-blur-md'
          }
        `}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 h-[74px] flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="
              font-logo
              text-[2rem]
              sm:text-[2.2rem]
              leading-none
              tracking-[-0.03em]
              text-[var(--color-ink)]
              transition-opacity duration-300
              hover:opacity-70
            "
          >
            Sally Langdown
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-3">

            {collections.map(({ href, label }) => {
              const active = pathname === href

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    px-4 py-2 rounded-full
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    transition-all duration-300
                    border
                    ${
                      active
                        ? 'bg-white border-black/10 text-[var(--color-ink)] shadow-[0_6px_20px_rgba(0,0,0,0.05)]'
                        : 'border-transparent text-[var(--color-ink-soft)] hover:bg-white/70 hover:border-black/5 hover:text-[var(--color-ink)]'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}

            <div className="w-px h-5 bg-black/8 mx-2" />

            <Link
              href="/about"
              className={`
                px-4 py-2 rounded-full
                text-[11px]
                uppercase
                tracking-[0.18em]
                transition-all duration-300
                border
                ${
                  pathname === '/about'
                    ? 'bg-white border-black/10 text-[var(--color-ink)] shadow-[0_6px_20px_rgba(0,0,0,0.05)]'
                    : 'border-transparent text-[var(--color-ink-soft)] hover:bg-white/70 hover:border-black/5 hover:text-[var(--color-ink)]'
                }
              `}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
                ml-1
                px-5 py-2
                rounded-full
                text-[11px]
                uppercase
                tracking-[0.18em]
                bg-[var(--color-ink)]
                text-white
                transition-all duration-300
                hover:opacity-85
                hover:-translate-y-[1px]
              "
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`
                block w-5 h-px bg-[var(--color-ink)]
                transition-all duration-300 origin-center
                ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}
              `}
            />

            <span
              className={`
                block w-5 h-px bg-[var(--color-ink)]
                transition-all duration-300
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}
              `}
            />

            <span
              className={`
                block w-5 h-px bg-[var(--color-ink)]
                transition-all duration-300 origin-center
                ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}
              `}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[var(--color-canvas)]
          transition-all duration-500
          ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >

        <div className="absolute top-0 right-0 w-[260px] h-[260px] rounded-full bg-[#7aa7a3]/10 blur-[80px]" />

        <div className="absolute bottom-0 left-0 w-[220px] h-[220px] rounded-full bg-[#d9b49b]/10 blur-[70px]" />

        <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-24 pb-16">

          <div className="flex flex-col gap-2">

            {collections.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`
                  text-[2.7rem]
                  leading-[0.95]
                  tracking-[-0.05em]
                  transition-all duration-300
                  ${
                    pathname === href
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-soft)]'
                  }
                  animate-fade-up
                `}
                style={{
                  animationDelay: menuOpen ? `${i * 70}ms` : '0ms',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-black/8 flex flex-col gap-5">

            <Link
              href="/about"
              className="
                text-[12px]
                uppercase
                tracking-[0.2em]
                text-[var(--color-ink-soft)]
              "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
                text-[12px]
                uppercase
                tracking-[0.2em]
                text-[var(--color-ink-soft)]
              "
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}