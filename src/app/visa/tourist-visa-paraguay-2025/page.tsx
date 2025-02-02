'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle2, AlertCircle, CreditCard, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ParaguayTouristVisa() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Entry Requirements
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                3 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Paraguay Entry Requirements for US Citizens (2025)
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              Current travel requirements for US citizens visiting Paraguay, including visa-free entry information and essential documentation needed.
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
                src="/images/blog/paraguay-visa.jpg"
                alt="Paraguay Entry Requirements"
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Facts Box */}
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Quick Facts: US Citizens Entry to Paraguay</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Maximum Stay</strong>
                    <span className="text-gray-300">90 days</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Entry Fee</strong>
                    <span className="text-gray-300">No fee required</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CreditCard className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Visa Status</strong>
                    <span className="text-gray-300">Visa-free entry</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Purpose</strong>
                    <span className="text-gray-300">Tourism & Business</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Visa-Free Entry for US Citizens</h2>
            <p>
              As of October 12, 2021, US citizens no longer need a visa to enter Paraguay for stays of up to 90 days for tourism or business purposes. This policy change has made travel to Paraguay significantly more accessible for American citizens.
            </p>

            <h2>Essential Entry Requirements</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Valid US passport with at least 6 months validity beyond planned departure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Proof of onward or return travel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Evidence of sufficient funds for your stay (if requested)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Completed immigration form (provided upon arrival)</span>
                </li>
              </ul>
            </div>

            <h2>Entry Process</h2>
            <ol className="space-y-4">
              <li>
                <strong>Arrival at Immigration</strong>
                <p className="mt-1">Present your passport and complete the immigration form provided at the border.</p>
              </li>
              <li>
                <strong>Immigration Check</strong>
                <p className="mt-1">An immigration officer will verify your passport and may ask about the purpose and duration of your visit.</p>
              </li>
              <li>
                <strong>Entry Stamp</strong>
                <p className="mt-1">Receive your entry stamp, valid for up to 90 days.</p>
              </li>
            </ol>

            <h2>Important Travel Tips</h2>
            <ul className="space-y-2">
              <li>Keep a copy of your passport and entry stamp</li>
              <li>Carry proof of sufficient funds (credit cards, bank statements)</li>
              <li>Have your return flight information readily available</li>
              <li>Consider travel insurance for your trip</li>
            </ul>

            <h2>Extending Your Stay</h2>
            <p>
              If you wish to stay in Paraguay beyond 90 days, you must apply for a residence permit before your authorized stay expires. Consider exploring our residency options below.
            </p>

            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl my-6 sm:my-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Planning a Longer Stay?</h3>
              <p className="mb-4">
                If you&apos;re considering a longer stay in Paraguay, explore our guides about:
              </p>
              <ul className="space-y-2 mb-0">
                <li>
                  <Link href="/residency/temporary-residency-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Temporary Residency Guide
                  </Link>
                </li>
                <li>
                  <Link href="/residency/requirements-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Residency Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/residency/investment-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Investment-Based Residency
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black">
              Need Help Planning Your Move to Paraguay?
            </h2>
            <p className="text-gray-900 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Book a free consultation to discuss residency options and get expert guidance on relocating to Paraguay.
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