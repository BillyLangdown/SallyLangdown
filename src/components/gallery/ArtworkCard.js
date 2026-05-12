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
      className="group block w-full text-left"
      aria-label={`View ${artwork.title}`}
    >

      {/* IMAGE ONLY */}
      <div className={`
        ${aspectClass}
        relative overflow-hidden
        bg-[var(--color-canvas)]
      `}>

        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-[1.03]
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* very subtle hover presence only */}
        <div className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          bg-black/5
          transition-opacity duration-500
        " />
      </div>

      {/* LABEL AREA (always readable, no interference) */}
      <div className="pt-3 pb-6 px-1">

        <p className="
          font-serif text-[15px]
          text-[var(--color-ink)]
          tracking-[-0.01em]
        ">
          {artwork.title}
        </p>

        <div className="mt-1 flex items-center justify-between">

          {artwork.medium && (
            <p className="
              text-[10px]
              uppercase tracking-[0.2em]
              text-[var(--color-ink-soft)]
            ">
              {artwork.medium}
            </p>
          )}

          {artwork.featured && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8766a]" />
          )}

        </div>
      </div>

    </button>
  )
}