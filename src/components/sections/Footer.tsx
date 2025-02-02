'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-amber-500/10" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/5" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" aria-label="InterLaw - Home">
              <Image
                src="/images/logo.svg"
                alt="InterLaw - Global Tax Optimization Experts"
                width={160}
                height={40}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Global tax optimization experts helping individuals and businesses maximize their wealth through strategic residency planning.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/interlaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-500/10 hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Globe className="w-5 h-5 text-amber-400" />
              </a>
              <a 
                href="tel:+1234567890" 
                className="w-10 h-10 rounded-full bg-amber-500/10 hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-amber-400" />
              </a>
              <a 
                href="mailto:contact@interlaw.io" 
                className="w-10 h-10 rounded-full bg-amber-500/10 hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/tax-optimization" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Tax Optimization
              </Link>
              <Link href="/residency-programs" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Residency Programs
              </Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Insights
              </Link>
              <Link href="/about" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Featured Programs */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4">Featured Programs</h3>
            <nav className="space-y-3">
              <Link href="/paraguay" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Paraguay Residency
              </Link>
              <Link href="/panama" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Panama Friendly Nations
              </Link>
              <Link href="/dubai" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Dubai Business Setup
              </Link>
              <Link href="/malta" className="block text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Malta Non-Dom Program
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-400 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="https://calendly.com/interlaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Global offices in Paraguay, Panama, Dubai, and Malta</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="mailto:contact@interlaw.io" className="hover:text-amber-400 transition-colors">
                    contact@interlaw.io
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} InterLaw.io. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
