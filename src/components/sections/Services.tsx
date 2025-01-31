'use client'

import { motion } from 'framer-motion'
import { Plane, Home, Coins, Wallet, Globe2, ShieldCheck } from 'lucide-react'

const services = [
  {
    Icon: Home,
    title: "Tax-Efficient Residency",
    description: "Reduce your tax burden by up to 90% through strategic residency planning in tax-friendly jurisdictions like Panama and Paraguay. Perfect for remote workers and digital professionals.",
    benefit: "Save thousands monthly in income tax"
  },
  {
    Icon: Plane,
    title: "Global Mobility Solutions",
    description: "Gain freedom of movement while optimizing your tax position. We handle everything from residency applications to banking setup in your new home base.",
    benefit: "Live and work from anywhere"
  },
  {
    Icon: Wallet,
    title: "Personal Tax Planning",
    description: "Custom strategies to legally minimize your global tax exposure. Whether you're earning $5,000 or $50,000 monthly, we'll help you keep more of what you earn.",
    benefit: "Maximize your take-home income"
  },
  {
    Icon: Globe2,
    title: "International Banking",
    description: "Access tax-efficient banking solutions in stable jurisdictions. Protect your wealth while maintaining full compliance with international regulations.",
    benefit: "Secure your financial freedom"
  },
  {
    Icon: Coins,
    title: "Investment Structuring",
    description: "Optimize the tax efficiency of your investment portfolio. From crypto to traditional assets, structure your investments to minimize tax impact.",
    benefit: "Grow wealth more efficiently"
  },
  {
    Icon: ShieldCheck,
    title: "Compliance & Protection",
    description: "Sleep easy knowing your tax optimization strategy is 100% legal and compliant. We ensure all structures adhere to international regulations.",
    benefit: "Total peace of mind"
  }
]

export function Services() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/5 via-black to-black" />
      </div>

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
            style={{ top: `${30 * (i + 1)}%` }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-amber-400 font-semibold mb-4 tracking-wide"
          >
            MAXIMIZE YOUR INCOME
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
          >
            Keep More of What You Earn
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Legal strategies to reduce your tax burden and protect your wealth
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Card content */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
                {/* Icon container with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-500">
                    <service.Icon className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-amber-50 group-hover:text-amber-200 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Benefit highlight */}
                <p className="text-amber-400/90 font-medium mb-4 text-sm">
                  {service.benefit}
                </p>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}