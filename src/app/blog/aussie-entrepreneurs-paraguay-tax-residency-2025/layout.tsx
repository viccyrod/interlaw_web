import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Australian Entrepreneurs Should Consider Paraguay Tax Residency | InterLaw',
  description: 'Discover how Australian entrepreneurs can optimize their tax situation through Paraguay tax residency and a Wyoming LLC structure. Learn about potential tax savings and implementation strategies.',
  openGraph: {
    title: 'Paraguay Tax Residency Guide for Australian Entrepreneurs',
    description: 'Learn how to reduce your tax burden by up to 100% through strategic tax residency planning. Detailed guide for Australian entrepreneurs considering Paraguay residency.',
    url: 'https://interlaw.io/blog/aussie-entrepreneurs-paraguay-tax-residency-2025',
    type: 'article',
    images: [{
      url: 'https://interlaw.io/images/blog/australia-paraguay-tax-residency.jpg',
      width: 1200,
      height: 630,
      alt: 'Australian Entrepreneurs Paraguay Tax Strategy'
    }],
    publishedTime: '2025-02-03T00:00:00.000Z',
    authors: ['InterLaw Tax Team'],
    tags: ['Tax Strategy', 'Paraguay', 'Australia', 'Tax Optimization', 'Wyoming LLC']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paraguay Tax Residency Guide for Australian Entrepreneurs',
    description: 'Learn how to reduce your tax burden by up to 100% through strategic tax residency planning.',
    images: ['https://interlaw.io/images/blog/aussie-paraguay.jpg'],
  },
  alternates: {
    canonical: 'https://interlaw.io/blog/aussie-entrepreneurs-paraguay-tax-residency-2025'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 