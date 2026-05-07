import { Cormorant_Garamond, DM_Sans, Lavishly_Yours } from 'next/font/google'
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

const lavishlyYours = Lavishly_Yours({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Sally Langdown — Artist',
    template: '%s | Sally Langdown',
  },
  description:
    'Original paintings and works on paper by Sally Langdown — oil portraits, charcoal animal studies, florals, and mixed media.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${lavishlyYours.variable}`} suppressHydrationWarning>
      <body className="bg-[#faf9f6] text-[#1a1a17] antialiased" suppressHydrationWarning>
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
