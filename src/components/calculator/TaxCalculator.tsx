'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HomeCountry } from '@/types/calculator'
import { TAX_RATES_2025 } from '@/data/taxRates2025'
import { useExchangeRates } from '@/hooks/useExchangeRates'
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
  const { rates, loading, error, convert } = useExchangeRates('USD')

  // Update exchange rates when they're loaded
  useEffect(() => {
    if (rates && rates.conversion_rates) {
      // Note: In a production app, you might want to store these in a global state management solution
      console.log('Exchange rates loaded:', rates.conversion_rates);
    }
  }, [rates])

  // Don't convert income - it's already in the local currency
  const handleIncomeChange = (value: number) => {
    setIncome(value)
    setShowStrategies(false)
    setShowBreakdown(false)
  }

  const handleCountryChange = (country: HomeCountry | null) => {
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/50 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-4 sm:p-6 md:p-8"
      >
        <div className="space-y-6 sm:space-y-8">
          {/* Step 1: Income & Country Selection */}
          <div className="space-y-4 sm:space-y-6">
            <IncomeInput
              value={income}
              onChange={handleIncomeChange}
              currency={selectedCountry?.currency || 'USD'}
            />
            
            <CountrySelector
              countries={TAX_RATES_2025}
              selectedCountry={selectedCountry}
              onChange={handleCountryChange}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProceed}
              disabled={!income || !selectedCountry}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 
                disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-semibold 
                py-3 sm:py-4 px-4 rounded-xl shadow-lg text-sm sm:text-base"
            >
              Show Tax Optimization Strategies
            </motion.button>
          </div>

          {/* Step 2: Strategy Selection */}
          {showStrategies && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4 sm:space-y-6"
            >
              <StrategySelector
                selectedStrategy={selectedStrategy}
                onChange={handleStrategyChange}
                currentCountry={selectedCountry}
                convert={convert}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 
                  text-black font-semibold py-3 sm:py-4 px-4 rounded-xl shadow-lg text-sm sm:text-base"
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
              className="space-y-6 sm:space-y-8"
            >
              <TaxBreakdown
                income={income}
                country={selectedCountry}
                strategy={selectedStrategy}
              />
              
              <SavingsComparison
                income={income}
                currentCountry={selectedCountry}
                strategy={selectedStrategy}
                convert={convert}
              />
            </motion.div>
          )}

          {loading && (
            <div className="text-amber-500 text-sm">Loading exchange rates...</div>
          )}
          
          {error && (
            <div className="text-red-500 text-sm">
              Error loading exchange rates. Using default conversions.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 