import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparing Global Residency Programs: Which One is Right for You? | InterLaw',
  description: 'A detailed comparison of residency programs in Paraguay, Panama, Dubai, and Malta. Compare costs, requirements, tax benefits, and lifestyle factors to find your ideal option.',
  openGraph: {
    title: 'Global Residency Programs Comparison Guide',
    description: 'Compare residency programs across Paraguay, Panama, Dubai, and Malta to find the best option for your situation.',
    url: 'https://interlaw.io/blog/residency-comparison',
    type: 'article',
    images: [{
      url: 'https://interlaw.io/images/blog/residency-comparison.jpg',
      width: 1200,
      height: 630,
      alt: 'Global Residency Programs Comparison'
    }],
    publishedTime: '2025-01-10T00:00:00.000Z',
    authors: ['InterLaw Tax Team'],
    tags: ['Comparison', 'Residency Programs', 'Tax Planning', 'Global Mobility', 'Investment']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Residency Programs Comparison Guide',
    description: 'Compare top residency programs to find your ideal tax optimization strategy.',
    images: ['https://interlaw.io/images/blog/residency-comparison.jpg'],
  },
  alternates: {
    canonical: 'https://interlaw.io/blog/residency-comparison'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 