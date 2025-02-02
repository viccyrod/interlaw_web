'use client'

import { HomeCountry } from '@/types/calculator'
import { Globe2 } from 'lucide-react'

interface CountrySelectorProps {
  countries: HomeCountry[];
  selectedCountry: HomeCountry | null;
  onChange: (country: HomeCountry | null) => void;
}

export default function CountrySelector({ countries, selectedCountry, onChange }: CountrySelectorProps) {
  return (
    <div className="space-y-3">
      <label htmlFor="country" className="flex items-center gap-2 text-lg font-semibold text-white">
        <Globe2 className="w-5 h-5 text-amber-500" />
        Select Your Home Country
      </label>
      <div className="relative">
        <select
          id="country"
          value={selectedCountry?.name || ''}
          onChange={(e) => {
            const country = countries.find(c => c.name === e.target.value) || null
            onChange(country)
          }}
          className="w-full rounded-xl border border-amber-500/10 bg-black/30 px-4 py-3 text-white placeholder-gray-400 
            focus:border-amber-500 focus:ring-amber-500 hover:border-amber-500/30 transition-colors
            appearance-none cursor-pointer"
        >
          <option value="" className="bg-gray-900">Choose a country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name} className="bg-gray-900">
              {country.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
          <svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {selectedCountry && (
        <p className="text-sm text-gray-400">
          Tax Year: {selectedCountry.taxYear} • Currency: {selectedCountry.currency}
        </p>
      )}
    </div>
  )
} 