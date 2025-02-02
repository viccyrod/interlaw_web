'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ResidencyComparison() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Comparison
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Comparing Global Residency Programs: Which One is Right for You?
            </motion.h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src="/images/blog/residency-comparison.jpg"
                alt="Global Residency Programs Comparison"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              In today&apos;s interconnected world, the idea of living and working abroad is increasingly appealing. Obtaining residency in a different country can open doors to new opportunities, favorable tax environments, and diverse cultural experiences.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-400 prose-headings:text-amber-200 prose-strong:text-amber-200 prose-a:text-amber-400 hover:prose-a:text-amber-300">
            
            <h2>Paraguay Residency Program</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Low investment requirement: $5,500 USD bank deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Path to citizenship in just 3 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>No mandatory physical presence requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Territorial tax system - only local income is taxed</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">2025 Updates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Steady increase in applicants due to program accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Proof of financial support required despite low deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Growing economy with emerging opportunities</span>
                </li>
              </ul>
            </div>

            <h2>Panama Residency Program</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Program Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Friendly Nations Visa for eligible countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>$5,000 minimum bank deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Path to citizenship in 5 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>US dollar as official currency</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">2025 Updates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Adjusted documentation requirements for Friendly Nations Visa</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Stable economy attracting more investors</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Professional legal guidance recommended for current requirements</span>
                </li>
              </ul>
            </div>

            <h2>Dubai (UAE) Residency Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Investment Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Real Estate: AED 1 million ($272,000 USD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Business investment options available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Golden Visa program for qualified investors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Zero personal income tax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>World-class infrastructure and healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Global business and travel hub</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2>Malta Residency Program</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Program Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Real estate purchase or lease requirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Government contribution required</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Philanthropic donation to registered charity</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">2025 Updates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Increased cost of living</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>More complex requirements and longer processing times</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Professional guidance highly recommended</span>
                </li>
              </ul>
            </div>

            <h2>Making Your Decision</h2>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Key Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Initial and ongoing financial requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Lifestyle preferences and location benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Tax implications for your income sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Path to citizenship requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>Business and personal long-term goals</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-xl my-8 border border-amber-500/20">
              <p className="text-sm text-gray-400 italic mb-0">
                Disclaimer: Residency program requirements and benefits are subject to change. It&apos;s important to consult with legal and financial professionals to obtain the most current information and personalized advice.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Ready to Explore Your Residency Options?</h2>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Book a free consultation to discuss which residency program best suits your needs and goals.
              </p>
              <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-black text-amber-400 hover:bg-gray-900"
                  size="lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 