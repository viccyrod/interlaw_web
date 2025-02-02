'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ParaguayTaxBenefits() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                Tax Strategy
              </span>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"
            >
              Paraguay Tax Benefits: Complete Guide for 2024
            </motion.h1>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                InterLaw Team
              </div>
              <time>January 15, 2024</time>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container px-4 sm:px-6 mx-auto py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none 
            prose-headings:text-gray-900 
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4
            prose-p:text-gray-700 prose-p:mb-6 
            prose-li:text-gray-700
            prose-ul:mb-6 prose-ul:list-disc prose-ul:list-outside
            prose-ol:mb-6 prose-ol:list-decimal prose-ol:list-outside
            prose-strong:text-gray-900"
          >
            <div className="relative w-full h-64 sm:h-96 mb-10 rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/paraguay-guide.jpg"
                alt="Paraguay Tax Benefits Guide"
                fill
                className="object-cover"
              />
            </div>

            <h2>Introduction</h2>
            <p>
              Paraguay has emerged as one of the most attractive destinations for entrepreneurs and digital professionals seeking to optimize their tax position. With its unique combination of minimal presence requirements and comprehensive tax benefits, Paraguay offers an unparalleled opportunity for global citizens to legally reduce their tax burden.
            </p>

            <h2>Key Benefits of Paraguay&apos;s Tax System</h2>
            <ul>
              <li>0% tax on foreign-source income</li>
              <li>No wealth tax</li>
              <li>Minimal presence requirement (1 day per year)</li>
              <li>Fast processing time (30-45 days)</li>
              <li>Low setup and maintenance costs</li>
            </ul>

            <h2>Understanding Foreign Income Exemption</h2>
            <p>
              One of Paraguay&apos;s most attractive features is its territorial tax system. Under this system, only income generated within Paraguay is subject to taxation. This means that any income earned from sources outside Paraguay - whether through digital businesses, investments, or remote work - is completely exempt from Paraguayan taxation.
            </p>

            <h2>Residency Requirements</h2>
            <p>
              Paraguay offers one of the most flexible residency programs globally. The key requirements include:
            </p>
            <ul>
              <li>Valid passport</li>
              <li>Clean criminal record</li>
              <li>Proof of income or sufficient funds</li>
              <li>Brief visit to Paraguay for documentation</li>
              <li>Minimal annual presence requirement (1 day)</li>
            </ul>

            <h2>Application Process</h2>
            <p>
              The residency application process in Paraguay is remarkably efficient:
            </p>
            <ol>
              <li>Document preparation and translation (1-2 weeks)</li>
              <li>Application submission (1 day)</li>
              <li>Processing period (30-45 days)</li>
              <li>Residency card issuance</li>
            </ol>

            <h2>Cost Considerations</h2>
            <p>
              Paraguay offers one of the most cost-effective residency programs globally. The total investment typically includes:
            </p>
            <ul>
              <li>Government fees</li>
              <li>Document translation</li>
              <li>Legal assistance</li>
              <li>Travel expenses for brief visit</li>
            </ul>

            <h2>Maintaining Residency</h2>
            <p>
              Maintaining Paraguayan residency is straightforward. The key requirements are:
            </p>
            <ul>
              <li>Visit Paraguay for at least one day per year</li>
              <li>Keep documentation current</li>
              <li>Maintain a clean criminal record</li>
            </ul>

            <h2>Path to Citizenship</h2>
            <p>
              After maintaining residency for three years, you become eligible to apply for Paraguayan citizenship. This opens additional opportunities, including:
            </p>
            <ul>
              <li>Visa-free travel to more countries</li>
              <li>Full political rights</li>
              <li>Ability to pass citizenship to children</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Paraguay&apos;s tax benefits and residency program offer a compelling opportunity for international entrepreneurs and digital professionals. With its combination of tax advantages, minimal presence requirements, and efficient processing, it stands out as one of the most attractive options for global tax optimization in 2024.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Ready to Explore Paraguay&apos;s Tax Benefits?
            </h2>
            <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss how Paraguay&apos;s tax benefits can work for your specific situation.
            </p>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
} 