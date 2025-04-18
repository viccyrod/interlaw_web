'use client'

import TaxCalculator from '@/components/calculator/TaxCalculator'

export default function ParaguayCalculatorPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Using default values for now, you can adjust if needed */}
      <TaxCalculator defaultIncome={100000} defaultStrategy="paraguay" />
    </div>
  )
} 