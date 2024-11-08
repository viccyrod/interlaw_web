'use client'

import { motion } from 'framer-motion'

export function Mission() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
      
      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 leading-relaxed">
            At InterLaw.io we have a single focus: 
            <span className="text-red-500 font-semibold"> protect your intellectual property, worldwide.</span>
          </p>
          <p className="text-xl text-gray-400">
            Whether it&apos;s Trademarks, Patents or Copyright, we take care of your IP so you can focus on profiting from it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}