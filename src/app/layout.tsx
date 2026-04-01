import type { Metadata } from 'next'
import { Instrument_Serif, Outfit } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'death2email — the post-inbox interface',
  description:
    'Email is not a communication tool anymore. It\'s an unstructured task queue. death2email replaces the inbox with an AI layer that interprets, extracts, and acts.',
  openGraph: {
    title: 'death2email — the post-inbox interface',
    description:
      'Email is not a communication tool anymore. It\'s an unstructured task queue.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  )
}
