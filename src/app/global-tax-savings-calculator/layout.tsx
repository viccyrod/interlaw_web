import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Tax Savings Calculator | Compare Tax Strategies Worldwide',
  description: 'Calculate your potential tax savings with our interactive global tax calculator. Compare tax strategies across Paraguay, Panama, Dubai, and Malta. Find the best tax optimization approach for your situation.',
  openGraph: {
    title: 'Global Tax Savings Calculator | InterLaw',
    description: 'Calculate your potential tax savings with our interactive global tax calculator. Compare tax strategies across Paraguay, Panama, Dubai, and Malta.',
    url: 'https://interlaw.io/global-tax-savings-calculator',
    type: 'website',
    images: [{
      url: 'https://interlaw.io/calculator-og.jpg',  // Using the default OG image for now
      width: 1200,
      height: 630,
      alt: 'InterLaw Global Tax Savings Calculator'
    }]
  },
  alternates: {
    canonical: 'https://interlaw.io/global-tax-savings-calculator'
  },
  keywords: [
    'tax calculator',
    'global tax savings',
    'tax optimization',
    'international tax planning',
    'tax residency calculator',
    'offshore tax calculator',
    'expat tax calculator',
    'tax comparison tool'
  ]
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 