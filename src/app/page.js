import Link from 'next/link'
import GalleryWall from '@/components/gallery/GalleryWall'
import { artworks, categories } from '@/data/artworks'

export const metadata = {
  title: 'Sally Langdown — Artist',
  description:
    'Original paintings and works on paper. Oil portraits, charcoal animal studies, expressive florals, and layered mixed media.',
}

// Curated homepage sequence — mix categories and aspect ratios for a balanced hanging
const homepageOrder = [
  'floral-1',
  'portrait-1',
  'animal-1',
  'mixed-1',
  'portrait-3',
  'floral-3',
  'animal-4',
  'mixed-2',
  'portrait-2',
  'floral-2',
  'animal-2',
  'mixed-3',
  'portrait-6',
  'floral-4',
  'animal-5',
  'mixed-5',
  'portrait-4',
  'floral-5',
  'animal-3',
  'mixed-4',
  'portrait-5',
  'floral-6',
  'animal-6',
  'mixed-6',
]

const homepageArtworks = homepageOrder
  .map((id) => artworks.find((a) => a.id === id))
  .filter(Boolean)

export default function HomePage() {
  return (
    <>
      {/* ── Hero introduction ─────────────────────────────────── */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-2xl page-enter">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a9490] font-sans mb-4">
            Original works
          </p>
          <h1 className="font-serif italic text-5xl sm:text-6xl lg:text-7xl text-[#1a1a17] leading-[1.05] tracking-wide">
            Paintings &<br />works on paper
          </h1>
          <p className="mt-5 text-[#4a4540] font-sans text-base sm:text-lg leading-relaxed max-w-md">
            A body of work spanning portraits, animal studies, florals,
            and layered mixed media — created from life, intuition, and feeling.
          </p>
        </div>

        {/* Collection entry points */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="inline-block text-[10px] uppercase tracking-[0.2em] font-sans px-4 py-2 border border-[#e6dfd7] text-[#4a4540] hover:border-[#c4956a] hover:text-[#c4956a] transition-all duration-200 rounded-full"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Thin divider line ─────────────────────────────────── */}
      <div className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto mb-10">
        <div className="h-px bg-[#e6dfd7]" />
      </div>

      {/* ── Gallery wall ──────────────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-20 sm:pb-28">
        <GalleryWall artworks={homepageArtworks} />
      </section>

      {/* ── About teaser ──────────────────────────────────────── */}
      <section className="bg-[#f2ede7] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9a9490] font-sans mb-4">
              The artist
            </p>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#1a1a17] leading-snug">
              Colour, pattern, and the joy of a long project.
            </h2>
            <p className="mt-4 text-[#4a4540] font-sans text-sm sm:text-base leading-relaxed">
              Sally Langdown works across oil painting, charcoal, and mixed media —
              finding harmony between expressive colour and patient observation.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#4a4540] hover:text-[#c4956a] transition-colors duration-200"
          >
            Read more
            <span className="block w-8 h-px bg-current" />
          </Link>
        </div>
      </section>
    </>
  )
}
