'use client'

import { HomeCountry } from '@/types/calculator'
import { TAX_RATES_2025 } from '@/data/taxRates2025'

interface CountrySelectorProps {
  selectedCountry: string
  onChange: (country: HomeCountry) => void
}

export default function CountrySelector({ selectedCountry, onChange }: CountrySelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="country" className="block text-sm font-medium text-gray-300">
        Current Tax Residence
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => {
          const country = TAX_RATES_2025.find(c => c.name === e.target.value)
          if (country) onChange(country)
        }}
        className="block w-full px-4 py-3 bg-black/50 border border-amber-500/20 focus:border-amber-500/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors"
      >
        <option value="">Select your country</option>
        {TAX_RATES_2025.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name} ({country.currency})
          </option>
        ))}
      </select>
      <p className="text-xs text-gray-500">
        Select your current country of tax residence to compare potential savings (2025 rates)
      </p>
    </div>
  )
} 