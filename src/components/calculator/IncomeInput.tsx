'use client'

import { useState, useEffect } from 'react'
import { formatCurrency } from '@/utils/taxCalculations'

interface IncomeInputProps {
  income: number
  onChange: (value: number) => void
}

export default function IncomeInput({ income, onChange }: IncomeInputProps) {
  const [inputValue, setInputValue] = useState<string>(formatCurrency(income))
  const [isFocused, setIsFocused] = useState<boolean>(false)

  // Format the display value when income prop changes
  useEffect(() => {
    if (!isFocused) {
      setInputValue(formatCurrency(income))
    }
  }, [income, isFocused])

  const handleInputChange = (value: string) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '')
    
    if (numericValue) {
      const numberValue = parseInt(numericValue, 10)
      setInputValue(numericValue)
      onChange(numberValue)
    } else {
      setInputValue('')
      onChange(0)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    setInputValue(formatCurrency(income))
  }

  const handleFocus = () => {
    setIsFocused(true)
    setInputValue(income.toString())
  }

  return (
    <div className="space-y-2">
      <label htmlFor="income" className="block text-sm font-medium text-gray-300">
        Annual Income
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 pointer-events-none">
          $
        </span>
        <input
          type="text"
          id="income"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block w-full pl-8 pr-4 py-3 bg-black/50 border border-amber-500/20 focus:border-amber-500/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors"
          placeholder="Enter your annual income"
        />
      </div>
      <p className="text-xs text-gray-500">
        Enter your pre-tax annual income to calculate potential tax savings
      </p>
    </div>
  )
} 