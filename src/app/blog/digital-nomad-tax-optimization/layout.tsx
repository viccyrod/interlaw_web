import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Optimization Strategies for Digital Nomads | InterLaw',
  description: 'Learn how to legally optimize your tax position while working remotely across different jurisdictions. Comprehensive guide for digital nomads on tax residency, income structuring, and compliance.',
  openGraph: {
    title: 'Tax Optimization Guide for Digital Nomads',
    description: 'Discover how to legally minimize your taxes as a digital nomad through strategic residency planning and income structuring.',
    url: 'https://interlaw.io/blog/digital-nomad-tax-optimization',
    type: 'article',
    images: [{
      url: 'https://interlaw.io/images/blog/digital-nomad.jpg',
      width: 1200,
      height: 630,
      alt: 'Digital Nomad Tax Optimization Strategies'
    }],
    publishedTime: '2025-01-20T00:00:00.000Z',
    authors: ['InterLaw Tax Team'],
    tags: ['Digital Nomads', 'Tax Optimization', 'Remote Work', 'International Tax', 'Tax Strategy']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Optimization Guide for Digital Nomads',
    description: 'Learn how to legally minimize your taxes while working remotely across different jurisdictions.',
    images: ['https://interlaw.io/images/blog/digital-nomad.jpg'],
  },
  alternates: {
    canonical: 'https://interlaw.io/blog/digital-nomad-tax-optimization'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 