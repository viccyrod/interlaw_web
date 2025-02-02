import { TaxStrategy } from '@/types/calculator'

// Define and export tax strategies
export const TAX_STRATEGIES: TaxStrategy[] = [
  {
    id: 'paraguay',
    name: 'Paraguay Residency',
    description: 'Establish tax residency in Paraguay with 0% tax on foreign income',
    brackets: [{ min: 0, rate: 0 }],
    setupCost: 4400,
    processingTime: '2-4 months',
    stayRequirement: '1 day every 3 years',
    benefits: [
      '0% tax on foreign-sourced income',
      'Minimal physical presence required',
      'Fast processing time',
      'Low cost of living'
    ],
    requirements: [
      'Valid passport',
      'Clean criminal record',
      'Proof of income',
      'Local address'
    ],
    featured: true,
    suitableForIncomeRange: {
      min: 50000
    }
  },
  {
    id: 'panama',
    name: 'Panama Residency',
    description: 'Establish tax residency in Panama with territorial tax system',
    brackets: [{ min: 0, rate: 0 }],
    setupCost: 15000,
    processingTime: '4-6 months',
    stayRequirement: 'None for Friendly Nations Visa',
    benefits: [
      '0% tax on foreign-sourced income',
      'No physical presence requirements',
      'Strong banking system',
      'Dollarized economy',
      'High quality of life'
    ],
    requirements: [
      'Valid passport',
      'Clean criminal record',
      'Proof of economic means',
      'Professional or economic ties',
      '$5,000 bank deposit'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 100000
    }
  },
  {
    id: 'dubai',
    name: 'Dubai Residency',
    description: 'Zero personal income tax with world-class infrastructure',
    brackets: [{ min: 0, rate: 0 }],
    setupCost: 272000,
    processingTime: '2-3 months',
    stayRequirement: '183 days per year',
    benefits: [
      '0% personal income tax',
      'Modern infrastructure',
      'Global business hub',
      'High quality of life'
    ],
    requirements: [
      'Valid passport',
      'Proof of income ($7,500/month)',
      'Tenancy contract',
      'Health insurance',
      'Company formation or employment'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 90000
    }
  },
  {
    id: 'malta',
    name: 'Malta Residency',
    description: 'EU residency with attractive non-dom tax regime',
    brackets: [{ min: 0, rate: 0.15 }],
    setupCost: 150000,
    processingTime: '4-6 months',
    stayRequirement: '183 days per year',
    benefits: [
      'EU residency benefits',
      'Non-dom tax regime',
      'Strong banking sector',
      'Mediterranean lifestyle'
    ],
    requirements: [
      'Valid passport',
      'Clean criminal record',
      'Health insurance',
      'Property purchase/rental',
      'Minimum tax payment',
      'Annual reporting'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 150000
    }
  }
] 