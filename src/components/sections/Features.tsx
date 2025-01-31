'use client'

import { motion } from 'framer-motion'
import { Globe2, Wallet, Shield, MapPin, Briefcase, Building2 } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: "Strategic Citizenship",
    description: "Obtain powerful passports through citizenship by investment programs in Panama, Portugal, or Dubai. Create a robust Plan B for you and your family.",
    highlight: "From $100k investment"
  },
  {
    icon: Wallet,
    title: "Tax Optimization",
    description: "Legally reduce your tax burden through strategic residency planning. Perfect for digital nomads, remote workers, and international entrepreneurs.",
    highlight: "Save up to 90% on taxes"
  },
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Shield your wealth through international structuring. Access stable banking jurisdictions and protect your assets from political uncertainty.",
    highlight: "Multi-jurisdiction security"
  },
  {
    icon: MapPin,
    title: "Residency Programs",
    description: "Fast-track residency in tax-friendly jurisdictions. From Panama's Friendly Nations Visa to Dubai's Golden Visa, we handle the entire process.",
    highlight: "As fast as 30 days"
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Establish tax-efficient business structures in strategic jurisdictions. Perfect for digital businesses and international operations.",
    highlight: "0% corporate tax options"
  },
  {
    icon: Building2,
    title: "Banking Access",
    description: "Open international bank accounts in stable jurisdictions. Secure your wealth and gain access to global banking infrastructure.",
    highlight: "Multi-currency accounts"
  }
]

export function Features() {
  return (
    <section className="relative py-32 bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/5 via-black to-black" />
      </div>

      <div className="container px-4 mx-auto relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-amber-400 font-semibold mb-4 tracking-wide"
          >
            YOUR PATH TO FREEDOM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
          >
            Comprehensive Freedom Solutions
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative p-8 rounded-xl bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-500">
                    <feature.icon className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-amber-50 group-hover:text-amber-200 transition-colors duration-500">
                  {feature.title}
                </h3>

                <div className="text-amber-400/90 text-sm font-medium mb-4">
                  {feature.highlight}
                </div>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}