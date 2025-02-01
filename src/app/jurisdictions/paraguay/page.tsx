'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Calendar, CheckCircle2, Globe2, Building2, Briefcase } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ParaguayPage() {
  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10" />
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 lg:py-32 flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"
            >
              Paraguay Tax Strategy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl"
            >
              The fastest path to tax optimization with minimal presence requirements and efficient processing.
              Perfect for digital entrepreneurs and location-independent professionals.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/calculator">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-6 rounded-full">
                  Calculate Your Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto border-amber-500/20 hover:bg-amber-500/10 px-8 py-6 rounded-full">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10"
          >
            <Clock className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-amber-200 mb-2">Fastest Processing</h3>
            <p className="text-gray-400">Complete your residency process in just 30-45 days, the fastest option available globally.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10"
          >
            <Calendar className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-amber-200 mb-2">Minimal Presence</h3>
            <p className="text-gray-400">Only 1 day per year physical presence required to maintain your residency status.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 border border-amber-500/10"
          >
            <Building2 className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-amber-200 mb-2">Tax Benefits</h3>
            <p className="text-gray-400">0% tax on foreign-source income and no wealth tax, creating an optimal tax environment.</p>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent text-center">
            Simple 3-Step Process
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-400 font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-200 mb-2">Initial Consultation</h3>
                <p className="text-gray-400">We'll assess your situation and confirm if Paraguay is the optimal choice for your tax optimization strategy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-400 font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-200 mb-2">Documentation Preparation</h3>
                <p className="text-gray-400">Our team handles all necessary paperwork and translations, ensuring a smooth application process.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-400 font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-200 mb-2">Residency Approval</h3>
                <p className="text-gray-400">Complete the process with a brief visit to Paraguay, and receive your residency card within 30-45 days.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent text-center">
            Basic Requirements
          </h2>
          <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 rounded-xl p-6 sm:p-8 border border-amber-500/10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Clean criminal record</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Valid passport</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Proof of income or sufficient funds</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Birth certificate</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-8">
            Join the growing community of international entrepreneurs who have chosen Paraguay as their tax optimization strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/calculator">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-6 rounded-full">
                Calculate Your Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-amber-500/20 hover:bg-amber-500/10 px-8 py-6 rounded-full">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 