'use client'

import { HomeCountry } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'
import { Clock, Calendar, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface StrategySelectorProps {
  selectedStrategy: string
  onChange: (strategy: string) => void
  currentCountry: HomeCountry | null
  convert: (amount: number, fromCurrency: string, toCurrency: string) => number
}

export default function StrategySelector({ selectedStrategy, onChange, currentCountry, convert }: StrategySelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Available Tax Optimization Strategies
      </h3>
      
      <div className="grid gap-4 max-w-full">
        {TAX_STRATEGIES.map((strategy) => {
          // Convert setup cost to local currency if applicable
          const setupCostLocal = currentCountry 
            ? convert(strategy.totalEstimatedCost, 'USD', currentCountry.currency)
            : strategy.totalEstimatedCost

          return (
            <div
              key={strategy.id}
              className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer overflow-hidden shadow-sm ${
                selectedStrategy === strategy.id
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-gray-200 bg-white hover:border-orange-400'
              }`}
              onClick={() => onChange(strategy.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium flex items-center gap-2 flex-wrap">
                    <span className="truncate text-gray-900 font-semibold">{strategy.name}</span>
                    {strategy.featured && (
                      <span className="px-2 py-0.5 text-xs bg-orange-500 text-black rounded-full flex-shrink-0">
                        Recommended
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{strategy.description}</p>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform flex-shrink-0 ${
                    selectedStrategy === strategy.id ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Cost and Timeline */}
              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-sm">Approximate Setup Cost</p>
                  <p className="text-gray-900 font-medium truncate">USD {strategy.totalEstimatedCost.toLocaleString()}</p>
                  {currentCountry && (
                    <p className="text-sm text-gray-600 truncate">
                      (~{currentCountry.currency} {Math.round(setupCostLocal).toLocaleString()})
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    <span className="whitespace-nowrap">{strategy.estimatedProcessingTime}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="whitespace-nowrap">{strategy.stayRequirement}</span>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {selectedStrategy === strategy.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 sm:mt-4 space-y-3 sm:space-y-4"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-2">Benefits:</p>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {strategy.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                          <span className="flex-1 break-words">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-2">Requirements:</p>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {strategy.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                          <span className="flex-1 break-words">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {strategy.suitableForIncomeRange?.min && (
                    <p className="text-sm text-gray-600">
                      Recommended for incomes above USD {strategy.suitableForIncomeRange.min.toLocaleString()}/year
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 