'use client'

import { motion } from 'framer-motion'
import { Globe2, Rocket, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: "Global Protection",
    description: "At InterLaw.io, we combine cutting-edge technology with expert legal services to protect your brand on a global scale."
  },
  {
    icon: Rocket,
    title: "Startup to Enterprise",
    description: "From startups to established enterprises, our IP solutions are designed to meet the needs of innovative businesses in tech, manufacturing, and e-commerce."
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description: "Whether you're filing patents, securing trademarks, or seeking IP consultation, we make the complex simple."
  }
]

export function Features() {
  return (
    <section className="relative py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative p-8 rounded-xl bg-gray-900/50 border border-red-500/10 hover:border-red-500/30 transition-colors duration-300">
                <feature.icon className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}