'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We assess your situation and create a tailored strategy for your tax optimization journey.',
  },
  {
    number: '02',
    title: 'Document Preparation',
    description: 'Our team handles all paperwork, translations, and legal requirements for your Paraguay residency.',
  },
  {
    number: '03',
    title: 'Local Support',
    description: 'Receive dedicated concierge assistance for bank accounts, housing, and settling in Paraguay.',
  },
  {
    number: '04',
    title: 'Tax Optimization',
    description: "We structure your affairs to legally minimize your global tax burden through Paraguay's territorial tax system.",
  }
]

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-32 bg-navy-light">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-offwhite">
              Your Journey to Tax Freedom
            </h2>
            <p className="text-coolgrey text-lg max-w-2xl mx-auto">
              Our white-glove service handles every step of your transition to Paraguay,
              ensuring a smooth and efficient process.
            </p>
          </motion.div>

          {/* Process steps */}
          <div className="grid gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
              >
                {/* Step number */}
                <div className="flex-none">
                  <span className="inline-block text-2xl sm:text-3xl font-serif font-bold text-champagne opacity-50">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-offwhite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-coolgrey">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 sm:left-5 top-12 bottom-0 w-px bg-champagne/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 