import Head from 'next/head'

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article' | 'product';
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    tags: string[];
  };
  product?: {
    price: string;
    currency: string;
    availability: string;
  };
}

export function SEO({ 
  title = 'InterLaw - Global Tax Optimization Experts',
  description = 'Expert tax optimization strategies and residency programs in Paraguay, Panama, Dubai, and Malta. Save up to 45% on your taxes legally.',
  path = '',
  type = 'website',
  article,
  product
}: SEOProps) {
  const baseUrl = 'https://interlaw.io'
  const url = `${baseUrl}${path}`
  const ogImage = `${baseUrl}/og-image.jpg`

  const commonStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": baseUrl,
    "name": "InterLaw",
    "description": "Global tax optimization experts helping individuals and businesses maximize their wealth through strategic residency planning.",
    "url": baseUrl,
    "logo": `${baseUrl}/interlaw_logo.svg`,
    "image": ogImage,
    "priceRange": "$$$$",
    "sameAs": [
      "https://linkedin.com/company/interlaw",
      "https://twitter.com/interlaw",
      "https://facebook.com/interlaw"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Multiple Locations",
      "description": "Global offices in Paraguay, Panama, Dubai, and Malta"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890",
      "contactType": "customer service",
      "email": "contact@interlaw.io",
      "availableLanguage": ["English", "Spanish", "Portuguese", "Arabic"]
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Tax Optimization Services",
      "description": "Strategic residency planning and tax optimization solutions",
      "priceCurrency": "USD",
      "lowPrice": "2500",
      "highPrice": "150000",
      "offerCount": "4"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "description": "Global services with focus on Paraguay, Panama, Dubai, and Malta"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I optimize my taxes legally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through strategic residency planning in countries like Paraguay, Panama, Dubai, or Malta, you can legally optimize your tax burden while maintaining your global lifestyle."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fastest residency program available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paraguay offers one of the fastest residency programs, with processing times of 30-45 days and only requiring 1 day per year presence."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save on taxes through residency planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on your current tax situation, you could save up to 45% on your taxes through strategic residency planning in tax-efficient jurisdictions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the requirements for Paraguay residency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paraguay residency requires a bank deposit of $4,500, proof of regular income, and a clean criminal record. The process takes 30-45 days with only 1 day per year presence required."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries offer 0% tax on foreign income?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paraguay, Panama, and Dubai offer 0% tax on foreign-source income, while Malta offers a highly advantageous 5% tax rate through its Non-Dom regime."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most affordable tax optimization strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paraguay offers the most affordable tax optimization strategy with setup costs from $2,500 to $4,500, making it significantly more accessible than other programs."
        }
      }
    ]
  }

  const articleStructuredData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": ogImage,
    "author": article.authors.map(author => ({
      "@type": "Person",
      "name": author
    })),
    "publisher": {
      "@type": "Organization",
      "name": "InterLaw",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/interlaw_logo.svg`
      }
    },
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime,
    "keywords": article.tags.join(", ")
  } : null

  const productStructuredData = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": description,
    "image": ogImage,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": product.availability
    }
  } : null

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="InterLaw" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@interlaw" />
      
      {/* Article Meta Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          {article.authors.map((author, index) => (
            <meta key={index} property="article:author" content={author} />
          ))}
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Keywords */}
      <meta name="keywords" content="tax optimization, residency programs, paraguay residency, panama friendly nations, dubai business setup, malta non-dom, tax planning, wealth preservation, global mobility, tax efficiency, international tax, offshore strategy, tax reduction, legal tax optimization, tax haven, foreign income, zero tax, tax free, residency by investment" />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(commonStructuredData)
        }}
      />

      {/* FAQ Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />

      {/* Article Structured Data */}
      {article && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData)
          }}
        />
      )}

      {/* Product Structured Data */}
      {product && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productStructuredData)
          }}
        />
      )}
    </Head>
  )
} 