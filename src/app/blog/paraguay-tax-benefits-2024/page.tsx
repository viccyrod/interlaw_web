'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ParaguayTaxBenefits() {
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
                Tax Strategy
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Paraguay Tax Benefits: Complete Guide for 2024
            </motion.h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src="/images/blog/paraguay-guide.jpg"
                alt="Paraguay Tax Benefits Guide"
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
              Discover how Paraguay&apos;s tax system offers unprecedented benefits for digital entrepreneurs and remote professionals, including zero tax on foreign-source income and minimal presence requirements.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-400 prose-headings:text-amber-200 prose-strong:text-amber-200 prose-a:text-amber-400 hover:prose-a:text-amber-300">
            <h2>Key Benefits of Paraguay&apos;s Tax System</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>0% tax on foreign-source income</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>No wealth tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Minimal presence requirement (1 day per year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Fast processing time (30-45 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Low setup and maintenance costs</span>
                </li>
              </ul>
            </div>

            <h2>Understanding Foreign Income Exemption</h2>
            <p>
              One of Paraguay&apos;s most attractive features is its territorial tax system. Under this system, only income generated within Paraguay is subject to taxation. This means that any income earned from sources outside Paraguay - whether through digital businesses, investments, or remote work - is completely exempt from Paraguayan taxation.
            </p>

            <h2>Residency Requirements</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Key Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Valid passport</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Clean criminal record</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Proof of income or sufficient funds</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Brief visit to Paraguay for documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Minimal annual presence requirement (1 day)</span>
                </li>
              </ul>
            </div>

            <h2>Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Document preparation: 1-2 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Application submission: 1 day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Processing period: 30-45 days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Valid passport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Birth certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Police clearance</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2>Path to Citizenship</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Benefits of Paraguayan Citizenship</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Visa-free travel to more countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Full political rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Ability to pass citizenship to children</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Ready to Explore Paraguay&apos;s Tax Benefits?</h2>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Book a free consultation to discuss how Paraguay&apos;s tax benefits can work for your specific situation.
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