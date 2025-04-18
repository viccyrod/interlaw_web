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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-semibold text-gray-800">Detailed Tax Breakdown</h3>
      
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Current Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-4">
            Current Tax Structure ({country.name})
          </h4>
          <div className="space-y-3">
            {currentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-gray-50 border border-gray-200"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">
                    {calc.max
                      ? `${country.currency} ${calc.min.toLocaleString()} - ${calc.max.toLocaleString()}`
                      : `Over ${country.currency} ${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-black">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black">
                    Taxable: {country.currency} {calc.taxableAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-black font-medium">
                    Tax: {country.currency} {calc.taxAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <div className="flex justify-between">
                <span className="text-black">Total Tax Burden</span>
                <span className="text-black font-semibold">
                  {country.currency} {currentTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-sm text-black mt-1">
                Effective Rate: {income > 0 ? ((currentTotal / income) * 100).toFixed(1) : 0}%
              </div>
            </div>
          </div>
        </div>

        {/* Proposed Tax Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-4">
            Proposed Structure ({selectedStrategy.name})
          </h4>
          <div className="space-y-3">
            {proposedCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-gray-50 border border-gray-200"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">
                    {calc.max
                      ? `${country.currency} ${calc.min.toLocaleString()} - ${calc.max.toLocaleString()}`
                      : `Over ${country.currency} ${calc.min.toLocaleString()}`}
                  </span>
                  <span className="text-black">{(calc.rate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black">
                    Taxable: {country.currency} {calc.taxableAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-black font-medium">
                    Tax: {country.currency} {calc.taxAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <div className="flex justify-between">
                <span className="text-black">Total Tax</span>
                <span className="text-black font-semibold">
                  {country.currency} {proposedTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-sm text-black mt-1">
                Effective Rate: {income > 0 ? ((proposedTotal / income) * 100).toFixed(1) : 0}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Tax Savings Summary</h3>
        <div className="p-6 rounded-xl bg-green-50 border-2 border-green-300">
          <p className="text-sm text-black font-medium">Annual Tax Savings</p>
          <p className="text-3xl font-bold text-black mt-1">
            {country.currency} {savings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-black mt-1">
            ({income > 0 ? ((savings / income) * 100).toFixed(1) : 0}% of income)
          </p>
        </div>
      </div>
    </motion.div>
  );
} 