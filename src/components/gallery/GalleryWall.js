import ArtworkCard from './ArtworkCard'

export default function GalleryWall({ artworks }) {
  return (
    <div className="gallery-wall">
      {artworks.map((artwork, i) => (
        <div
          key={artwork.id}
          className="gallery-item animate-fade-up"
          style={{ animationDelay: `${Math.min(i * 60, 600)}ms` }}
        >
          <ArtworkCard artwork={artwork} />
        </div>
      ))}
    </div>
  )
}
