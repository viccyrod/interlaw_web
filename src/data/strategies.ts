import { TaxStrategy } from '@/types/calculator'

// Define and export tax strategies with neutral, ambiguous language
export const TAX_STRATEGIES: TaxStrategy[] = [
  {
    id: 'paraguay',
    name: 'Paraguay Residency',
    description: 'Establish tax residency in Paraguay under its territorial tax regime. Benefit from 0% tax on foreign-sourced income with minimal physical presence requirements.',
    brackets: [{ min: 0, rate: 0 }],
    totalEstimatedCost: 4400,  // Total Estimated Cost covering fees and related expenses
    estimatedProcessingTime: '2-4 months',
    stayRequirement: 'At least 1 day every 3 years',
    benefits: [
      '0% tax on foreign-sourced income (only local income is taxed)',
      'Minimal physical presence required (short visit every three years)',
      'Fast and straightforward processing',
      'Low cost of living and affordable fees'
    ],
    requirements: [
      'Valid passport (with sufficient validity)',
      'Clean criminal record certificate',
      'Proof of income (e.g. bank statements or employment letter)',
      'Proof of a local address (via a long-term rental contract or property deed)'
    ],
    featured: true,
    suitableForIncomeRange: {
      min: 50000
    }
  },
  {
    id: 'panama',
    name: 'Panama Residency',
    description: 'Establish tax residency in Panama under its territorial tax system—only locally sourced income is taxed, so foreign-sourced income remains tax-free.',
    brackets: [{ min: 0, rate: 0 }],
    totalEstimatedCost: 15000,
    estimatedProcessingTime: '4-6 months',
    stayRequirement: 'None for Friendly Nations Visa',
    benefits: [
      '0% tax on foreign-sourced income',
      'No strict physical presence requirement (minimal visits required for renewals)',
      'Robust and secure banking system',
      'Dollarized economy for enhanced stability',
      'High quality of life with a low cost of living'
    ],
    requirements: [
      'Valid passport (minimum 6 months validity)',
      'Clean criminal record',
      'Proof of economic means (bank statements, employment documentation, etc.)',
      'Evidence of professional or economic ties',
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
    description: 'Establish tax residency in Dubai with 0% personal income tax rate. The process includes company formation and residency permit under UAE regulations.',
    brackets: [{ min: 0, rate: 0 }],
    totalEstimatedCost: 19000,
    estimatedProcessingTime: '2-3 months',
    stayRequirement: '183 days per year',
    benefits: [
      '0% personal income tax on earnings, dividends, and capital gains',
      'Access to UAE banking and business infrastructure',
      'Strategic location between Europe and Asia',
      'Modern infrastructure and facilities'
    ],
    requirements: [
      'Valid passport (minimum 6 months remaining validity)',
      'Proof of consistent income of at least $7,500/month',
      'Long-term tenancy contract or property deed',
      'Valid UAE health insurance',
      'Company formation documentation or employment contract',
      'Additional documentation per application type'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 90000
    }
  },
  {
    id: 'cyprus',
    name: 'Cyprus Residency',
    description: 'Obtain EU residency in Cyprus with access to a non-dom tax regime. Foreign income remitted is subject to competitive tax rates under local regulations.',
    brackets: [{ min: 0, rate: 0.10 }],
    totalEstimatedCost: 357000,
    estimatedProcessingTime: '4-6 months',
    stayRequirement: '183 days per year',
    benefits: [
      'EU residency benefits and Schengen visa access',
      'Non-dom tax regime for foreign income',
      'Access to EU banking system',
      'Mediterranean location with developed infrastructure'
    ],
    requirements: [
      'Valid passport (minimum 6 months validity)',
      'Clean criminal record',
      'Health insurance coverage',
      'Proof of local address through property or rental',
      'Documentation of tax compliance',
      'Annual reporting requirements'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 120000
    }
  },
  {
    id: 'malta',
    name: 'Malta Residency',
    description: 'Establish EU residency in Malta with access to non-dom taxation. Process requires local address verification and ongoing compliance with residency obligations.',
    brackets: [{ min: 0, rate: 0.15 }],
    totalEstimatedCost: 150000,
    estimatedProcessingTime: '4-6 months',
    stayRequirement: '183 days per year',
    benefits: [
      'EU residency and market access',
      'Non-dom taxation on foreign income',
      'Access to EU banking sector',
      'Mediterranean location and climate'
    ],
    requirements: [
      'Valid passport (minimum 6 months validity)',
      'Clean criminal record',
      'Health insurance coverage',
      'Local address documentation',
      'Minimum tax payment verification',
      'Annual compliance reporting'
    ],
    featured: false,
    suitableForIncomeRange: {
      min: 150000
    }
  }
] 