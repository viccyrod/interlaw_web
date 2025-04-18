'use client'

import TaxCalculator from '@/components/calculator/TaxCalculator'

export default function ParaguayCalculatorPage() {
  return (
    <div className="p-4 sm:p-8">
      {/* TODO: Adjust TaxCalculator component styles for light theme */}
      <TaxCalculator defaultIncome={100000} defaultStrategy="paraguay" />
    </div>
  )
} 