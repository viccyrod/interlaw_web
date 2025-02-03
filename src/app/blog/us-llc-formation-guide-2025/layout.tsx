import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wyoming vs Delaware LLC Formation Guide for Non-Americans (2025) | InterLaw',
  description: 'A comprehensive comparison of forming an LLC in Wyoming versus Delaware as a non-U.S. resident in 2025, including costs, privacy, legal framework, and tax implications.',
  openGraph: {
    title: 'Wyoming vs Delaware LLC Formation Guide (2025)',
    description: 'Compare Wyoming and Delaware LLC formation options for non-US residents. Learn about costs, privacy, asset protection, and tax benefits.',
    url: 'https://interlaw.io/blog/us-llc-formation-guide-2025',
    type: 'article',
    images: [{
      url: 'https://interlaw.io/images/blog/wyoming-vs-delaware-llc-formation.jpg',
      width: 1200,
      height: 630,
      alt: 'Wyoming vs Delaware LLC Formation Guide'
    }],
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['InterLaw Tax Team'],
    tags: ['Business Guide', 'Wyoming LLC', 'Delaware LLC', 'Asset Protection', 'Tax Strategy']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyoming vs Delaware LLC Formation Guide (2025)',
    description: 'Compare Wyoming and Delaware LLC formation options for non-US residents.',
    images: ['https://interlaw.io/images/blog/wyoming-vs-delaware-llc-formation.jpg'],
  },
  alternates: {
    canonical: 'https://interlaw.io/blog/us-llc-formation-guide-2025'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 