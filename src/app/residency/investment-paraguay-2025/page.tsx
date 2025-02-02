'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle2, Building, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function InvestmentResidencyParaguay() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Investment Guide
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                4 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              Paraguay Residency by Investment (2025 Guide)
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              Complete guide to obtaining permanent residency in Paraguay through investment, including requirements, process, and benefits for 2025.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 mx-auto py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none 
            prose-headings:text-amber-200
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:tracking-tight
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3
            prose-p:text-gray-300 prose-p:mb-4 sm:prose-p:mb-6 prose-p:leading-relaxed
            prose-li:text-gray-300 prose-li:leading-relaxed
            prose-ul:mb-4 sm:prose-ul:mb-6 prose-ul:list-disc prose-ul:list-outside
            prose-strong:text-amber-200
            prose-a:text-amber-400 hover:prose-a:text-amber-300"
          >
            {/* Featured Image */}
            <div className="relative w-full h-48 sm:h-64 md:h-96 mb-6 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/investment-paraguay.jpg"
                alt="Investment Opportunities in Paraguay"
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Facts Box */}
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Investment Program Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Investment Amount</strong>
                    <span className="text-gray-300">$70,000 USD minimum</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Processing Time</strong>
                    <span className="text-gray-300">Approximately 3 months</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Business Setup</strong>
                    <span className="text-gray-300">Required via SUACE</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Family Inclusion</strong>
                    <span className="text-gray-300">Spouse & dependents</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Investment Requirements</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Establish a company in Paraguay through SUACE</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Invest $70,000 USD minimum (can be distributed over 10 years)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Submit comprehensive business plan detailing investment timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Maintain investment throughout residency period</span>
                </li>
              </ul>
            </div>

            <h2>Application Process</h2>
            <ol className="space-y-4">
              <li>
                <strong>Business Plan Development</strong>
                <p className="mt-1">Create a detailed business plan showing the $70,000 investment distribution over 10 years.</p>
              </li>
              <li>
                <strong>Company Registration</strong>
                <p className="mt-1">Register your business through the Unified System of Opening and Closing Companies (SUACE).</p>
              </li>
              <li>
                <strong>Residency Application</strong>
                <p className="mt-1">Submit permanent residency application with business plan and required documentation.</p>
              </li>
              <li>
                <strong>Application Review</strong>
                <p className="mt-1">Wait for processing and approval, typically completed within three months.</p>
              </li>
            </ol>

            <h2>Benefits of Investment Residency</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Fast-track to permanent residency (approximately 3 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Minimal physical presence requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Path to citizenship after 3 years of permanent residency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Option to include immediate family members</span>
                </li>
              </ul>
            </div>

            <h2>Additional Considerations</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl my-6 sm:my-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Important Notes</h3>
              <ul className="space-y-2 mb-0">
                <li>Residency cards must be renewed every 10 years</li>
                <li>Language proficiency required for citizenship</li>
                <li>Investment must be maintained and documented</li>
                <li>Business operations should comply with local regulations</li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl my-6 sm:my-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Related Resources</h3>
              <p className="mb-4">
                If you&apos;re considering investing in Paraguay, explore our guides about:
              </p>
              <ul className="space-y-2 mb-0">
                <li>
                  <Link href="/residency/requirements-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    General Residency Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/residency/temporary-residency-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Temporary Residency Guide
                  </Link>
                </li>
                <li>
                  <Link href="/visa/tourist-visa-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Tourist Visa Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black">
              Ready to Invest in Paraguay?
            </h2>
            <p className="text-gray-900 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Book a consultation to discuss investment options and get expert guidance on establishing your business in Paraguay.
            </p>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 