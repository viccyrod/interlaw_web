'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator, Globe2, TrendingUp, Shield, Check, ChevronDown } from 'lucide-react'

// Tax rates and information for different countries
const COUNTRIES = {
  australia: { 
    name: 'Australia', 
    taxRate: 45, 
    currency: 'AUD', 
    symbol: '$',
    flag: '🇦🇺',
    example: '250,000 AUD'
  },
  canada: { 
    name: 'Canada', 
    taxRate: 53.5, // Combined federal + provincial (Ontario) top rate
    currency: 'CAD', 
    symbol: '$',
    flag: '🇨🇦',
    example: '220,000 CAD'
  },
  newzealand: { 
    name: 'New Zealand', 
    taxRate: 39, 
    currency: 'NZD', 
    symbol: '$',
    flag: '🇳🇿',
    example: '180,000 NZD'
  },
  poland: { 
    name: 'Poland', 
    taxRate: 32, 
    currency: 'PLN', 
    symbol: 'zł',
    flag: '🇵🇱',
    example: '120,000 PLN'
  },
  france: { 
    name: 'France', 
    taxRate: 49, // Including social charges
    currency: 'EUR', 
    symbol: '€',
    flag: '🇫🇷',
    example: '160,000 EUR'
  },
  netherlands: { 
    name: 'Netherlands', 
    taxRate: 49.5,
    currency: 'EUR', 
    symbol: '€',
    flag: '🇳🇱',
    example: '150,000 EUR'
  },
  norway: { 
    name: 'Norway', 
    taxRate: 47.4, // Updated for 2024
    currency: 'NOK', 
    symbol: 'kr',
    flag: '🇳🇴',
    example: '1,200,000 NOK'
  },
  sweden: { 
    name: 'Sweden', 
    taxRate: 52.3, 
    currency: 'SEK', 
    symbol: 'kr',
    flag: '🇸🇪',
    example: '1,500,000 SEK'
  },
  denmark: { 
    name: 'Denmark', 
    taxRate: 55.9, 
    currency: 'DKK', 
    symbol: 'kr',
    flag: '🇩🇰',
    example: '1,000,000 DKK'
  },
  germany: { 
    name: 'Germany', 
    taxRate: 47.5, // Updated: 45% + solidarity surcharge
    currency: 'EUR', 
    symbol: '€',
    flag: '🇩🇪',
    example: '200,000 EUR'
  },
  uk: { 
    name: 'United Kingdom', 
    taxRate: 45, 
    currency: 'GBP', 
    symbol: '£',
    flag: '🇬🇧',
    example: '150,000 GBP'
  },
  us: { 
    name: 'United States', 
    taxRate: 37, // Federal only, could be higher with state taxes
    currency: 'USD', 
    symbol: '$',
    flag: '🇺🇸',
    example: '200,000 USD'
  },
}

interface StrategyDetails {
  localTaxRate: string;
  foreignTaxRate: string;
  processingTime: string;
  minStay: string;
  setupCosts: string;
  totalTimeToResidency: string;
}

interface Strategy {
  name: string;
  taxRate: number;
  setupCost: number;
  benefits: string[];
  requirements: string[];
  details: StrategyDetails;
  recommended?: boolean;
  highlights?: string[];
}

// Optimization strategies with different tax rates and benefits
const STRATEGIES: Record<string, Strategy> = {
  paraguay: {
    name: 'Paraguay',
    taxRate: 0,
    setupCost: 4500,
    recommended: true,
    benefits: [
      '0% tax on foreign income',
      'Fastest residency (30 days)',
      'Only 1 day/year presence required',
      'No wealth tax'
    ],
    requirements: [
      'Bank deposit of $4,500',
      'Proof of regular income',
      'Clean criminal record'
    ],
    details: {
      localTaxRate: '10% (local income only)',
      foreignTaxRate: '0% (foreign income)',
      processingTime: '30-45 days',
      minStay: '1 day per year',
      setupCosts: 'From $2,500 to $4,500',
      totalTimeToResidency: '1-2 months'
    },
    highlights: [
      'Lowest setup cost',
      'Fastest processing',
      'Minimal presence required',
      'Simple requirements'
    ]
  },
  panama: {
    name: 'Panama',
    taxRate: 0,
    setupCost: 15000,
    benefits: [
      '0% tax on foreign income',
      'Strong banking privacy',
      'Friendly Nations Visa',
      'Developed infrastructure'
    ],
    requirements: [
      'Professional license or employment contract',
      'Clean criminal record',
      'Proof of economic means'
    ],
    details: {
      localTaxRate: 'Progressive (local income)',
      foreignTaxRate: '0% (foreign income)',
      processingTime: '3-4 months',
      minStay: 'None specific',
      setupCosts: 'From $15,000',
      totalTimeToResidency: '4-5 months'
    }
  },
  dubai: {
    name: 'Dubai',
    taxRate: 0,
    setupCost: 25000,
    benefits: [
      '0% income tax (all sources)',
      'Modern lifestyle',
      'Global business hub',
      'Strong passport potential'
    ],
    requirements: [
      'Company formation ($15,000-$25,000)',
      'Office space lease',
      'Health insurance'
    ],
    details: {
      localTaxRate: '0% (all income)',
      foreignTaxRate: '0% (all income)',
      processingTime: '2-3 months',
      minStay: '6 months per year',
      setupCosts: 'From $25,000',
      totalTimeToResidency: '3-4 months'
    }
  },
  malta: {
    name: 'Malta',
    taxRate: 5,
    setupCost: 150000,
    benefits: [
      'EU membership',
      'Non-dom tax regime',
      'Strong passport',
      'Mediterranean lifestyle'
    ],
    requirements: [
      'Annual tax contribution',
      'Property rental/purchase',
      'Health insurance'
    ],
    details: {
      localTaxRate: 'Progressive (local income)',
      foreignTaxRate: '5% (remitted income)',
      processingTime: '4-6 months',
      minStay: '183 days per year',
      setupCosts: 'From $150,000',
      totalTimeToResidency: '6-8 months'
    }
  }
}

export default function TaxCalculator() {
  const [currentIncome, setCurrentIncome] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const handleIncomeChange = (value: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '')
    
    // Ensure only one decimal point
    const parts = numericValue.split('.')
    const cleanValue = parts[0] + (parts.length > 1 ? '.' + parts[1] : '')
    
    // Format the number with commas
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(cleanValue) || 0)

    setCurrentIncome(formattedValue)
  }

  const calculateSavings = (strategy: string) => {
    if (!selectedCountry || !currentIncome) return null

    const income = parseFloat(currentIncome.replace(/[^0-9.]/g, ''))
    const currentTaxRate = COUNTRIES[selectedCountry as keyof typeof COUNTRIES].taxRate
    const optimizedTaxRate = STRATEGIES[strategy as keyof typeof STRATEGIES].taxRate
    
    const currentTax = income * (currentTaxRate / 100)
    const optimizedTax = income * (optimizedTaxRate / 100)
    const annualSavings = currentTax - optimizedTax
    const monthlySavings = annualSavings / 12
    const yearlyNetIncome = income - optimizedTax

    return {
      currentTax: currentTax.toFixed(0),
      optimizedTax: optimizedTax.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      yearlyNetIncome: yearlyNetIncome.toFixed(0),
      savingsPercentage: ((annualSavings / currentTax) * 100).toFixed(1)
    }
  }

  return (
    <section className="relative min-h-screen bg-black py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-900/5" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200">
              Global Tax Optimization Calculator
            </h1>
            <p className="text-xl text-gray-400">
              Compare your current tax burden with strategic residency options
            </p>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-8 mb-8"
          >
            <div className="space-y-6">
              {/* Country Selection */}
              <div className="relative">
                <label className="block text-gray-300 mb-2">Your Current Country</label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                >
                  <div className="w-full bg-black border border-amber-500/20 rounded-lg px-4 py-3 text-gray-200 flex items-center justify-between">
                    {selectedCountry ? (
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{COUNTRIES[selectedCountry as keyof typeof COUNTRIES].flag}</span>
                        <span>{COUNTRIES[selectedCountry as keyof typeof COUNTRIES].name}</span>
                        <span className="text-amber-400">
                          ({COUNTRIES[selectedCountry as keyof typeof COUNTRIES].taxRate}% top tax rate)
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500">Select your country</span>
                    )}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown */}
                  {isCountryDropdownOpen && (
                    <div className="absolute w-full mt-2 bg-gray-900 border border-amber-500/20 rounded-lg py-2 shadow-xl z-10">
                      {Object.entries(COUNTRIES).map(([key, country]) => (
                        <div
                          key={key}
                          className="px-4 py-2 hover:bg-amber-500/10 cursor-pointer flex items-center gap-3"
                          onClick={() => {
                            setSelectedCountry(key)
                            setIsCountryDropdownOpen(false)
                          }}
                        >
                          <span className="text-2xl">{country.flag}</span>
                          <span className="text-gray-200">{country.name}</span>
                          <span className="text-amber-400">({country.taxRate}%)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Income Input */}
              <div>
                <label className="block text-gray-300 mb-2">Annual Income (USD)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={currentIncome}
                    onChange={(e) => handleIncomeChange(e.target.value)}
                    className="w-full bg-black border border-amber-500/20 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-amber-500/50 text-xl"
                    placeholder="$200,000"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    USD
                  </div>
                </div>
                {selectedCountry && (
                  <div className="mt-2 text-sm text-gray-500">
                    Example income in {COUNTRIES[selectedCountry as keyof typeof COUNTRIES].name}: {COUNTRIES[selectedCountry as keyof typeof COUNTRIES].example}
                  </div>
                )}
              </div>

              <Button
                onClick={() => setShowResults(true)}
                disabled={!selectedCountry || !currentIncome}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-6 rounded-lg disabled:opacity-50"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Tax Burden
              </Button>
            </div>
          </motion.div>

          {/* Current Tax Burden Alert */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Your Current Tax Burden</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-red-300 mb-2">
                      ${calculateSavings('paraguay')?.currentTax}
                      <span className="text-lg text-gray-400 ml-1">/ year</span>
                    </div>
                    <div className="text-xl text-gray-400 mb-4">
                      That&apos;s ${(parseInt(calculateSavings('paraguay')?.currentTax || '0') / 12).toFixed(0)} every month
                    </div>
                    <div className="text-gray-400">
                      With a {COUNTRIES[selectedCountry as keyof typeof COUNTRIES]?.taxRate}% tax rate in {COUNTRIES[selectedCountry as keyof typeof COUNTRIES]?.name}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-lg text-gray-300 mb-2">What could you do with this money?</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-400">
                        <TrendingUp className="w-5 h-5 text-red-400" />
                        Invest in your future
                      </li>
                      <li className="flex items-center gap-2 text-gray-400">
                        <Globe2 className="w-5 h-5 text-red-400" />
                        Travel the world
                      </li>
                      <li className="flex items-center gap-2 text-gray-400">
                        <Shield className="w-5 h-5 text-red-400" />
                        Build generational wealth
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-red-500/20">
                  <div className="text-lg text-gray-300">
                    Are you getting value for your tax money? Let&apos;s explore how you could optimize this...
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Strategy Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(STRATEGIES).map(([key, strategy]) => {
                  const results = calculateSavings(key)
                  if (!results) return null

                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer
                        ${selectedStrategy === key 
                          ? 'bg-gradient-to-b from-amber-500/20 to-black border-amber-500/50' 
                          : 'bg-gradient-to-b from-gray-900/90 to-black border-amber-500/10 hover:border-amber-500/30'
                        }`}
                      onClick={() => setSelectedStrategy(key)}
                    >
                      {/* Recommended badge for Paraguay */}
                      {strategy.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="bg-amber-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                            Recommended
                          </div>
                        </div>
                      )}

                      <div className="absolute top-0 right-0 mt-4 mr-4">
                        {selectedStrategy === key && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-amber-400"
                          >
                            <Check className="w-4 h-4 text-black m-1" />
                          </motion.div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-amber-400 mb-2">
                        {strategy.name} Strategy
                      </h3>
                      
                      <div className="text-3xl font-bold text-amber-300 mb-4">
                        Save ${results.annualSavings}
                        <span className="text-lg text-gray-400 ml-1">/ year</span>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-gray-400 text-sm mb-1">Monthly Savings</div>
                            <div className="text-xl font-semibold text-amber-200">
                              ${results.monthlySavings}
                            </div>
                          </div>

                          <div>
                            <div className="text-gray-400 text-sm mb-1">Setup Cost</div>
                            <div className="text-xl font-semibold text-amber-200">
                              From ${(strategy.setupCost / 1000).toFixed(0)}k
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-amber-500/10">
                          <div className="text-gray-400 text-sm mb-2">Key Benefits</div>
                          <ul className="space-y-2">
                            {strategy.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-amber-500/10">
                          <div className="text-gray-400 text-sm mb-2">Processing Details</div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400">Timeline</div>
                              <div className="text-gray-300">{strategy.details.processingTime}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Stay Requirement</div>
                              <div className="text-gray-300">{strategy.details.minStay}</div>
                            </div>
                          </div>
                        </div>

                        {/* Highlights for Paraguay */}
                        {strategy.highlights && (
                          <div className="pt-4 border-t border-amber-500/10">
                            <div className="text-gray-400 text-sm mb-2">Why Choose {strategy.name}?</div>
                            <div className="grid grid-cols-2 gap-3">
                              {strategy.highlights.map((highlight, index) => (
                                <div 
                                  key={index}
                                  className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-2 text-sm text-amber-200"
                                >
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Selected Strategy Details */}
              {selectedStrategy && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-8 text-center"
                >
                  <h3 className="text-3xl font-bold text-amber-400 mb-4">
                    Ready to Keep Your Hard-Earned Money?
                  </h3>

                  <p className="text-xl text-gray-300 mb-8">
                    Book a complimentary strategy session with our tax optimization experts. We&apos;ll help you:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                        <Calculator className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-gray-200">Calculate Your Total Savings Potential</div>
                    </div>
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                        <Globe2 className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-gray-200">Choose the Best Country Strategy</div>
                    </div>
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-gray-200">Create Your Custom Action Plan</div>
                    </div>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    <Button
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-8 rounded-lg text-lg"
                    >
                      Book Your Free Strategy Session
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                    <p className="text-gray-400 mt-4">
                      Limited spots available. 100% free, no obligations.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 