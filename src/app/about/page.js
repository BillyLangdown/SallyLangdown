import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/artworks'

export const metadata = {
  title: 'About',
  description:
    'Sally Langdown is a painter working across oil, charcoal and mixed media.',
}

const categoryAccents = {
  portraits: '#e8b89a',
  animals: '#7a9e7e',
  florals: '#e8766a',
  'mixed-media': '#2d8b8b',
}

export default function AboutPage() {
  return (
    <div className="page-enter">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative w-full min-h-[65vh] sm:min-h-[80vh] overflow-hidden bg-[var(--color-canvas)]">

        {/* soft atmosphere */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#7aa7a3]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#d9b49b]/10 blur-[90px] pointer-events-none" />

        {/* photo */}
        <Image
          src="/artist-photo.jpg"
          alt="Sally Langdown"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />

        {/* simple fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-canvas)]/20 to-[var(--color-canvas)]" />

        {/* name */}
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 xl:left-20 z-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-3">
            the artist
          </p>

          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
            Sally<br />Langdown
          </h1>
        </div>

      </section>

      {/* ── BODY ───────────────────────────────────── */}
      <section className="px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1400px] mx-auto pt-16 pb-24 sm:pb-32">

        <div className="grid lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">

          {/* TEXT */}
          <div className="space-y-7 max-w-2xl">

            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#2d8b8b]" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                about the work
              </p>
            </div>

            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              Sally has been painting for most of her life. What started as sketching and observation
              has grown into a practice across oil paint, charcoal, graphite and mixed media.
            </p>

            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              The portraits are usually from real people or memory. They’re not about perfection,
              more about character, expression and presence. The animal drawings are similar —
              focused on personality rather than detail.
            </p>

            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              The florals are the loosest work. More colour-led, more instinctive, less structured.
              They’re where she lets things go a bit.
            </p>

            {/* quote */}
            <blockquote className="pl-6 border-l-2 border-[#2d8b8b] my-6">
              <p className="text-[var(--color-ink)] text-lg sm:text-xl italic leading-relaxed">
                Paint, layer, take things away, add things back in, until it feels right.
              </p>
            </blockquote>

            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              The mixed media work brings everything together. It’s more experimental — combining paint,
              collage, texture and marks made over time.
            </p>

            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              She lives and works in the UK and shows her work at local exhibitions and events.
              Pieces are available directly — enquiries are always welcome.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="text-[11px] uppercase tracking-[0.2em] text-[#2d8b8b] hover:text-[#e8766a] transition-colors duration-300 inline-flex items-center gap-3"
              >
                Get in touch
                <span className="block w-8 h-px bg-current" />
              </Link>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="lg:pt-4">

            <div className="relative bg-[var(--color-canvas)] border border-black/5 p-8 overflow-hidden">

              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#7aa7a3]/10 blur-[60px]" />

              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-6">
                explore the work
              </p>

              <div className="space-y-1">

                {categories.map(({ slug, label, description }) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group block py-4 border-b border-black/5 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-3 h-[2px] bg-[#2d8b8b] transition-all duration-300 group-hover:w-5" />
                      <p className="text-[var(--color-ink)] group-hover:text-[#2d8b8b] transition-colors">
                        {label}
                      </p>
                    </div>

                    <p className="text-[var(--color-ink-soft)] text-xs pl-6 leading-relaxed">
                      {description}
                    </p>
                  </Link>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}