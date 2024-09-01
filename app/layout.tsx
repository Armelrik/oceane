import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Agdasima } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', 
  adjustFontFallback: false,
})

const agdasima = Agdasima({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-agdasima',
  display: 'swap', 
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Oceane',
  description: 'Oceane is a platform for event management.',
  icons: {
    icon: '/assets/images/logo-color.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${poppins.variable}`}>
        <Analytics/>
        <body className={`${agdasima.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

//CLERK_ENCRYPTION_KEY=cfd6c224872059e9aa1f4a37b38a29f6527f5aedaeb282be3dc23d0162d448e4