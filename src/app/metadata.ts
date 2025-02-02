import { Metadata } from 'next'

const baseUrl = 'https://interlaw.io'
const ogImage = `${baseUrl}/og-image.jpg`

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'InterLaw - Global Tax Optimization Experts',
    template: '%s | InterLaw'
  },
  description: 'Expert tax optimization strategies and residency programs in Paraguay, Panama, Dubai, and Malta. Save up to 45% on your taxes legally.',
  openGraph: {
    type: 'website',
    siteName: 'InterLaw',
    title: 'InterLaw - Global Tax Optimization Experts',
    description: 'Expert tax optimization strategies and residency programs in Paraguay, Panama, Dubai, and Malta. Save up to 45% on your taxes legally.',
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: 'InterLaw'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterLaw - Global Tax Optimization Experts',
    description: 'Expert tax optimization strategies and residency programs in Paraguay, Panama, Dubai, and Malta. Save up to 45% on your taxes legally.',
    creator: '@interlaw',
    images: [ogImage]
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
  keywords: [
    'tax optimization',
    'residency programs',
    'paraguay residency',
    'panama friendly nations',
    'dubai business setup',
    'malta non-dom',
    'tax planning',
    'wealth preservation',
    'global mobility',
    'tax efficiency',
    'international tax',
    'offshore strategy',
    'tax reduction',
    'legal tax optimization',
    'tax haven',
    'foreign income',
    'zero tax',
    'tax free',
    'residency by investment'
  ],
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1'
}

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    tags: string[];
  };
  product?: {
    name: string;
    description: string;
    price: string;
    currency: string;
    availability: string;
  };
}

export function generateMetadata({
  title,
  description,
  path = '',
  article,
  product
}: MetadataProps): Metadata {
  const url = `${baseUrl}${path}`
  
  const metadata: Metadata = {
    ...defaultMetadata,
    title: title,
    description: description,
    alternates: {
      canonical: url
    }
  }

  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: title,
      description: description,
      url,
    }

    if (article) {
      metadata.openGraph = {
        ...metadata.openGraph,
        type: 'article',
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.authors,
        tags: article.tags
      } as Metadata['openGraph']
    } else if (product) {
      metadata.openGraph = {
        ...metadata.openGraph,
        type: 'website',
        title: product.name,
        description: product.description,
        images: [{
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name
        }]
      } as Metadata['openGraph']
    }
  }

  return metadata
} 