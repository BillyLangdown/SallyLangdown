'use client'

import { useEffect, useRef } from 'react'
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

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) close()
  }

  if (!selected) return null

  const aspectClass = ASPECT_CLASSES[selected.aspect] || 'aspect-[4/3]'

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 animate-fade-in p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${selected.title}`}
    >
      {/* Close button */}
      <button
        onClick={close}
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors duration-200 focus:outline-none"
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Content panel */}
      <div className="animate-scale-in flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 max-w-5xl w-full max-h-[90vh]">
        {/* Artwork */}
        <div className={`${aspectClass} relative flex-shrink-0 w-full sm:w-auto sm:max-h-[82vh] sm:max-w-[60vw]`}>
          {selected.image ? (
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 60vw"
              priority
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: selected.placeholder }}
            />
          )}
        </div>

        {/* Metadata — below on mobile, right-aligned on desktop */}
        <div className="sm:min-w-[180px] sm:max-w-[220px] pb-1 text-center sm:text-left">
          <h2 className="font-serif text-white text-2xl sm:text-3xl leading-tight italic">
            {selected.title}
          </h2>
          {selected.medium && (
            <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.18em] font-sans">
              {selected.medium}
            </p>
          )}
          {selected.year && (
            <p className="mt-0.5 text-white/30 text-xs font-sans">
              {selected.year}
            </p>
          )}
          {selected.note && (
            <p className="mt-4 text-white/60 text-sm font-serif italic leading-relaxed">
              &ldquo;{selected.note}&rdquo;
            </p>
          )}

          {/* Category tag */}
          <div className="mt-6 inline-block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c4956a]/80 font-sans border border-[#c4956a]/30 px-3 py-1 rounded-full">
              {selected.category.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
