'use client'

import { motion } from 'framer-motion'
import { calculateTax, formatCurrency } from '@/utils/taxCalculations'
import { strategies } from '@/data/strategies'
import { TaxStrategy } from '@/types/calculator'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SavingsComparisonProps {
  income: number
  strategy: string
}

export default function SavingsComparison({ income, strategy }: SavingsComparisonProps) {
  const selectedStrategy = strategies.find((s: TaxStrategy): s is TaxStrategy => s.id === strategy)
  if (!selectedStrategy) return null

  // Calculate tax for current strategy
  const newTax = calculateTax(income, selectedStrategy)
  
  // Calculate tax for Australia as baseline
  const australianStrategy = strategies.find((s: TaxStrategy): s is TaxStrategy => s.id === 'australia')
  const baselineTax = australianStrategy ? calculateTax(income, australianStrategy) : null
  
  if (!baselineTax) return null

  const annualSavings = baselineTax.totalTax - newTax.totalTax
  const monthlySavings = annualSavings / 12
  const savingsPercentage = (annualSavings / baselineTax.totalTax) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-300">
          Potential Tax Savings
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Annual Savings Card */}
          <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-xl p-4 border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Annual Savings</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(annualSavings)}
            </div>
          </div>

          {/* Monthly Savings Card */}
          <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
            <div className="text-sm text-gray-400 mb-1">Monthly Savings</div>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(monthlySavings)}
            </div>
          </div>

          {/* Savings Percentage Card */}
          <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
            <div className="text-sm text-gray-400 mb-1">Tax Reduction</div>
            <div className="text-2xl font-bold text-white">
              {savingsPercentage.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Comparison Details */}
        <div className="bg-black/50 rounded-xl p-4 border border-amber-500/10">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Australian Tax</span>
              <span className="text-white font-medium">
                {formatCurrency(baselineTax.totalTax)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">{selectedStrategy.name} Tax</span>
              <span className="text-white font-medium">
                {formatCurrency(newTax.totalTax)}
              </span>
            </div>
            <div className="pt-3 border-t border-amber-500/10 flex justify-between items-center text-sm">
              <span className="text-amber-400 font-medium">Total Annual Savings</span>
              <span className="text-amber-400 font-bold">
                {formatCurrency(annualSavings)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-6 text-center">
        <h4 className="text-xl font-bold text-black mb-2">
          Ready to Optimize Your Taxes?
        </h4>
        <p className="text-gray-900 mb-6">
          Book a free consultation to learn how to implement the {selectedStrategy.name} strategy.
        </p>
        <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
} 