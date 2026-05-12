import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Navigation from '@/components/site/Navigation'
import Footer from '@/components/site/Footer'
import { LightboxProvider } from '@/context/LightboxContext'
import LightboxViewer from '@/components/gallery/LightboxViewer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Sally Langdown — Artist',
    template: '%s | Sally Langdown',
  },
  description:
    'Paintings and works on paper by Sally Langdown — portraits, animals, florals, and mixed media.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[var(--color-canvas)] text-[var(--color-ink)] antialiased"
        suppressHydrationWarning
      >
        <LightboxProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <LightboxViewer />
        </LightboxProvider>
      </body>
    </html>
  )
}