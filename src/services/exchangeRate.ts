// Default fallback rates for major currencies
const FALLBACK_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AUD: 1.52,
  CAD: 1.35,
  JPY: 150.35,
  NOK: 10.42,
  SEK: 10.37,
  PLN: 3.94
};

const API_KEY = 'a93de8df0d4b186ce098c700';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export interface ExchangeRateResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [key: string]: number;
  };
}

export async function getExchangeRates(baseCurrency: string = 'USD'): Promise<ExchangeRateResponse> {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    // Return fallback rates in the same format as the API
    return {
      result: 'fallback',
      documentation: 'Using fallback rates',
      terms_of_use: 'Using fallback rates',
      time_last_update_unix: Date.now() / 1000,
      time_last_update_utc: new Date().toUTCString(),
      time_next_update_unix: (Date.now() / 1000) + 3600,
      time_next_update_utc: new Date(Date.now() + 3600000).toUTCString(),
      base_code: baseCurrency,
      conversion_rates: FALLBACK_RATES
    };
  }
}

export function convertAmount(amount: number, fromRate: number, toRate: number): number {
  return (amount / fromRate) * toRate;
}

// Cache exchange rates for 24 hours
let cachedRates: ExchangeRateResponse | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getCachedExchangeRates(baseCurrency: string = 'USD'): Promise<ExchangeRateResponse> {
  const now = Date.now();
  if (!cachedRates || now - lastFetchTime > CACHE_DURATION) {
    try {
      cachedRates = await getExchangeRates(baseCurrency);
      lastFetchTime = now;
    } catch (error) {
      console.error('Error fetching exchange rates, using fallback:', error);
      // Use fallback rates if API fails
      cachedRates = {
        result: 'fallback',
        documentation: 'Using fallback rates',
        terms_of_use: 'Using fallback rates',
        time_last_update_unix: now / 1000,
        time_last_update_utc: new Date().toUTCString(),
        time_next_update_unix: (now / 1000) + 3600,
        time_next_update_utc: new Date(now + 3600000).toUTCString(),
        base_code: baseCurrency,
        conversion_rates: FALLBACK_RATES
      };
    }
  }
  return cachedRates;
} 