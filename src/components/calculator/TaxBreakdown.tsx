'use client'

import { motion } from 'framer-motion'
import { formatCurrency } from '@/utils/taxCalculations'
import { HomeCountry, TaxBracket } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'

interface TaxBreakdownProps {
  income: number
  strategy: string
  currentCountry: HomeCountry | null
}

interface BracketCalculation {
  min: number
  max?: number
  rate: number
  taxableAmount: number
  taxAmount: number
}

function calculateTaxByBrackets(income: number, brackets: TaxBracket[]): BracketCalculation[] {
  let remainingIncome = income
  const calculations: BracketCalculation[] = []

  for (const bracket of brackets) {
    const { min, max, rate } = bracket
    const taxableAmount = max ? Math.min(remainingIncome, max - min) : remainingIncome
    
    if (taxableAmount <= 0) break
    
    calculations.push({
      min,
      max,
      rate,
      taxableAmount,
      taxAmount: taxableAmount * rate
    })
    
    remainingIncome -= taxableAmount
    if (remainingIncome <= 0) break
  }

  return calculations
}

export default function TaxBreakdown({ income, strategy, currentCountry }: TaxBreakdownProps) {
  if (!currentCountry) return null

  const selectedStrategy = TAX_STRATEGIES.find(s => s.id === strategy)
  if (!selectedStrategy) return null

  const currentCalculations = calculateTaxByBrackets(income, currentCountry.brackets)
  const proposedCalculations = calculateTaxByBrackets(income, selectedStrategy.brackets)

  const currentTotal = currentCalculations.reduce((sum, calc) => sum + calc.taxAmount, 0)
  const proposedTotal = proposedCalculations.reduce((sum, calc) => sum + calc.taxAmount, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-semibold text-white">
        Detailed Tax Breakdown
      </h3>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Current Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-4">
            Current Tax Structure ({currentCountry.name})
          </h4>
          <div className="space-y-3">
            {currentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-black/30 border border-amber-500/10"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    {calc.max
                      ? `$${calc.min.toLocaleString()} - $${calc.max.toLocaleString()}`
                      : `Over $${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-amber-500">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Taxable: ${calc.taxableAmount.toLocaleString()}
                  </span>
                  <span className="text-white font-medium">
                    Tax: ${calc.taxAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/20">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax</span>
                <span className="text-white font-semibold">
                  ${currentTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Proposed Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-4">
            Proposed Structure ({selectedStrategy.name})
          </h4>
          <div className="space-y-3">
            {proposedCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-black/30 border border-amber-500/10"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    {calc.max
                      ? `$${calc.min.toLocaleString()} - $${calc.max.toLocaleString()}`
                      : `Over $${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-amber-500">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Taxable: ${calc.taxableAmount.toLocaleString()}
                  </span>
                  <span className="text-white font-medium">
                    Tax: ${calc.taxAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/20">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax</span>
                <span className="text-white font-semibold">
                  ${proposedTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
        <h4 className="text-sm font-medium text-amber-400 mb-2">
          Important Notes
        </h4>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Setup cost: {formatCurrency(selectedStrategy.setupCost)}</li>
          <li>• Processing time: {selectedStrategy.processingTime}</li>
          <li>• Stay requirement: {selectedStrategy.stayRequirement}</li>
          <li>• Tax calculations are estimates and may vary based on individual circumstances</li>
        </ul>
      </div>
    </motion.div>
  )
} 