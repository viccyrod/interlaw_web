'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Image from 'next/image'

const comparison = {
  "other": [
    { text: "National Only Focus", negative: true },
    { text: "Reactive, not proactive", negative: true },
    { text: "Charge per phone call", negative: true },
    { text: "Generalists", negative: true }
  ],
  "us": [
    { text: "Global Focus for a connected world", negative: false },
    { text: "Preventative law - making sure you're protected before you need it", negative: false },
    { text: "We only get paid for results - not answering emails", negative: false },
    { text: "We are specialists in international IP law. No divorces, no DUIs", negative: false }
  ]
}

export function Comparison() {
  return (
    <section className="relative py-24 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Why work with us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Other IP Firms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-6">Other IP Firms</h3>
            <ul className="space-y-4">
              {comparison.other.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* InterLaw */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-red-950/50 to-gray-900/50 border border-red-500/20"
          >
            <div className="mb-6">
              <Image
                src="/interlaw_logo.svg"
                alt="Interlaw Logo"
                width={120}
                height={40}
                className="transition-opacity duration-300"
              />
            </div>
            <ul className="space-y-4">
              {comparison.us.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <Check className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}