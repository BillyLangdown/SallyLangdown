import ArtworkCard from './ArtworkCard'

const categoryAccents = {
  portraits: {
    note: 'faces & people',
    wash: 'bg-[#e8b89a]/10',
    line: 'bg-[#e8b89a]',
  },
  animals: {
    note: 'observed characters',
    wash: 'bg-[#7a9e7e]/10',
    line: 'bg-[#7a9e7e]',
  },
  florals: {
    note: 'colour experiments',
    wash: 'bg-[#e8766a]/10',
    line: 'bg-[#e8766a]',
  },
  'mixed-media': {
    note: 'layers & collage',
    wash: 'bg-[#2d8b8b]/10',
    line: 'bg-[#2d8b8b]',
  },
}

export default function CollectionRoom({
  artworks,
  label,
  description,
  category,
}) {
  const accent = categoryAccents[category] || {
    note: 'studio work',
    wash: 'bg-[#2d8b8b]/8',
    line: 'bg-[#c4956a]',
  }

  return (
    <div>

      {/* Header */}
      <div className="relative mb-12 sm:mb-16">

        {/* softer, less “designed blob” */}
        <div className={`
          absolute -top-10 -left-10
          w-72 h-72 rounded-full
          ${accent.wash}
          blur-[90px]
          opacity-80
          pointer-events-none
        `} />

        <div className="relative z-10">

          {/* more human, less poetic branding */}
          <p className="text-sm tracking-[0.2em] uppercase text-[#6b645f]">
            {accent.note}
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1a1a17] leading-[0.95] mt-3">
            {label}
          </h1>

          <div className={`mt-5 w-12 h-[1px] ${accent.line} opacity-60`} />

          {description && (
            <p className="mt-6 text-[#4a4540] font-sans text-base sm:text-lg max-w-xl leading-relaxed">
              {description}
            </p>
          )}

        </div>
      </div>

      {/* Gallery wall */}
      <div className="collection-wall">

        {artworks.map((artwork, i) => (
          <div
            key={artwork.id}
            className="collection-item animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 60, 600)}ms` }}
          >
            <ArtworkCard artwork={artwork} />
          </div>
        ))}

      </div>

      {/* empty state */}
      {artworks.length === 0 && (
        <p className="text-[#9a9490] font-sans text-sm text-center py-20">
          still being worked on in the studio
        </p>
      )}

    </div>
  )
}