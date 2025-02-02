'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DigitalNomadTaxOptimization() {
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
                Digital Nomads
              </span>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                6 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"
            >
              Tax Optimization Strategies for Digital Nomads
            </motion.h1>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                InterLaw Team
              </div>
              <time>January 10, 2024</time>
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
                src="/images/blog/digital-nomad.jpg"
                alt="Digital Nomad Tax Optimization"
                fill
                className="object-cover"
              />
            </div>

            <h2>Introduction</h2>
            <p>
              As remote work continues to grow, digital nomads face unique challenges and opportunities in managing their tax obligations. Understanding how to legally optimize your tax position while working across different jurisdictions is crucial for maintaining compliance and maximizing your income.
            </p>

            <h2>Common Tax Challenges for Digital Nomads</h2>
            <ul>
              <li>Multiple tax residencies</li>
              <li>Double taxation risks</li>
              <li>Complex reporting requirements</li>
              <li>International income sourcing</li>
              <li>Social security obligations</li>
            </ul>

            <h2>Understanding Tax Residency</h2>
            <p>
              Tax residency is the cornerstone of international tax planning. Key factors that determine tax residency include:
            </p>
            <ul>
              <li>Physical presence duration</li>
              <li>Permanent home location</li>
              <li>Center of vital interests</li>
              <li>Habitual abode</li>
              <li>Citizenship (in some countries)</li>
            </ul>

            <h2>Strategic Residency Planning</h2>
            <p>
              Choosing the right tax residency can significantly impact your overall tax burden. Popular options include:
            </p>
            <ul>
              <li>Territorial tax systems (e.g., Paraguay)</li>
              <li>Non-dom regimes (e.g., Malta)</li>
              <li>Zero-tax jurisdictions (e.g., Dubai)</li>
              <li>Tax treaties and benefits</li>
            </ul>

            <h2>Income Structuring Strategies</h2>
            <p>
              Proper income structuring is essential for digital nomads. Consider these approaches:
            </p>
            <ul>
              <li>Company formation in tax-efficient jurisdictions</li>
              <li>Salary vs. dividend optimization</li>
              <li>Investment income planning</li>
              <li>Banking and payment solutions</li>
            </ul>

            <h2>Compliance and Reporting</h2>
            <p>
              Maintaining proper compliance is crucial. Key considerations include:
            </p>
            <ul>
              <li>Annual tax declarations</li>
              <li>Foreign income reporting</li>
              <li>Bank account disclosures</li>
              <li>Social security compliance</li>
            </ul>

            <h2>Practical Implementation Steps</h2>
            <ol>
              <li>Assess your current tax situation</li>
              <li>Choose optimal residency jurisdiction</li>
              <li>Structure income appropriately</li>
              <li>Implement proper documentation</li>
              <li>Maintain ongoing compliance</li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              Tax optimization for digital nomads requires careful planning and implementation. By choosing the right jurisdiction and structuring your affairs properly, you can legally minimize your tax burden while maintaining full compliance with international regulations.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Ready to Optimize Your Tax Position?
            </h2>
            <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss how you can optimize your tax situation as a digital nomad.
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