'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building, DollarSign, Shield, Scale, Clock } from 'lucide-react'
import Image from 'next/image'

export default function USLLCFormationGuide() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Business Guide
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
              Wyoming vs Delaware LLC Formation Guide for Non-Americans (2025)
            </motion.h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src="/images/blog/wyoming-vs-delaware-llc-formation.jpg"
                alt="Wyoming vs Delaware LLC Formation"
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
              A comprehensive comparison of forming an LLC in Wyoming versus Delaware as a non-U.S. resident in 2025, including costs, privacy, legal framework, and tax implications.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-400 prose-headings:text-amber-200 prose-strong:text-amber-200 prose-a:text-amber-400 hover:prose-a:text-amber-300">
            
            {/* Formation and Maintenance Costs Section */}
            <h2>Formation and Maintenance Costs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Wyoming</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Initial Filing Fee: $100</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Annual Report Fee: $60</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No state income tax</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Delaware</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Initial Filing Fee: $90</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Annual Franchise Tax: $300</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No state income tax for non-Delaware operations</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Wyoming generally offers lower ongoing costs, making it particularly attractive for startups and small businesses. The initial formation costs are comparable, but Wyoming&apos;s significantly lower annual fees provide long-term cost advantages.
            </p>

            {/* Privacy and Anonymity Section */}
            <h2>Privacy and Anonymity</h2>
            
            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400 m-0">Privacy Comparison</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-2">Wyoming</h4>
                  <p className="mb-0">Does not require disclosure of member or manager names in public filings, providing exceptional privacy for business owners.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-2">Delaware</h4>
                  <p className="mb-0">Requires member names for member-managed LLCs, but only manager names for manager-managed structures.</p>
                </div>
              </div>
            </div>

            {/* Tax Implications Section */}
            <h2>Tax Implications for Non-U.S. Residents</h2>

            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Federal Tax Considerations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <strong className="text-amber-200">Disregarded Entity Status:</strong>
                    <p className="mt-1">LLCs can be structured as &quot;disregarded entities&quot; for tax purposes, potentially avoiding U.S. federal income tax if certain conditions are met.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <strong className="text-amber-200">Filing Requirements:</strong>
                    <p className="mt-1">Annual Form 5472 and pro forma Form 1120 filing requirements apply for foreign-owned LLCs.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Wyoming State Taxes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No state income tax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No franchise tax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>4% state sales tax (+ up to 2% local)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Delaware State Taxes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No tax on out-of-state income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>$300 annual franchise tax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>No state sales tax</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Framework Section */}
            <h2>Legal Framework and Asset Protection</h2>

            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400 m-0">Legal Protections Comparison</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-3">Wyoming Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5" />
                      <span>Strong asset protection laws</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5" />
                      <span>Charging order protection for single-member LLCs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-3">Delaware Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5" />
                      <span>Specialized Court of Chancery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5" />
                      <span>Well-established business law precedents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <h2>Making Your Decision</h2>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Choose Wyoming if:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You prioritize privacy and anonymity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You want lower ongoing maintenance costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You&apos;re running an e-commerce or service-based business</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-amber-400 mb-4">Choose Delaware if:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You plan to seek venture capital funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You anticipate complex legal situations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>You&apos;re building a complex corporate structure</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Need Help Setting Up Your LLC?</h2>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Our experts can guide you through the entire process of setting up your LLC in either Wyoming or Delaware, ensuring compliance and optimal structure for your business goals.
              </p>
              <Button 
                className="bg-black text-amber-400 hover:bg-gray-900"
                size="lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
} 