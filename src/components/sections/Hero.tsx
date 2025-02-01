'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
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
      <div className="container px-4 sm:px-6 mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative elements with glow */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl sm:text-2xl text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="text-sm sm:text-base text-amber-400 font-semibold mb-3 sm:mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PAYING TOO MUCH IN TAXES?
          </motion.p>

          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 relative bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             Reduce Your Tax Burden by Up to 100%
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform your monthly tax bill into $0 through strategic residency planning. 
            Join successful individuals who have already optimized their global tax position.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0"
          >
            <Link href="/calculator" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base">
                Calculate Your Tax Savings
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-amber-500/20 hover:bg-amber-500/10 px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 px-2 sm:px-0"
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