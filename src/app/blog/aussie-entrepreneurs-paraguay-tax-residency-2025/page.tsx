'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, ArrowLeft, Calculator, Building2, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AussieEntrepreneursParaguay() {
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
                5 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Why Aussie Entrepreneurs Should Get a Paraguay Tax Residency
            </motion.h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src="/images/blog/australia-paraguay-tax-residency.jpg"
                alt="Australian Entrepreneurs Paraguay Tax Strategy"
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
              Unlocking Tax Savings: Why Australian Entrepreneurs Should Consider Paraguay Tax Residency and a Wyoming LLC
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-400 prose-headings:text-amber-200 prose-strong:text-amber-200 prose-a:text-amber-400 hover:prose-a:text-amber-300">
            <p>
              G&apos;day, Aussie entrepreneurs! If you&apos;re keen to keep more of your hard-earned dollars and optimize your tax situation, it&apos;s time to explore the dynamic duo of Paraguay tax residency and a Wyoming LLC. Let&apos;s dive into how this powerful combination can lead to significant savings and business advantages.
            </p>

            <h2>Paraguay Tax Residency: A Gateway to Tax Efficiency</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <strong className="text-amber-200">Territorial Tax System:</strong>
                    <p className="mt-1">Paraguay operates on a territorial taxation basis, meaning foreign-sourced income is not taxed. If your business generates revenue from outside Paraguay and you don&apos;t remit it into the country, you&apos;re looking at a 0% tax rate on that income.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <strong className="text-amber-200">Simple Residency Process:</strong>
                    <p className="mt-1">Obtaining tax residency in Paraguay is straightforward and affordable. The process involves minimal documentation and doesn&apos;t require you to reside in the country full-time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <strong className="text-amber-200">Low Local Taxes:</strong>
                    <p className="mt-1">For income sourced within Paraguay, the tax rate is a modest 10%. This competitive rate is among the lowest in the Mercosur region.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2>Wyoming LLC: Enhancing Business Structure and Protection</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>No State Income Tax: Wyoming doesn&apos;t impose a state corporate income tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Asset Protection: Robust laws safeguarding your personal assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Privacy: Strong confidentiality protections for personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Cost-Effective: Low formation and maintenance costs</span>
                </li>
              </ul>
            </div>

            <h2>Real-Life Example: Maximizing Tax Savings</h2>
            <div className="grid gap-4 sm:grid-cols-2 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Australian Tax Liability</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Income: $200,000</p>
                  <p className="text-gray-400">Tax: $56,138</p>
                  <p className="text-gray-400">Medicare Levy: $4,000</p>
                  <p className="text-white font-semibold">Total: $60,138</p>
                </div>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Paraguay-Wyoming Strategy</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Paraguay Tax: $0</p>
                  <p className="text-gray-400">Wyoming State Tax: $0</p>
                  <p className="text-white font-semibold">Total Savings: $60,138</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl p-6 my-8 border border-amber-500/20 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Calculate Your Personal Tax Savings</h3>
              <p className="text-gray-400 mb-4">
                Use our interactive calculator to see exactly how much you could save with the Paraguay-Wyoming strategy.
              </p>
              <Link href="/global-tax-savings-calculator">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black">
                  Try Our Tax Calculator
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <h2>Key Considerations</h2>
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Consult with international tax experts for compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Understand reporting requirements in both jurisdictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Evaluate alignment with your business model</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Ready to Optimize Your Tax Strategy?</h2>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Calculate your potential savings and book a free consultation to discuss how Paraguay&apos;s tax benefits can work for your Australian business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/global-tax-savings-calculator">
                  <Button 
                    className="bg-black text-amber-400 hover:bg-gray-900 w-full sm:w-auto"
                    size="lg"
                  >
                    Calculate Your Savings
                    <Calculator className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="bg-black text-amber-400 hover:bg-gray-900 w-full sm:w-auto"
                    size="lg"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 