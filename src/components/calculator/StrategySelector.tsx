'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Calendar } from 'lucide-react'
import { strategies } from '@/data/strategies'
// import { TaxStrategy } from '@/types/calculator'

interface StrategySelectorProps {
  selectedStrategy: string
  onChange: (strategy: string) => void
}

export default function StrategySelector({ selectedStrategy, onChange }: StrategySelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-300">
        Select Tax Strategy
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strategies.map((strategy) => (
          <motion.div
            key={strategy.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(strategy.id)}
            className={`cursor-pointer p-4 rounded-xl border transition-all ${
              selectedStrategy === strategy.id
                ? 'bg-amber-500/10 border-amber-500'
                : 'bg-black/50 border-amber-500/10 hover:border-amber-500/30'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold text-white">
                {strategy.name}
              </h4>
              {strategy.recommended && (
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full">
                  Recommended
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-400 mb-4">
              {strategy.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-amber-400" />
                Process: {strategy.processingTime}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-amber-400" />
                Stay: {strategy.stayRequirement}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-amber-500/10">
              <div className="grid grid-cols-2 gap-2">
                {strategy.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 