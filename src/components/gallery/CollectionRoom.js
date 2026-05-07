import ArtworkCard from './ArtworkCard'

export default function CollectionRoom({ artworks, label, description }) {
  return (
    <div>
      {/* Room header */}
      <div className="mb-10 sm:mb-14">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9a9490] font-sans mb-3">
          Collection
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a17] italic leading-tight">
          {label}
        </h1>
        {description && (
          <p className="mt-4 text-[#4a4540] font-sans text-base sm:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 w-12 h-px bg-[#c4956a]" />
      </div>

      {/* Artwork grid */}
      <div className="collection-wall">
        {artworks.map((artwork, i) => (
          <div
            key={artwork.id}
            className="collection-item animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 70, 700)}ms` }}
          >
            <ArtworkCard artwork={artwork} />
          </div>
        ))}
      </div>

      {artworks.length === 0 && (
        <p className="text-[#9a9490] font-sans text-sm text-center py-20">
          Works coming soon.
        </p>
      )}
    </div>
  )
}
