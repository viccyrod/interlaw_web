'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
            Tax Optimization Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Expert guides and strategies for global tax optimization and residency planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article - Australia Paraguay */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full"
          >
            <Link href="/blog/aussie-entrepreneurs-paraguay-tax-residency-2025" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all">
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/blog/australia-paraguay-tax-residency.jpg"
                    alt="Australian Entrepreneurs Paraguay Tax Strategy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20">
                    Featured
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min read
                  </div>
                  <span className="text-gray-400 text-sm">Feb 3, 2025</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-200 mb-3 group-hover:text-amber-100">
                  Why Aussie Entrepreneurs Should Get a Paraguay Tax Residency
                </h2>
                <p className="text-gray-400 mb-4">
                  Discover how Australian entrepreneurs can optimize their tax situation through Paraguay tax residency and a Wyoming LLC structure.
                </p>
                <div className="flex items-center text-amber-400 group-hover:text-amber-300">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Other Blog Posts */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/blog/us-llc-formation-guide-2025" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all h-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/blog/wyoming-vs-delaware-llc-formation.jpg"
                    alt="Wyoming vs Delaware LLC Formation Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20">
                    Business Guide
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    8 min read
                  </div>
                </div>
                <h2 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100">
                  Wyoming vs Delaware LLC Formation Guide for Non-Americans (2025)
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  A comprehensive comparison of forming an LLC in Wyoming versus Delaware as a non-U.S. resident.
                </p>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/blog/digital-nomad-tax-optimization" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all h-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/blog/digital-nomad.jpg"
                    alt="Digital Nomad Tax Optimization"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20">
                    Digital Nomads
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    6 min read
                  </div>
                </div>
                <h2 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100">
                  Tax Optimization Strategies for Digital Nomads
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Learn how to legally optimize your tax position while working remotely across different jurisdictions.
                </p>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/blog/paraguay-tax-benefits-2024" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all h-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/blog/paraguay-guide.jpg"
                    alt="Paraguay Tax Benefits Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20">
                    Tax Strategy
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    8 min read
                  </div>
                </div>
                <h2 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100">
                  Paraguay Tax Benefits: Complete Guide for 2024
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Everything you need to know about Paraguay's tax benefits and residency program.
                </p>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/blog/residency-comparison" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all h-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/blog/residency-comparison.jpg"
                    alt="Global Residency Programs Comparison"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20">
                    Comparison
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    10 min read
                  </div>
                </div>
                <h2 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100">
                  Comparing Global Residency Programs: Which One is Right for You?
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  A detailed comparison of residency programs in Paraguay, Panama, Dubai, and Malta.
                </p>
              </div>
            </Link>
          </motion.article>
        </div>
      </div>
    </div>
  )
}