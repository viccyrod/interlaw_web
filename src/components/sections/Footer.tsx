'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/5" />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <Image
            src="/interlaw_logo.svg"
            alt="Interlaw Logo"
            width={100}
            height={35}
            className="opacity-80"
          />
          
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} interlaw.io. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
