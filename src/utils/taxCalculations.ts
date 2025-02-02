import { TaxBracket, TaxStrategy, TaxCalculation } from '@/types/calculator'

// Australia Tax Brackets 2024
export const australianBrackets: TaxBracket[] = [
  { min: 0, max: 18200, rate: 0 },
  { min: 18201, max: 45000, rate: 0.19, baseAmount: 0 },
  { min: 45001, max: 120000, rate: 0.325, baseAmount: 5092 },
  { min: 120001, max: 180000, rate: 0.37, baseAmount: 29467 },
  { min: 180001, rate: 0.45, baseAmount: 51667 }
]

// UK Tax Brackets 2024
export const ukBrackets: TaxBracket[] = [
  { min: 0, max: 12570, rate: 0 }, // Personal Allowance
  { min: 12571, max: 50270, rate: 0.20 }, // Basic rate
  { min: 50271, max: 125140, rate: 0.40 }, // Higher rate
  { min: 125141, rate: 0.45 } // Additional rate
]

// Germany Tax Brackets 2024
export const germanyBrackets: TaxBracket[] = [
  { min: 0, max: 10908, rate: 0 },
  { min: 10909, max: 15999, rate: 0.14 },
  { min: 16000, max: 62809, rate: 0.24 },
  { min: 62810, max: 277825, rate: 0.42 },
  { min: 277826, rate: 0.45 }
]

// France Tax Brackets 2024
export const franceBrackets: TaxBracket[] = [
  { min: 0, max: 10777, rate: 0 },
  { min: 10778, max: 27478, rate: 0.11 },
  { min: 27479, max: 78570, rate: 0.30 },
  { min: 78571, max: 168994, rate: 0.41 },
  { min: 168995, rate: 0.45 }
]

// Sweden Tax Brackets 2024
export const swedenBrackets: TaxBracket[] = [
  { min: 0, max: 46200, rate: 0.32 }, // Municipal tax (average)
  { min: 46201, max: 558900, rate: 0.52 }, // State tax level 1
  { min: 558901, rate: 0.57 } // State tax level 2
]

// Denmark Tax Brackets 2024
export const denmarkBrackets: TaxBracket[] = [
  { min: 0, max: 50000, rate: 0.37 }, // Base tax
  { min: 50001, max: 568900, rate: 0.52 }, // Middle bracket
  { min: 568901, rate: 0.56 } // Top bracket
]

function calculateProgressiveTax(income: number, brackets: TaxBracket[]): TaxCalculation {
  let totalTax = 0
  const bracketCalculations = []

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i]

    if (income > bracket.min) {
      const taxableInBracket = Math.min(
        income - bracket.min,
        (bracket.max || income) - bracket.min
      )

      const bracketTax = taxableInBracket * bracket.rate
      totalTax += bracketTax

      bracketCalculations.push({
        bracket,
        taxAmount: bracketTax
      })
    }
  }

  return {
    totalTax,
    effectiveRate: totalTax / income,
    brackets: bracketCalculations
  }
}

export const calculateTax = (income: number, strategy: TaxStrategy): TaxCalculation => {
  switch (strategy.id) {
    case 'australia':
      return calculateProgressiveTax(income, australianBrackets)
    case 'uk':
      return calculateProgressiveTax(income, ukBrackets)
    case 'germany':
      return calculateProgressiveTax(income, germanyBrackets)
    case 'france':
      return calculateProgressiveTax(income, franceBrackets)
    case 'sweden':
      return calculateProgressiveTax(income, swedenBrackets)
    case 'denmark':
      return calculateProgressiveTax(income, denmarkBrackets)
    case 'paraguay':
      return {
        totalTax: 0,
        effectiveRate: 0,
        brackets: [{
          bracket: { min: 0, rate: 0 },
          taxAmount: 0
        }]
      }
    case 'dubai':
      return {
        totalTax: 0,
        effectiveRate: 0,
        brackets: [{
          bracket: { min: 0, rate: 0 },
          taxAmount: 0
        }]
      }
    case 'malta':
      // Non-dom regime calculation
      const taxAmount = income * 0.15
      return {
        totalTax: taxAmount,
        effectiveRate: 0.15,
        brackets: [{
          bracket: { min: 0, rate: 0.15 },
          taxAmount
        }]
      }
    default:
      throw new Error(`Unknown tax strategy: ${strategy.id}`)
  }
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export const formatPercentage = (rate: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(rate)
} 