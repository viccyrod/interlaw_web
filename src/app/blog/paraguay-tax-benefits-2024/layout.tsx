import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paraguay Tax Benefits: Complete Guide for 2024 | InterLaw',
  description: 'Everything you need to know about Paraguay\'s tax benefits and residency program. Learn about zero tax on foreign income, fast processing times, and minimal presence requirements.',
  openGraph: {
    title: 'Paraguay Tax Benefits Guide (2024)',
    description: 'Discover Paraguay\'s tax benefits, including 0% tax on foreign income, minimal presence requirements, and fast processing times.',
    url: 'https://interlaw.io/blog/paraguay-tax-benefits-2024',
    type: 'article',
    images: [{
      url: 'https://interlaw.io/images/blog/paraguay-guide.jpg',
      width: 1200,
      height: 630,
      alt: 'Paraguay Tax Benefits Guide'
    }],
    publishedTime: '2024-12-15T00:00:00.000Z',
    authors: ['InterLaw Tax Team'],
    tags: ['Tax Strategy', 'Paraguay', 'Tax Benefits', 'Residency Program', 'Foreign Income']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paraguay Tax Benefits Guide (2024)',
    description: 'Complete guide to Paraguay\'s tax benefits and residency program.',
    images: ['https://interlaw.io/images/blog/paraguay-guide.jpg'],
  },
  alternates: {
    canonical: 'https://interlaw.io/blog/paraguay-tax-benefits-2024'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 