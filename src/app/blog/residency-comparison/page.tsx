'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ResidencyComparison() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                Comparison
              </span>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"
            >
              Comparing Global Residency Programs: Which One is Right for You?
            </motion.h1>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                InterLaw Team
              </div>
              <time>January 5, 2024</time>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container px-4 sm:px-6 mx-auto py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none 
            prose-headings:text-gray-900 
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4
            prose-p:text-gray-700 prose-p:mb-6 
            prose-li:text-gray-700
            prose-ul:mb-6 prose-ul:list-disc prose-ul:list-outside
            prose-ol:mb-6 prose-ol:list-decimal prose-ol:list-outside
            prose-strong:text-gray-900"
          >
            <div className="relative w-full h-64 sm:h-96 mb-10 rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/residency-comparison.jpg"
                alt="Global Residency Programs Comparison"
                fill
                className="object-cover"
              />
            </div>

            <p>
              In an increasingly interconnected world, securing residency in a foreign country offers numerous benefits, from enhanced global mobility to access to diverse economic opportunities. Residency by investment programs have become a popular pathway for individuals seeking to establish a foothold in a new country. This article provides an in-depth comparison of four notable residency programs: Paraguay, Panama, Dubai (UAE), and Malta.
            </p>

            <h2>Paraguay Residency Program</h2>
            <p>
              Paraguay offers one of the most accessible and cost-effective residency programs in Latin America. The country is known for its low cost of living, favorable tax environment, and straightforward residency process.
            </p>

            <p>
              <strong>Investment Requirement:</strong> A deposit of approximately $5,500 in a Paraguayan bank is required to qualify for permanent residency.
            </p>

            <p>
              <strong>Path to Citizenship:</strong> After three years of permanent residency, individuals may apply for citizenship, provided they have established significant ties to the country.
            </p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Permanent residency granted upon approval</li>
              <li>No mandatory physical presence requirements</li>
              <li>Territorial tax system, meaning foreign-sourced income is not taxed</li>
            </ul>

            <h2>Panama Residency Program</h2>
            <p>
              Panama&apos;s Friendly Nations Visa program is designed to attract individuals from specific countries, offering a streamlined path to residency. The nation boasts a robust economy, strategic geographic location, and a favorable climate.
            </p>

            <p>
              <strong>Investment Requirement:</strong> Applicants can qualify by either securing employment in Panama or by establishing a corporation and depositing a minimum of $5,000 in a Panamanian bank account.
            </p>

            <p>
              <strong>Path to Citizenship:</strong> After five years of residency, individuals may apply for citizenship, subject to language proficiency and other requirements.
            </p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Permanent residency granted within a short period</li>
              <li>No minimum stay requirements</li>
              <li>Use of the U.S. dollar as legal tender</li>
            </ul>

            <h2>Dubai (UAE) Residency Program</h2>
            <p>
              Dubai, as part of the United Arab Emirates, offers a dynamic environment with world-class infrastructure and a tax-free lifestyle. The UAE has introduced various visa options to attract investors, entrepreneurs, and skilled professionals.
            </p>

            <p><strong>Investment Requirement:</strong> The UAE offers several residency options, including:</p>
            <ul>
              <li>Real Estate Investment: Purchase property worth at least AED 1 million (approximately $272,000)</li>
              <li>Business Investment: Establish or invest in a business within the UAE</li>
            </ul>

            <p>
              <strong>Path to Citizenship:</strong> The UAE has recently opened pathways to citizenship for select individuals, including investors and those with specialized talents, though this remains a discretionary process.
            </p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>No personal income tax</li>
              <li>High standard of living with modern amenities</li>
              <li>Strategic location connecting East and West</li>
            </ul>

            <h2>Malta Residency Program</h2>
            <p>
              Malta, an EU member state, offers residency programs that provide access to the European Union&apos;s benefits, including free movement within the Schengen Area. The country is known for its rich history, favorable climate, and robust financial services sector.
            </p>

            <p><strong>Investment Requirement:</strong> Malta&apos;s residency programs typically require:</p>
            <ul>
              <li>Real Estate Investment: Purchase or lease of property in Malta</li>
              <li>Government Contribution: A financial contribution to the National Development and Social Fund</li>
              <li>Donation: A donation to a registered philanthropic organization</li>
            </ul>

            <p>
              <strong>Path to Citizenship:</strong> Malta offers a citizenship by naturalization process for exceptional services, which requires a significant investment and a residency period of one to three years.
            </p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Access to the EU&apos;s benefits, including the right to live, work, and study in any member state</li>
              <li>Visa-free travel within the Schengen Area</li>
              <li>Stable political and economic environment</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Choosing the right residency program depends on various factors, including investment capacity, desired lifestyle, tax considerations, and long-term goals. Paraguay and Panama offer cost-effective and straightforward pathways to residency with potential routes to citizenship. Dubai provides a tax-free environment with modern infrastructure, appealing to investors and entrepreneurs. Malta offers the advantages of EU residency, including freedom of movement within the Schengen Area.
            </p>
            <p>
              It&apos;s essential to conduct thorough research and consult with legal experts to navigate the complexities of each program and to ensure alignment with personal objectives.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Ready to Explore Your Residency Options?
            </h2>
            <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss which residency program best suits your needs and goals.
            </p>
            <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
} 