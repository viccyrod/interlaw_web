'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DigitalNomadTaxOptimization() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Digital Nomads
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                6 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Tax Optimization Strategies for Digital Nomads
            </motion.h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src="/images/blog/digital-nomad.jpg"
                alt="Digital Nomad Tax Optimization"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              Learn how to legally optimize your tax position while working remotely across different jurisdictions, including strategies for residency planning and income structuring.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-400 prose-headings:text-amber-200 prose-strong:text-amber-200 prose-a:text-amber-400 hover:prose-a:text-amber-300">
            
            <h2>Common Tax Challenges for Digital Nomads</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Multiple tax residencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Double taxation risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Complex reporting requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>International income sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Social security obligations</span>
                </li>
              </ul>
            </div>

            <h2>Understanding Tax Residency</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Key Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Physical presence duration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Permanent home location</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Center of vital interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Habitual abode</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Citizenship (in some countries)</span>
                </li>
              </ul>
            </div>

            <h2>Strategic Residency Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Popular Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Territorial tax systems (e.g., Paraguay)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Non-dom regimes (e.g., Malta)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Zero-tax jurisdictions (e.g., Dubai)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Tax optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Asset protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Global mobility</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2>Income Structuring Strategies</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Optimization Approaches</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Company formation in tax-efficient jurisdictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Salary vs. dividend optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Investment income planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Banking and payment solutions</span>
                </li>
              </ul>
            </div>

            <h2>Practical Implementation Steps</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <ol className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Assess your current tax situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Choose optimal residency jurisdiction</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Structure income appropriately</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Implement proper documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Maintain ongoing compliance</span>
                </li>
              </ol>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Ready to Optimize Your Tax Position?</h2>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Book a free consultation to discuss how you can optimize your tax situation as a digital nomad.
              </p>
              <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-black text-amber-400 hover:bg-gray-900"
                  size="lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 