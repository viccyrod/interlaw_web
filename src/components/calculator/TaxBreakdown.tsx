'use client'

import { motion } from 'framer-motion'
import { calculateTax, formatCurrency, formatPercentage } from '@/utils/taxCalculations'
import { strategies } from '@/data/strategies'
import { TaxStrategy } from '@/types/calculator'

interface TaxBreakdownProps {
  income: number
  strategy: string
}

export default function TaxBreakdown({ income, strategy }: TaxBreakdownProps) {
  const selectedStrategy = strategies.find((s: TaxStrategy): s is TaxStrategy => s.id === strategy)
  if (!selectedStrategy) return null

  const calculation = calculateTax(income, selectedStrategy)
  const effectiveRate = calculation.totalTax / income

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-300">
          Tax Breakdown for {selectedStrategy.name}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Total Tax Card */}
          <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
            <div className="text-sm text-gray-400 mb-1">Total Tax</div>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(calculation.totalTax)}
            </div>
          </div>

          {/* Effective Rate Card */}
          <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
            <div className="text-sm text-gray-400 mb-1">Effective Tax Rate</div>
            <div className="text-2xl font-bold text-white">
              {formatPercentage(effectiveRate)}
            </div>
          </div>
        </div>

        {/* Tax Brackets Breakdown */}
        {calculation.brackets.length > 1 && (
          <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
            <h4 className="text-sm font-medium text-gray-400 mb-3">
              Tax Brackets
            </h4>
            <div className="space-y-3">
              {calculation.brackets.map((bracket, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <div className="text-gray-400">
                    {formatCurrency(bracket.bracket.min)}
                    {bracket.bracket.max 
                      ? ` - ${formatCurrency(bracket.bracket.max)}`
                      : '+'
                    }
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">
                      {formatPercentage(bracket.bracket.rate)}
                    </span>
                    <span className="text-white font-medium">
                      {formatCurrency(bracket.taxAmount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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