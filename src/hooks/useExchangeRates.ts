import { useState, useEffect } from 'react'
import { getCachedExchangeRates, ExchangeRateResponse } from '@/services/exchangeRate'

export function useExchangeRates(baseCurrency: string = 'USD') {
  const [rates, setRates] = useState<ExchangeRateResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await getCachedExchangeRates(baseCurrency)
        setRates(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch exchange rates'))
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
  }, [baseCurrency])

  const convert = (amount: number, fromCurrency: string, toCurrency: string): number => {
    if (!rates || !rates.conversion_rates) return amount

    const fromRate = rates.conversion_rates[fromCurrency]
    const toRate = rates.conversion_rates[toCurrency]

    if (!fromRate || !toRate) return amount

    // Convert to base currency first, then to target currency
    return (amount / fromRate) * toRate
  }

  return { rates, loading, error, convert }
} 