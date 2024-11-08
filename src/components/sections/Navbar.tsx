'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-500/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <Image
              src="/interlaw_logo.svg"
              alt="Interlaw Logo"
              width={120}
              height={40}
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Blog
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/iprotect" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              IProtect App
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Button 
              variant="default" 
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-red-500/30 hover:-translate-y-0.5"
            >
              Book a Call
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="py-4 space-y-4">
            <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/iprotect" className="block text-gray-400 hover:text-white transition-colors">
              IProtect App
            </Link>
            <Button 
              variant="default" 
              size="sm"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Book a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}