import { TaxStrategy } from '@/types/calculator'

// Import tax brackets
import {
  australianBrackets,
  ukBrackets,
  germanyBrackets,
  franceBrackets,
  swedenBrackets,
  denmarkBrackets
} from '@/utils/taxCalculations'

export const strategies: TaxStrategy[] = [
  {
    id: 'paraguay',
    name: 'Paraguay',
    description: 'Zero tax on foreign-source income with minimal presence requirements',
    brackets: [{ min: 0, rate: 0 }],
    setupCost: 5000,
    processingTime: '30-45 days',
    stayRequirement: '1 day per year',
    benefits: [
      '0% tax on foreign income',
      'Fastest residency process',
      'Minimal presence required',
      'Low cost of living'
    ],
    recommended: true
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Zero personal income tax with world-class infrastructure',
    brackets: [{ min: 0, rate: 0 }],
    setupCost: 25000,
    processingTime: '2-3 months',
    stayRequirement: '183 days per year',
    benefits: [
      '0% personal income tax',
      'Modern infrastructure',
      'Global business hub',
      'High quality of life'
    ]
  },
  {
    id: 'malta',
    name: 'Malta',
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
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    description: 'Progressive tax system with rates from 0% to 45%',
    brackets: australianBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Developed economy',
      'High standard of living',
      'Strong healthcare system',
      'Political stability'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    description: 'Progressive tax system up to 45% with complex residency rules',
    brackets: ukBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Global financial center',
      'Strong legal system',
      'Cultural diversity',
      'Business opportunities'
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    description: 'High progressive tax rates with extensive social benefits',
    brackets: germanyBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Strong economy',
      'Social security',
      'Healthcare system',
      'Infrastructure'
    ]
  },
  {
    id: 'france',
    name: 'France',
    description: 'Complex progressive tax system with high social charges',
    brackets: franceBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Quality of life',
      'Healthcare system',
      'Education system',
      'Cultural heritage'
    ]
  },
  {
    id: 'sweden',
    name: 'Sweden',
    description: 'One of the highest tax rates globally with extensive welfare',
    brackets: swedenBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Social welfare',
      'Work-life balance',
      'Education system',
      'Environmental quality'
    ]
  },
  {
    id: 'denmark',
    name: 'Denmark',
    description: 'High tax rates funding comprehensive social services',
    brackets: denmarkBrackets,
    setupCost: 0,
    processingTime: 'N/A',
    stayRequirement: '183 days per year',
    benefits: [
      'Social security',
      'Healthcare system',
      'Education system',
      'Quality of life'
    ]
  }
] 