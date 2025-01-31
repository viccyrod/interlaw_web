'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500/20 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-amber-900/5" />
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200">
              Discover Your Tax Savings Potential
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Find out how much you could save through strategic residency planning
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/calculator">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-6 rounded-full w-full sm:w-auto"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-500/20 hover:bg-amber-500/10 px-8 py-6 rounded-full w-full sm:w-auto"
            >
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              Free Calculator
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              No Commitment
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              Instant Results
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}