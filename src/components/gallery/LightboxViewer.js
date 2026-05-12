'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useLightbox } from '@/context/LightboxContext'

const ASPECT_CLASSES = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

export default function LightboxViewer() {
  const { selected, close } = useLightbox()
  const overlayRef = useRef(null)

  if (!selected) return null

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) close()
  }

  const aspectClass =
    ASPECT_CLASSES[selected.aspect] || 'aspect-[4/3]'

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="
        fixed inset-0 z-50
        bg-black/95
        flex items-center justify-center
        animate-fade-in
        p-6 sm:p-10
      "
      role="dialog"
      aria-modal="true"
    >

      {/* Close (make it disappear into experience more) */}
      <button
        onClick={close}
        className="
          absolute top-6 right-6
          text-white/40 hover:text-white
          transition-colors duration-300
          text-sm tracking-widest uppercase
        "
        aria-label="Close"
      >
        Close
      </button>

      <div className="flex flex-col items-center gap-6 max-w-6xl w-full">

        {/* Artwork */}
        <div className={`
          ${aspectClass}
          relative w-full max-h-[80vh]
          flex items-center justify-center
        `}>
          <Image
            src={selected.image}
            alt={selected.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Minimal caption (museum label style) */}
        <div className="text-center max-w-xl">

          <h2 className="
            font-serif text-white text-2xl sm:text-3xl
            italic leading-tight
          ">
            {selected.title}
          </h2>

          {(selected.medium || selected.year) && (
            <p className="
              mt-2 text-white/40 text-xs
              uppercase tracking-[0.2em]
            ">
              {[selected.medium, selected.year]
                .filter(Boolean)
                .join(' • ')}
            </p>
          )}

          {selected.note && (
            <p className="
              mt-5 text-white/60
              font-serif italic
              leading-relaxed
            ">
              “{selected.note}”
            </p>
          )}

        </div>

      </div>
    </div>
  )
}