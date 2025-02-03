'use client'

import { motion } from 'framer-motion'
import { Briefcase, Globe2, Building2, Lock } from 'lucide-react'

const benefits = [
  {
    Icon: Briefcase,
    title: "Multiple Passports",
    description: "Unlock unprecedented freedom with strategic citizenship planning. Access visa-free travel to 180+ countries and create options for you and your family."
  },
  {
    Icon: Globe2,
    title: "Global Lifestyle",
    description: "Live where you want, when you want. From tropical Panama to vibrant Dubai, design your ideal lifestyle while optimizing your tax position."
  },
  {
    Icon: Building2,
    title: "Asset Protection",
    description: "Secure your wealth through international diversification. Access stable banking jurisdictions and protect your assets from political uncertainty."
  },
  {
    Icon: Lock,
    title: "Personal Freedom",
    description: "Break free from single-jurisdiction constraints. Create a life of true sovereignty with multiple residencies and strategic citizenship options."
  }
]

export function About() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/5 via-black to-black" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-amber-400 font-semibold mb-4 tracking-wide"
          >
            EMBRACE TRUE FREEDOM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
          >
            The Sovereign Individual Lifestyle
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Break free from the constraints of a single jurisdiction. Join successful entrepreneurs and professionals who have embraced global citizenship to optimize their freedom, privacy, and wealth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl opacity-50" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10">
                    <benefit.Icon className="w-8 h-8 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-50">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
            &quot;The biggest risk in today&apos;s world is being tied to a single jurisdiction. True freedom comes from having options.&quot;
          </blockquote>
          <p className="text-amber-400 font-semibold">
            - Modern Sovereign Individual
          </p>
        </motion.div>
      </div>
    </section>
  )
} 