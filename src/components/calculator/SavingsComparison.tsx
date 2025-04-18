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
}

export default function SavingsComparison({ income, currentCountry, strategy }: SavingsComparisonProps) {
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

  // Calculate ROI metrics
  const yearsToBreakeven = annualSavings > 0 ? selectedStrategy.totalEstimatedCost / annualSavings : Infinity;
  const monthsToBreakeven = yearsToBreakeven * 12;
  const tenYearSavings = (annualSavings * 10) - selectedStrategy.totalEstimatedCost;
  const monthlyTaxSavings = annualSavings / 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Your Potential Long-term Benefits
        </h3>

        {/* Highlighted Savings Section */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-6 rounded-xl bg-gray-100 border border-gray-200">
            <p className="text-sm text-gray-700 font-medium">Monthly Tax Savings</p>
            <p className="text-3xl font-bold text-black mt-1">
              {currentCountry.currency} {monthlyTaxSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {currentCountry.currency} {annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} per year
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-100 border border-gray-200">
            <p className="text-sm text-gray-700 font-medium">10-Year Tax Savings</p>
            <p className="text-3xl font-bold text-black mt-1">
              {currentCountry.currency} {tenYearSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Total savings over 10 years
            </p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="p-4 rounded-xl bg-gray-100 border border-gray-200">
          <p className="text-sm text-gray-700">Time to Recover Setup Cost</p>
          <p className="text-xl font-semibold text-black">
            {monthsToBreakeven === Infinity 
              ? 'N/A (No Savings)' 
              : monthsToBreakeven < 1 
                ? 'Less than a month'
                : `${Math.ceil(monthsToBreakeven)} ${Math.ceil(monthsToBreakeven) === 1 ? 'month' : 'months'}`
            }
          </p>
        </div>
      </div>
    </motion.div>
  );
} 