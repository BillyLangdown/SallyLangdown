import Image from 'next/image'
import Link from 'next/link'
import GalleryWall from '@/components/gallery/GalleryWall'
import { artworks, categories } from '@/data/artworks'

export const metadata = {
  title: 'Sally Langdown — Artist',
  description:
    'Original paintings and works on paper. Oil portraits, charcoal animal studies, expressive florals, and layered mixed media.',
}

const homepageOrder = [
  'floral-abstract',
  'portrait-ben',
  'mixed-silhouette',
  'animal-cow-1',
  'mixed-woman-3',
  'floral-elegant',
  'portrait-old-man',
  'animal-alfie',
  'mixed-hannah',
  'floral-1',
  'portrait-hannah',
  'mixed-woman-1',
  'animal-two-dogs',
  'floral-acrylic',
  'portrait-two-men',
  'mixed-floral',
  'animal-cow-2',
  'mixed-eyes',
  'portrait-father-christmas',
  'floral-experimental',
  'mixed-woman-4',
  'animal-ram',
  'floral-2',
  'mixed-cats',
  'portrait-experimental',
  'floral-pears',
  'mixed-floral-exp',
  'portrait-teenage-ben',
  'floral-apple',
  'mixed-woman-2',
  'mixed-woman-7',
]

const seen = new Set()

const homepageArtworks = homepageOrder
  .filter((id) => {
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
  .map((id) => artworks.find((a) => a.id === id))
  .filter(Boolean)

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-canvas)] flex items-center">

        {/* Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-[#7aa7a3]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#d9b49b]/12 blur-[110px]" />
        </div>

        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[url('/paper-texture.jpg')] bg-cover pointer-events-none" />

        {/* MOBILE HERO IMAGE */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/mixed-media-portrait-woman3.jpg"
            alt="Mixed media portrait by Sally Langdown"
            fill
            priority
            className="object-cover object-center scale-[1.08]"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[rgba(246,241,232,0.35)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,241,232,0)_40%,rgba(246,241,232,0.85)_100%)]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(246,241,232,0.92)] via-[rgba(246,241,232,0.35)] to-transparent" />
        </div>

        {/* DESKTOP IMAGE */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[52%]">
          <div className="absolute inset-0 scale-[1.01] rotate-[1deg]">
            <Image
              src="/mixed-media-portrait-woman3.jpg"
              alt="Mixed media portrait by Sally Langdown"
              fill
              priority
              className="object-cover object-center"
              sizes="52vw"
            />
          </div>

          <div className="absolute inset-y-0 left-0 w-[240px] bg-gradient-to-r from-[var(--color-canvas)] via-[var(--color-canvas)]/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-28 lg:py-0 lg:min-h-[100svh] lg:flex lg:items-center">

          <div className="max-w-[540px]">

            <h1 className="display-title text-[clamp(3.2rem,10vw,7rem)] leading-[0.9] tracking-[-0.05em] text-[rgba(26,26,23,0.95)] animate-fade-up">
              Portraits,<br />
              mixed media<br />
              & paintings
            </h1>

            <p
              className="mt-7 max-w-[430px] text-[15px] sm:text-[16px] leading-relaxed text-[rgba(26,26,23,0.72)] animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Original artwork by Sally Langdown, including portraits,
              florals, charcoal drawings and layered mixed media pieces.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              {categories.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="
                    px-5 py-3
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    rounded-full
                    bg-white/50
                    text-[var(--color-ink-soft)]
                    border border-black/5
                    shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:bg-white/70
                  "
                >
                  {label}
                </Link>
              ))}
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </section>

      {/* ── GALLERY INTRO ─────────────────────────────────────────── */}
      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-20 pb-10">
        <div className="flex items-end gap-6">
          <h2 className="font-serif text-3xl sm:text-5xl tracking-[-0.04em] text-[var(--color-ink)] leading-[0.95]">
            Selected work
          </h2>
          <div className="mb-3 flex-1 h-px bg-gradient-to-r from-black/10 to-transparent" />
        </div>
      </div>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 lg:px-14 xl:px-20 max-w-[1550px] mx-auto pb-28 sm:pb-36">
        <GalleryWall artworks={homepageArtworks} />
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 wash-mixed pointer-events-none" />
        <div className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-[#7aa7a3]/10 blur-[120px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">

            <div className="max-w-[620px]">
              <h2 className="display-title text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
                About Sally
              </h2>

              <p className="mt-8 editorial-text max-w-[540px]">
                Sally works across portraiture, florals, charcoal and mixed media,
                building up colour, texture and layers in a way that feels natural
                and intuitive. Her work often starts with a simple sketch or colour
                combination and gradually grows from there.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 mt-10 text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)] transition-all duration-300 hover:gap-6"
              >
                Read more
                <span className="block w-10 h-px bg-current" />
              </Link>
            </div>

            <div className="relative hidden sm:block">
              <div className="absolute -inset-5 rounded-[42%_58%_60%_40%_/_48%_38%_62%_52%] bg-[#7aa7a3]/10 blur-[20px]" />
              <div className="relative overflow-hidden rounded-[42%_58%_60%_40%_/_48%_38%_62%_52%] rotate-[-2deg] shadow-[0_30px_60px_rgba(0,0,0,0.10)]">
                <Image
                  src="/artist-photo.jpg"
                  alt="Sally Langdown"
                  width={500}
                  height={700}
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}