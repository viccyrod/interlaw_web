'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Lightbulb, Scale } from 'lucide-react'

const services = [
  {
    Icon: ShieldCheck,
    title: "Global Trademark Protection",
    description: "Protect your brand's identity in key markets across the globe. We handle all the complexity, ensuring your trademarks are filed, monitored, and enforced wherever you need them."
  },
  {
    Icon: Lightbulb,
    title: "Patent Application",
    description: "Innovations deserve protection. Our streamlined patent filing process ensures your inventions are safeguarded internationally, with minimal hassle."
  },
  {
    Icon: Scale,
    title: "IP Consulting",
    description: "Navigate the complexities of intellectual property with expert advice tailored to your business. Whether it's developing a protection strategy or responding to infringement, we've got you covered."
  }
]

export function Services() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
      
      <div className="container px-4 mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16"
        >
          What we help with
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-gray-900/90 to-black border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-500/10">
                  <service.Icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}