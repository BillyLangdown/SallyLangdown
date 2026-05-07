'use client'

import Image from 'next/image'
import { useLightbox } from '@/context/LightboxContext'

const ASPECT_CLASSES = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

export default function ArtworkCard({ artwork }) {
  const { open } = useLightbox()

  const aspectClass = ASPECT_CLASSES[artwork.aspect] || 'aspect-[4/3]'

  return (
    <button
      onClick={() => open(artwork)}
      className="group relative block w-full overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4956a] focus-visible:ring-offset-2"
      aria-label={`View ${artwork.title}`}
    >
      {/* Image or placeholder */}
      <div className={`${aspectClass} relative overflow-hidden`}>
        {artwork.image ? (
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ background: artwork.placeholder }}
          />
        )}

        {/* Hover overlay — slides up from bottom */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-5 px-5">
            <p className="font-serif text-white text-xl leading-tight tracking-wide">
              {artwork.title}
            </p>
            <p className="mt-1 text-white/60 text-xs uppercase tracking-[0.15em] font-sans">
              {artwork.medium}
            </p>
          </div>
        </div>

        {/* Featured indicator — subtle top-right dot */}
        {artwork.featured && (
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#c4956a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
    </button>
  )
}
