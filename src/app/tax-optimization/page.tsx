'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, CheckCircle2, Globe2 } from 'lucide-react'

const StrategyCard = ({ 
  country, 
  benefits,
  timeline, 
  stayRequirement,
  description,
  isRecommended
}: {
  country: string
  benefits: string[]
  timeline: string
  stayRequirement: string
  description: string
  isRecommended?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-gradient-to-br ${isRecommended ? 'from-amber-950/30 to-amber-900/20' : 'from-black to-amber-950/20'} rounded-2xl p-8 border ${isRecommended ? 'border-amber-500/30' : 'border-amber-500/10'} hover:border-amber-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5`}
  >
    <div className="flex items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-3">
        <Globe2 className="w-6 h-6 text-amber-400" />
        <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
          {country}
        </h3>
      </div>
      {isRecommended && (
        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold">
          Recommended
        </span>
      )}
    </div>
    
    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
      {description}
    </p>

    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Key Benefits</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>{timeline}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>{stayRequirement}</span>
        </div>
      </div>

      <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
)

export default function TaxOptimization() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
            Strategic Tax Optimization
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Discover how strategic residency planning can dramatically reduce your global tax burden. 
            Our carefully selected jurisdictions offer significant advantages for international entrepreneurs and investors.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/calculator">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-6 rounded-full">
                Calculate Your Potential
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div className="md:col-span-2">
            <StrategyCard
              country="Paraguay"
              description="The fastest and most efficient tax optimization strategy available. Perfect for digital entrepreneurs and investors seeking rapid implementation with minimal presence requirements and the lowest setup costs."
              benefits={[
                "Foreign income exemption",
                "Fastest processing (30-45 days)",
                "Minimal presence needed (1 day/year)",
                "Lowest setup costs globally"
              ]}
              timeline="30-45 day process"
              stayRequirement="Minimal presence required"
              isRecommended={true}
            />
          </motion.div>

          <StrategyCard
            country="Cyprus"
            description="An attractive EU destination offering a flexible non-domiciled tax regime with minimal stay requirements and strong business infrastructure. Perfect for international entrepreneurs and investors seeking EU presence."
            benefits={[
              "Non-domiciled tax benefits",
              "No inheritance tax",
              "EU market access",
              "Flexible residency options"
            ]}
            timeline="2-3 month process"
            stayRequirement="60 days annually"
          />

          <StrategyCard
            country="Dubai"
            description="Premier global business hub offering a sophisticated tax-free environment with world-class infrastructure and exceptional quality of life in a cosmopolitan setting."
            benefits={[
              "Zero income tax regime",
              "Global financial center",
              "World-class infrastructure",
              "Strategic location"
            ]}
            timeline="2-3 month process"
            stayRequirement="183 days or 90 days with business"
          />

          <StrategyCard
            country="Malta"
            description="Mediterranean EU member state offering an attractive non-dom regime, combining European lifestyle with significant tax advantages for international residents."
            benefits={[
              "EU residency benefits",
              "Non-dom tax regime",
              "Strong banking sector",
              "Mediterranean lifestyle"
            ]}
            timeline="4-6 month process"
            stayRequirement="183 days annually"
          />

          <StrategyCard
            country="Panama"
            description="Strategic hub in the Americas offering strong financial privacy and territorial taxation, ideal for international business owners seeking confidentiality and flexibility."
            benefits={[
              "Territorial tax system",
              "Strong privacy laws",
              "Friendly Nations Visa",
              "No forced heirship"
            ]}
            timeline="3-4 month process"
            stayRequirement="Flexible presence rules"
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
            Ready to Explore Your Options?
          </h2>
          <p className="text-gray-400 mb-8">
            Schedule a consultation to discuss which strategy aligns best with your goals and lifestyle preferences.
          </p>
          <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-6 rounded-full">
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 