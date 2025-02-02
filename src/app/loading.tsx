'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image
          src="/logo.svg"
          alt="Interlaw Logo"
          width={150}
          height={50}
          priority
        />
      </motion.div>
    </div>
  )
} 