'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HomeCountry } from '@/types/calculator'
import { TAX_RATES_2025 } from '@/data/taxRates2025'
import { TAX_STRATEGIES } from '@/data/strategies'
import { useExchangeRates } from '@/hooks/useExchangeRates'
import { useAnalytics } from '@/hooks/useAnalytics'
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
  const { trackCalculatorStep, trackCalculatorResults } = useAnalytics()

  // Track initial load
  useEffect(() => {
    trackCalculatorStep('initiated')
  }, [trackCalculatorStep])

  // Update exchange rates when they're loaded
  useEffect(() => {
    if (rates && rates.conversion_rates) {
      // Note: In a production app, you might want to store these in a global state management solution
      console.log('Exchange rates loaded:', rates.conversion_rates);
    }
  }, [rates])

  const handleIncomeChange = (value: number) => {
    setIncome(value)
    setShowStrategies(false)
    setShowBreakdown(false)
    trackCalculatorStep('income_entered', { income: value })
  }

  const handleCountryChange = (country: HomeCountry | null) => {
    setSelectedCountry(country)
    setShowStrategies(false)
    setShowBreakdown(false)
    if (country) {
      trackCalculatorStep('country_selected', { 
        country: country.name,
        currency: country.currency 
      })
    }
  }

  const handleStrategyChange = (strategy: string) => {
    setSelectedStrategy(strategy)
    setShowBreakdown(false)
    trackCalculatorStep('strategy_selected', { strategy })
  }

  const handleProceed = () => {
    if (income > 0 && selectedCountry) {
      setShowStrategies(true)
    }
  }

  const handleCalculate = () => {
    setShowBreakdown(true)
    trackCalculatorStep('results_viewed')
    
    // Calculate savings for analytics
    if (selectedCountry && selectedStrategy) {
      const strategy = TAX_STRATEGIES.find(s => s.id === selectedStrategy)
      if (strategy) {
        const currentTax = calculateTax(selectedCountry.brackets, income)
        const optimizedTax = calculateTax(strategy.brackets, income)
        const annualSavings = currentTax - optimizedTax
        const tenYearSavings = (annualSavings * 10) - strategy.totalEstimatedCost
        const monthsToBreakeven = annualSavings > 0 ? (strategy.totalEstimatedCost / annualSavings) * 12 : Infinity

        trackCalculatorResults({
          income,
          country: selectedCountry.name,
          strategy: strategy.name,
          annualSavings,
          tenYearSavings,
          monthsToBreakeven
        })
      }
    }
  }

  // Calculate tax helper function
  const calculateTax = (brackets: { min: number; max?: number; rate: number }[], amount: number): number => {
    let remainingIncome = amount
    let totalTax = 0

    for (const bracket of brackets) {
      const { min, max, rate } = bracket
      const taxableAmount = max 
        ? Math.min(Math.max(0, remainingIncome), max - min)
        : Math.max(0, remainingIncome)

      if (taxableAmount <= 0) break

      totalTax += taxableAmount * rate
      remainingIncome -= taxableAmount
      if (remainingIncome <= 0) break
    }

    return totalTax
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-lg"
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
              className="w-full bg-orange-500 hover:bg-orange-600 
                disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold 
                py-3 sm:py-4 px-4 rounded-xl shadow-md text-sm sm:text-base transition-colors"
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
                className="w-full bg-orange-500 hover:bg-orange-600 
                  text-black font-semibold py-3 sm:py-4 px-4 rounded-xl shadow-md text-sm sm:text-base transition-colors"
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
              />
            </motion.div>
          )}

          {loading && (
            <div className="text-orange-600 text-sm">Loading exchange rates...</div>
          )}
          
          {error && (
            <div className="text-red-600 text-sm">
              Error loading exchange rates. Using default conversions.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 