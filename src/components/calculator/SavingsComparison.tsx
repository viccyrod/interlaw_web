'use client'

import { motion } from 'framer-motion'
import { HomeCountry } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SavingsComparisonProps {
  income: number;
  currentCountry: HomeCountry | null;
  strategy: string;
  convert: (amount: number, fromCurrency: string, toCurrency: string) => number;
}

export default function SavingsComparison({ income, currentCountry, strategy, convert }: SavingsComparisonProps) {
  if (!currentCountry) return null;

  const selectedStrategy = TAX_STRATEGIES.find(s => s.id === strategy);
  if (!selectedStrategy) return null;

  // Calculate taxes
  const calculateTax = (brackets: { min: number; max?: number; rate: number }[], amount: number): number => {
    let remainingIncome = amount;
    let totalTax = 0;

    for (const bracket of brackets) {
      const { min, max, rate } = bracket;
      let taxableAmount;
      
      if (max) {
        taxableAmount = Math.min(Math.max(0, remainingIncome), max - min);
      } else {
        taxableAmount = Math.max(0, remainingIncome);
      }

      if (taxableAmount <= 0) break;

      totalTax += taxableAmount * rate;
      remainingIncome -= taxableAmount;
      if (remainingIncome <= 0) break;
    }

    return totalTax;
  };

  const currentTax = calculateTax(currentCountry.brackets, income);
  const optimizedTax = calculateTax(selectedStrategy.brackets, income);
  const annualSavings = currentTax - optimizedTax;

  // Convert setup cost to local currency
  const setupCostLocal = convert(selectedStrategy.totalEstimatedCost, 'USD', currentCountry.currency);

  // Calculate ROI metrics
  const yearsToBreakeven = annualSavings > 0 ? selectedStrategy.totalEstimatedCost / annualSavings : Infinity;
  const monthsToBreakeven = yearsToBreakeven * 12;
  const tenYearSavings = (annualSavings * 10) - selectedStrategy.totalEstimatedCost;
  const tenYearROI = ((annualSavings * 10) / selectedStrategy.totalEstimatedCost * 100);
  const monthlyTaxSavings = annualSavings / 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Your Potential Long-term Benefits
        </h3>

        {/* Highlighted Savings Section */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/30">
            <p className="text-sm text-amber-400 font-medium">Monthly Tax Savings</p>
            <p className="text-3xl font-bold text-white mt-1">
              {currentCountry.currency} {monthlyTaxSavings.toLocaleString()}
            </p>
            <p className="text-sm text-amber-400 mt-1">
              {currentCountry.currency} {annualSavings.toLocaleString()} per year
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/30">
            <p className="text-sm text-amber-400 font-medium">10-Year Tax Savings</p>
            <p className="text-3xl font-bold text-white mt-1">
              {currentCountry.currency} {tenYearSavings.toLocaleString()}
            </p>
            <p className="text-sm text-amber-400 mt-1">
              Total savings over 10 years
            </p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="p-4 rounded-xl bg-black/30 border border-amber-500/10">
          <p className="text-sm text-gray-400">Time to Recover Setup Cost</p>
          <p className="text-xl font-semibold text-white">
            {monthsToBreakeven === Infinity ? '∞' : `${Math.ceil(monthsToBreakeven)} months`}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-6 text-center">
        <h4 className="text-xl font-bold text-black mb-2">
          Ready to Optimize Your Taxes?
        </h4>
        <p className="text-gray-900 mb-6">
          Book a free consultation to learn how to implement the {selectedStrategy.name} strategy.
        </p>
        <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
} 