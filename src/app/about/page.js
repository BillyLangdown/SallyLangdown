import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/artworks'

export const metadata = {
  title: 'About',
  description:
    'Sally Langdown is a painter and mixed media artist working across oil, charcoal, and collage.',
}

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a9490] font-sans mb-5">
            The artist
          </p>
          <h1 className="font-serif italic text-5xl sm:text-6xl lg:text-7xl text-[#1a1a17] leading-[1.05] tracking-wide">
            Colour, pattern,<br className="hidden sm:block" /> and the long game.
          </h1>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20">
          {/* Text */}
          <div className="space-y-8 max-w-2xl">
            <div className="h-px w-12 bg-[#c4956a]" />

            <p className="font-serif text-2xl sm:text-3xl text-[#1a1a17] leading-relaxed italic">
              &ldquo;I don&rsquo;t work in a straight line. I circle things,
              layer them, and find out what I&rsquo;m saying by the time
              I finish.&rdquo;
            </p>

            <p className="font-sans text-[#4a4540] text-base sm:text-lg leading-relaxed">
              Sally Langdown has been painting for most of her life — a practice
              that began in quiet observation and grew into something much more
              expressive and layered. She works in oils on canvas, charcoal and
              graphite on paper, and mixed media that draws freely on collage,
              pattern, and found material.
            </p>

            <p className="font-sans text-[#4a4540] text-base sm:text-lg leading-relaxed">
              Her portraits are painted from life and from memory — studies of
              presence, of stillness, of the quality of light on a familiar face.
              Her animal work is built from close observation: each piece is an
              attempt to capture character rather than likeness. Her florals are
              something else entirely — bolder, more joyful, a space where colour
              is allowed to do whatever it wants.
            </p>

            <p className="font-sans text-[#4a4540] text-base sm:text-lg leading-relaxed">
              The mixed media work is where all of these threads come together.
              Layers of paint, collaged material, handwritten text, and repeated
              pattern sit alongside one another until something cohesive and
              personal emerges. It is, perhaps, the most honest part of the work.
            </p>

            <p className="font-sans text-[#4a4540] text-base sm:text-lg leading-relaxed">
              She lives and works in the UK, and shows her work at local exhibitions
              and events throughout the year. Pieces are available for purchase
              directly; enquiries are always welcome.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#1a1a17] hover:text-[#c4956a] transition-colors duration-200"
              >
                Get in touch
                <span className="block w-8 h-px bg-current" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8 lg:pt-10">
            {/* Artist photo */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f2ede7]">
              <Image
                src="/artist-photo.jpg"
                alt="Sally Langdown"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>

            {/* Collection navigator */}
            <div className="bg-[#f2ede7] p-8">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#9a9490] font-sans mb-5">
                Explore the work
              </p>
              <div className="space-y-1">
                {categories.map(({ slug, label, description }) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group flex items-start justify-between py-4 border-b border-[#e6dfd7] last:border-0"
                  >
                    <div>
                      <p className="font-serif italic text-xl text-[#1a1a17] group-hover:text-[#c4956a] transition-colors duration-200">
                        {label}
                      </p>
                      <p className="mt-0.5 text-[#9a9490] text-xs font-sans leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <span className="mt-1 ml-4 text-[#c4956a] opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-sans text-sm">
                      →
                    </span>
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
