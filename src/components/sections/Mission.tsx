'use client'

import { motion } from 'framer-motion'

export function Mission() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-900/5" />
      </div>
      
      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed"
          >
            Our mission is simple: help successful individuals
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 font-semibold"> achieve true financial and personal freedom.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 leading-relaxed"
          >
            Through strategic citizenship planning, tax optimization, and global banking solutions, 
            we empower you to break free from single-jurisdiction constraints and create a life of true sovereignty.
          </motion.p>

          {/* Stats section */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-amber-500/10 pt-12">
            {[
              { number: "100%", label: "Potential Tax Reduction" },
              { number: "100+", label: "Available Jurisdictions" },
              { number: "24h", label: "Response Time" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}