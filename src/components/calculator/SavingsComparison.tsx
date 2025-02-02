'use client'

import { motion } from 'framer-motion'
import { HomeCountry, TaxBracket } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SavingsComparisonProps {
  income: number
  strategy: string
  currentCountry: HomeCountry | null
}

function calculateTax(income: number, brackets: TaxBracket[]): number {
  let remainingIncome = income
  let totalTax = 0

  for (const bracket of brackets) {
    const { min, max, rate } = bracket
    const taxableAmount = max ? Math.min(remainingIncome, max - min) : remainingIncome
    
    if (taxableAmount <= 0) break
    
    totalTax += taxableAmount * rate
    remainingIncome -= taxableAmount
    
    if (remainingIncome <= 0) break
  }

  return totalTax
}

export default function SavingsComparison({ income, strategy, currentCountry }: SavingsComparisonProps) {
  if (!currentCountry) return null

  const selectedStrategy = TAX_STRATEGIES.find(s => s.id === strategy)
  if (!selectedStrategy) return null

  const currentTax = calculateTax(income, currentCountry.brackets)
  const proposedTax = calculateTax(income, selectedStrategy.brackets)
  const savings = currentTax - proposedTax
  const savingsPercentage = (savings / currentTax) * 100
  const breakevenMonths = Math.ceil((selectedStrategy.setupCost / savings) * 12)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Your Tax Savings Analysis
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-xl bg-black/30 border border-amber-500/10">
            <h4 className="text-sm font-medium text-gray-400">Current Tax Burden</h4>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-white">
                ${currentTax.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                Based on {currentCountry.name} tax rates
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-amber-500/10">
            <h4 className="text-sm font-medium text-gray-400">Proposed Tax</h4>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-white">
                ${proposedTax.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                With {selectedStrategy.name}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/20">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium text-gray-400">Annual Savings</h4>
              <p className="text-2xl font-semibold text-white mt-1">
                ${savings.toLocaleString()}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400">Tax Reduction</h4>
              <p className="text-2xl font-semibold text-white mt-1">
                {savingsPercentage.toFixed(1)}%
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400">Break-even Time</h4>
              <p className="text-2xl font-semibold text-white mt-1">
                {breakevenMonths} months
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-amber-500/20">
            <h4 className="text-sm font-medium text-white mb-3">Setup Requirements</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-gray-400">Initial Cost</p>
                <p className="text-lg font-medium text-white">
                  ${selectedStrategy.setupCost.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Processing Time</p>
                <p className="text-lg font-medium text-white">
                  {selectedStrategy.processingTime}
                </p>
              </div>
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