import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { getSourceMaterial } from '@/lib/sourcematerial'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const content = getSourceMaterial()

export const metadata: Metadata = {
  title: content.businessName,
  description: content.hero.subheadline,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}
