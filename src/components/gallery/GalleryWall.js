import ArtworkCard from './ArtworkCard'

export default function GalleryWall({ artworks }) {
  return (
    <div className="gallery-wall">

      {artworks.map((artwork, i) => {

        const isBreak = i > 0 && i % 6 === 0

        return (
          <div key={artwork.id}>

            {/* subtle breathing space to break grid monotony */}
            {isBreak && (
              <div className="h-10 sm:h-16" />
            )}

            <div
              className="gallery-item animate-fade-up"
              style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}
            >
              <ArtworkCard artwork={artwork} />
            </div>

          </div>
        )
      })}

    </div>
  )
}