'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import IncomeInput from './IncomeInput'
import StrategySelector from './StrategySelector'
import TaxBreakdown from './TaxBreakdown'
import SavingsComparison from './SavingsComparison'

export interface TaxCalculatorProps {
  defaultIncome?: number
  defaultStrategy?: string
}

export default function TaxCalculator({ defaultIncome = 100000, defaultStrategy = 'paraguay' }: TaxCalculatorProps) {
  const [income, setIncome] = useState<number>(defaultIncome)
  const [selectedStrategy, setSelectedStrategy] = useState<string>(defaultStrategy)
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false)

  const handleIncomeChange = (value: number) => {
    setIncome(value)
    // Reset breakdown when income changes
    setShowBreakdown(false)
  }

  const handleStrategyChange = (strategy: string) => {
    setSelectedStrategy(strategy)
    // Reset breakdown when strategy changes
    setShowBreakdown(false)
  }

  const handleCalculate = () => {
    setShowBreakdown(true)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/50 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-6 sm:p-8"
      >
        <div className="space-y-8">
          {/* Income Input Section */}
          <IncomeInput
            income={income}
            onChange={handleIncomeChange}
          />

          {/* Strategy Selection */}
          <StrategySelector
            selectedStrategy={selectedStrategy}
            onChange={handleStrategyChange}
          />

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-4 rounded-xl shadow-lg"
          >
            Calculate Tax Savings
          </motion.button>

          {/* Results Section */}
          {showBreakdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-8"
            >
              <TaxBreakdown
                income={income}
                strategy={selectedStrategy}
              />
              
              <SavingsComparison
                income={income}
                strategy={selectedStrategy}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 