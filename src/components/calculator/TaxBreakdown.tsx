'use client'

import { motion } from 'framer-motion'
import { HomeCountry, TaxBracket } from '@/types/calculator'
import { TAX_STRATEGIES } from '@/data/strategies'

interface TaxBreakdownProps {
  income: number;
  country: HomeCountry | null;
  strategy: string;
}

interface BracketCalculation {
  min: number;
  max?: number;
  rate: number;
  taxableAmount: number;
  taxAmount: number;
}

function calculateTaxByBrackets(income: number, brackets: TaxBracket[]): BracketCalculation[] {
  let remainingIncome = income;
  const calculations: BracketCalculation[] = [];

  for (const bracket of brackets) {
    const { min, max, rate } = bracket;
    let taxableAmount;
    
    if (max) {
      // For brackets with a maximum
      taxableAmount = Math.min(Math.max(0, remainingIncome), max - min);
    } else {
      // For the highest bracket without a maximum
      taxableAmount = Math.max(0, remainingIncome);
    }

    if (taxableAmount <= 0) break;

    calculations.push({
      min,
      max,
      rate,
      taxableAmount,
      taxAmount: taxableAmount * rate
    });

    remainingIncome -= taxableAmount;
    if (remainingIncome <= 0) break;
  }

  return calculations;
}

export default function TaxBreakdown({ income, country, strategy }: TaxBreakdownProps) {
  if (!country) return null;

  const selectedStrategy = TAX_STRATEGIES.find(s => s.id === strategy);
  if (!selectedStrategy) return null;

  const currentCalculations = calculateTaxByBrackets(income, country.brackets);
  const proposedCalculations = calculateTaxByBrackets(income, selectedStrategy.brackets);

  const currentTotal = currentCalculations.reduce((sum, calc) => sum + calc.taxAmount, 0);
  const proposedTotal = proposedCalculations.reduce((sum, calc) => sum + calc.taxAmount, 0);
  const savings = currentTotal - proposedTotal;
  
  // Calculate ROI
  const monthsToROI = savings > 0 ? Math.ceil((selectedStrategy.totalEstimatedCost / savings) * 12) : Infinity;
  const yearsToBreakeven = savings > 0 ? (selectedStrategy.totalEstimatedCost / savings) : Infinity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-semibold text-white">Detailed Tax Breakdown</h3>
      
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Current Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-4">
            Current Tax Structure ({country.name})
          </h4>
          <div className="space-y-3">
            {currentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-black/30 border border-amber-500/10"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    {calc.max
                      ? `${country.currency} ${calc.min.toLocaleString()} - ${calc.max.toLocaleString()}`
                      : `Over ${country.currency} ${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-amber-500">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Taxable: {country.currency} {calc.taxableAmount.toLocaleString()}
                  </span>
                  <span className="text-white font-medium">
                    Tax: {country.currency} {calc.taxAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/20">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax</span>
                <span className="text-white font-semibold">
                  {country.currency} {currentTotal.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Effective Rate: {((currentTotal / income) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Proposed Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-4">
            Proposed Structure ({selectedStrategy.name})
          </h4>
          <div className="space-y-3">
            {proposedCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-black/30 border border-amber-500/10"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    {calc.max
                      ? `${country.currency} ${calc.min.toLocaleString()} - ${calc.max.toLocaleString()}`
                      : `Over ${country.currency} ${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-amber-500">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Taxable: {country.currency} {calc.taxableAmount.toLocaleString()}
                  </span>
                  <span className="text-white font-medium">
                    Tax: {country.currency} {calc.taxAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/20">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax</span>
                <span className="text-white font-semibold">
                  {country.currency} {proposedTotal.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Effective Rate: {((proposedTotal / income) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Your Tax Savings Summary</h3>
        <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/30">
          <p className="text-sm text-amber-400 font-medium">Annual Tax Savings</p>
          <p className="text-3xl font-bold text-white mt-1">
            {country.currency} {savings.toLocaleString()}
          </p>
          <p className="text-sm text-amber-400 mt-1">
            ({((savings / income) * 100).toFixed(1)}% of income)
          </p>
        </div>
      </div>
    </motion.div>
  );
} 