'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Predefined particle positions for consistency
const PARTICLE_POSITIONS = [
    { x: 15, y: 25 }, { x: 35, y: 45 }, { x: 55, y: 65 }, { x: 75, y: 85 },
    { x: 25, y: 35 }, { x: 45, y: 55 }, { x: 65, y: 75 }, { x: 85, y: 15 },
    { x: 20, y: 80 }, { x: 40, y: 20 }, { x: 60, y: 40 }, { x: 80, y: 60 },
    { x: 10, y: 90 }, { x: 30, y: 10 }, { x: 50, y: 30 }, { x: 70, y: 50 },
    { x: 90, y: 70 }, { x: 5, y: 95 }, { x: 95, y: 5 }, { x: 45, y: 45 }
  ].map(pos => ({ x: `${pos.x}%`, y: `${pos.y}%` }))
  

// Floating shapes component
const FloatingShapes = () => {
  const shapes = [
    { className: "w-24 h-24 bg-amber-500/5 rounded-full blur-xl", initialX: -100, initialY: -100 },
    { className: "w-32 h-32 bg-yellow-600/5 rounded-full blur-xl", initialX: 100, initialY: 100 },
    { className: "w-20 h-20 bg-amber-400/5 rounded-full blur-xl", initialX: 200, initialY: -150 },
    { className: "w-28 h-28 bg-yellow-500/5 rounded-full blur-xl", initialX: -150, initialY: 150 },
  ]

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className}`}
          initial={{ x: shape.initialX, y: shape.initialY, opacity: 0 }}
          animate={{
            x: [shape.initialX, shape.initialX + 50, shape.initialX],
            y: [shape.initialY, shape.initialY + 50, shape.initialY],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </>
  )
}

// Animated background lines
const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
          style={{ top: `${20 * (i + 1)}%` }}
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
  )
}

// Animated particles
const Particles = () => {
  return (
    <div className="absolute inset-0">
      {PARTICLE_POSITIONS.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
  
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />
      </div>
      
      {/* Animated elements */}
      <FloatingShapes />
      <BackgroundLines />
      <Particles />
      
      {/* Grain effect */}
      <div className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCBgYGBgYoSQJ6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPUlEQVQ4jWNgGAWjYBSMgkEJGBkYGBkEGRkYGRkZGBgZGQUZGBgZGRkYGBgZGRkZGBgEGRkZGAUZGBgYAAgYAYwN4q4LAAAAAElFTkSuQmCC)' }} 
      />

      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative elements with glow */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-amber-400 text-2xl drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="text-amber-400 font-semibold mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PAYING TOO MUCH IN TAXES?
          </motion.p>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Legally Reduce Your Tax Burden by Up to 90%
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform your $5,000 monthly tax bill into $500 through strategic residency planning. 
            Join successful digital professionals who&apos;ve already optimized their global tax position.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-6 rounded-full">
              Calculate Your Tax Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-amber-500/20 hover:bg-amber-500/10 px-8 py-6 rounded-full">
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              100% Legal & Compliant
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              500+ Clients Helped
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              $10M+ Tax Saved
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}