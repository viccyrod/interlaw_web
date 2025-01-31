'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden" style={{ height: '100vh' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* World Map */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full rotate-0 opacity-40">
            <Image
              src="/world-map.svg"
              alt="World Map Background"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative elements with glow */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-amber-400 text-2xl drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="text-amber-400 font-semibold mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PAYING TOO MUCH IN TAXES?
          </motion.p>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Legally Reduce Your Tax Burden by Up to 100%
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform your $5,000 monthly tax bill into $0 through strategic residency planning. 
            Join successful individuals who&apos;ve already optimized their global tax position.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-6 rounded-full">
              Calculate Your Tax Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-amber-500/20 hover:bg-amber-500/10 px-8 py-6 rounded-full">
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              100% Legal & Compliant
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              500+ Clients Helped
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              $10M+ Tax Saved
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}