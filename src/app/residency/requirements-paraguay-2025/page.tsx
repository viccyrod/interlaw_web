'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle2, Building, FileText, Globe2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ResidencyRequirementsParaguay() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Residency Guide
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
              Paraguay Residency Requirements (2025 Guide)
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              Complete overview of Paraguay&apos;s residency requirements, including documentation, financial obligations, and processing timelines for 2025.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none 
            prose-headings:text-amber-200
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:tracking-tight
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3
            prose-p:text-gray-300 prose-p:mb-4 sm:prose-p:mb-6 prose-p:leading-relaxed
            prose-li:text-gray-300 prose-li:leading-relaxed
            prose-ul:mb-4 sm:prose-ul:mb-6 prose-ul:list-disc prose-ul:list-outside
            prose-strong:text-amber-200
            prose-a:text-amber-400 hover:prose-a:text-amber-300"
          >
            {/* Featured Image */}
            <div className="relative w-full h-48 sm:h-64 md:h-96 mb-6 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/residency-requirements.jpg"
                alt="Paraguay Residency Requirements"
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Facts Box */}
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Residency Options Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Processing Time</strong>
                    <span className="text-gray-300">Approximately 90 days</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Investment Option</strong>
                    <span className="text-gray-300">$70,000 USD minimum</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Documentation</strong>
                    <span className="text-gray-300">Apostilled & Translated</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Globe2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Language</strong>
                    <span className="text-gray-300">Spanish recommended</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Residency Options in Paraguay</h2>
            <p>
              Paraguay provides two primary pathways to residency: Temporary and Permanent. Each option has its own requirements and benefits, designed to accommodate different needs and circumstances.
            </p>

            <h2>1. Temporary Residency Requirements</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl mb-8 border border-amber-500/20">
              <h3 className="text-lg font-semibold text-amber-200 mb-4">Key Documents Required</h3>
              <ul className="space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Valid passport with at least 6 months validity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Birth certificate (apostilled and translated to Spanish)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Police clearance certificate (issued within 6 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Proof of address in Paraguay</span>
                </li>
              </ul>
            </div>

            <h3>Sworn Statements Required</h3>
            <ul>
              <li>Commitment to abide by Paraguayan laws</li>
              <li>Declaration of intended professional or economic activity</li>
            </ul>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-lg font-semibold text-amber-200 mb-4">Important Update</h3>
              <p className="mb-0">
                As of 2025, there is no longer a requirement to demonstrate financial solvency through a bank deposit for temporary residency applications.
              </p>
            </div>

            <h2>2. Permanent Residency Requirements</h2>
            <p>
              Permanent residency offers indefinite stay in Paraguay and a path to citizenship. There are two main routes to obtain permanent residency:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
              <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl border border-amber-500/20">
                <h3 className="text-lg font-semibold text-amber-200 mb-3">After Temporary Residency</h3>
                <ul className="space-y-2 mb-0 text-base">
                  <li>Wait period: 21 months</li>
                  <li>Basic proof of solvency</li>
                  <li>Maintained legal status</li>
                  <li>Updated documentation</li>
                </ul>
              </div>
              <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl border border-amber-500/20">
                <h3 className="text-lg font-semibold text-amber-200 mb-3">Direct Investment</h3>
                <ul className="space-y-2 mb-0 text-base">
                  <li>$70,000 USD minimum investment</li>
                  <li>Business plan submission</li>
                  <li>SUACE registration</li>
                  <li>Investment proof</li>
                </ul>
              </div>
            </div>

            <h2>Processing Timeline</h2>
            <ol>
              <li>
                <strong>Document Preparation</strong>
                <p>2-3 weeks for gathering and authenticating documents</p>
              </li>
              <li>
                <strong>Application Review</strong>
                <p>Approximately 90 days for processing</p>
              </li>
            </ol>

            <h2>General Considerations</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl mb-8 border border-amber-500/20">
              <ul className="space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Language: Spanish or Guarani proficiency recommended but not mandatory</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Healthcare: Consider obtaining health insurance coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Taxation: Foreign-sourced income exempt under territorial tax system</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-lg font-semibold text-amber-200 mb-4">Related Resources</h3>
              <p className="mb-4">
                Learn more about specific residency pathways:
              </p>
              <ul className="mb-0">
                <li>
                  <Link href="/residency/temporary-residency-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Temporary Residency Guide
                  </Link>
                </li>
                <li>
                  <Link href="/residency/investment-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Investment-Based Residency
                  </Link>
                </li>
                <li>
                  <Link href="/visa/tourist-visa-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Tourist Visa Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black">
              Ready to Start Your Residency Journey?
            </h2>
            <p className="text-gray-900 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Book a consultation to discuss your residency options and get expert guidance on relocating to Paraguay.
            </p>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 