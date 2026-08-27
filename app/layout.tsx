import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond } from 'next/font/google'

const displayFont = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display' })
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Colin Batchelor Consulting | Infrastructure Leadership',
  description: 'Executive project direction and practical leadership for complex infrastructure programmes.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${displayFont.variable}`}><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
