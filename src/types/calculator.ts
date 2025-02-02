export interface TaxBracket {
  min: number
  max?: number
  rate: number
  baseAmount?: number
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
} 