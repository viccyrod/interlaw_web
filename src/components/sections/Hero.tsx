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
    { className: "w-24 h-24 bg-red-500/10 rounded-full blur-xl", initialX: -100, initialY: -100 },
    { className: "w-32 h-32 bg-red-700/10 rounded-full blur-xl", initialX: 100, initialY: 100 },
    { className: "w-20 h-20 bg-red-300/10 rounded-full blur-xl", initialX: 200, initialY: -150 },
    { className: "w-28 h-28 bg-red-600/10 rounded-full blur-xl", initialX: -150, initialY: 150 },
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
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </>
  )
}

// Animated background lines
const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
          style={{ top: `${20 * (i + 1)}%` }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
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
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: position.x,
              top: position.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
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
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative stars with glow */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-red-500 text-2xl drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-500 to-red-700 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              Protect your most valuable asset
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Safeguard your intellectual property with our streamlined, global approach. Whether you&apos;re scaling up or expanding internationally, we ensure your trademarks, patents, and IP assets are fully protected.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-red-500/30 hover:-translate-y-0.5"
            >
              Book a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-500/20 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}