'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header role="banner" aria-label="Main navigation">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-b border-amber-500/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group" aria-label="InterLaw - Home">
              <Image
                src="/images/logo.svg"
                alt="InterLaw - Global Tax Optimization Experts"
                width={160}
                height={40}
                className="transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8" role="navigation">
                <Link 
                  href="/" 
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors relative group"
                  aria-label="Home page"
                >
                  Home
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </Link>
                <Link 
                  href="/tax-optimization" 
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors relative group"
                  aria-label="Tax optimization strategies"
                >
                  Tax Optimization
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </Link>
                <Link 
                  href="/blog" 
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors relative group"
                  aria-label="Latest tax insights and articles"
                >
                  Insights
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </nav>

              <Link 
                href="https://calendly.com/interlaw-io/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/30 hover:-translate-y-0.5 flex items-center gap-2"
                  aria-label="Schedule a free consultation"
                >
                  <Phone className="w-4 h-4" />
                  Free Consultation
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-amber-500/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6 text-amber-400" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div 
            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="py-4 space-y-4" role="navigation">
              <Link 
                href="/" 
                className="block text-gray-400 hover:text-amber-400 transition-colors px-4 py-2 hover:bg-amber-500/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/tax-optimization" 
                className="block text-gray-400 hover:text-amber-400 transition-colors px-4 py-2 hover:bg-amber-500/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Tax Optimization
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-400 hover:text-amber-400 transition-colors px-4 py-2 hover:bg-amber-500/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <div className="px-4 pt-2">
                <Link 
                  href="https://calendly.com/interlaw-io/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    variant="default" 
                    size="sm"
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Free Consultation
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  )
}