'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle2, AlertCircle, Briefcase, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TemporaryResidencyParaguay() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-sm">
                Residency Guide
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                5 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent tracking-tight"
            >
              How to Get Temporary Residency in Paraguay (2025 Guide)
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
            >
              Complete guide to obtaining temporary residency in Paraguay, including requirements, process, timeline, and costs for 2025.
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
                src="/images/blog/temporary-residency.jpg"
                alt="Temporary Residency in Paraguay"
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Facts Box */}
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Quick Facts: Temporary Residency</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Processing Time</strong>
                    <span className="text-gray-300">Approximately 90 days</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Stay Requirement</strong>
                    <span className="text-gray-300">At least 1 day per year</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Validity</strong>
                    <span className="text-gray-300">2 years, renewable</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-amber-200">Path to Permanent</strong>
                    <span className="text-gray-300">After 21 months</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>What is Temporary Residency?</h2>
            <p>
              Temporary residency permits individuals to live, work, and invest in Paraguay for a period of two years. After 21 months, temporary residents can apply for permanent residency. Paraguay offers a favorable tax environment with a territorial tax system, meaning foreign-sourced income is exempt from local taxation.
            </p>

            <h2>Benefits of Temporary Residency</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Right to live and work in Paraguay</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Access to territorial tax system (foreign income exempt)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Path to permanent residency after 21 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Minimal presence requirement (1 day per year)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Option to include family members</span>
                </li>
              </ul>
            </div>

            <h2>Required Documents</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Valid passport with at least 6 months validity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Birth certificate (apostilled and translated to Spanish)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Police clearance certificate (issued within 6 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Proof of address in Paraguay</span>
                </li>
              </ul>
            </div>

            <h3>Sworn Statements Required</h3>
            <ul className="space-y-2">
              <li>Commitment to abide by Paraguayan laws</li>
              <li>Declaration of intended professional or economic activity</li>
            </ul>

            <h2>Application Process</h2>
            <ol className="space-y-4">
              <li>
                <strong>Initial Consultation and Planning</strong>
                <p className="mt-1">Assess your eligibility and plan the application process.</p>
              </li>
              <li>
                <strong>Document Preparation</strong>
                <p className="mt-1">Gather and authenticate all required documents.</p>
              </li>
              <li>
                <strong>Application Submission</strong>
                <p className="mt-1">Submit the complete application to the Dirección General de Migraciones in Paraguay.</p>
              </li>
              <li>
                <strong>Processing Period</strong>
                <p className="mt-1">Wait for application review and approval, typically within 90 days.</p>
              </li>
              <li>
                <strong>Residency Card Collection</strong>
                <p className="mt-1">Upon approval, collect your temporary residency card.</p>
              </li>
            </ol>

            <h2>Maintaining Your Residency</h2>
            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Key Requirements</h3>
              <ul className="space-y-3 sm:space-y-4 mb-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Visit Paraguay at least once per year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Keep your documentation current</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Renew your residency card before expiration</span>
                </li>
              </ul>
            </div>

            <h2>Path to Permanent Residency</h2>
            <p>
              After 21 months of temporary residency, you can apply for permanent residency. This offers several advantages:
            </p>
            <ul className="space-y-2">
              <li>No need for periodic renewals</li>
              <li>Stronger rights and protections</li>
              <li>Eligibility for citizenship after an additional 3 years</li>
            </ul>

            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl my-6 sm:my-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Important Notes</h3>
              <ul className="space-y-2 mb-0">
                <li>The previous requirement to deposit $5,500 USD in a Paraguayan bank has been removed</li>
                <li>Processing times may vary; plan your application accordingly</li>
                <li>All documents must be properly authenticated and translated</li>
              </ul>
            </div>

            <div className="bg-amber-950/30 p-4 sm:p-6 rounded-xl my-6 sm:my-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Related Resources</h3>
              <p className="mb-4">
                Learn more about residency options in Paraguay:
              </p>
              <ul className="space-y-2 mb-0">
                <li>
                  <Link href="/residency/requirements-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Detailed Requirements Guide
                  </Link>
                </li>
                <li>
                  <Link href="/residency/investment-paraguay-2025" className="text-amber-400 hover:text-amber-300">
                    Investment-Based Residency
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
              Ready to Start Your Residency Journey?
            </h2>
            <p className="text-gray-900 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Book a consultation to discuss your residency options and get expert guidance on relocating to Paraguay.
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