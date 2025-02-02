import { HomeCountry } from '@/types/calculator'

export const TAX_RATES_2025: HomeCountry[] = [
  {
    name: 'United States',
    currency: 'USD',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 11925, rate: 0.10 },
      { min: 11926, max: 48475, rate: 0.12 },
      { min: 48476, max: 103350, rate: 0.22 },
      { min: 103351, max: 197300, rate: 0.24 },
      { min: 197301, max: 250525, rate: 0.32 },
      { min: 250526, max: 626350, rate: 0.35 },
      { min: 626351, rate: 0.37 }
    ]
  },
  {
    name: 'United Kingdom',
    currency: 'GBP',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 12570, rate: 0 },
      { min: 12571, max: 50270, rate: 0.20 },
      { min: 50271, max: 150000, rate: 0.40 },
      { min: 150001, rate: 0.45 }
    ]
  },
  {
    name: 'Australia',
    currency: 'AUD',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 0.19 },
      { min: 45001, max: 120000, rate: 0.325 },
      { min: 120001, max: 180000, rate: 0.37 },
      { min: 180001, rate: 0.45 }
    ]
  },
  {
    name: 'New Zealand',
    currency: 'NZD',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 14000, rate: 0 },
      { min: 14001, max: 48000, rate: 0.105 },
      { min: 48001, max: 70000, rate: 0.175 },
      { min: 70001, max: 180000, rate: 0.30 },
      { min: 180001, rate: 0.33 }
    ]
  },
  {
    name: 'Germany',
    currency: 'EUR',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 12084, rate: 0 },
      { min: 12085, max: 68429, rate: 0.14 },
      { min: 68430, max: 277825, rate: 0.24 },
      { min: 277826, max: 555650, rate: 0.42 },
      { min: 555651, rate: 0.45 }
    ]
  },
  {
    name: 'Belgium',
    currency: 'EUR',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 13540, rate: 0 },
      { min: 13541, max: 23900, rate: 0.25 },
      { min: 23901, max: 41360, rate: 0.40 },
      { min: 41361, rate: 0.45 }
    ]
  },
  {
    name: 'Austria',
    currency: 'EUR',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 11000, rate: 0 },
      { min: 11001, max: 18000, rate: 0.20 },
      { min: 18001, max: 31000, rate: 0.35 },
      { min: 31001, max: 60000, rate: 0.42 },
      { min: 60001, rate: 0.48 }
    ]
  },
  {
    name: 'Sweden',
    currency: 'SEK',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 20200, rate: 0 },
      { min: 20201, max: 537200, rate: 0.20 },
      { min: 537201, rate: 0.25 }
    ]
  },
  {
    name: 'Finland',
    currency: 'EUR',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 19200, rate: 0 },
      { min: 19201, max: 29300, rate: 0.06 },
      { min: 29301, max: 53900, rate: 0.175 },
      { min: 53901, rate: 0.215 }
    ]
  },
  {
    name: 'Japan',
    currency: 'JPY',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 1000000, rate: 0.05 },
      { min: 1000001, max: 2000000, rate: 0.10 },
      { min: 2000001, max: 4000000, rate: 0.20 },
      { min: 4000001, max: 6000000, rate: 0.23 },
      { min: 6000001, max: 10000000, rate: 0.33 },
      { min: 10000001, rate: 0.40 }
    ]
  },
  {
    name: 'France',
    currency: 'EUR',
    taxYear: '2025',
    brackets: [
      { min: 0, max: 10777, rate: 0 },
      { min: 10778, max: 27478, rate: 0.11 },
      { min: 27479, max: 78570, rate: 0.30 },
      { min: 78571, rate: 0.41 }
    ]
  }
] 