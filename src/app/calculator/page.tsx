'use client'

import { motion } from 'framer-motion'
import TaxCalculator from '@/components/calculator/TaxCalculator'
import { Calculator, Globe2, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
            Tax Savings Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
            Compare your current tax burden with optimized strategies from around the world.
            See exactly how much you could save with each approach.
          </p>
        </motion.div>

        {/* Calculator Component */}
        <TaxCalculator defaultIncome={100000} defaultStrategy="paraguay" />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
            Ready to Keep Your Hard-Earned Money?
          </h3>

          <p className="text-xl text-gray-300 mb-8">
            Book a complimentary strategy session with our tax optimization experts. We&apos;ll help you:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-gray-200">Calculate Your Total Savings Potential</div>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                <Globe2 className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-gray-200">Choose the Best Country Strategy</div>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-gray-200">Create Your Custom Action Plan</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-8 rounded-lg text-lg">
                Book Your Free Strategy Session
                <Calculator className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <p className="text-gray-400 mt-4">
              Limited spots available. 100% free, no obligations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 