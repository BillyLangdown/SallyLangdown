'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [selected, setSelected] = useState(null)

  const open = useCallback((artwork) => setSelected(artwork), [])
  const close = useCallback(() => setSelected(null), [])

  // Close on Escape key
  useEffect(() => {
    if (!selected) return
    const handler = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close])

  // Lock scroll while open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <LightboxContext.Provider value={{ selected, open, close }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used inside LightboxProvider')
  return ctx
}
