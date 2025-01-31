'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const ComparisonItem = ({ title, traditional, modern }: { title: string, traditional: string, modern: string }) => (
  <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-amber-500/10">
    <div className="text-gray-200 font-medium">{title}</div>
    <div className="flex items-center gap-2 text-gray-400">
      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
      <span>{traditional}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-200">
      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
      <span>{modern}</span>
    </div>
  </div>
)

export function Comparison() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-900/5" />
      </div>
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-amber-400 font-semibold mb-4 tracking-wide"
            >
              WHY CHOOSE US
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
            >
              The Sovereign Advantage
            </motion.h2>
          </motion.div>

          {/* Comparison table header */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="text-gray-400">FEATURE</div>
            <div className="text-gray-400">TRADITIONAL SERVICES</div>
            <div className="text-amber-400 font-semibold">SOVEREIGN SOLUTIONS</div>
          </div>

          {/* Comparison items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ComparisonItem
              title="Geographic Focus"
              traditional="Single jurisdiction limitations"
              modern="Global optimization across 30+ jurisdictions"
            />
            <ComparisonItem
              title="Tax Strategy"
              traditional="Basic deductions and credits"
              modern="Strategic residency planning for 90% reduction"
            />
            <ComparisonItem
              title="Service Model"
              traditional="Reactive, time-based billing"
              modern="Proactive planning, results-based fees"
            />
            <ComparisonItem
              title="Expertise"
              traditional="General tax and accounting"
              modern="Sovereign lifestyle optimization specialists"
            />
            <ComparisonItem
              title="Asset Protection"
              traditional="Limited domestic options"
              modern="Multi-jurisdiction wealth protection"
            />
            <ComparisonItem
              title="Response Time"
              traditional="Days or weeks"
              modern="48-hour maximum response time"
            />
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-400 mb-4">
              Ready to optimize your global position?
            </p>
            <p className="text-amber-400">
              Book a consultation to discover your optimization potential
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}