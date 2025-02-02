export interface TaxBracket {
  min: number
  max?: number
  rate: number
  baseAmount?: number
}

export interface HomeCountry {
  name: string
  brackets: TaxBracket[]
  currency: string
  taxYear: string
}

export interface TaxComparison {
  currentTax: number
  proposedTax: number
  savings: number
  savingsPercentage: number
  breakevenMonths: number
}

export interface TaxStrategy {
  id: string
  name: string
  description: string
  brackets: TaxBracket[]
  setupCost: number
  processingTime: string
  stayRequirement: string
  benefits: string[]
  recommended?: boolean
  comparison?: TaxComparison
  requirements: string[]
  featured?: boolean
  suitableForIncomeRange?: {
    min?: number
    max?: number
  }
}

export interface TaxCalculation {
  totalTax: number
  effectiveRate: number
  brackets: {
    bracket: TaxBracket
    taxAmount: number
  }[]
}

export interface CountryStrategy {
  name: string
  taxRate: number
  setupCost: number
  benefits: string[]
  requirements: string[]
  details: {
    localTaxRate: string
    foreignTaxRate: string
    processingTime: string
    minStay: string
    setupCosts: string
    totalTimeToResidency: string
  }
  recommended?: boolean
  highlights?: string[]
  featured?: boolean
} 