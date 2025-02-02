'use client'

import { HomeCountry } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'

interface StrategySelectorProps {
  selectedStrategy: string
  onChange: (strategy: string) => void
  income: number
  currentCountry: HomeCountry | null
}

export default function StrategySelector({ selectedStrategy, onChange, income }: StrategySelectorProps) {
  // Filter strategies based on income
  const suitableStrategies = TAX_STRATEGIES.filter(strategy => {
    const { suitableForIncomeRange } = strategy
    if (!suitableForIncomeRange) return true
    const { min, max } = suitableForIncomeRange
    if (min && income < min) return false
    if (max && income > max) return false
    return true
  })

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">
        Available Tax Optimization Strategies
      </h3>
      
      <div className="grid gap-4">
        {suitableStrategies.map((strategy) => (
          <div
            key={strategy.id}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedStrategy === strategy.id
                ? 'border-amber-500 bg-amber-500/10'
                : 'border-amber-500/10 bg-black/30 hover:border-amber-500/30'
            }`}
            onClick={() => onChange(strategy.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-white flex items-center gap-2">
                  {strategy.name}
                  {strategy.featured && (
                    <span className="px-2 py-0.5 text-xs bg-amber-500 text-black rounded-full">
                      Recommended
                    </span>
                  )}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{strategy.description}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Setup Cost</p>
                <p className="text-white">${strategy.setupCost.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Processing Time</p>
                <p className="text-white">{strategy.processingTime}</p>
              </div>
              <div>
                <p className="text-gray-400">Stay Requirement</p>
                <p className="text-white">{strategy.stayRequirement}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-white mb-2">Benefits:</p>
              <ul className="text-sm text-gray-400 space-y-1">
                {strategy.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-white mb-2">Requirements:</p>
              <ul className="text-sm text-gray-400 space-y-1">
                {strategy.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500">•</span>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 