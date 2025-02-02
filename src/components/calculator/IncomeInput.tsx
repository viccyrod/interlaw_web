'use client'

import { useState, useEffect } from 'react'

interface IncomeInputProps {
  value: number;
  onChange: (value: number) => void;
  currency: string;
}

function formatWithCurrency(value: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(value);
}

export default function IncomeInput({ value, onChange, currency }: IncomeInputProps) {
  const [inputValue, setInputValue] = useState<string>(formatWithCurrency(value, currency))
  const [isFocused, setIsFocused] = useState<boolean>(false)

  useEffect(() => {
    if (!isFocused) {
      setInputValue(formatWithCurrency(value, currency))
    }
  }, [value, currency, isFocused])

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
    setInputValue(formatWithCurrency(value, currency))
  }

  const handleFocus = () => {
    setIsFocused(true)
    setInputValue(value.toString())
  }

  return (
    <div className="space-y-2">
      <label htmlFor="income" className="block text-sm font-medium text-gray-300">
        Annual Income
      </label>
      <div className="relative">
        <input
          type="text"
          id="income"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block w-full px-4 py-3 bg-black/50 border border-amber-500/20 focus:border-amber-500/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors"
          placeholder={`Enter amount in ${currency}`}
        />
      </div>
      <p className="text-xs text-gray-500">
        Enter your pre-tax annual income to calculate potential tax savings
      </p>
    </div>
  )
} 