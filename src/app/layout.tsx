import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'death2email — the post-inbox interface',
  description:
    'Email is not a communication tool anymore. It\'s an unstructured task queue. death2email replaces the inbox with an AI layer that interprets, extracts, and acts.',
  openGraph: {
    title: 'death2email — the post-inbox interface',
    description:
      'Email is not a communication tool anymore. It\'s an unstructured task queue. death2email replaces the inbox with an AI layer that interprets, extracts, and acts.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
