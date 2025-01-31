import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SEO } from '@/components/SEO'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://interlaw.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://interlaw.io',
    siteName: 'InterLaw',
    images: [
      {
        url: 'https://interlaw.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InterLaw - Global Tax Optimization Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@interlaw',
    creator: '@interlaw',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SEO />
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
