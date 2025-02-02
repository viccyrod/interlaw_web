'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeCountry } from '@/types/calculator'
import IncomeInput from './IncomeInput'
import CountrySelector from './CountrySelector'
import StrategySelector from './StrategySelector'
import TaxBreakdown from './TaxBreakdown'
import SavingsComparison from './SavingsComparison'

export interface TaxCalculatorProps {
  defaultIncome?: number
  defaultStrategy?: string
}

export default function TaxCalculator({ defaultIncome = 100000, defaultStrategy = 'paraguay' }: TaxCalculatorProps) {
  const [income, setIncome] = useState<number>(defaultIncome)
  const [selectedCountry, setSelectedCountry] = useState<HomeCountry | null>(null)
  const [selectedStrategy, setSelectedStrategy] = useState<string>(defaultStrategy)
  const [showStrategies, setShowStrategies] = useState<boolean>(false)
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false)

  const handleIncomeChange = (value: number) => {
    setIncome(value)
    setShowStrategies(false)
    setShowBreakdown(false)
  }

  const handleCountryChange = (country: HomeCountry) => {
    setSelectedCountry(country)
    setShowStrategies(false)
    setShowBreakdown(false)
  }

  const handleStrategyChange = (strategy: string) => {
    setSelectedStrategy(strategy)
    setShowBreakdown(false)
  }

  const handleProceed = () => {
    if (income > 0 && selectedCountry) {
      setShowStrategies(true)
    }
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
          {/* Step 1: Income & Country Selection */}
          <div className="space-y-6">
            <IncomeInput
              income={income}
              onChange={handleIncomeChange}
            />
            
            <CountrySelector
              selectedCountry={selectedCountry?.name || ''}
              onChange={handleCountryChange}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProceed}
              disabled={!income || !selectedCountry}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 rounded-xl shadow-lg"
            >
              Show Tax Optimization Strategies
            </motion.button>
          </div>

          {/* Step 2: Strategy Selection */}
          {showStrategies && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-6"
            >
              <StrategySelector
                selectedStrategy={selectedStrategy}
                onChange={handleStrategyChange}
                income={income}
                currentCountry={selectedCountry}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-4 rounded-xl shadow-lg"
              >
                Calculate Tax Savings
              </motion.button>
            </motion.div>
          )}

          {/* Step 3: Results */}
          {showBreakdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-8"
            >
              <TaxBreakdown
                income={income}
                strategy={selectedStrategy}
                currentCountry={selectedCountry}
              />
              
              <SavingsComparison
                income={income}
                strategy={selectedStrategy}
                currentCountry={selectedCountry}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 